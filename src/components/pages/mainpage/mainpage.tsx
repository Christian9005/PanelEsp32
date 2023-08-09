import React from 'react';
import Meter from "../../atoms/meter/meter";
import Slider from "../../atoms/slider/slider";
import "./mainpage.scss";

const Mainpage = () => {
    return (
        <div className="main-page">
            <h1>Proyecto de Titulación</h1>
            <Meter/>
            <Slider/>
        </div>
    );
};

export default Mainpage;