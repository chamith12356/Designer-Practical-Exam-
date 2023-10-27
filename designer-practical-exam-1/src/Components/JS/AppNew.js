import React, { useState } from "react";

function AppNew() {
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
          placeholder="1 Room, 1 Adult, 0 Children"
        />
      </div>

      {showCar1 && (
        <div
          className=""
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
          <p>Max. 8 guests per room</p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Adult(s)</th>
                <th>Children</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Room1</td>
                <td>
                  <input
                    type="number"
                    className=" form-control"
                    name="adults"
                    id="adults"
                    min="0"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="children"
                    id="children"
                    min="0"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input
            type="submit"
            style={{
              marginLeft: "60px",
              marginTop: "30px"
            }}
            className="btn btn-dark"
          />
        </div>
      )}
    </div>
  );
}

export default AppNew;
