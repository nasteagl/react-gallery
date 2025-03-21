import MainImage from "../MainImageComponents/MainImageComponents";
import Buttons from "../Buttons/buttons";
import Image from "../Image/Image";
import styles from "./Gallery.module.css";
import images from "../../data/images.json";
import {useState} from "react";


const InitializeImage=images.map((image,index)=>{
    return {...image, isSelected:index===0,};
});

function Gallery(){
    const[images,setImage]=useState(InitializeImage);
    const[selectedImage,setSelectedImage]=useState(images[0]);

function handleClick(id) {
    const newImage = images.map((image)=>{
        if(image.id===id){
            setSelectedImage(image);
            return{
                ...image,isSelected:true
            };
        }
        return {
            ...image,isSelected:false,
        };
    });
    setImage(newImage);
}
   function selectRandomImage(){
       const randomIndex = Math.floor(Math.random() * images.length);
       handleClick(images[randomIndex].id);
}
  function randomizeImage(){
      const randomize=[...images].sort(()=>Math.random() - 0.5);
      setImage(randomize);
  }
  function nextImage(){
    const currentIndex=images.findIndex((image)=>image.isSelected);
    const nextIndex= (currentIndex+1)%images.length;
    handleClick(images[nextIndex].id);
  }
  function prevImage(){
    const currentIndex=images.findIndex((image)=>image.isSelected);
    const prevIndex=(currentIndex-1+ images.length)%images.length;
    handleClick(images[prevIndex].id);
  }

  return(
      <>
          <MainImage image={selectedImage}/>
          <Buttons
              onPrevious={prevImage}
              randomSelect={selectRandomImage}
              randomize={randomizeImage}
              onNext={nextImage}


          />
          <div className={styles.imageList}>
              {images.map((image)=>(
                  <Image image={image} key={image.id} onClick={()=>handleClick(image.id)}/>
              ))}
          </div>
      </>
  )
}

export default Gallery;


