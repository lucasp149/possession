import { useEffect, useState } from "react";
import styles from "./estilos.module.css";




export default function StopWatch({ running, setAll }) {


    const [time, setTime] = useState(0);
    
    
    

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
            setAll(time);
        }
        return () => clearInterval(interval);
    }, [running]);


    


    return (

        <div className={styles.clock}>
            <div className={styles.numbers}>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div>{running}</div>
        </div>
    )


}