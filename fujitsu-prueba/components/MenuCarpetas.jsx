"use client";
import React, { useEffect, useState } from "react";
import { Tree } from "primereact/tree";
import { NodeService } from "@/services/mocks/menuLateral";

const MenuCarpetas = ({ changeTitulo }) => {
  //estados y useEffects
  const [nodes, setNodes] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(null);
  const [selectedNodeData, setSelectedNodeData] = useState(null);

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);

  //funciones
  const selectFolder = (e) => {
    setSelectedKeys(e.value);

    const findNode = (nodes, key) => {
      for (const node of nodes) {
        if (node.key === key) {
          return node;
        }
        if (node.children) {
          const foundInChildren = findNode(node.children, key);
          if (foundInChildren) {
            return foundInChildren;
          }
        }
      }
      return null;
    };

    const selectedNode = findNode(nodes, e.value);

    if (selectedNode) {
      console.log("Selected Node:", selectedNode);
      setSelectedNodeData(selectedNode.data);
      changeTitulo(selectedNode);
    }
  };

  return (
    <>
      <div
        className="flex flex-col border border-fujitsu-light-gray rounded-md p-4 transition-all"
      >
        <Tree
          value={nodes}
          selectionMode="single"
          filter
          filterMode="strict"
          filterPlaceholder="Filtrar Carpetas"
          selection={selectedKeys}
          onSelectionChange={selectFolder}
          selectionKeys={selectedKeys}
          pt={{
            root: { className: "w-full md:w-30rem focus:ring-0" },
            content: ({ context }) => ({
              className: context.expanded
                ? "bg-fujitsu-blue/10 text-fujitsu-blue transition-all"
                : "hover:bg-fujitsu-light-gray active:text-fujitsu-black focus:text-fujitsu-black transition-all",
              className: context.selected
                ? "bg-fujitsu-blue/10 text-fujitsu-blue transition-all"
                : "text-fujitsu-black transition-all",
            }),
          }}
        />
      </div>
    </>
  );
};

export default MenuCarpetas;
