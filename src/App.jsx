import {useState} from 'react';
import Search from "./components/Search"
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import styles from './App.module.css';
function App() {
  const [foodData,setFoodData]=useState([])//array of objects
  return (
    <div>
     <Nav/>
     <Search foodData={foodData} setFoodData={setFoodData}/>
     <FoodList foodData={foodData}/>
    </div>
  )
}

export default App
