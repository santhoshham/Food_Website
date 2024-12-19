import React, { useState } from 'react'
import './Home.css'
import Header from '../Header/Header'
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import FoodDisplay from './Fooddisplay/FoodDisplay';
export default function Home(){

   const [category, setCategory] = useState("All");

    return(
    <div>
    <Header/>
    <ExploreMenu category = {category} setCategory={setCategory}/>
    <FoodDisplay category={category} />
    </div>
    )
}
