import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";
// import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp =()=>{
    const [Categories, setCategories] = useState(['Dragonball']);
    const onAddCatgegorie=(event)=>{
        // Categories.push(event);
        // console.log(event);
        if(Categories.includes(event)) return;
        setCategories([event,...Categories]);
        // // setCategories(cat=>[...cat,'Variant']);
    }
    console.log(Categories);
    return(
        <>
           
            <h1>GiftExpertApp</h1>
           
            <AddCategory 
                // setCategories={ setCategories }
                onNewValue ={ event=>onAddCatgegorie(event) }
            />
           
            {
                Categories.map(
                        category=>(
                            <GiftGrid 
                                key={ category } 
                                Category ={ category }
                            />
                        )
                    )
            }

            
        </>
    )
}