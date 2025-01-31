import types from '../constants/ui'

export const saveRemoteVersion = version => ({
  type: types.SAVE_REMOTE_VERSION,
  payload: {
    version,
  },
})

export const saveLayout = () => ({
  type: types.SAVE_LAYOUT,
})

export const storeUnsavedLayout = (layout) => ({
  type: types.STORE_UNSAVED_LAYOUT,
  payload: {
    layout,
  },
})

export const selectLayout = (id, routePath) => ({
  type: types.SELECT_LAYOUT,
  payload: {
    id,
    routePath,
  },
})

export const createLayout = (id) => ({
  type: types.CREATE_LAYOUT,
  payload: {
    id,
  },
})

export const deleteLayout = id => ({
  type: types.DELETE_LAYOUT,
  payload: {
    id,
  },
})

export const setActiveMarket = market => ({
  type: types.SET_ACTIVE_MARKET,
  payload: {
    market,
  },
})

export const saveComponentState = ({
  layoutID,
  componentID,
  state,
}) => ({
  type: types.SAVE_COMPONENT_STATE,
  payload: {
    state,
    layoutID,
    componentID,
  },
})

export const updateComponentState = ({
  layoutID,
  componentID,
  state,
}) => ({
  type: types.UPDATE_COMPONENT_STATE,
  payload: {
    layoutID,
    componentID,
    state,
  },
})

export const closeNotificationPanel = () => ({
  type: types.CLOSE_NOTIFICATIONS,
})

export const removeNotification = (cid) => ({
  type: types.REMOVE_NOTIFICATION,
  payload: {
    cid,
  },
})

export const removeNotifications = (cids) => ({
  type: types.REMOVE_NOTIFICATIONS,
  payload: {
    cids,
  },
})

export const clearNotifications = () => ({
  type: types.CLEAR_NOTIFICATIONS,
})

export const openNotifcationPanel = () => ({
  type: types.OPEN_NOTIFICATIONS,
})

export const switchNotifcationPanel = () => ({
  type: types.SWITCH_NOTIFICATIONS,
})

export const firstLogin = () => ({
  type: types.FIRST_LOGIN,
})

export const finishGuide = (page) => ({
  type: types.FINISH_GUIDE,
  payload: page,
})

export const recvNotification = notification => ({
  type: types.DATA_NOTIFICATION,
  payload: { notification },
})

export const strategySelect = () => ({
  type: types.STRATEGY_SELECT,
})

export const updateStrategyContent = content => ({
  type: types.UPDATE_STRATEGY_CONTENT,
  payload: { content },
})

export const updateStrategyId = id => ({
  type: types.UPDATE_STRATEGY_ID,
  payload: { id },
})

export const clearStrategies = () => ({
  type: types.CLEAR_STRATEGIES,
})

export const setTradingMode = (isPaperTrading) => ({
  type: types.SET_TRADING_MODE,
  payload: { isPaperTrading },
})

export const setMarketFromStore = (isPaperTrading) => ({
  type: types.SET_MARKET_FROM_STORE,
  payload: { isPaperTrading },
})

export const changeTradingModeModalState = (isVisible) => ({
  type: types.CHANGE_TRADING_MODAL_STATE,
  payload: { isVisible },
})

export const changeOldFormatModalState = (isVisible) => ({
  type: types.CHANGE_OLD_FORMAT_MODAL_STATE,
  payload: { isVisible },
})

export const changeAOPauseModalState = (isVisible) => ({
  type: types.CHANGE_AO_PAUSE_MODAL_STATE,
  payload: { isVisible },
})

export const changeBadInternetConnectionState = (isVisible) => ({
  type: types.CHANGE_BAD_INTERNET_STATE,
  payload: { isVisible },
})

export const setIsOrderExecuting = (executing) => ({
  type: types.SET_IS_ORDER_EXECUTING,
  payload: { executing },
})

export const changeReffilBalanceModalState = isVisible => ({
  type: types.CHANGE_REFILL_BALANCE_MODAL_STATE,
  payload: { isVisible },
})

export const setLayoutID = layoutID => ({
  type: types.SET_LAYOUT_ID,
  payload: { layoutID },
})

export const addComponent = (component) => ({
  type: types.ADD_COMPONENT,
  payload: { component },
})

export const removeComponent = (i) => ({
  type: types.REMOVE_COMPONENT,
  payload: { i },
})

export const changeLayout = (incomingLayout) => ({
  type: types.CHANGE_LAYOUT,
  payload: { incomingLayout },
})

export const changeTickersVolumeUnit = key => ({
  type: types.CHANGE_TICKERS_VOLUME_UNIT,
  payload: { key },
})

export const changeCcyInfoModalState = (isVisible) => ({
  type: types.CHANGE_CCY_INFO_MODAL_STATE,
  payload: { isVisible },
})

export default {
  saveLayout,
  storeUnsavedLayout,
  createLayout,
  deleteLayout,
  setActiveMarket,
  saveComponentState,
  updateComponentState,
  saveRemoteVersion,
  closeNotificationPanel,
  removeNotification,
  removeNotifications,
  clearNotifications,
  openNotifcationPanel,
  firstLogin,
  finishGuide,
  recvNotification,
  strategySelect,
  updateStrategyContent,
  updateStrategyId,
  setTradingMode,
  setMarketFromStore,
  changeTradingModeModalState,
  changeReffilBalanceModalState,
  changeBadInternetConnectionState,
  setIsOrderExecuting,
  clearStrategies,
  switchNotifcationPanel,
  setLayoutID,
  changeTickersVolumeUnit,
  changeOldFormatModalState,
  changeAOPauseModalState,
  changeCcyInfoModalState,
}
