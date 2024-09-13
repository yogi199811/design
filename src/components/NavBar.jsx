import React from "react";

const NavBar = () => {
  return (
    <div
      style={{
        width: "98vw",
        padding:"10px",
        height: "8vh",
        backgroundColor: "royalblue",
        margin: "10px 5px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h1 style={{ color: "white" }}>Logo</h1>

        <p style={{ color: "white" }}>inventory Management system</p>
      </div>

      <a style={{textDecoration:"none",color:"white"}} href="/">Home</a>
    </div>
  );
};

export default NavBar;
