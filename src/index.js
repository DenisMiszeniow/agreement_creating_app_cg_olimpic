import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './BLL/store'
import { HashRouter } from 'react-router-dom'
import ScrollTotop from './components/routers/scroll_to_top'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Provider store={store}>
      <ScrollTotop/>
      <App />
    </Provider>
  </HashRouter>

)

reportWebVitals()
