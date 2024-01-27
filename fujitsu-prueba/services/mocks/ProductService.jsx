export const ProductService = {
  getProductsWithOrdersData() {
    return [
      {
        id: "1000",
        code: "f230fh0g3",
        nombre: "Nombre del Documento",
        etiqueta: [65, 99],
        estado: [
          "Procesado",
          {
            validaciones: "3 validaciones grafo pendientes",
            asignadas: "1 asignada a mí",
          },
        ],
        fecha: "22/01/2024 - 14:59",
        favorito: false,
        documentData: [
          {
            id: "1000-0",
            NombreDocumentoCompleto:
              "Departamento de origen del docu bla bla bla lorem ipsum whatever",
            evaluacion: "Evaluacion",
            date: "2020-09-13",
            plantilla: "Nombre de plantilla",
            restricciones: 3,
            etiquetas: [
              "Etiqueta 1",
              "Etiqueta 2",
              "Etiqueta 3",
              "Etiqueta 4",
              "Etiqueta 5",
              "Etiqueta 6",
              "Etiqueta 7",
            ],
          },
        ],
      },
      {
        id: "1001",
        code: "f230fh0g3",
        nombre: "Nombre del Otro Documento",
        etiqueta: [33, 22],
        estado: [
          "Procesado",
          {
            validaciones: "2 validaciones grafo pendientes",
            asignadas: "2 asignadas a mí",
          },
        ],
        fecha: "23/02/2024 - 14:59",
        favorito: true,
        documentData: [
          {
            id: "1001-0",
            NombreDocumentoCompleto:
              "Departamento de origen del docu bla bla bla lorem ipsum whatever",
            evaluacion: "Evaluacion",
            date: "2020-09-13",
            plantilla: "Nombre de plantilla 2 diferente",
            restricciones: 3,
            etiquetas: [
              "Etiqueta 1",
              "Etiqueta 2",
              "Etiqueta 3",
              "Etiqueta 4",
              "Etiqueta 5",
              "Etiqueta 6",
              "Etiqueta 7",
              "Etiqueta 8",
            ],
          },
        ],
      },
    ];
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
