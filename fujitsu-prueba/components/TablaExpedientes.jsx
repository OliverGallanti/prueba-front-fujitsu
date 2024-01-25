import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React from "react";

const TablaExpedientes = ({ titulo, goBack }) => {
  return (
    <>
      <div className="flex justify-between w-full">
        {/* Volver a página anterior */}
        <div className="flex w-1/2">
          <Button icon="pi pi-arrow-left" className="standard-button" onClick={goBack}/>
          <div className="flex items-center border-fujitsu-light-gray rounded-md p-2 font-bold text-lg">
            <span className="pi pi-folder mx-2 text-fujitsu-dark-blue "></span>{" "}
            {titulo}
          </div>
        </div>

        {/* Buscador/filtro */}
        <div className="flex justify-end w-1/2">
          <div className="p-inputgroup input-search w-2/3">
            <span className="pi pi-search px-2" />
            <InputText className="h-full focus:ring-0 text-fujitsu-black" placeholder="Buscar por nombre" />
          </div>
          <Button icon="pi pi-sliders-h" className="button-filter mx-2" />
        </div>
      </div>
    </>
  );
};

export default TablaExpedientes;
