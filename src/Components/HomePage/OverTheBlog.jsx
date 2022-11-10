import React from "react";
import { Button } from "@chakra-ui/react";

const OverTheBlog = () => {
  return (
    <div style={{borderBottom:"1px solid"}}>
      <p style={{ fontSize: "30px", fontWeight: "500", padding:"1rem"}}>Over On the Blog</p>
      <div style={{maxWidth:"75%",display:"grid", gridTemplateColumns: "repeat(3,1fr)", gap:"3rem", margin:"auto"}}>

        <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", padding:"1rem",}}>
            <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg" width="400px" alt="" />
            <p>SkinCeuticals: Vitamin C Beyond the Face</p>
            <p>
            SkinCeuticals believes in celebrating the skin-protective and
            rejuvenating powers of vitamin C every day, but this year they’re
            making sure your eyes and lips get in on the antioxidant action (and
            benefits).
            </p>
            <Button colorScheme="red" variant="outline">
            Read More
            </Button>
        </div>

        <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", padding:"1rem", marginBottom:"1rem"}}>
            <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg" width="400px" alt="" />
            <p>SkinCeuticals: Vitamin C Beyond the Face</p>
            <p>
            SkinCeuticals believes in celebrating the skin-protective and
            rejuvenating powers of vitamin C every day, but this year they’re
            making sure your eyes and lips get in on the antioxidant action (and
            benefits).
            </p>
            <Button colorScheme="red" variant="outline">
            Read More
            </Button>
        </div>

        <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", padding:"1rem", marginBottom:"1rem"}}>
            <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg" width="400px" alt="" />
            <p>SkinCeuticals: Vitamin C Beyond the Face</p>
            <p>
            SkinCeuticals believes in celebrating the skin-protective and
            rejuvenating powers of vitamin C every day, but this year they’re
            making sure your eyes and lips get in on the antioxidant action (and
            benefits).
            </p>
            <Button colorScheme="red" variant="outline">
            Read More
            </Button>
        </div>
      </div>
    </div>
  );
};

export default OverTheBlog;
