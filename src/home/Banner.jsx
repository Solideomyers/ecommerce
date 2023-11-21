import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import { SelectedCategory } from "../components/SelectedCategory";
const title = (
  <h2>
    Busca el <span>Colchon</span>de tus suenos
  </h2>
);

const desc = "Tenemos la coleccion mas grande de productos";
const bannerList = [
  {
    iconName: "iconfont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "iconfont-notification",
    text: "More than 200",
  },
  {
    iconName: "iconfont-globe",
    text: "Buy anything",
  },
];
export const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);
  console.log(productData);

  // handler
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    //   filtered
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select="all" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Busca tus productos"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
