import styles from './Ingrident.module.css';
export default function Ingrident({ingredient}) {
    return (
        <div>
            <div className={styles.itemContainer}>
              <div className={styles.imageContainer}>
                <img className={styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name}/>   
              </div>
              <div className={styles.nameContainer}>
                <div>{ingredient.name}</div>
                <div>{ingredient.amount} { ingredient.unit}</div>
                
              </div>
            </div>
        </div>
    )
}