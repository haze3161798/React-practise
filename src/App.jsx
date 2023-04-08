import "./App.css";
import Test from "./components/test";
function App() {
  const data = {
    num: 2,
  };
  const add = () => {
    data.num += 1;
  };
  const minus = () => {
    data.num -= 1;
  };
  return (
    <div>
      <Test data={data} add={add} minus={minus} />
    </div>
  );
}

export default App;
