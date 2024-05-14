
import QrCodeComp from "@qrCode/App"
import RecipePage from "@recipePage/App"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/qrcode-component" element={<QrCodeComp />} />
      <Route path="/recipe-page" element={<RecipePage />} />
      <Route path="/" element={<h2>Welcome</h2>} />
    </Routes>
  </BrowserRouter>
}

export default App
