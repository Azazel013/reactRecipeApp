import { useState,useEffect} from 'react'
import style from "./Search.module.css"
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="7f2f9c46bf354439b62cc0919f6862df"//in real world we should not put the api key here we should put it in a enviroment variable

export default function Search({foodData,setFoodData}) {
    const [query,setQuery] = useState("pizza")
    useEffect(()=>{
        async function fetchFood(){
            const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data=await res.json()
            // console.log(data.results)
            setFoodData(data.results)
        }
        fetchFood()
    },[query])
  return (
    <div className={style.searchContainer}>
     <input className={style.input} type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}
