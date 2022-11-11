import { Checkbox, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import "../../index.css";
import Pagination from "./Pagination";

let page_start = 0;
let page_end = 12;

const ProductsPage = () => {
  const [prodData, setProdData] = useState([]);
  const [page ,setPage] = useState(1);

  function fetchData() {
    fetch(`https://api.npoint.io/b9af8c430a0e728be586/data`)
      .then((res) => res.json())
      .then((res) => setProdData(res.slice(page_start, page_end)));
  }

  useEffect(() => {
    fetchData();
  }, [prodData]);

  // console.log(prodData);
  // handling the pagination and its functions

  function handlePrev(){
    setPage(page-1);
    page_start = page_start-13
    page_end = page_end-13;
  }

  function handleNext() {
    setPage(page+1)
    page_start = page_start+13;
    page_end = page_end+13;
  }

  return (
    <div>
      <div
        className="products-page-main"
        style={{ display: "flex", gap: "4rem" }}
      >
        <div
          className="leftside-filter-section-resv"
          style={{ marginLeft: "2rem" }}
        >
          <div>
            <p
              style={{
                fontSize: "20px",
                borderBottom: "2px solid",
                width: "110%",
              }}
            >
              <b>Refine</b>
            </p>
          </div>

          <div className="sort-by-price-chakra">
            <b>Sort By Price</b>
            <Select placeholder="Select option">
              <option value="option1">Low to High</option>
              <option value="option2">High to Low</option>
            </Select>
          </div>

          <div className="sort-by-price-chakra">
            <b>Sort By Alphabet</b>
            <Select placeholder="Select option">
              <option value="option1">A~Z</option>
              <option value="option2">Z~A</option>
            </Select>
          </div>

          <div className="filter-brand">
            <p style={{ fontSize: "20px" }}>
              <b>Brand</b>
            </p>
            <ul>
              <Checkbox colorScheme="green" defaultChecked>
                111 Skin
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Act + Acre
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Aesop
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                AHAVA
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Alchimie Forever
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Algenist
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Alo
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Alpha-H
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Alterna
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Alurx
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Ameliorate
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Angela Caglia
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Anna Sui
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                APIVITA
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                ARCONA
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Aromatherapy Associates
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Arquiste Parfumeur
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Aurelia London
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Avant Skincare
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Avene
              </Checkbox>
            </ul>
          </div>

          <div className="filter-brand">
            <p style={{ fontSize: "20px" }}>
              <b>SkinCare Product Type</b>
            </p>
            <ul>
              <Checkbox colorScheme="green" defaultChecked>
                111 Skin
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Moisturisers (860)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Serums (808)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Cleansers (581)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Exfoliators & Scrubs (417)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Masks (391)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Moisturizers (373)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Eye Care (353)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Toners (319)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Skincare Non-Electrical Tools (151)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Skincare Electrical Devices (122)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Neck & Décolletage (118)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Lip Care (109)
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Peels (90)
              </Checkbox>
            </ul>
          </div>
        </div>

        {/* Products Card Components mapping here */}
        <div
          className="products-card-mains"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            gap: "1rem",
          }}
        >
          {prodData.map((items) => (
            <ProductsCard
              image={items.data_image}
              title={items.data_name}
              gift={items.data_gift}
              price={items.data_price}
            />
          ))}
        </div>
      </div>

      <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  );
};

export default ProductsPage;
