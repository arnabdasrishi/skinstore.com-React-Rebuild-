import React from "react";
import { Box, Button } from "@chakra-ui/react";

const ProductsCard = ({image,title,gift,price}) => {
  return (
    <Box>
      <img src="https://static.thcdn.com/images/xsmall/webp//productimg/original/11370312-6934938634193226.jpg" alt=""/>
      <p>Title</p>
      <p>Gift</p>
      <p>
        <b>Price</b>
      </p>
      <Button colorScheme="whatsapp" variant="solid">
        Buy Now
      </Button>
    </Box>
  );
};

export default ProductsCard;
