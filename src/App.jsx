// App.jsx
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './page/Index';
import Reboot from './Reboot';

function App() {
    return (
        <BrowserRouter>
            <Reboot />
            <Routes>
                <Route path="/" element={<Page />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
