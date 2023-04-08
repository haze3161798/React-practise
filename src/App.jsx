import "./App.css";
import { useState } from "react";
import Test from "./components/test";
function App() {
  const [data, setData] = useState({
    num: 2,
  });

  const add = () => {
    setData((prevData) => ({ num: prevData.num + 1 }));
  };
  const minus = () => {
    setData((prevData) => ({ num: prevData.num - 1 }));
  };
  return (
    <div>
      <Test data={data} add={add} minus={minus} />
    </div>
  );
}

export default App;
