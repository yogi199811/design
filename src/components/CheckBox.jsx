import React, { useState } from "react";

const CheckBox = () => {
  const [ischeck, setIscheck] = useState(false);
  const [ischeck2, setIscheck2] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "item") {
      setIscheck(!ischeck);
    } else if (e.target.name === "supplier") {

      setIscheck2(!ischeck2);
      
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <input
            onChange={handleChange}
            type="checkbox"
            checked:true
            name="item"
          />
          <label htmlFor="">Item</label>

          <input onChange={handleChange} type="checkbox"   name="supplier" />
          <label htmlFor="">Supplier</label>
        </div>

        <h1>Item details</h1>

        {ischeck ? (
          <div
            style={{
              width: "40vw",
              height: "40vh",
              backgroundColor: "lightskyblue",
              padding: "35px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <form>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Item name</label>
                <input placeholder="Enter item name" type="text" />

                <label>Unit Price</label>
                <input placeholder="Enter Unit price" type="number" />
              </div>

              <br />
              <br />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "25px",

                  justifyContent: "space-between",
                }}
              >
                <label>Quantity</label>
                <input placeholder="Enter quantity" type="number" />

                <label htmlFor="">Date of submission</label>
                <input type="date" />
              </div>
            </form>
          </div>
        ) : (
          ""
        )}

        {ischeck2 ? (
          <div
            style={{
              width: "60vw",
              height: "60vh",
              backgroundColor: "red",
              padding: "35px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <form>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "25px",
                }}
              >
                <label>Suppliar name</label>
                <input placeholder="Enter supliar name" type="text" />

                <label>Company name</label>
                <input placeholder="Enter Company price" type="text" />

                <label>Country</label>
                <input placeholder="Enter Company price" type="text" />
              </div>

              <br />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "25px",

                  justifyContent: "space-between",
                }}
              >
                <label>State</label>
                <input placeholder="Enter Email" type="text" />

                <label>Email</label>
                <input placeholder="Enter Email" type="email" />

                <label htmlFor="">City</label>
                <input type="text" />
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        <button style={{color:"white", margin: "40px 0px",padding:"10px 40px",backgroundColor:"royalblue" }}>Submit</button>
      </div>
    </>
  );
};

export default CheckBox;
