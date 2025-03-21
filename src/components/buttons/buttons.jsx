import styles from "./buttons.module.css"
import RandomFirst from "../../assets/random1.svg"
import RandomSecond from "../../assets/random2.svg"
import PreviousImg from "../../assets/previous.svg"
import NextImg from "../../assets/next.svg"

function Buttons({randomSelect, randomize, onNext, onPrevious}) {
    return (
        <div className={styles.container}>
            <button className={styles.image} onClick={onPrevious} >
                <img className={styles.image} src={PreviousImg} />
            </button>

            <button className={styles.image} onClick={randomSelect} >
                <img className={styles.image} src={RandomFirst}  />
            </button>
            <button className={styles.image} onClick={randomize} >
                <img className={styles.image} src={RandomSecond}  />
            </button>
            <button className={styles.image} onClick={onNext} >
                <img className={styles.image} src={NextImg} />
            </button>
        </div>
    );
}
export default Buttons;