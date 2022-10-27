import CostForm from "./CostForm";
import "./NewCost.css";
import React, { useState } from "react";

function NewCost(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelFormHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {isFormVisible ? (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelFormHandler}
        />
      ) : (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}

      {/* {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelFormHandler}
        />
      )} */}
    </div>
  );
}

export default NewCost;
