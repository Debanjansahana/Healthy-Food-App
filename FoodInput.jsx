import styles from "./FoodInput.module.css"


const FoodInput = () =>
  {

    const eventHandleOnChange =(event) =>{
      console.log(event.target.value)
    }
    return  <input type="text" Placeholder ="Enter Food Here" className ={styles.foodinput}
    onChange={(event) => eventHandleOnChange(event)}></input>
  }

  export default FoodInput;