import {useState} from 'react';
import Search from "./components/Search"
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import styles from './App.module.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails';
function App() {
  const [foodData,setFoodData]=useState([])//array of objects
  const [foodId,setFoodId]=useState(656329)
  // console.log(foodData)
  // console.log("foodData: ",foodId)
  return (
    <div>
     <Nav/>
     <Search foodData={foodData} setFoodData={setFoodData}/>
     <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </InnerContainer>
        <InnerContainer>
            <FoodDetails foodId={foodId} />
        </InnerContainer>
     </Container>
    </div>
  )
}

export default App
