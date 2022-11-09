import React from "react";
import { Button } from "@chakra-ui/react";
import "../index.css";

const WhatPeopleAreBuying = () => {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <p style={{ fontSize: "30px", fontWeight: "500" }}>
        What People Are Buying Right Now
      </p>

      <div
        className="what-people-are-buying-now"
        style={{ display: "flex", gap: "3rem" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13524404-5734930150395321.jpg"
            width="300px"
            alt="prod1"
          />
          <p>Epionce Luminous Eye Serum 0.53ml</p>
          <br />
          <p>
            <b>$67.00</b>
          </p>
          <br />
          <Button colorScheme="teal" variant="solid">
            Shop Now
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12448076-8695002190173929.jpg"
            width="240px"
            alt="prod1"
          />
          <p>Grow Gorgeous Hair Density Serum Original Duo 2 x 60ml</p>
          <br />
          <p>
            <b>$49.00</b>
          </p>
          <br />
          <Button colorScheme="teal" variant="solid">
            Shop Now
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13920999-1114993397470335.jpg"
            width="300px"
            alt="prod1"
          />
          <p>Epionce Luminous Eye Serum 0.53ml</p>
          <br />
          <p>
            <b>$98.00</b>
          </p>
          <br />
          <Button colorScheme="teal" variant="solid">
            Shop Now
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12358556-1974888087906815.jpg"
            width="300px"
            alt="prod1"
          />
          <p>Epionce Luminous Eye Serum 0.53ml</p>
          <br />
          <p>
            <b>$199.75</b>
          </p>
          <br />
          <Button colorScheme="teal" variant="solid">
            Shop Now
          </Button>
        </div>
      </div>

      {/* Logo Image Section */}
      <div
        className="powered-by-logo"
        style={{
          marginTop: "4rem",
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gap: "3rem",
        }}
      >
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png"
          alt="skinceuticals"
        />
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png"
          alt="skinmedica"
        />
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png"
          alt="revisionskincare"
        />
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png"
          alt="nuface"
        />
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png"
          alt="eltamd"
        />
        <img
          src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png"
          alt="naturabusse"
        />
      </div>
    </div>
  );
};

export default WhatPeopleAreBuying;
