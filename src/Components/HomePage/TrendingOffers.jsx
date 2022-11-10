import React from "react";
import { Button } from "@chakra-ui/react";
import "../../index.css"

const TrendingOffers = () => {
  return (
    <div className="trending-offers-image-response" style={{margin:"1rem"}}>
      <p style={{ fontSize: "30px", fontWeight: "500" }}>Trending Offers</p>
      <div
        className="image-semi-details-with-button"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "3rem",
          maxWidth:"80%",
          margin:"auto"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap:"1rem",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg"
            alt="SkinCeuticals Gift"
            width="300px"
            style={{ borderRadius: "50%" }}
          />
          <p style={{ fontSize: "20px" }}>SkinCeuticals Gift</p>
          <p>
            Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you
            spend $150 or more on the brand.
          </p>
          <Button colorScheme="teal" variant="outline">
            SHOP NOW
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap:"1rem",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot8-600x600-063639.png"
            alt="Elmis25%off"
            width="300px"
            style={{ borderRadius: "50%" }}
          />
          <p style={{ fontSize: "20px" }}>25% off Elemis with code SINGLES</p>
          <p>
          Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty.
          </p>
          <Button colorScheme="teal" variant="outline">
            SHOP NOW
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap:"1rem",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot8600x600-090227.jpg"
            alt="Brand-of-the-Month:Obagi-Medical"
            width="300px"
            style={{ borderRadius: "50%" }}
          />
          <p style={{ fontSize: "20px" }}>Brand of the Month: Obagi Medical</p>
          <p>
          Obagi crafts advanced skincare products that help unleash skin’s full potential with an extensive portfolio designed to brighten, protect, and enhance skin tone and texture.
          </p>
          <Button colorScheme="teal" variant="outline">
            SHOP NOW
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap:"1rem",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/10/0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_14-600x600-091010.jpg"
            alt="SkinCeuticals Gift"
            width="300px"
            style={{ borderRadius: "50%" }}
          />
          <p style={{ fontSize: "20px" }}>Up to 50% off TriPollar</p>
          <p>
          TriPollar uses clinical expertise to create home-use devices that encourage skin regeneration and enhance natural beauty.
          </p>
          <Button colorScheme="teal" variant="outline">
            SHOP NOW
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap:"1rem",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/best_selling-064442.jpg"
            alt="SkinCeuticals Gift"
            width="300px"
            style={{ borderRadius: "50%" }}
          />
          <p style={{ fontSize: "20px" }}>25% off Neocutis with code SINGLES</p>
          <p>
          Neocutis means 'new skin', and that's precisely what the products in their collection can create: a new, youthful complexion that is visibly smoother and firmer to the touch.
          </p>
          <Button colorScheme="teal" variant="outline">
            SHOP NOW
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap:"1rem",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/54/original-original-original-500x500-085431-083903-064454.jpg"
            alt="SkinCeuticals Gift"
            width="300px"
            style={{ borderRadius: "50%" }}
          />
          <p style={{ fontSize: "20px" }}>30% off Christophe Robin + Gift</p>
          <p>
            Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you
            spend $150 or more on the brand.
          </p>
          <Button colorScheme="teal" variant="outline">
            SHOP NOW
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap:"1rem",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Screenshot_2022-03-07_141739-065628.png"
            width="300px" alt="25%offEstee"
            style={{ borderRadius: "50%" }}
          />
          <p style={{ fontSize: "20px" }}>25% off Estee Lauder with code SINGLES</p>
          <p>
          Always happy to share the latest and greatest in skincare and beauty innovation, we're happy to announce that Estee Lauder is now available at SkinStore!
          </p>
          <Button colorScheme="teal" variant="outline">
            SHOP NOW
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap:"1rem",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/34/original-dhc.ss-061734.jpg"
            alt="SkinCeuticals Gift"
            width="300px"
            style={{ borderRadius: "50%" }}
          />
          <p style={{ fontSize: "20px" }}>25% off DHC with code SINGLES</p>
          <p>
          Discover olive oil based skincare and makeup with 25% off Japanese beauty expert, DHC.
          </p>
          <Button colorScheme="teal" variant="outline">
            SHOP NOW
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap:"1rem",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-perricone.ss-013423.jpg"
            width="300px"
            alt="perricone"
            style={{ borderRadius: "50%" }}
          />
          <p style={{ fontSize: "20px" }}>25% off Perricone MD with code SINGLES</p>
          <p>
          Perricone MD is a cosmeceutical line that helps to repair skin damage using nutrient antioxidants.
          </p>
          <Button colorScheme="teal" variant="outline">
            SHOP NOW
          </Button>
        </div>


      </div>
    </div>
  );
};

export default TrendingOffers;
