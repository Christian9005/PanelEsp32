import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./meter.scss";
import Alert from "../alert/alert";

interface Motor{
    id: number;
    name: string;
    speed: number;
    meter: number;
    state: boolean;
}
const Meter = () => {
    const [motorData, setMotorData] = useState<Motor>();

    useEffect(() => {
        const fetchMotorData = async () => {
            try {
                const response = await axios.get('https://apimotorfila-production-9864.up.railway.app/api/Motor/2');
                setMotorData(response.data);
            } catch (error) {
                console.error('Error al obtener los datos del servidor: ', error);
            }
        };

        fetchMotorData();

        const interval = setInterval(() => {
            if (motorData && !motorData.state) {
                fetchMotorData();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [motorData]);

    const showFloatingAlert = motorData && !motorData.state;

    return (
        <div className="meter">
            <h2>Metros almacenados {motorData?.meter}[m]</h2>
            {showFloatingAlert && <Alert message="Colocar Material" />}
        </div>
    );
};

export default Meter;