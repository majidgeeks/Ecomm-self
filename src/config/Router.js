import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
