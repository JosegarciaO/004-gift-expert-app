import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";


export const useFetchGift = (Category) => {
  
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGiffs= async ()=>{
        const newImages = await getGifs(Category);
        setimages(newImages);
        setIsLoading(false);
    };

    useEffect(()=>{
        getGiffs();
    },[ ]);
    return{
        images,
        isLoading
    }

}
