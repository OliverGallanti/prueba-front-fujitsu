import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { TreeTable } from "primereact/treetable";
import React, { useEffect, useState } from "react";
import { NodeService } from "@/services/mocks/datosTabla";

const TablaExpedientes = ({ titulo, goBack }) => {
  //useStates
  const [nodes, setNodes] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState(null);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);

  //useEffects
  useEffect(() => {
    NodeService.getTreeTableNodes().then((data) => setNodes(data));
  }, []);

  //Expandir y contraer todos los elementos
  const toggleAll = () => {
    const isAnyExpanded = Object.values(expandedKeys || {}).some(
      (isExpanded) => isExpanded
    );

    let newExpandedKeys = { ...expandedKeys };

    const toggleNodes = (currentNodes) => {
      currentNodes.forEach((node) => {
        newExpandedKeys[node.key] = !isAnyExpanded;
        if (node.children && node.children.length > 0) {
          toggleNodes(node.children);
        }
      });
    };

    toggleNodes(nodes);

    setExpandedKeys(newExpandedKeys);
  };

  useEffect(() => {
    // console.log("expand all or collapse all", expandedKeys);
  }, [expandedKeys]);

  const collapseAll = () => {
    const isAnyExpanded = Object.values(expandedKeys || {}).some(
      (isExpanded) => isExpanded
    );

    let newExpandedKeys = {};

    const collapseNodes = (currentNodes) => {
      currentNodes.forEach((node) => {
        newExpandedKeys[node.key] = false;
        if (node.children && node.children.length > 0) {
          collapseNodes(node.children);
        }
      });
    };

    collapseNodes(nodes);

    setExpandedKeys({ ...newExpandedKeys });
  };

  const getHeader = () => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-end w-full">
          {/* Volver a página anterior */}
          <div className="flex w-1/2">
            <Button
              icon="pi pi-arrow-left"
              className="standard-button"
              onClick={goBack}
            />
            <div className="flex items-center border-fujitsu-light-gray rounded-md p-2 font-bold text-lg">
              <span className="pi pi-folder mx-2 text-fujitsu-dark-blue "></span>{" "}
              {titulo}
            </div>
          </div>
          <div className="p-input-icon-left h-12 w-1/2 flex justify-end">
            <div className="flex justify-content-end ">
              <div className="p-input-icon-left">
                <i className="pi pi-search"></i>
                <InputText
                  type="search"
                  onInput={(e) => setGlobalFilter(e.target.value)}
                  placeholder="Buscar por Nombre"
                  className="h-12 pl-10 font-normal"
                />
              </div>
            </div>

            <Button icon="pi pi-sliders-h" className="button-filter mx-2" />
          </div>
        </div>

        {/* Botones de toggle */}
        <div className="w-full flex justify-end mt-4">
          <Button
            onClick={toggleAll}
            label="Expandir todos"
            className="button-toggle w-36 p-2"
          />
          <Button
            onClick={collapseAll}
            label="Colapsar todos"
            className="button-toggle w-36 p-2"
          />
        </div>
      </div>
    );
  };

  let header = getHeader();

  return (
    <div className="flex flex-col">
      {/* Tabla general */}
      <div className="card mt-4">
        <TreeTable
          scrollable
          scrollHeight="55vh"
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          value={nodes}
          expandedKeys={expandedKeys}
          onToggle={(e) => setExpandedKeys(e.value)}
          className="mt-4 h-[55vh] text-sm"
          tableStyle={{ minWidth: "50rem" }}
          filterMode="strict"
          globalFilter={globalFilter}
          header={header}
          selectionMode="checkbox"
          selectionKeys={selectedNodeKeys}
          onSelectionChange={(e) => setSelectedNodeKeys(e.value)}
        >
          <Column
            className="w-1/3"
            field="name"
            header="Nombre"
            expander
            sortable
            pt={{
              headerContent: {
                className: "flex text-fujitsu-black items-center",
              },
              sortIcon: {
                className: "text-fujitsu-black ",
              },
              checkboxIcon: {
                className: "font-bold text-fujitsu-white",
              },
              checkbox: {
                className: "border-2 border-fujitsu-gray/50",
              },
            }}
          ></Column>
          <Column
            field="etiqueta"
            header="Etiqueta"
            sortable
            pt={{
              headerContent: {
                className: "flex text-fujitsu-black items-center",
              },
              sortIcon: {
                className: "text-fujitsu-black",
              },
            }}
          ></Column>
          <Column
            field="estado"
            header="Estado"
            sortable
            pt={{
              headerContent: {
                className: "flex text-fujitsu-black items-center",
              },
              sortIcon: {
                className: "text-fujitsu-black ",
              },
            }}
          ></Column>
          <Column
            field="fecha"
            header="Fecha"
            sortable
            pt={{
              headerContent: {
                className: "flex text-fujitsu-black items-center",
              },
              sortIcon: {
                className: "text-fujitsu-black ",
              },
            }}
          ></Column>
          <Column
            field="id"
            header="Id"
            sortable
            pt={{
              headerContent: {
                className: "flex text-fujitsu-black items-center",
              },
              sortIcon: {
                className: "text-fujitsu-black ",
              },
            }}
          ></Column>
          <Column
            field="favorito"
            header="Favoritos"
            sortable
            pt={{
              headerContent: {
                className: "flex text-fujitsu-black items-center",
              },
              sortIcon: {
                className: "text-fujitsu-black ",
              },
            }}
          ></Column>
          <Column
            field="type"
            header="Acciones"
            body={(node) => (
              <div>
                <span>{node.favorito}</span>
              </div>
            )}
            pt={{
              headerContent: {
                className: "flex text-fujitsu-black items-center",
              },
            }}
          ></Column>
        </TreeTable>
      </div>
    </div>
  );
};

export default TablaExpedientes;
