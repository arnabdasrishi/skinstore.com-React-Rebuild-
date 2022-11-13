import React from "react";
import "../../index.css"

const ShopByCategory = () => {
  return (
    <div className="shop-by-category-image-response">
      <p style={{fontSize:"30px", fontWeight:"500", margin:"1.5rem", marginLeft:"10rem"}}>Shop by Category</p>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent:"center",}}>
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png"
          width="196px"
          alt="skincare"
        />
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png"
          width="196px"
          alt="haircare"
        />
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png"
          width="196px"
          alt="makeup"
        />
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png"
          width="196px"
          alt="tools"
        />
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png"
          width="196px"
          alt="bath-body"
        />
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png"
          width="196px"
          alt="selfcare"
        />
      </div>
    </div>
  );
};

export default ShopByCategory;
