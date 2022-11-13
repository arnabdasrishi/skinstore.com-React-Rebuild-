import React from "react";
import { useDisclosure, Button } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="cart-button-headache">
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart Total</DrawerHeader>

          {/* <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody> */}

          <DrawerBody>
            <div>
                <div style={{display:"flex", gap:"1.5rem"}}>
                <img src="https://static.thcdn.com/images/xsmall/webp//productimg/original/11291543-2074864291141689.jpg" style={{width:"50px"}} alt="" />
                <p>Product name here</p>
                </div>
                <p>$ Product price here</p>
            </div>
            <div style={{display:"flex", gap:"1rem", alignItems:"center", justifyContent:"center"}}>
              <Button colorScheme="teal" variant="ghost">
                -
              </Button>
              <p>Qnt</p>
              <Button colorScheme="teal" variant="ghost">
                +
              </Button>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Go back
            </Button>
            <Button colorScheme="yellow">Checkout </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
