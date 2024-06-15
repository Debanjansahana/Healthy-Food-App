import Item from "./item";

const FoodItems = () => {
  let foodItems = [
    "Sabji",
    "Green Vegetable",
    "Rooti",
    "Rice",
    "Dal",
    "Salad",
    "Ghee",
    "Fruits",
  ];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItems={item}
          handleBuyButton={() => {
            console.log(`${item} bought`);
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
