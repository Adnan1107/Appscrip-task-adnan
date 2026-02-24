// ProductPage.jsx (or whatever your file name is)
import React, { useState } from "react";
import "./ProductPage.css";

const products = [
  { id: 1, title: "Product 1", price: "$120", image: "/bag1.jpg", categories: ["Men", "Casual", "Leather"] },
  { id: 2, title: "Product 2", price: "$140", image: "/bag2.jpg", categories: ["Women", "Party", "Canvas"] },
  { id: 3, title: "Product 3", price: "$160", image: "/bag3.jpg", categories: ["Men", "Formal", "Leather"] },
  { id: 4, title: "Product 4", price: "$110", image: "/bag4.jpg", categories: ["Women", "Casual"] },
  { id: 5, title: "Product 5", price: "$180", image: "/bag5.jpg", categories: ["Unisex", "Travel", "Nylon"] },
  { id: 6, title: "Product 6", price: "$150", image: "/bag6.jpg", categories: ["Men", "Casual"] },
  { id: 7, title: "Product 7", price: "$200", image: "/bag7.jpg", categories: ["Women", "Formal", "Leather"] },
  { id: 8, title: "Product 8", price: "$175", image: "/bag8.jpg", categories: ["Unisex", "Travel"] },
  { id: 9, title: "Product 9", price: "$130", image: "/bag9.jpg", categories: ["Kids", "Casual", "Canvas"] },
  { id: 10, title: "Product 10", price: "$145", image: "/bag10.jpg", categories: ["Men", "Party"] },
  { id: 11, title: "Product 11", price: "$165", image: "/bag11.jpg", categories: ["Women", "Casual", "Nylon"] },
  { id: 12, title: "Product 12", price: "$155", image: "/bag12.jpg", categories: ["Unisex", "Travel", "Suede"] },
  { id: 13, title: "Product 13", price: "$170", image: "/bag13.jpg", categories: ["Men", "Formal"] },
  { id: 14, title: "Product 14", price: "$190", image: "/bag14.jpg", categories: ["Women", "Party", "Leather"] },
  { id: 15, title: "Product 15", price: "$210", image: "/bag15.jpg", categories: ["Men", "Casual", "Suede"] },
];

// Filter sections (matching your screenshot style)
const filterSections = [
  { title: "IDEAL FOR", options: ["All", "Men", "Women", "Kids", "Unisex"] },
  { title: "OCCASION", options: ["All", "Casual", "Party", "Formal", "Travel"] },
  { title: "FABRIC", options: ["All", "Leather", "Canvas", "Nylon", "Suede"] },
  { title: "WORK", options: ["All", "Office", "Outdoor", "Daily Use"] },
  { title: "SEGMENT", options: ["All", "Premium", "Economy", "Luxury"] },
  { title: "SUITABLE FOR", options: ["All", "Adults", "Teens", "Children"] },
  // Add more if you want
];

function ProductPage() {
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleFilter = (section, option) => {
    setSelectedFilters((prev) => {
      const current = prev[section] || [];
      if (current.includes(option)) {
        return { ...prev, [section]: current.filter((o) => o !== option) };
      }
      return { ...prev, [section]: [...current, option] };
    });
  };

  const filteredProducts = products.filter((product) => {
    return Object.entries(selectedFilters).every(([section, selected]) => {
      if (selected.length === 0) return true;

      // "All" is ignored in filtering (treat as no restriction)
      const activeFilters = selected.filter((f) => f !== "All");
      if (activeFilters.length === 0) return true;

      return activeFilters.some((f) => product.categories.includes(f));
    });
  });

  return (
    <div className="product-page-container">
      {/* Sidebar – your filter UI */}
      <aside className="sidebar">
        <h2>Filters</h2>

        {filterSections.map((section) => (
          <div key={section.title} className="filter-group">
            <h3>{section.title}</h3>
            {section.options.map((option) => (
              <label key={option} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={(selectedFilters[section.title] || []).includes(option)}
                  onChange={() => toggleFilter(section.title, option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        ))}
      </aside>

      {/* Your original grid – unchanged */}
      <main className="products-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-results">No products match your filters.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="card" key={product.id}>
              <div className="card-img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="card-body">
                <h3>{product.title}</h3>
                <p className="price">{product.price}</p>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default ProductPage;