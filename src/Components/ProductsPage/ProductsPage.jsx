import { Checkbox, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import "../../index.css";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

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
  }, [page]);

  console.log(prodData);
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
              <Checkbox colorScheme="green">
                111 Skin
              </Checkbox>
              <Checkbox colorScheme="green">
                Act + Acre
              </Checkbox>
              <Checkbox colorScheme="green">
                Aesop
              </Checkbox>
              <Checkbox colorScheme="green">
                AHAVA
              </Checkbox>
              <Checkbox colorScheme="green">
                Alchimie Forever
              </Checkbox>
              <Checkbox colorScheme="green">
                Algenist
              </Checkbox>
              <Checkbox colorScheme="green">
                Alo
              </Checkbox>
              <Checkbox colorScheme="green">
                Alpha-H
              </Checkbox>
              <Checkbox colorScheme="green">
                Alterna
              </Checkbox>
              <Checkbox colorScheme="green">
                Alurx
              </Checkbox>
              <Checkbox colorScheme="green">
                Ameliorate
              </Checkbox>
              <Checkbox colorScheme="green">
                Angela Caglia
              </Checkbox>
              <Checkbox colorScheme="green">
                Anna Sui
              </Checkbox>
              <Checkbox colorScheme="green">
                APIVITA
              </Checkbox>
              <Checkbox colorScheme="green">
                ARCONA
              </Checkbox>
              <Checkbox colorScheme="green">
                Aromatherapy Associates
              </Checkbox>
              <Checkbox colorScheme="green">
                Arquiste Parfumeur
              </Checkbox>
              <Checkbox colorScheme="green">
                Aurelia London
              </Checkbox>
              <Checkbox colorScheme="green">
                Avant Skincare
              </Checkbox>
              <Checkbox colorScheme="green">
                Avene
              </Checkbox>
            </ul>
          </div>

          <div className="filter-brand">
            <p style={{ fontSize: "20px" }}>
              <b>SkinCare Product Type</b>
            </p>
            <ul>
              <Checkbox colorScheme="green">
                111 Skin
              </Checkbox>
              <Checkbox colorScheme="green">
                Moisturisers (860)
              </Checkbox>
              <Checkbox colorScheme="green">
                Serums (808)
              </Checkbox>
              <Checkbox colorScheme="green">
                Cleansers (581)
              </Checkbox>
              <Checkbox colorScheme="green">
                Exfoliators & Scrubs (417)
              </Checkbox>
              <Checkbox colorScheme="green">
                Masks (391)
              </Checkbox>
              <Checkbox colorScheme="green">
                Moisturizers (373)
              </Checkbox>
              <Checkbox colorScheme="green">
                Eye Care (353)
              </Checkbox>
              <Checkbox colorScheme="green">
                Toners (319)
              </Checkbox>
              <Checkbox colorScheme="green">
                Skincare Non-Electrical Tools (151)
              </Checkbox>
              <Checkbox colorScheme="green">
                Skincare Electrical Devices (122)
              </Checkbox>
              <Checkbox colorScheme="green">
                Neck & Décolletage (118)
              </Checkbox>
              <Checkbox colorScheme="green">
                Lip Care (109)
              </Checkbox>
              <Checkbox colorScheme="green">
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
            <Link to={`/products/${items.id}`}><ProductsCard
              key={items.id}
              image={items.data_image}
              title={items.data_name}
              gift={items.data_gift}
              price={items.data_price}
            /></Link>
          ))}
        </div>

      </div>

      <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  );
};

export default ProductsPage;
