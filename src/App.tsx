import React, { useState } from "react";
import "./App.css";
import Test from "./components/Test";
const uuid = () => crypto.randomUUID();
type listItem = {
  name: string;
  id: string;
};
function App() {
  const [list, setData] = useState<listItem[]>(() => [
    {
      name: "新增文字",
      id: uuid(),
    },
    {
      name: "456",
      id: uuid(),
    },
  ]);
 const addList = () => {
  setData(()=> list.concat({
    name: "新增文字",
    id: uuid(),
  }))
 }
 const [isEditId ,setIsEditId] = useState<string>('')
 const edit = (id) => {
  setIsEditId(id)
 }
 const setName = (name, id) => {
  setData((prev)=> {
    return prev.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: name
        }
      }
      return item
    })
  })
 }
 const deleteList = (id: string) => {
  setData((prev) => prev.filter(p => p.id !== id))
 }
  return (
    <div className="bg-black" style={{ height: "100vh" }}>
      {list.map((item) => {
        return (
          <Test
            key={item.id}
            id={item.id}
            name={item.name}
            addList={addList}
            isEditId={isEditId}
            edit={edit}
            setName={setName}
            deleteList={deleteList}
          />
        );
      })}
    </div>
  );
}

export default App;
