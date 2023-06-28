import React from 'react';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Main from './components/Main';
import Invite from './components/Invite';
import Story from './components/Story';
import Photo from './components/Photo';
import Location from './components/Location';
import Account from './components/Account';
import Visitor from './components/Visitor';
import FAQ from './components/FAQ';
import Cookie from './components/Cookie';
import Share from './components/Share';
import { TextXSmallDodum, bgLight  } from './components/CommonStyle';

import { configs } from './configs';
import background from './assets/images/45-degree-fabric-light.png'
import './styles/App.scss';
import { alignPropType } from 'react-bootstrap/esm/types';
import Calendar from 'components/Calendar';
// import background from './assets/images/binding-light.png'
// import './App.css';

function App() {
    return (
        <main style={{ height: '100%', backgroundImage: `url(${background})`}}>
            {/* <Navbar config={configs}/> */}
            <div id="content">
                <Main config={configs}/>
                <Invite/>
                <Story config={configs}/>
                <div style={{ textAlign: 'center', marginTop: '3%' }}>
                    <TextXSmallDodum className="colored centered">&#10047; &#10047; &#10047;</TextXSmallDodum>
                </div>
                <Location loc={configs.weddingLocation}/>
                {/* <Calendar/> */}
                <Photo config={configs}/>
                <Account config={configs}/>
                <div style={{ textAlign: 'center', paddingTop: '3%', background: `${bgLight}` }}>
                    <TextXSmallDodum className="colored centered">&#10047; &#10047; &#10047;</TextXSmallDodum>
                </div>
                <Visitor/>
                {/* <FAQ/> */}
                {/* <Cookie/> */}
                <Share config={configs}/>
            </div>
            <Footer/>
        </main>
    );
}

export default App;