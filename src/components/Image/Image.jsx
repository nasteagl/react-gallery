import styles from "./Image.module.css";
//codul dat afiseaza o imagien si perite userului sa o selecteze printr-un clic
function Image({image,onClick}){
    return(
        <div
            onClick={onClick}
            className={`${styles.container}${image.isSelected ? ' is-selected' : ""}`}
            >
            {/*<p className={styles.imageTitle}>{image.title}</p>*/}
            <img src={image.url} className={styles.image} alt={image.title}/>
        </div>
    )
}
export default Image;