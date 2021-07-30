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

import { notify } from 'node-notifier'
import { DesktopData } from './../../../interfaces/data'
import getIp, { publicIpAddress } from '../../../utils/ip'
import { hostname } from 'os'

export const sendDesktop = async (data: DesktopData) => {
  try {
    if (data.body.status === 'INIT') {
      notify({
        title: 'Monika is running',
        message: data.body.alert,
      })

      return
    }

    if (data.body.status === 'TERMINATE') {
      notify({
        title: 'Monika terminated',
        message: data.body.alert,
      })

      return
    }

    const notifType = data.body.status === 'UP' ? 'RECOVERY' : 'INCIDENT'
    notify({
      title: `New ${notifType} notification from Monika (${data.body.alert})`,
      message: `${data.body.expected} for URL ${data.body.url} at ${
        data.body.time
      }.\rMonika: ${getIp()} (local), ${
        publicIpAddress ? `${publicIpAddress} (public)` : ''
      } ${hostname} (hostname)`,
    })
  } catch (error) {
    throw error
  }
}
