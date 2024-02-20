import {useEffect, useState} from 'react'
import styles from './FoodDetails.module.css'
export default function FoodDetails({foodId}) {
    const [foodDetails,setFoodDetails]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    URL=`https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY="7f2f9c46bf354439b62cc0919f6862df"
    useEffect(()=>{
        async function fetchFoodDetails(){
            const res=await fetch(`${URL}?apiKey=${API_KEY}`)
            const data=await res.json()
            console.log(data)
            setFoodDetails(data)
            setIsLoading(false)
        }
        fetchFoodDetails()
    },[foodId])
    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{foodDetails.title}</h1>
                <img  className={styles.recipeImage} src={foodDetails.image} alt={foodDetails.title}/>
                <div className={styles.recipeDetails}>
                 <span>
                  <strong>{foodDetails.readyInMinutes}Minutes</strong>
                 </span>
                 <span>
                  <strong>Serves:{foodDetails.servings}</strong>
                 </span>
                 <span><strong>{foodDetails.vegetarian ? "Vegetarian":"Non-Vegitarian"}</strong></span>
                 <span><strong>{foodDetails.vegan? "Vegan":""}</strong></span>
                 </div>
                <div>
                <div>
                  <span><strong>${foodDetails.pricePerServing/100} per serving</strong></span>
                </div>
                <h1>Instructions</h1> 
                <div className={styles.recipeInstructions}>
                    <ol>
                    {isLoading ? <p>Loading...</p>:foodDetails.analyzedInstructions[0].steps.map((step)=>(<li>{step.step} </li>))}
                    </ol>
                    </div>
                </div>
           </div>
        </div>
    )
}