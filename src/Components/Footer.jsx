import React from "react";
import { Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div className="main-footer-component">

      <div className="footer-two-social-icon" style={{display:"flex", gap:"25rem", alignItems:"center", justifyContent:"center", padding:"1rem"}}>
        <div>
          <p style={{fontSize:"14px", marginBottom:"1rem"}}><b>Sign up to our email list and receive 20% off your next order</b></p>
          <Button colorScheme="gray" variant="solid">
            SIGN UP
          </Button>
        </div>

        <div>
            <p style={{fontSize:"14px", marginBottom:"1rem"}}><b>Connect with us</b></p>
            <div className="social-media-icons" style={{display:"flex", gap:"1rem"}}>
                <img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" width="35px" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" width="35px" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/145/145812.png" width="35px" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/145/145808.png" width="35px" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/128/1377/1377224.png" width="35px" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
