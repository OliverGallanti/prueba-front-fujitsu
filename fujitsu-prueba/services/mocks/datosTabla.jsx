export const NodeService = {
  getTreeTableNodesData() {
    return [
      {
        key: "0",
        data: {
          name: "Applications",
          etiqueta: "33",
          estado: "procesando",
          type: "File",
          fecha: "24/01/2024",
          id: "1213578812564",
          favorito: false,
        },
        children: [
          {
            key: "0-0",
            data: {
              name: "Nombre del documento.pdf",
              etiqueta: "33",
              type: "Folder",
              fecha: "24/01/2024",
              id: "1213578812564",
            },
          },
        ],
      },
    ];
  },

  getTreeTableNodes() {
    return Promise.resolve(this.getTreeTableNodesData());
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};
