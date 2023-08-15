import React, {useRef} from 'react';
import Meter from "../../atoms/meter/meter";
import Slider, {SliderRef} from "../../atoms/slider/slider";
import "./mainpage.scss";
import Button from "../../atoms/button/button";
import logoU from "../../../assets/images/logou.png";
const Mainpage = () => {
    const sliderRef = useRef<SliderRef | null>(null);

    const stopMotor = () => {
        if (sliderRef.current) {
            sliderRef.current.setSliderValue(0);
        }
    }

    const getSliderValue = () => {
        if (sliderRef.current) {
            return sliderRef.current.getSliderValue();
        }
        return 0;
    }

    return (
        <div className="main-page">
            <img src={logoU} alt="imageLogo"/>
            <h1 className="title">Proyecto de Titulación</h1>
            <h2 className="subtitle">Elaborado por Edwin Anrango</h2>
            <Meter/>
            <Slider ref={sliderRef}/>
            <div className="buttons-container">
                <Button text="Parar Motor" variant="stop" size="tall" onClick={stopMotor}/>
                <Button text="Continuar Proceso" variant="continue" size="tall" onClick={getSliderValue}/>
            </div>
        </div>
    );
};

export default Mainpage;