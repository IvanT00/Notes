import './styles/_globals.scss'
import {BrowserRouter, Route, Routes} from "react-router";
import MainPage from "./pages/mainPage/MainPage.tsx";
import NotePage from "./pages/notePage/NotePage.tsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/notes/:id" element={<NotePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;