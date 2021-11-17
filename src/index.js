import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MapPage from "./pages/MapPage";
import ProfilePage from "./pages/ProfilePage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="map" element={<MapPage />} />
      <Route path="*" element={<App/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

