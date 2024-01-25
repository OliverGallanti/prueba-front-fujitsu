export const NodeService = {
  getTreeNodesData() {
    return [
      {
        key: "0",
        label: "Bandeja de entrada",
        data: "Bandeja de entrada",
        icon: "pi pi-fw pi-inbox",
        children: [
          {
            key: "0-0",
            label: "Trabajo",
            data: "Carpeta de Trabajo",
            icon: "pi pi-fw pi-cog",
          },
          {
            key: "0-1",
            label: "Personal",
            data: "Carpeta Personal",
            icon: "pi pi-fw pi-home",
          },
        ],
      },
      {
        key: "1",
        label: "Contenido de Islas Baleares",
        data: "Events Folder",
        icon: "pi pi-fw pi-folder-open",
        children: [
          {
            key: "1-0",
            label: "Expedientes Personal",
            icon: "pi pi-fw pi-folder",
            data: "Expedientes Personal",
          },
          {
            key: "1-1",
            label: "Expedientes Material",
            icon: "pi pi-fw pi-folder",
            data: "Expedientes Material",
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
