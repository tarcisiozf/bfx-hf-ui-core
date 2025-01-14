import React, { memo, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { STEPS, STATUS } from '../../components/Joyride'
import Layout from '../../components/Layout'
import GridLayout from '../../components/GridLayout'
import './style.css'

const Joyride = lazy(() => import('../../components/Joyride'))

const commonComponentProps = {
  dark: true,
  darkHeader: true,
  showMarket: true,
  canChangeMarket: true,
  showChartMarket: true,
}

const MarketData = ({ isGuideActive, isFirstLogin, finishGuide }) => {
  const onGuideFinish = (data) => {
    const { status } = data
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED]
    const CLOSE = 'close'
    if (finishedStatuses.includes(status) || data.action === CLOSE) {
      finishGuide()
    }
  }

  return (
    <Layout>
      <Layout.Header />
      <Layout.Main>
        {isFirstLogin && (
          <Suspense fallback={<></>}>
            <Joyride
              callback={onGuideFinish}
              steps={STEPS.MARKET_DATA}
              run={isGuideActive}
            />
          </Suspense>
        )}
        <GridLayout
          tradesProps={commonComponentProps}
          bookProps={commonComponentProps}
          chartProps={commonComponentProps}
        />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  )
}

MarketData.propTypes = {
  finishGuide: PropTypes.func.isRequired,
  isGuideActive: PropTypes.bool.isRequired,
  isFirstLogin: PropTypes.bool.isRequired,
}

export default memo(MarketData)
