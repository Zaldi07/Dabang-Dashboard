import SharedLayout from "./pages/dashboard/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/poppins"; // Defaults to weight 400
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
