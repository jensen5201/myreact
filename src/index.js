// var func = str => {
//   document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用Babel!');

import React from 'react'
import ReactDom from 'react-dom'
// import Hello from './component/Hello/Hello'

import getRouter from '@/router/router'
import { AppContainer } from 'react-hot-loader'

/*初始化*/
renderWithHotReload(getRouter())

/*热更新*/
console.log(module, module.hot)
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('./router/router').default
    renderWithHotReload(getRouter())
  })
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>{RootElement}</AppContainer>,
    document.getElementById('app')
  )
}
