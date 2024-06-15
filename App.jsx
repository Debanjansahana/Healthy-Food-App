import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";


function App() {

  let texttoshow = "Items entered by user"

  return (
    <>
      <Container>
        <h4>
          <span className="food-heading">Healthy Foods</span>
        </h4>
       <FoodInput></FoodInput>
        <p>{texttoshow}</p>
        <errorMessage items={FoodItems}></errorMessage>
        <FoodItems items={FoodItems}></FoodItems>
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods, that are good for your health and
          well-being. "Good-Food, Good Life"
        </p>
      </Container>
    </>
  );
}

export default App;
