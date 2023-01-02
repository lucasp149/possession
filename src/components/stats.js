import styles from "./estilos.module.css";

export default function Stats({ local, away, timeLocal, timeAway, timeCenter, setStats }) {



    function nanCorrector(number) {
        if (isNaN(number)) {
            return 0;
        }
        else {
            return number;
        }
    }


    const total = timeLocal + timeCenter + timeAway;
    const localPer = nanCorrector(Math.round(timeLocal / total * 100));
    const centerPer = nanCorrector(Math.round(timeCenter / total * 100)); 
    const awayPer = nanCorrector(Math.round(timeAway / total * 100));




    return (
        <div className={styles.stats}>

            <h1>STATS</h1>
            <div>
                <h3> {local} possession is {localPer}%</h3>
                <h3>No team possession is {centerPer}%</h3>
                <h3> {away} possession is {awayPer}%</h3>
            </div>

            <button className={styles.finish} onClick={() => { setStats(false) }}>CLOSE</button>

        </div>

    )
}