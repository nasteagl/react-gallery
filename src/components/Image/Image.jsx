import styles from "./Image.module.css";
//codul dat afiseaza o imagien si perite userului sa o selecteze printr-un clic
function Image({image,onClick}){
    return(
        <div
            onClick={onClick}
            className={`${styles.container}${image.isSelected ? ' is-selected' : ""}`}
            >
            <img src={image.url} className={styles.image} alt={image.title}/>
        </div>
    )
}
export default Image;