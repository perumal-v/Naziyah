import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
<BrowserRouter>
      <Routes>
        {/* Home scroll page */}
        <Route path="/" element={<HomePage />} />

       
      </Routes>


      <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
