
import QrCodeComp from "@qrCode/App"
import RecipePage from "@recipePage/App"
import {  Route, Routes } from "react-router-dom"
import TestComponent from "./TestComponent"

function App() {

  return (<Routes>
    <Route path="/qrcode-component" element={<QrCodeComp />} />
    <Route path="/recipe-page" element={<RecipePage />} />
    <Route path="/test" element={<TestComponent />} />
    <Route path="/" element={<h2>Welcome</h2>} />
  </Routes>);
    
}

export default App
