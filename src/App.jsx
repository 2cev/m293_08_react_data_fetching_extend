import React, { useEffect, useState } from "react";
import { getProducts } from "./services/productService.js";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {

  const [products, setProducts] = useState([]);

  // O_o => state from fetch
  useEffect(() => {
    getProducts("boards")
      .then((response) => { setProducts(response);})
  }, []);


  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size">
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </section>
        </main>

        {/* 
        {products.map((p) =>
          // O_o ===> ==> =>
          // <div key={p.id} className="product">
          //   <a href="/">
          //     <img src={`/images/${p.image}`} alt={p.name} />
          //     <h3>{p.name}</h3>
          //     <p>${p.price}</p>
          //   </a>
          // </div>
          // O_o <= <== <===
        )}
        */}

        <div class="products">
              {products.map(renderProduct)}
        </div>

      </div>
      <Footer />
    </>
  );
}
