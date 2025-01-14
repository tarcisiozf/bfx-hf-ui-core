import _filter from 'lodash/filter'
import _map from 'lodash/map'
import _get from 'lodash/get'
import { createSelector } from 'reselect'

import { COMPONENT_TYPES } from '../../../components/GridLayout/GridLayout.helpers'
import getCurrUnsavedLayout from './get_current_unsaved_layout'
import { getLayoutState } from './get_component_state'
import getDefaultStateForComponentType from './default_state_for_component_type'
import getLayoutID from './get_layout_id'

const EMPTY_ARR = []

const COMPONENT_MAPPING = {
  trades: COMPONENT_TYPES.TRADES_TABLE,
  book: COMPONENT_TYPES.ORDER_BOOK,
}

const getMarketComponents = createSelector(
  [
    getCurrUnsavedLayout,
    (state, componentType) => getDefaultStateForComponentType(state, componentType),
    (state) => getLayoutState(state, getLayoutID(state)),
    (_, componentType) => componentType,
  ],
  (currUnsavedLayout, defComponentState, layoutState, componentType) => {
    const currUnsavedLayoutState = _get(currUnsavedLayout, 'layout', EMPTY_ARR)
    const componentsList = _filter(currUnsavedLayoutState, ({ c }) => c === COMPONENT_MAPPING[componentType])

    return _map(componentsList, ({ i: id }) => _get(layoutState, id, defComponentState))
  },
)

export default getMarketComponents
