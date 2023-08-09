import React, {FC} from 'react';
import "./alert.scss";

interface AlertProps {
    message: string;
}
const Alert: FC<AlertProps> = ({message}) => {
    return (
        <div className="alert">
            <h1>{message}</h1>
        </div>
    );
};

export default Alert;