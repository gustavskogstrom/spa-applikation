import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

import Home from './components/Home';
import Info from './components/pages/Info';
import Muscles from './components/pages/Muscles';

import './assets/css/Style.css';
import './assets/css/Colors.css';
import './assets/css/Workouts.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <article className='page'>
                <section>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        
                        <Route path='/Info' element={<Info />} />
                        <Route path='/Muscles' element={<Muscles />} />
                    </Routes>
                </section>
            </article>
            <Footer />
        </BrowserRouter>
    );
};

export default App;