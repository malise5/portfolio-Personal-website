import { Route, Routes } from "react-router";
// import Portfolio from "./component/Portfolio";
import Resume from "./component/Resume";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </>
    );
}

export default App;
