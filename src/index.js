import React from 'react'
import ReactDom from 'react-dom'
// import getRouter from '@/router/router'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import App from '@/components/App/App'
import { BrowserRouter as Router } from 'react-router-dom'

// 是否启用mock
process.env.MOCK && require('mock/mock')

/*初始化*/
renderWithHotReload(App)

/*热更新*/
if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NextApp = require('./components/App/App').default
    renderWithHotReload(NextApp)
  })
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <RootElement />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
