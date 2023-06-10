import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import SummaryPage from './components/SummaryPage';
import Navbar from "./components/Navbar";
function App() {
    return (

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={< Home/>}></Route>
                <Route path="/register" element={<RegistrationForm />}></Route>
                <Route path="/summary" element={<SummaryPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
