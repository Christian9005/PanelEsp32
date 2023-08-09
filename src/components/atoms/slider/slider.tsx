import React, {useState} from 'react';
import "./slider.scss";
import axios from "axios";
const Slider = () => {
    const [sliderValue, setSliderValue] = useState<number>(50);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value,10);
        setSliderValue(newValue);
    }

    const handleSliderMouseUp = () => {
        updateSpeed(sliderValue);
    };

    const handleSliderTouchEnd = () => {
        updateSpeed(sliderValue);
    };

    const updateSpeed = (newSpeed: number) => {
        const motorId = 2;
        const apiUrl = `https://apimotorfila-production-9864.up.railway.app/api/Motor/${motorId}`;

        const apiValue = Math.round((newSpeed/100)*1000);

        const body = {
            name: "motor 1",
            speed: apiValue
        }

        axios.put(apiUrl, body)
            .then((response)=> {
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="slider-container">
            <h2>Velocidad del motor al {sliderValue}%</h2>
            <input
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                onChange={handleSliderChange}
                onMouseUp={handleSliderMouseUp}
                onTouchEnd={handleSliderTouchEnd}
                className="slider"
            />
        </div>
    );
};

export default Slider;