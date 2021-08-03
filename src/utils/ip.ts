/**********************************************************************************
 * MIT License                                                                    *
 *                                                                                *
 * Copyright (c) 2021 Hyperjump Technology                                        *
 *                                                                                *
 * Permission is hereby granted, free of charge, to any person obtaining a copy   *
 * of this software and associated documentation files (the "Software"), to deal  *
 * in the Software without restriction, including without limitation the rights   *
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      *
 * copies of the Software, and to permit persons to whom the Software is          *
 * furnished to do so, subject to the following conditions:                       *
 *                                                                                *
 * The above copyright notice and this permission notice shall be included in all *
 * copies or substantial portions of the Software.                                *
 *                                                                                *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     *
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       *
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    *
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         *
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  *
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  *
 * SOFTWARE.                                                                      *
 **********************************************************************************/

import { networkInterfaces } from 'os'
import { log } from './pino'
import stun from 'stun'

export let publicIpAddress = ''

export default function getIp(): string {
  let address = ''

  const ifaces = networkInterfaces()
  for (const dev in ifaces) {
    if (dev) {
      const iface = ifaces[dev].filter(function (details) {
        return details.family === 'IPv4' && details.internal === false
      })

      if (iface.length > 0) address = iface[0].address
    }
  }

  return address
}

export async function getPublicIp() {
  if (process.env.NODE_ENV === 'test') {
    publicIpAddress = '127.0.0.1'
    return
  }

  try {
    const response = await stun.request('stun.l.google.com:19302')
    const address = response?.getXorAddress()?.address
    if (address) {
      publicIpAddress = address
      log.info(`Monika is running on Public IP ${address}`)
    }
  } catch (error) {
    log.info(`Can't obtain Public IP`)
  }
}
