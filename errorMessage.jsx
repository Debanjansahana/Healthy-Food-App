const errorMessage = () =>{
  let foodItems = ["Green Vegetable","Rooti","Rice","Dal","Salad"];
return <>  {foodItems.length === 0 && <h4>I am Still Hungry</h4>}
</>
};

export default errorMessage;