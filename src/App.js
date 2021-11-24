import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import { Provider } from "react-redux";
import store from './store'
import { privateRoutes, publicRoutes } from './components/router/routes'
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
      auth: state.auth
  }
}

const App = ({auth}) => {
  return (
    auth
      ?
      <BrowserRouter>
      <Provider store={store}>  
        <Routes>
          {privateRoutes.map(route => 
            <Route 
              path={route.path} 
              element={route.element}
              key={route.id}
            />
          )}
        </Routes>
      </Provider>
  </BrowserRouter>
      :
    <BrowserRouter>
      <Provider store={store}>  
        <Routes>
          {publicRoutes.map(route => 
            <Route 
              path={route.path} 
              element={route.element}
              key={route.id}
            />
          )}
        </Routes>
      </Provider>
  </BrowserRouter>
  );
}

export default connect(mapStateToProps)(App);
