import './App.css'
import { Provider } from 'react-redux'
import store from './common/redux/store'
import './assets/styles/home.scss'
import Router from './common/router'
import { BrowserRouter } from 'react-router-dom'
const App: React.FC = () => {
  return (
    <Provider store={store}>
      {/* <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </Router> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
