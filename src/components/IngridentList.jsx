import Ingrident from "./Ingrident";

export default function IngridentList({foodDetails,isLoading}) {
    return (
        <div>
            {isLoading?<p>Loading...</p>:
            foodDetails.extendedIngredients.map((ingredient)=>
              <Ingrident ingredient={ingredient} key={ingredient.id}/>
        

    )}
        </div>
    )
}