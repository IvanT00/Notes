import './styles/_globals.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import MainPage from './pages/mainPage/MainPage.tsx';
import NotePage from './pages/notePage/NotePage.tsx';
import { NotesProvider } from './context/notesProvider.tsx';

const App = () => {
    return (
        <NotesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/notes/:id" element={<NotePage />} />
                </Routes>
            </BrowserRouter>
        </NotesProvider>
    );
};

export default App;