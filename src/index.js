import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Solutions from './components/pages/Solutions';
import Blog from './components/pages/Blog';
import ContactUs from './components/pages/ContactUs';
// import GetConsultancy from './components/pages/GetConsultancy';

// // Solutions
// import EESS from './components/pages/solutions/EESS';
// import ISS from './components/pages/solutions/ISS';
// import BSMS from './components/pages/solutions/BSMS';
// import ENS from './components/pages/solutions/ENS';
// import CMS from './components/pages/solutions/CMS';
// import BES from './components/pages/solutions/BES';

// // Services
// import ItAdvisory from './components/pages/services/ItAdvisory';
// import NetworkAssessment from './components/pages/services/NetworkAssessment';

// import AdminLogin from './components/pages/AdminLogin';
// import AddBlog from './components/pages/AddBlog';
// import UpdateBlog from './components/pages/UpdateBlog';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />

           <Route path='about' element={<About />} />
           <Route path='contact' element={<ContactUs />} />
           <Route path='solutions' element={<Solutions />} />
           <Route path='blog' element={<Blog />} />
          {/* <Route path='blog'>
            <Route index element={<Blog />} />
            <Route path='add' element={<AddBlog />} />
            <Route path='update' element={<UpdateBlog />} />
          </Route>
          <Route path='consultancy' element={<GetConsultancy />} />

          <Route path='solutions'>
            <Route index element={<Navigate to='eess' />} />

            <Route path='eess' element={<EESS />} />
            <Route path='iss' element={<ISS />} />
            <Route path='bsms' element={<BSMS />} />
            <Route path='ens' element={<ENS />} />
            <Route path='cms' element={<CMS />} />
            <Route path='bes' element={<BES />} />
          </Route>

          <Route path='services'>
            <Route index element={<Navigate to='it-advisory' />} />

            <Route path='it-advisory' element={<ItAdvisory />} />
            <Route path='network-assessment' element={<NetworkAssessment />} />
          </Route>

          <Route path='/admin/login' element={<AdminLogin />} /> */}

          {/* Redirects all non-existing pages to the home page */}
          <Route path='*' element={<Navigate to='/' />} />

        </Route>

      </Routes>

    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
