import React, { useState } from "react";
import MenuButton from "components/Menu/menuButton";

const Menu = () => {
  const [HomeAndTheater] = useState([
    "TVs",
    "Audio",
    "Video",
    "TV mounts and furniture",
    "TV and home theater accessories",
  ]);

  const [RefrigeratorsAndFreezers] = useState([
    "Bottom freezer refrigerator",
    "Top freezer refrigerator",
    "Refrigerator door by door",
    "3-door refrigerator",
    "4-door refrigerator",
    "5-door refrigerator",
    "Integral refrigerator",
    "Office refrigerator",
    "Wine refrigerators",
    "Freezers",
  ]);

  const [WashersAndDryers] = useState([
    "Front washing machine",
    "Top opening washing machine",
    "Washing machine with dryer",
    "Tumble dryers",
  ]);

  const [Dishwashers] = useState([
    "Wide dishwasher",
    " Narrow dishwasher",
    "Refrigerator door by door",
    "Semi-integral dishwasher",
    "Fully integrated dishwasher",
    "Dishwasher on the counter",
  ]);

  const [StovesAndCookers] = useState([
    "Built-in ovens",
    "Integrated ovens",
    "Microwave integrated ovens",
    "Induction cooker",
    "Electric / ceramic hob",
    "Gas stoves",
    "Domino stove",
    "Stove on the counter",
    "Steam collectors",
  ]);

  const [AirConditioners] = useState([
    "Surface air conditioner",
    "Mini central air conditioner",
    "Fans | Coolers | Air filters",
    "Portable air conditioner",
    "Radiators",
    "Heater",
    "Heat dissipators",
  ]);

  const [CellularAndTechnology] = useState([
    "Smartphone and cellphone",
    "Tablets",
    "mobile computers",
  ]);

  return (
    <div className="container-fluid bg-light py-2">
      <div className="row text-center align-items-center">
        <div className="col p-0">
          <MenuButton title={"TV & Home Theater"} products={HomeAndTheater} />
        </div>
        <div className="col p-0">
          <MenuButton
            title={"Refrigerators and freezers"}
            products={RefrigeratorsAndFreezers}
          />
        </div>
        <div className="col p-0">
          <MenuButton
            title={"Washers and dryers"}
            products={WashersAndDryers}
          />
        </div>
        <div className="col p-0">
          <MenuButton title={"Dishwashers"} products={Dishwashers} />
        </div>
        <div className="col p-0">
          <MenuButton
            title={"Stoves and cookers"}
            products={StovesAndCookers}
          />
        </div>
        <div className="col p-0">
          <MenuButton title={"Air conditioners"} products={AirConditioners} />
        </div>
        <div className="col p-0">
          <MenuButton
            title={"Cellular and technology"}
            products={CellularAndTechnology}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
