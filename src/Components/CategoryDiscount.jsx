import React from "react";
import "../index.css"

const CategoryDiscount = () => {
  return (
    <div>
      <div
        className="delivery-code-info"
        style={{
          display: "flex",
          gap: "4rem",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F2F2F2",
          padding: "1rem",
        }}
      >
        <p style={{ display: "flex", gap: "1rem" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/71/71222.png"
            width={"22px"}
            alt="truck"
          />
          FREE US Shipping Over $49
        </p>
        <p style={{ display: "flex", gap: "1rem" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1017/1017419.png"
            alt="refer"
            width={"22px"}
          />
          Refer a Friend, Get $15
        </p>
        <p style={{ display: "flex", gap: "1rem" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5356/5356381.png"
            alt="code"
            width={"22px"}
          />
          New Customers Save 20% - Use Code NEWBIE
        </p>
        <p style={{ display: "flex", gap: "1rem" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/254/254638.png"
            alt="mobile"
            width={"22px"}
          />
          Download Our App
        </p>
      </div>

      <div className="discount-coupon-banner">
        <h3 style={{fontSize:"21px", backgroundColor:"#2E3337", color:"white", margin:"1rem 14rem",padding:"0.4rem", textAlign:"center"}}><b>
          25% off select brands with code SINGLES + free 13-piece Beauty Bag
          (Worth $117) @ $165 | Shop now</b>
        </h3>
      </div>
    </div>
  );
};

export default CategoryDiscount;
