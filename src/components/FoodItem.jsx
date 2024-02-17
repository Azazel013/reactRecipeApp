export default function FoodItem({ food }) {
  return (
    <div>
      <h2>{food.title}</h2>
      <img src={food.image} alt={food.title} />
      <button>View Reciepe</button>
    </div>
  );
}