import { useState } from "react";
import {AddCategory} from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories]= useState(['Star Wars'])


    const onAddNewCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return

        setCategories([newCategory, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory={onAddNewCategory}
            />
            { 
                categories.map( category =>(
                        <GifGrid category={category} key={category}/>
                    )
                )
            }
        </>
    );
}