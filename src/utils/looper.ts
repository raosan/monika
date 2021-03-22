import { processProbeStatus } from './process-server-status'
import { Config } from '../interfaces/config'
import console, { log } from 'console'
import { probing } from '../utils/probing'
import { validateResponse, sendAlerts } from './alert'

const MILLISECONDS = 1000
let REQUESTS = 1

async function doProbes(config: Config) {
  // probe each url
  log('\nProbing....')
  config.probes.forEach(async (item) => {
    try {
      const probRes = await probing(item)
      const validatedResp = validateResponse(item.alerts, probRes)

      log(
        `id: ${item.id} - status: ${probRes.status} for: ${item.request.url} -- ${probRes.config.extraData?.responseTime}`
      )

      if (!item.trueThreshold)
        log(`No success threshold defined. Using the default threshold: 5`)
      if (!item.falseThreshold)
        log(`No failed threshold defined. Using the default threshold: 5`)

      const serverStatuses = processProbeStatus({
        probe: item,
        validatedResp,
        trueThreshold: item.trueThreshold || 5,
        falseThreshold: item.falseThreshold || 5,
      })

      serverStatuses.forEach(async (status, index) => {
        if (status.shouldSendNotification) {
          log(
            `Sending a "${item.alerts[index]}" notification for probe ${item.id}\n`
          )
          await sendAlerts({
            validation: validatedResp[index],
            notifications: config.notifications,
            url: item.request.url ?? '',
            status: status.isDown ? 'DOWN' : 'UP',
          })
        }
      })
    } catch (error) {
      log(
        'id:',
        item.id,
        '- status: ERROR for:',
        item.request.url,
        ':',
        error.message
      )
    }
  })
}

export function looper(config: Config) {
  const interval = config.interval ?? 0

  log('Probes:')
  config.probes.forEach(async (item) => {
    log(`Probe ID: ${item.id}`)
    log(`Probe Name: ${item.name}`)
    log(`Probe Description: ${item.description}`)
    log(`Probe Request Method: ${item.request.method}`)
    log(`Probe Request URL: ${item.request.url}`)
    log(`Probe Request Headers: ${JSON.stringify(item.request.headers)}`)
    log(`Probe Request Body: ${JSON.stringify(item.request.body)}`)
    log(`Probe Alerts: ${item.alerts.toString()}\n`)
  })

  log(`\nRequest ${REQUESTS}`)
  doProbes(config).catch((error) => console.error(error.message))
  REQUESTS++

  if (interval > 0) {
    setInterval(() => {
      log(`\nRequest ${REQUESTS}`)
      doProbes(config)
      REQUESTS++
    }, interval * MILLISECONDS)
  }
}
