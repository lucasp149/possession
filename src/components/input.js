import { useEffect, useState } from "react";
import styles from "./estilos.module.css";
import ReactColorPicker from '@super-effective/react-color-picker';

export default function Input({ name, setName, itsOn, color, setColor }) {

    const [estado, setEstado] = useState(false);


    const onColorChange = (updatedColor) => {
        setColor(updatedColor);
    };

    useEffect(() => {
        if (itsOn) {
            setEstado(false);
        }
        else {
            setEstado(true);
        }
    })

    function handleDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            setName(e.target.value);
        }
        else{
            setName(e.target.value); 
        }
    }

    return (
        <>
            {estado ?
                (<form className={styles.form} >
                    < input onKeyDown={handleDown} className={styles.input} defaultValue={name} />
                    <ReactColorPicker className={styles.picker} color={color} onChange={onColorChange} showSwatch={true} showHex={false} />
                </form >) : (<h3>{name}</h3>)
            }
        </>)

}