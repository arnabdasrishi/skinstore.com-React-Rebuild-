import React from "react";
import { Box, Button } from "@chakra-ui/react";
import "../../index.css"

const ProductsCard = ({image,title,gift,price}) => {
  return (
    <Box className="products-cards-resv" sx={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", gap:"0.5rem", padding:"1rem"}}>
      <img src={image} alt=""/>
      <p style={{fontSize:"18px"}}><b>{title}</b></p>
      <p style={{border:"2px solid #fc03e3", padding:"5px"}}>{gift}</p>
      <p>
        <b>${price}</b>
      </p>
      <Button colorScheme="whatsapp" variant="solid">
        Buy Now
      </Button>
    </Box>
  );
};

export default ProductsCard;
