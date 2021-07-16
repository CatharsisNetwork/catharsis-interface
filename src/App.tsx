import React from 'react'
import FaqPage from "./pages/faq/FAQPage";
import './styles/global.scss';
import {Footer} from "./components/Footer";
import logo from "./img/footerLogo.png";
import bg from "./img/faq_image/bg.png";


function App() {
    return (
            <div className={"main"}>
                <div className="background"/>
                <div className={"main_content"}>
                    <div className={"header_logo"}>
                        <img src={logo} alt={logo}/>
                    </div>
                    <div className={"header_bg"}>
                        <img src={bg} alt={logo}/>
                    </div>
                    <div className="_container">
                        <FaqPage/>
                    </div>
                </div>
                <Footer/>
            </div>);
}

export default App;
