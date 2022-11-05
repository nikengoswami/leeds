import {useState} from "react"


// In  home page 1 input box
// and add more button made

// When we click on add more it again add 1 input boxes open {down or top}),
// (Made submit button after click on submit data save in mongo

// controller and route made seperate in backend

// made only {post and get} in crud  in that input box. { not make  edit and delete in crud }

// Made like todo app

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };


  return (
    <div className="App">
      <button onClick={handleClick}>Add</button>

      {Array.from(Array(counter)).map((c, index) => {
        return <input key={c} type="text"></input>;
      })}

      <button 
      // onclick={submit}
      >Submit</button>
    </div>
  );
}