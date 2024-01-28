import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "@/services/mocks/ProductService";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import StarToggleButton from "./ui/StarToggleButton";
import { Tooltip } from "primereact/tooltip";
import { Menu } from "primereact/menu";
import { FilterMatchMode } from "primereact/api";
import { Paginator } from "primereact/paginator";

export default function TablaExpedienteComponente({ titulo, goBack }) {
  const [products, setProducts] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    nombre: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const toast = useRef(null);
  const menuRight = useRef(null);

  useEffect(() => {
    ProductService.getProductsWithOrdersSmall().then((data) =>
      setProducts(data)
    );
  }, []);

  const onRowExpand = (event) => {
    toast.current.show({
      severity: "info",
      summary: "Fila Expandida",
      detail: event.data.name,
      life: 3000,
    });
  };

  const onRowCollapse = (event) => {
    toast.current.show({
      severity: "success",
      summary: "Fila Colapsada",
      detail: event.data.name,
      life: 3000,
    });
  };

  const onDelete = () => {
    const newList = products.filter((element) =>
      !selectedProducts.includes(element)
    );

    toast.current.show({
      severity: "success",
      summary: "Elemento eliminado",
      life: 3000,
    });
    setProducts(newList);
    setSelectedProducts();
  };

  useEffect(() => {
    console.log("filas actuales", products);
  }, [products]);

  const expandAll = () => {
    let _expandedRows = {};

    products.forEach((p) => (_expandedRows[`${p.id}`] = true));

    setExpandedRows(_expandedRows);
  };

  const collapseAll = () => {
    setExpandedRows(null);
  };

  const nombreBodyTemplate = (rowData) => {
    return (
      <div>
        <i className="pi pi-file-pdf" /> {rowData.nombre}
      </div>
    );
  };

  const etiquetaBodyTemplate = (rowData) => {
    return (
      <div className="flex justify-start w-full font-bold text-fujitsu-blue">
        <div className="bg-fujitsu-light-gray/30 p-2 mx-2 rounded-full">
          <i className="pi pi-box text-[1rem]" />+{rowData.etiqueta[0]}
        </div>
        <div className="bg-fujitsu-light-gray/30 p-2 rounded-full">
          <i className="pi pi-box" a />+{rowData.etiqueta[1]}
        </div>
      </div>
    );
  };

  const estadoBodyTemplate = (rowData) => {
    return (
      <div className="flex flex-col text-sm font-semibold">
        <div
          className={`${
            rowData.estado[0] === "Procesado" && "text-fujitsu-green"
          }`}
        >
          {rowData.estado[0]}
        </div>
        <div className={`${rowData.estado[1] && "text-fujitsu-red"}`}>
          {rowData.estado[1]?.validaciones}
        </div>
        <div className={`${rowData.estado[1] && "text-fujitsu-yellow"}`}>
          <i className="pi pi-exclamation-triangle" />{" "}
          {rowData.estado[1]?.asignadas}
        </div>
      </div>
    );
  };

  const handleStarToggle = (rowData) => {
    console.log("Clicked star for row now its a favorite:", rowData);
  };

  const ratingBodyTemplate = (rowData) => {
    if (rowData.favorito) {
      const favorito = true;
      return (
        <StarToggleButton
          rowData={rowData}
          favorito={favorito}
          onStarToggle={handleStarToggle}
        />
      );
    }

    if (!rowData.favorito) {
      const favorito = false;
      return (
        <StarToggleButton
          rowData={rowData}
          favorito={favorito}
          onStarToggle={handleStarToggle}
        />
      );
    }
  };

  const items = [
    {
      label: "Introducción Directa",
      items: [
        {
          label: "Por su i3ID",
          icon: "pi pi-book",
        },
        {
          label: "De mis favoritos",
          icon: "pi pi-star-fill",
        },
        {
          label: "Buscando en el expediente",
          icon: "pi pi-search",
        },
      ],
    },
    {
      label: "Introducción manual",
      items: [{ label: "Buscar o crear nueva", icon: "pi pi-plus" }],
    },
    {
      label: "Introducción asistida",
      items: [{ label: "Extractor automático", icon: "pi pi-download" }],
    },
    {
      items: [
        {
          label: "Ayuda a la introducción de entidades",
          icon: "pi pi-info-circle",
        },
      ],
    },
  ];

  const accionesBodyTemplate = (rowData) => {
    return (
      <>
        <Menu
          role="menu"
          aria-label="menu"
          className="w-[24rem]"
          model={items}
          popup
          ref={menuRight}
          id="popup_menu_right"
          popupAlignment="right"
        />
        <Button
          id={rowData.id.toString()}
          role="button"
          aria-label="opciones"
          icon="pi pi-ellipsis-v"
          className="hover:bg-fujitsu-light-gray rounded-full h-8 w-8 p-button p-component p-button-rounded focus:ring-fujitsu-yellow"
          onClick={(event) => menuRight.current.toggle(event)}
          aria-controls="popup_menu_right"
          aria-haspopup="true"
        />
      </>
    );
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="flex justify-between w-full text-sm bg-fujitsu-light-gray/20 pt-4 border-y-2 border-y-fujitsu-gray/10">
        <div className="w-[10%]">
          <div className="flex justify-center border-2 border-fujitsu-red rounded-md w-12 h-24 m-4">
            <div className="flex items-center ">
              <i className="pi pi-file-pdf text-fujitsu-red"></i>
            </div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col">
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray font-medium">{data.nombre}.pdf</h5>
            <div className="flex text-fujitsu-black">
              {data.documentData[0].NombreDocumentoCompleto}
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray font-medium">
              Evaluación de la fuente
            </h5>
            <div className="flex text-fujitsu-black">
              {data.documentData[0].evaluacion}
            </div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col">
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray font-medium">
              Plantillas utilizadas
            </h5>
            <div className="flex text-fujitsu-black">
              {data.documentData[0].plantilla}
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray font-medium">Fecha de creación</h5>
            <div className="flex text-fujitsu-black">
              {data.documentData[0].date}
            </div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col">
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray font-medium">
              Plantillas utilizadas
            </h5>
            <div className="flex text-fujitsu-red">
              {data.documentData[0].restricciones} restricciones
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray font-medium">Etiquetas</h5>
            <div className="flex text-fujitsu-black">
              {data.documentData[0].etiquetas.length > 5 ? (
                <div className="">
                  {data.documentData[0].etiquetas
                    .slice(0, 5)
                    .map((etiqueta, index) => (
                      <span key={index}>{etiqueta}, </span>
                    ))}

                  <Tooltip
                    target=".tooltip-target" // Use a class to target the element
                    position="right"
                    mouseTrack
                  />
                  <div
                    className="text-fujitsu-blue cursor-pointer tooltip-target w-fit"
                    data-pr-tooltip={data.documentData[0].etiquetas.join(", ")}
                  >
                    +{data.documentData[0].etiquetas.slice(5).length} más
                    {console.log(
                      "todas las etiquetas",
                      data.documentData[0].etiquetas.join(", ")
                    )}
                  </div>
                </div>
              ) : (
                <div>{data.documentData[0].etiquetas.join(", ")}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["nombre"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-end w-full">
          <div className="p-input-icon-left border-2 border-fujitsu-gray/50 rounded-lg">
            <i className="pi pi-search"></i>
            <InputText
              type="search"
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Buscar por Nombre"
              className="h-12 pl-10 font-normal"
              aria-label="buscar"
              aria-labelledby="nombre"
            />
          </div>
          <Button
            role="button"
            aria-label="Botón para filtrar"
            className="button-filter"
            icon="pi pi-sliders-v"
          ></Button>
        </div>
        <div className="flex justify-between w-full">
          {/* Volver a página anterior */}
          <div className="flex items-center w-1/2">
            <Button
              role="button"
              aria-label="Botón para volver a la página anterior"
              icon="pi pi-arrow-left"
              className="standard-button w-14 h-14"
              onClick={goBack}
            />
            <h2 className="flex items-center border-fujitsu-light-gray rounded-md p-2 font-bold text-xl">
              <span className="pi pi-folder mx-2 text-fujitsu-dark-blue  text-xl"></span>{" "}
              {titulo}
            </h2>
          </div>

          <div className="flex flex-wrap justify-end my-4 text-fujitsu-blue text-sm gap-2">
            {selectedProducts?.length > 0 ? (
              <Button
                role="button"
                aria-label={`Borrar elementos seleccionados (${selectedProducts?.length})`}
                icon="pi pi-trash"
                label={`(${selectedProducts?.length}) Borrar`}
                className="px-2 bg-fujitsu-blue text-fujitsu-white mx-2 font-bold hover:bg-fujitsu-dark-blue transition"
                onClick={onDelete}
              />
            ) : null}
            <Button
              role="button"
              aria-label="Expandir todo"
              icon="pi pi-plus"
              label="Expandir todo"
              onClick={expandAll}
              text
              className="hover:bg-fujitsu-blue/10 transition-all rounded-md p-3 border-2 border-fujitsu-blue"
            />
            <Button
              role="button"
              aria-label="Contraer todo"
              icon="pi pi-minus"
              label="Contraer todo"
              onClick={collapseAll}
              text
              className="hover:bg-fujitsu-blue/10 transition-all rounded-md p-3 border-2 border-fujitsu-blue"
            />
          </div>
        </div>
      </div>
    );
  };

  const header = renderHeader();

  useEffect(() => {
    console.log("selected rows", selectedProducts);
  }, [selectedProducts]);

  const selectRows = (e) => {
    setSelectedProducts(e.value);
  };

  return (
    <div className="card">
      <Toast ref={toast} />
      <DataTable
        aria-label="table"
        selectionMode="checkbox"
        selection={selectedProducts}
        onSelectionChange={selectRows}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        scrollable
        scrollHeight="62vh"
        globalFilterFields={["nombre"]}
        filters={filters}
        emptyMessage="No se han encontrado resultados"
        value={products}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onRowExpand={onRowExpand}
        onRowCollapse={onRowCollapse}
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey="id"
        header={header}
        tableStyle={{ minWidth: "60rem" }}
        pt={{
          row: { className: "border-2 border-fujitsu-gray/50" },
          footer: { className: "border-2 border-fujitsu-gray/50" },
        }}
      >
        <Column
          selectionMode="multiple"
          className="w-[4%]"
          pt={{
            checkbox: {
              className: "border-2 border-fujitsu-gray/50",
            },
            headerCheckbox: {
              className: "border-2 border-fujitsu-gray/50 bg-fujitsu-red",
              ariaLabel: "Seleccionar todas las filas", // Add a meaningful aria-label
              role: "checkbox",
              ariaChecked:
                selectedProducts?.length === products.length ? "true" : "false", // Add aria-checked based on all rows selected
              tabindex: "0",
            },
          }}
        />
        <Column expander={true} className="w-[4%]" />
        <Column
          field="nombre"
          header="Nombre"
          sortable
          className="text-sm w-[20%]"
          body={nombreBodyTemplate}
        />
        <Column field="extension" className="text-xs w-[15%]"/>
        <Column
          field="etiqueta"
          header="Etiqueta"
          sortable
          body={etiquetaBodyTemplate}
          className="text-sm w-[15%]"
        />
        <Column
          field="estado"
          header="Estado"
          sortable
          body={estadoBodyTemplate}
          className="text-sm w-[25%]"
        />

        <Column field="fecha" header="Fecha" sortable className="text-sm w-[5%]"/>
        <Column field="id" header="ID" className="text-sm w-[4%]" sortable />
        <Column
          field="acciones"
          className="text-sm w-[4%]"
          body={accionesBodyTemplate}
        />
        <Column field="favorito" body={ratingBodyTemplate} className="text-sm w-[4%]"/>
      </DataTable>
    </div>
  );
}
