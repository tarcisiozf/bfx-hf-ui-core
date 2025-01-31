import { connect } from 'react-redux'

import StatusBar from './StatusBar'
import { getRemoteVersion, getIsInternetConnection } from '../../redux/selectors/ui'
import { getSocket, getAPIClientState, getCurrentModeAPIKeyState } from '../../redux/selectors/ws'

const mapStateToProps = (state = {}) => {
  const socket = getSocket()(state)
  const { status: wsStatus } = socket

  return {
    wsConnected: wsStatus === 'online',
    remoteVersion: getRemoteVersion(state),
    apiClientState: getAPIClientState(state),
    wsInterrupted: getIsInternetConnection(state),
    currentModeApiKeyState: getCurrentModeAPIKeyState(state),
  }
}

export default connect(mapStateToProps)(StatusBar)
