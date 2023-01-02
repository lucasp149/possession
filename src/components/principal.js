import { useEffect, useState } from "react"
import styles from "./estilos.module.css"
import StopWatch from "./stopWatch"
import Input from "./input";
import Stats from "./stats";
import Switch from "react-switch";


export default function Principal() {

    // Lector de tap para cada instancia
    const [watchLocal, setWatchLocal] = useState(false);
    const [watchCenter, setWatchCenter] = useState(false);
    const [watchAway, setWatchAway] = useState(false);
    const [itsOn, setItsOn] = useState(false);

    const [local, setLocal] = useState("Local");
    const [away, setAway] = useState("away");

    const [colorHome, setColorHome] = useState('#ff0000');
    const [colorAway, setColorAway] = useState('#000dff');


    // I will set a time picker for each team including the no-team possession

    const [watchLocalTime, setWhatchLocalTime] = useState(0);
    const [watchCenterTime, setWhatchCenterTime] = useState(0);
    const [watchAwayTime, setWhatchAwayTime] = useState(0);

    // The SHOW STATS button

    const [stats, setStats] = useState(false);






    useEffect(() => {
        if (!itsOn) {
            setWatchLocal(false);
            setWatchAway(false);
            setWatchCenter(false);
            document.getElementsByClassName(styles.team)[0].style.filter = "grayscale(0.7)";
            document.getElementsByClassName(styles.team)[1].style.filter = "grayscale(0.7)";
            document.getElementsByClassName(styles.secondary)[0].style.pointerEvents = "all";
            document.getElementsByClassName(styles.secondaryBottom)[0].style.pointerEvents = "all";


        }
        else {
            document.getElementsByClassName(styles.team)[0].style.filter = "grayscale(0)";
            document.getElementsByClassName(styles.team)[1].style.filter = "grayscale(0)";
            document.getElementsByClassName(styles.secondary)[0].style.pointerEvents = "none";
            document.getElementsByClassName(styles.secondaryBottom)[0].style.pointerEvents = "none";
        }
    }, [itsOn])

    function border(pointed) {
        const arr = ["Local", "Center", "Away"];
        arr.forEach((local) => {
            if (local === pointed) { document.getElementById(local).style.border = "solid 10px black"; }
            else { document.getElementById(local).style.border = "none"; }
        })


    }

    function handleClick(e) {
        if (itsOn) {
            border(e.currentTarget.id);
            switch (e.currentTarget.id) {
                case "Local": setWatchLocal(true);
                    setWatchAway(false);
                    setWatchCenter(false);
                    break;
                case "Center": setWatchLocal(false);
                    setWatchAway(false);
                    setWatchCenter(true);
                    break;
                case "Away": setWatchLocal(false);
                    setWatchAway(true);
                    setWatchCenter(false);
                    break;
            }
        }

    }

    function pauseStop() {
        setItsOn(!itsOn);
    }

    function finishGame() {
        setStats(!stats);
    }

    return (
        <>
           { stats ? <Stats local={local} away={away} timeLocal={watchLocalTime} timeAway={watchAwayTime} timeCenter={watchCenterTime} setStats={setStats}/>:""}
 

            <div className={styles.principal} >

                <div id="Local" className={styles.team} style={{ backgroundColor: colorHome }} onClick={handleClick}>  </div>

                <div className={styles.secondary}> <Input name={local} setName={setLocal} itsOn={itsOn} color={colorHome} setColor={setColorHome} /> <StopWatch running={watchLocal} setAll={setWhatchLocalTime} /> </div>

                <div id="Center" className={styles.center} onClick={handleClick}> <StopWatch running={watchCenter} setAll={setWhatchCenterTime} /> </div>

                <div id="Away" className={styles.team} style={{ backgroundColor: colorAway }} onClick={handleClick}> </div>

                <div className={styles.secondaryBottom}> <StopWatch running={watchAway} setAll={setWhatchAwayTime} /> <Input name={away} setName={setAway} itsOn={itsOn} color={colorAway} setColor={setColorAway} /></div>

                <div className={styles.barra}> {itsOn ? <p>Playing...</p> : <p>Paused</p>} {stats ? <div className={styles.finish} onClick={finishGame}> SHOW STATS </div> : <div className={styles.finish} onClick={finishGame}> SHOW STATS </div>}  <Switch onChange={pauseStop} checked={itsOn} ></Switch> </div>


            </div >



        </>







    )


}