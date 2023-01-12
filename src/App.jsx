import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import './App.css'
import RouterApp from './router/RouterApp'
import { store } from './store'

function App() {

  return (
    <HashRouter>
      <Provider store={ store }>
        <div className="App">
          <RouterApp />
        </div>
      </Provider>
    </HashRouter>
  )
}

export default App
