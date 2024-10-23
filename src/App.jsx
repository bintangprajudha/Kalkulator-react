import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Calculate from "./components/Calculate";

function App() {
  const [data, setData] = useState({
    curr: "",
    prev: "",
    operator: "",
    result: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  console.log(data.prev, data.operator, data.curr, data.result);

  function changeValue(val) {
    
  }

  function changeOperator(val) {
      
  }

  function handleSubmit() {
    setIsSubmit(true);
  }

  function handleAC() {
    setData({
      curr: "",
      prev: "",
      operator: "",
      result: "",
    });
  }

  function handleDelete() {
    if (data.curr !== "") {
      setData({
        ...data,
        curr: data.curr.slice(0, -1),
      });
    } else if (data.curr === "" && data.prev !== "") {
      setData({
        ...data,
        operator: "",
      });
    } else {
      setData({
        ...data,
        prev: data.prev.slice(0, -1),
      });
    }
  }

  return (
    <>
      <div className="container text-center">
        <Display data={data} isSubmit={isSubmit} />
        <Calculate
          handleDelete={handleDelete}
          handleAC={handleAC}
          changeValue={changeValue}
          changeOperator={changeOperator}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default App;
