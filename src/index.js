import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MapPage from "./pages/MapPage";
import ProfilePage from "./pages/ProfilePage";
import {store} from './store'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
   <Provider store={store}>  
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="map" element={<MapPage />} />
        <Route path="*" element={<App/>}/>
    </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);

