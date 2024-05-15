import { Route, Routes } from "react-router-dom"
import { lazy } from "react";
import Home from "./Home";

const QrCodeComp = lazy(() => import("@qrCode/App"))
const RecipePage = lazy(() => import("@recipePage/App"))
const FAQAccordianPage = lazy(() => import("./faq-accordion/pages/FAQAccordianPage"))
const FourCardFeaturePage = lazy(() => import("./four-card-feature-section/FourCardFeaturePage"))

function App() {

  return (<Routes>
    <Route path="/qrcode-component" element={<QrCodeComp />} />
    <Route path="/recipe-page" element={<RecipePage />} />
    <Route path="/faq-accordion" element={<FAQAccordianPage />} />
    <Route path="/four-card-feature-section" element={<FourCardFeaturePage />} />
    <Route path="/" element={<Home />} />
  </Routes>);
    
}

export default App
