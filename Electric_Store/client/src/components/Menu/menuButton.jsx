import React from "react";

const MenuButton = ({ title, products }) => {
  return (
    <div className="btn-group shadow-none">
      <button
        type="button"
        className="btn btn-transparent shadow-none p-0"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="dropdown-menu">
        {products.map((product) => (
          <li key={product.id}>
            <a className="dropdown-item" href="/#">
              {product.category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuButton;
