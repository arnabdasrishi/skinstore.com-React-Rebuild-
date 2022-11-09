import { InputGroup, Stack, InputRightElement, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        className="top-selection-language-bar"
        style={{
          display: "flex",
          gap: "1.5rem",
          justifyContent: "flex-end",
          backgroundColor: "#f2f2f2",
          padding: "0.4rem",
          paddingRight: "5rem",
        }}
      >
        <p style={{ display: "flex", gap: "10px" }}>
          <img
            src="https://www.pngitem.com/pimgs/m/45-456428_united-states-round-flag-hd-png-download.png"
            alt="flag"
            width={20}
          />
          us-USD
        </p>
        <p>Help</p>
      </div>

      <div
        className="main-navbar"
        style={{
          display: "flex",
          gap: "15rem",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "2px solid",
          padding: "20px",
        }}
      >
        <img
          src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png"
          alt="logo"
          width={"200px"}
        />
        <Stack>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<Search2Icon />}
            />
            <Input
              type="text"
              placeholder="Search"
              style={{ width: "27rem" }}
            />
          </InputGroup>
        </Stack>

        <div
          className="account-and-cart"
          style={{ display: "flex", gap: "4rem", fontSize: "17px" }}
        >
          <p style={{ display: "flex", gap: "0.7rem" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
              alt="user"
              width={"22px"}
            />
            Account
          </p>
          <p style={{ display: "flex", gap: "0.7rem" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2089/2089433.png"
              width={"22px"}
              alt="cart"
            />
            Cart
          </p>
        </div>
      </div>

      <div
        className="categories-option-dropdown"
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <p>Brands</p>
        <p>Holiday</p>
        <p>Sale</p>
        <p>SkinCare</p>
        <p>Hair</p>
        <p>Makeup</p>
        <p>Bath&Body</p>
        <p>Fragnace</p>
        <p>Self-Care</p>
        <p>Tools</p>
        <p>New&Trending</p>
        <p>Build a Routine</p>
        <p>Blog</p>
      </div>
    </div>
  );
};

export default Navbar;
