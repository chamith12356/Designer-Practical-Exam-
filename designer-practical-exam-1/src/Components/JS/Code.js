import React, { useState } from "react";

function Code() {
  const [showCar1, setShowCar1] = useState(false);

  const handleInputClick = () => {
    // Show the car1 div when the input is clicked
    setShowCar1(true);
  };

  return (
    <div>
      <div className="">
        <input
          type="text"
          className="form-control"
          onClick={handleInputClick}
          placeholder="Special Code"
        />
      </div>

      {showCar1 && (
        <div
          className="car1"
          style={{
            height: "200px",
            padding: "10px",
            width: "200px",
            backgroundColor: "white",
            position: "absolute",
            border: "1px solid #00000059",
            borderRadius: "8px"
          }}
        >
          <p>Corporate / Special Rate (Optional)</p>
          <select className="form-control">
            <option>Select Code Type</option>
            <option>Corporate</option>
            <option>Group</option>
            <option>Travel Agency</option>
          </select>
          <input
            type="text"
            className="form-control"
            style={{
              marginTop: "20px"
            }}
            placeholder="Enter Code"
          />
        </div>
      )}
    </div>
  );
}

export default Code;
