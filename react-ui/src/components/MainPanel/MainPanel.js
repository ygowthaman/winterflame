import { BrowserRouter, Routes, Route } from "react-router-dom"
import Thoughts from "./Thoughts/Thoughts";

function MainPanel() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Thoughts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainPanel;