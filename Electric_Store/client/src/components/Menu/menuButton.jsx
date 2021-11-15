import React from "react";

const MenuButton = ({ title, products }) => {
  return (
    <div class="btn-group shadow-none">
      <button
        type="button"
        class="btn btn-transparent shadow-none p-0"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul class="dropdown-menu">
        <li key={products}>
          {products.map((product) => (
            <a class="dropdown-item" href="/#">
              {product}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default MenuButton;
