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
      {
        id: "1002",
        code: "f2g3k4j5",
        nombre: "Documento Importante",
        etiqueta: [15, 28],
        estado: [
          "Procesado",
          {
            validaciones: "5 validaciones pendientes",
            asignadas: "2 asignadas a mí",
          },
        ],
        fecha: "10/03/2024 - 09:45",
        favorito: true,
        documentData: [
          {
            id: "1002-0",
            NombreDocumentoCompleto:
              "Departamento de origen del documento importante con información relevante.",
            evaluacion: "Aprobado",
            date: "2020-11-22",
            plantilla: "Plantilla de Documento Importante",
            restricciones: 2,
            etiquetas: [
              "Importante",
              "Confidencial",
              "Fecha Límite",
              "Documento Externo",
            ],
          },
        ],
      },
      {
        id: "1003",
        code: "h3i4j5k6",
        nombre: "Reporte Trimestral",
        etiqueta: [42, 77],
        estado: [
          "Procesado",
          {
            validaciones: "Todas las validaciones completadas",
            asignadas: "Ninguna asignada",
          },
        ],
        fecha: "05/04/2024 - 16:30",
        favorito: false,
        documentData: [
          {
            id: "1003-0",
            NombreDocumentoCompleto:
              "Reporte trimestral con información financiera y estadísticas clave.",
            evaluacion: "Excelente",
            date: "2020-12-15",
            plantilla: "Plantilla de Reporte Trimestral",
            restricciones: 0,
            etiquetas: [
              "Informe",
              "Finanzas",
              "Estadísticas",
              "Trimestre Actual",
            ],
          },
        ],
      },
      {
        id: "1004",
        code: "a1b2c3d4",
        nombre: "Contrato de Servicios",
        etiqueta: [88, 12],
        estado: [
          "Pendiente",
          {
            validaciones: "1 validación pendiente",
            asignadas: "Asignada a otro usuario",
          },
        ],
        fecha: "18/05/2024 - 10:15",
        favorito: false,
        documentData: [
          {
            id: "1004-0",
            NombreDocumentoCompleto:
              "Contrato de servicios para la próxima campaña publicitaria.",
            evaluacion: "Pendiente",
            date: "2021-02-28",
            plantilla: "Plantilla de Contrato de Servicios",
            restricciones: 1,
            etiquetas: ["Contrato", "Servicios", "Publicidad"],
          },
        ],
      },
      {
        id: "1005",
        code: "x9y8z7w6",
        nombre: "Informe de Investigación",
        etiqueta: [5, 45],
        estado: [
          "En Progreso",
          {
            validaciones: "2 validaciones en curso",
            asignadas: "1 asignada a otro usuario",
          },
        ],
        fecha: "02/06/2024 - 14:30",
        favorito: true,
        documentData: [
          {
            id: "1005-0",
            NombreDocumentoCompleto:
              "Informe detallado de la investigación de mercado actual.",
            evaluacion: "Procesado",
            date: "2021-04-10",
            plantilla: "Plantilla de Informe de Investigación",
            restricciones: 0,
            etiquetas: ["Investigación", "Informe", "Mercado"],
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
