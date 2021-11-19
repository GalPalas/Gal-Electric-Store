import React, { useState } from "react";
import { nanoid } from "nanoid";
import MenuButton from "components/Menu/menuButton";
import "./menu.css";

const Menu = () => {
  const [HomeAndTheater] = useState([
    { id: nanoid(), category: "TVs" },
    { id: nanoid(), category: "Audio" },
    { id: nanoid(), category: "Video" },
    { id: nanoid(), category: "TV mounts and furniture" },
    { id: nanoid(), category: "TV and home theater accessories" },
  ]);

  const [RefrigeratorsAndFreezers] = useState([
    { id: nanoid(), category: "Bottom freezer refrigerator" },
    { id: nanoid(), category: "Top freezer refrigerator" },
    { id: nanoid(), category: "Refrigerator door by door" },
    { id: nanoid(), category: "3-door refrigerator" },
    { id: nanoid(), category: "4-door refrigerator" },
    { id: nanoid(), category: "5-door refrigerator" },
    { id: nanoid(), category: "Integral refrigerator" },
    { id: nanoid(), category: "Office refrigerator" },
    { id: nanoid(), category: "Wine refrigerators" },
    { id: nanoid(), category: "Freezers" },
  ]);

  const [WashersAndDryers] = useState([
    { id: nanoid(), category: "Front washing machine" },
    { id: nanoid(), category: "Top opening washing machine" },
    { id: nanoid(), category: "Washing machine with dryer" },
    { id: nanoid(), category: "Tumble dryers" },
  ]);

  const [Dishwashers] = useState([
    { id: nanoid(), category: "Wide dishwasher" },
    { id: nanoid(), category: "Narrow dishwasher" },
    { id: nanoid(), category: "Refrigerator door by door" },
    { id: nanoid(), category: "Semi-integral dishwasher" },
    { id: nanoid(), category: "Fully integrated dishwasher" },
    { id: nanoid(), category: "Dishwasher on the counter" },
  ]);

  const [StovesAndCookers] = useState([
    { id: nanoid(), category: "Built-in ovens" },
    { id: nanoid(), category: "Microwave integrated ovens" },
    { id: nanoid(), category: "Induction cooker" },
    { id: nanoid(), category: "Electric / ceramic hob" },
    { id: nanoid(), category: "Gas stoves" },
    { id: nanoid(), category: "Domino stove" },
    { id: nanoid(), category: "Stove on the counter" },
    { id: nanoid(), category: "Wide dishwasher" },
    { id: nanoid(), category: "Steam collectors" },
  ]);

  const [AirConditioners] = useState([
    { id: nanoid(), category: "Surface air conditioner" },
    { id: nanoid(), category: "Mini central air conditioner" },
    { id: nanoid(), category: "Fans | Coolers | Air filters" },
    { id: nanoid(), category: "Portable air conditioner" },
    { id: nanoid(), category: "Radiators" },
    { id: nanoid(), category: "Heater" },
    { id: nanoid(), category: "Heat dissipators" },
  ]);

  const [CellularAndTechnology] = useState([
    { id: nanoid(), category: "Smartphone and cellphone" },
    { id: nanoid(), category: "Tablets" },
    { id: nanoid(), category: "mobile computers" },
  ]);

  return (
    <div className="container-fluid bg-light py-2 screen">
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
