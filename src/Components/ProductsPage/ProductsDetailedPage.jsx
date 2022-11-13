import React, { useState, useEffect } from "react";
import { useDisclosure, Button } from "@chakra-ui/react";
import "../../index.css";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const ProductsDetailedPage = () => {
  const [noOfItems, setNoOfItems] = useState(1);
  const [data, setData] = useState([]);
  const params = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function getDataById(id) {
    fetch(`https://api.npoint.io/b9af8c430a0e728be586/data/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }

  function handleIncitems() {
    setNoOfItems(noOfItems + 1);
  }
  function handleDecitems() {
    setNoOfItems(noOfItems - 1);
  }

  useEffect(() => {
    getDataById(params.id - 1);
    // eslint-disable-next-line
  }, []);

  // console.log(data);

  return (
    <div style={{ marginTop: "3rem" }}>
      <div
        className="image-title-price-rating"
        style={{ display: "flex", justifyContent: "center", gap: "20rem" }}
      >
        <div className="products-main-image">
          <img src={data.data_image} alt="prod-img" width="500px" />
        </div>

        <div className="products-title-price" style={{ width: "300px" }}>
          <p style={{ fontSize: "30px" }}>{data.data_name}</p>
          <img
            src="https://www.cristinacordula.com/v2021/wp-content/uploads/2022/09/4.5stars.png"
            alt="start"
            width="130px"
          />
          <p style={{ color: "#d95274" }}>
            <s>MSRP {data.data_price}</s>
          </p>
          <p style={{ fontSize: "50px" }}>{data.data_price}</p>
          <p style={{ color: "#1dab45", marginTop: "-20px", fontSize: "20px" }}>
            You save $ {13.05}
          </p>
          <p>Quantity</p>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={handleDecitems}
              disabled={noOfItems === 1}
            >
              -
            </Button>
            <p style={{ fontSize: "20px" }}>{noOfItems}</p>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={handleIncitems}
            >
              +
            </Button>
          </div>
          {/* <Button
            colorScheme="pink"
            variant="solid"
            sx={{ marginBottom: "2rem", width: "100%", fontSize: "20px" }}
          >
            BUY NOW
          </Button> */}

          {/* Cart Drawer button comes from here on */}
          <div className="cart-button-headache">
            <Button
              ref={btnRef}
              colorScheme="pink"
              onClick={onOpen}
              sx={{ marginBottom: "2rem", width: "100%", fontSize: "20px" }}
            >
              BUY NOW
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
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                      <img
                        src={data.data_image}
                        style={{ width: "50px" }}
                        alt=""
                      />
                      <p>
                        <b>{data.data_name}</b>
                      </p>
                    </div>
                    <p style={{color:"green",textAlign:"right",marginTop:"-2rem"}}>
                      <big><b>{data.data_price}</b></big>
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button colorScheme="teal" variant="outline" onClick={handleDecitems}>
                      -
                    </Button>
                    <p>{noOfItems}</p>
                    <Button colorScheme="teal" variant="outline" onClick={handleIncitems}>
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
          <p
            style={{
              border: "2px solid #fc03e3",
              padding: "5px",
              textAlign: "center",
            }}
          >
            {data.data_gift}
          </p>
        </div>
      </div>

      <div
        className="description"
        style={{
          marginTop: "4rem",
          paddingLeft: "14rem",
          width: "60%",
          textAlign: "justify",
          marginBottom: "5rem",
        }}
      >
        <p style={{ fontSize: "20px", color: "#8f4117" }}>
          <b>-:: DESCRIPTION ::-</b>
        </p>
        <br />
        <p>
          Revive dehydrated skin with an intensive moisture boost with the Hydra
          Plus Ampoules from Germany’s leading professional skincare label,
          BABOR; a set of seven individually sealed ampoules containing an
          advanced active concentrate to replenish moisture levels. Innovative
          and highly effective, each serum-based ampoule contains a complex
          balance of Hyaluronic Acid and a plant-based Polymer Moisturizer,
          which work in synergy to deliver essential hydration and lock in
          moisture with a protective film. Skin feels plump, fresh and instantly
          invigorated with a restored vitality. Cruelty-free. No animal testing.
          Made in Germany.
        </p>
      </div>

      <Table
        striped
        bordered
        hover
        style={{ width: "800px", marginLeft: "14rem" }}
      >
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <b>Range</b>
            </td>
            <td>Correct</td>
          </tr>
          <tr>
            <td>
              <b>Ingredients</b>
            </td>
            <td>
              Aqua/Water/Eau, Dimethicone, Hydrogenated Polyisobutene, Glycerin,
              Cholesterol, C12-15 Alkyl Benzoate, Ceramide 3, Helianthus Annuus
              Seed Oil Unsaponifiables/Sunflower Seed Oil Unsaponifiables,
              Bis-Peg-18 Methyl Ether Dimethyl Silane, Sodium Polyacrylate,
              Peg-10 Dimethicone, Nylon-12, Lauryl Peg-9 Polydimethylsiloxyethyl
              Dimethicone, Dimethicone/Peg-10/15 Crosspolymer, Phenoxyethanol,
              Disteardimonium Hectorite, Hydroxyethylpiperazine Ethane Sulfonic
              Acid, Ammonium Polyacryloyldimethyl Taurate, Chlorphenesin,
              Caprylyl Glycol, Peg/Ppg-18/18 Dimethicone, Propylene Carbonate,
              Disodium Edta, Acrylonitrile/Methyl Methacrylate/Vinylidene
              Chloride Copolymer, Adenosine, Dipropylene Glycol, Lavandula
              Angustifolia Oil/Lavender Oil, Rosmarinus Officinalis Leaf
              Oil/Rosemary Leaf Oil, T-Butyl Alcohol, Mentha Piperita
              Oil/Peppermint Oil, Sodium Citrate, Linalool, Isobutane, Ceramide
              Eop, Bht, Tocopherol, Limonene, D182888/1.
            </td>
          </tr>
          <tr>
            <td>
              <b>Brand</b>
            </td>
            <td colSpan={2}>SkinCeuticals</td>
          </tr>
          <tr>
            <td>
              <b>Volume</b>
            </td>
            <td colSpan={2}>1.7 oz</td>
          </tr>
          <tr>
            <td>
              <b>Directions</b>
            </td>
            <td colSpan={2}>
              Apply a small amount between fingertips, warm and melt the cream
              in circular motions. Apply twice daily to face, neck and chest.
              Once open; it's most effective when used within 12 months.
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsDetailedPage;
