import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import SummaryPage from './components/SummaryPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home/>}></Route>
                <Route path="/register" element={<RegistrationForm />}></Route>
                <Route path="/summary" element={<SummaryPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
