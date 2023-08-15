import React, {forwardRef, useImperativeHandle, useState} from 'react';
import "./slider.scss";
import axios from "axios";
export interface SliderRef {
    setSliderValue: (newValue: number) => void;
    getSliderValue: () => number;
}

const Slider = forwardRef<SliderRef>((props, ref)=> {
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

    const isMotorStopped = sliderValue ===0;
    if (isMotorStopped) {
        updateSpeed(0);
    }

    useImperativeHandle(ref, () => ({
        setSliderValue: (newValue: number) => {
            setSliderValue(newValue);
        },
        getSliderValue: () => {
            return sliderValue;
        }
    }));

    return (
        <div className={`slider-container ${isMotorStopped ? 'motor-stopped' : ''}`}>
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
            {isMotorStopped && (
                <h2 className="motor-stopped-text">Motor detenido</h2>
            )}
        </div>
    );
});

export default Slider;