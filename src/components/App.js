import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[items, setItems] = useState([{name:"",age:"",}]);

  function handleAdd(){
    setItems([...items, {name:"",age:"",}]);
  }

  function handleChange(index,e){
    let new_items = [...items];
    new_items[index][e.target.name] = e.target.value;
    setItems(new_items);
  }
  function handleRemove(index){
    let new_items = items.filter((i,ind)=>ind!==index);
    setItems(new_items);
  }

  return (
    <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          console.log(items);
        }}>
          {
            items.map((i,ind)=>{
              return(
                <div>
            <input type="text" value={i.name} name="name" placeholder="Name" onChange={(e)=>handleChange(ind,e)}/>
            <input type="number" value={i.age} name="age" placeholder="Age" onChange={(e)=>handleChange(ind,e)}/>
            <button onClick={()=>handleRemove(ind)}>Remove</button>
          </div>
              )
            })
          }

          <button>Submit</button>
          <button onClick={handleAdd}>Add More..</button>
        </form>
    </div>
  )
}

export default App
