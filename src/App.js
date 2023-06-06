import { Route, Routes } from "react-router";
import Portfolio from "./component/Portfolio";
import Resume from "./component/Resume";
import About from "./component/About";
import Navbar from "./component/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </>
    );
}

export default App;
