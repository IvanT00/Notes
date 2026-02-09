import classes from './App.module.scss'
import './styles/_globals.scss'
import NoticeList from "./components/noticeList/NoticeList.tsx";

const App = () => {
    return (
        <div className='container'>
            <h1 className={classes.mainTitle}>Заметки</h1>
            <NoticeList/>
        </div>
    );
};

export default App;