import { Route, Routes } from "react-router-dom"
import { lazy } from "react";

const QrCodeComp = lazy(() => import("@qrCode/App"))
const RecipePage = lazy(() => import("@recipePage/App"))
const FAQAccordianPage = lazy(() => import("./faq-accordion/pages/FAQAccordianPage"))

function App() {

  return (<Routes>
    <Route path="/qrcode-component" element={<QrCodeComp />} />
    <Route path="/recipe-page" element={<RecipePage />} />
    <Route path="/faq-accordion" element={ <FAQAccordianPage />} />
    <Route path="/" element={<h2>Welcome</h2>} />
  </Routes>);
    
}

export default App
