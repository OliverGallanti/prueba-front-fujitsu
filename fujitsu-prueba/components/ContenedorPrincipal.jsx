"use client";
import React, { useState } from "react";
import MenuCarpetas from "./MenuCarpetas";
import TablaExpedienteComponente from "./TablaExpedientesComponente";

const ContenedorPrincipal = () => {
  const [titulo, setTitulo] = useState("Expedientes Material");

  const changeTitulo = (tituloSeleccionado) => {
    setTitulo(tituloSeleccionado.data);
  };

  const goBack = () => {
    setTitulo("Seleccione una carpeta");
  };

  return (
    <>
      <div className="flex justify-between p-12 ">
        {/* contenedor de la izquierda // Menú de carpetas*/}
        <div className="w-[20%] p-2">
          <MenuCarpetas changeTitulo={changeTitulo} />
        </div>

        {/* contenedor de la derecha // Tabla acordeón con barras de búsqueda */}
        <div className="w-[80%] flex flex-col p-2">
          <TablaExpedienteComponente titulo={titulo} goBack={goBack} />
        </div>
      </div>
    </>
  );
};

export default ContenedorPrincipal;
