import { put, delay, select } from 'redux-saga/effects'
import Debug from 'debug'

import WSActions from '../../actions/ws'
import { isElectronApp } from '../../config'
import { getSockets } from '../../selectors/ws'

import WSTypes from '../../constants/ws'

const URLS = {
  [WSTypes.ALIAS_API_SERVER]: process.env.REACT_APP_WSS_URL,
  [WSTypes.ALIAS_DATA_SERVER]: process.env.REACT_APP_DS_URL,
}
const CHECK_CONNECTION_EVERY_MS = 10 * 1000
const debug = Debug('hfui:rx:s:ws-hfui:worker-connection')

export default function* () {
  while (true) {
    const sockets = yield select(getSockets)
    const keys = Object.keys(sockets)

    for (let i = 0; i < keys.length; ++i) {
      const socket = keys[i]

      if (!isElectronApp && socket === WSTypes.ALIAS_DATA_SERVER) {
        // eslint-disable-next-line no-continue
        continue
      }

      if (sockets[socket].status === 'offline') {
        debug(`attempting connection to ${socket}...`)
        yield put(WSActions.connect(socket, URLS[socket]))
      }
    }

    yield delay(CHECK_CONNECTION_EVERY_MS)
  }
}
