import { InputGroup, Stack, InputRightElement, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img
            src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png"
            alt="logo"
            width={"200px"}
          />
        </Link>
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
          <Link to="/login" style={{textDecoration:"none"}}>
            <p style={{ display: "flex", gap: "0.7rem" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                alt="user"
                width={"22px"}
              />
              Account
            </p>
          </Link>
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
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <p style={{ padding: "10px" }}>Brands</p>
        <p style={{ padding: "10px" }}>Holiday</p>
        <p style={{ padding: "10px" }}>Sale</p>
        <Link to="/products">
          <p style={{ padding: "10px" }}>SkinCare</p>
        </Link>
        <p style={{ padding: "10px" }}>Hair</p>
        <p style={{ padding: "10px" }}>Makeup</p>
        <p style={{ padding: "10px" }}>Bath&Body</p>
        <p style={{ padding: "10px" }}>Fragnace</p>
        <p style={{ padding: "10px" }}>Self-Care</p>
        <p style={{ padding: "10px" }}>Tools</p>
        <p style={{ padding: "10px" }}>New&Trending</p>
        <p style={{ padding: "10px" }}>Build a Routine</p>
        <p style={{ padding: "10px" }}>Blog</p>
      </div>
    </div>
  );
};

export default Navbar;
