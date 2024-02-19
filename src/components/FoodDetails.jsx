import {useEffect, useState} from 'react'
export default function FoodDetails({foodId}) {
    const [foodDetails,setFoodDetails]=useState({})
    URL=`https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY="7f2f9c46bf354439b62cc0919f6862df"
    useEffect(()=>{
        async function fetchFoodDetails(){
            const res=await fetch(`${URL}?apiKey=${API_KEY}`)
            const data=await res.json()
            // console.log(data)
            setFoodDetails(data)

        }
        fetchFoodDetails()
    },[foodId])
    return (
        <div>
           FoodDetails:{foodId}  <br/>
           {foodDetails.title}
           <img src={foodDetails.image} alt={foodDetails.title}/>
        </div>
    )
}