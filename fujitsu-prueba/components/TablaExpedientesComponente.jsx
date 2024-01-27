import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "@/services/mocks/ProductService";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import StarToggleButton from "./ui/StarToggleButton";
import { Tooltip } from "primereact/tooltip";

export default function TablaExpedienteComponente({ titulo, goBack }) {
  const [products, setProducts] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const toast = useRef(null);

  useEffect(() => {
    ProductService.getProductsWithOrdersSmall().then((data) =>
      setProducts(data)
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onRowExpand = (event) => {
    toast.current.show({
      severity: "info",
      summary: "Product Expanded",
      detail: event.data.name,
      life: 3000,
    });
  };

  const onRowCollapse = (event) => {
    toast.current.show({
      severity: "success",
      summary: "Product Collapsed",
      detail: event.data.name,
      life: 3000,
    });
  };

  const expandAll = () => {
    let _expandedRows = {};

    products.forEach((p) => (_expandedRows[`${p.id}`] = true));

    setExpandedRows(_expandedRows);
  };

  const collapseAll = () => {
    setExpandedRows(null);
  };

  const priceBodyTemplate = (rowData) => {
    return (
      <div className="flex justify-start w-full font-bold text-fujitsu-blue text-sm">
        <div className="bg-fujitsu-light-gray/70 p-2 mx-2 rounded-full">
          <i className="pi pi-box" />+{rowData.etiqueta[0]}
        </div>
        <div className="bg-fujitsu-light-gray/70 p-2 rounded-full">
          <i className="pi pi-box" />+{rowData.etiqueta[1]}
        </div>
      </div>
    );
  };

  const iconDocument = () => {
    return <i className="pi pi-file-pdf" />;
  };

  const estadoBodyTemplate = (rowData) => {
    return (
      <div className="flex flex-col text-sm">
        <div className="">{rowData.estado[0]}</div>
        <div className="">{rowData.estado[1]?.validaciones}</div>
        <div className="">{rowData.estado[1]?.asignadas}</div>
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

  const rowExpansionTemplate = (data) => {
    // console.log("data", data);

    // const visibleEtiquetas = etiquetas.slice(0, 5); // Display the first 5 elements
    // const hiddenEtiquetas = etiquetas.slice(5);

    return (
      <div className="flex justify-between w-full text-sm">
        <div className="w-[10%]">
          <div className="flex justify-center border-2 border-fujitsu-red rounded-md w-12 h-24 m-4">
            <div className="flex items-center ">
              <i className="pi pi-file-pdf text-fujitsu-red"></i>
            </div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col">
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray">{data.nombre}.pdf</h5>
            <div className="flex text-fujitsu-black">
              {data.documentData[0].NombreDocumentoCompleto}
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray">Evaluación de la fuente</h5>
            <div className="flex text-fujitsu-black">
              {data.documentData[0].evaluacion}
            </div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col">
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray">Plantillas utilizadas</h5>
            <div className="flex text-fujitsu-black">
              {data.documentData[0].plantilla}
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray">Fecha de creación</h5>
            <div className="flex text-fujitsu-black">
              {data.documentData[0].date}
            </div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col">
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray">Plantillas utilizadas</h5>
            <div className="flex text-fujitsu-red">
              {data.documentData[0].restricciones} restricciones
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-fujitsu-gray">Etiquetas</h5>
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
                <div>{data.documentData[0].etiquetas}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const onGlobalFilterChange = (e) => {
    const { value } = e.target;
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-content-end ">
          <div className="p-input-icon-left">
            <i className="pi pi-search"></i>
            <InputText
              type="search"
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Buscar por Nombre"
              className="h-12 pl-10 font-normal"
            />
          </div>
        </div>
        <div className="flex justify-between w-full">
          {/* Volver a página anterior */}
          <div className="flex w-1/2">
            <Button
              icon="pi pi-arrow-left"
              className="standard-button"
              onClick={goBack}
            />
            <h1 className="flex items-center border-fujitsu-light-gray rounded-md p-2 font-bold text-lg">
              <span className="pi pi-folder mx-2 text-fujitsu-dark-blue "></span>{" "}
              {titulo}
            </h1>
          </div>

          <div className="flex flex-wrap justify-end gap-2">
            <Button
              icon="pi pi-plus"
              label="Expand All"
              onClick={expandAll}
              text
            />
            <Button
              icon="pi pi-minus"
              label="Collapse All"
              onClick={collapseAll}
              text
            />
          </div>
        </div>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="card">
      <Toast ref={toast} />
      <DataTable
        selectionMode="checkbox"
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        scrollable
        scrollHeight="55vh"
        globalFilterFields={["name", "category", "description"]}
        emptyMessage="404"
        value={products}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onRowExpand={onRowExpand}
        onRowCollapse={onRowCollapse}
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey="id"
        header={header}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column selectionMode="multiple" className="w-6" />
        <Column expander={true} className="w-6" />
        <Column className="w-6" body={iconDocument} />
        <Column field="nombre" header="Nombre" sortable className="text-sm" />
        <Column field="extension" />
        <Column
          field="etiqueta"
          header="Etiqueta"
          sortable
          body={priceBodyTemplate}
        />
        <Column
          field="estado"
          header="Estado"
          sortable
          body={estadoBodyTemplate}
        />

        <Column field="fecha" header="Fecha" className="text-sm" sortable />
        <Column field="id" header="ID" className="text-sm" sortable />
        <Column field="acciones" className="text-sm" />
        <Column field="favorito" body={ratingBodyTemplate} />
      </DataTable>
    </div>
  );
}
