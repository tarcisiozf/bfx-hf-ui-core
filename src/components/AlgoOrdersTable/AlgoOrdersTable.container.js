import { connect } from 'react-redux'
import Debug from 'debug'

import { getAlgoOrders, getFilteredAlgoOrders, getAuthToken } from '../../redux/selectors/ws'
import { getActiveMarket } from '../../redux/selectors/ui'
import WSActions from '../../redux/actions/ws'
import GAActions from '../../redux/actions/google_analytics'
import AlgoOrdersTable from './AlgoOrdersTable'

const debug = Debug('hfui:c:algo-orders-table')

const mapStateToProps = (state = {}, { activeFilter }) => ({
  authToken: getAuthToken(state),
  algoOrders: getAlgoOrders(state),
  filteredAlgoOrders: getFilteredAlgoOrders(state)(activeFilter),
  activeMarket: getActiveMarket(state),
})

const mapDispatchToProps = dispatch => ({
  cancelOrder: (authToken, order) => {
    const { gid } = order

    debug('cancelling algo order %d', gid)
    dispatch(WSActions.send(['algo_order.cancel', authToken, 'bitfinex', gid]))
  },
  gaCancelOrder: () => {
    dispatch(GAActions.cancelAO())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AlgoOrdersTable)
