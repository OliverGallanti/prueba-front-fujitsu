import { Button } from "primereact/button";
import { useState } from "react";

const StarToggleButton = ({ rowData, onStarToggle, favorito }) => {
  const [isStarFilled, setIsStarFilled] = useState(favorito);

  const handleStarToggle = () => {
    setIsStarFilled(!isStarFilled);
    onStarToggle(rowData);
  };

  return (
    <Button
      icon={`pi ${isStarFilled ? "pi-star-fill" : "pi-star"}`}
      onClick={handleStarToggle}
      className={`p-button-rounded ${
        isStarFilled
          ? "text-fujitsu-yellow bg-fujitsu-yellow/5 rounded-full"
          : ""
      } focus:ring-fujitsu-yellow focus:ring-1 `}
      aria-label={isStarFilled ? "boton añadir favoritos" : "boton quitar favoritos"}
      role="button"
    />
  );
};

export default StarToggleButton;
