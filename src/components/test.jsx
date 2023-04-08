import React from "react";

function test({ data, add, minus }) {
  const test = () => {
    add();
    console.log(data.num);
  };
  return (
    <div className="bg-black pt-4" style={{ height: "100vh" }}>
      <div className="container text-white">
        <button className="btn btn-primary me-2" onClick={test}>
          +
        </button>
        <button className="btn btn-danger me-2">-</button>
        <span style={{ fontSize: "24px" }}>{data.num}</span>
      </div>
    </div>
  );
}

export default test;
