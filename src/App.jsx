import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <Home />
        // <Router>
        //     <Navbar />
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //     </Routes>
        // </Router>
    );
}

export default App;
