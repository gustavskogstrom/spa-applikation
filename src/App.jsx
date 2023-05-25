import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/shared/Navbar';
// import Footer from './components/shared/Footer';

import Home from './components/Home';
import Info from './components/pages/Info';
import Muscles from './components/pages/Muscles';

// import Workouts from './data/workouts.json';

import './assets/css/Style.css';
import './assets/css/Colors.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <article className='page'>
                <section>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        
                        <Route path='/about' element={<Info />} />
                        <Route path='/contact' element={<Muscles />} />
                    </Routes>
                </section>
            </article>
            {/* <Footer /> */}
        </BrowserRouter>
    );
};

export default App;