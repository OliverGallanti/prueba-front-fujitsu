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
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
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
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
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
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
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
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
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
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
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
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
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
      {
        id: "1006",
        code: "p2q1r4s3",
        nombre: "Presentación de Ventas",
        etiqueta: [25, 78],
        estado: [
          "Procesado",
          {
            validaciones: "Validación completa",
            asignadas: "Ninguna asignación pendiente",
          },
        ],
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
        fecha: "12/08/2024 - 09:45",
        favorito: false,
        documentData: [
          {
            id: "1006-0",
            NombreDocumentoCompleto:
              "Presentación detallada de los productos para la próxima reunión de ventas.",
            evaluacion: "Procesado",
            date: "2021-09-22",
            plantilla: "Plantilla de Presentación de Ventas",
            restricciones: 0,
            etiquetas: ["Ventas", "Presentación", "Productos"],
          },
        ],
      },
      {
        id: "1007",
        code: "m5n6o7p8",
        nombre: "Plan de Marketing",
        etiqueta: [40, 15],
        estado: [
          "Procesado",
          {
            validaciones: "Todas las validaciones aprobadas",
            asignadas: "Sin asignaciones pendientes",
          },
        ],
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
        fecha: "30/09/2024 - 16:20",
        favorito: true,
        documentData: [
          {
            id: "1007-0",
            NombreDocumentoCompleto:
              "Plan estratégico de marketing para el próximo trimestre.",
            evaluacion: "Procesado",
            date: "2021-11-15",
            plantilla: "Plantilla de Plan de Marketing",
            restricciones: 0,
            etiquetas: ["Marketing", "Plan", "Estrategia"],
          },
        ],
      },
      {
        id: "1008",
        code: "d3e4f5g6",
        nombre: "Informe de Gestión",
        etiqueta: [60, 30],
        estado: [
          "Procesado",
          {
            validaciones: "Informe completo y aprobado",
            asignadas: "Sin asignaciones pendientes",
          },
        ],
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
        fecha: "15/11/2024 - 12:00",
        favorito: false,
        documentData: [
          {
            id: "1008-0",
            NombreDocumentoCompleto:
              "Informe detallado sobre la gestión y rendimiento del último trimestre.",
            evaluacion: "Procesado",
            date: "2022-01-05",
            plantilla: "Plantilla de Informe de Gestión",
            restricciones: 0,
            etiquetas: ["Informe", "Gestión", "Rendimiento"],
          },
        ],
      },
      {
        id: "1009",
        code: "k7l8m9n0",
        nombre: "Contrato de Arrendamiento",
        etiqueta: [18, 42],
        estado: [
          "Procesado",
          {
            validaciones: "Contrato firmado y registrado",
            asignadas: "Ninguna asignación pendiente",
          },
        ],
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
        fecha: "05/02/2024 - 08:30",
        favorito: true,
        documentData: [
          {
            id: "1009-0",
            NombreDocumentoCompleto:
              "Contrato de arrendamiento para la nueva sede de la empresa.",
            evaluacion: "Procesado",
            date: "2021-07-10",
            plantilla: "Plantilla de Contrato de Arrendamiento",
            restricciones: 0,
            etiquetas: ["Contrato", "Arrendamiento", "Inmueble"],
          },
        ],
      },
      {
        id: "1010",
        code: "q1r2s3t4",
        nombre: "Informe Financiero Anual",
        etiqueta: [55, 10],
        estado: [
          "Procesado",
          {
            validaciones: "Informe financiero aprobado",
            asignadas: "Sin asignaciones pendientes",
          },
        ],
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
        fecha: "20/12/2024 - 14:45",
        favorito: false,
        documentData: [
          {
            id: "1010-0",
            NombreDocumentoCompleto:
              "Informe detallado sobre el desempeño financiero anual de la empresa.",
            evaluacion: "Procesado",
            date: "2022-03-05",
            plantilla: "Plantilla de Informe Financiero Anual",
            restricciones: 0,
            etiquetas: ["Informe", "Financiero", "Anual"],
          },
        ],
      },
      {
        id: "1011",
        code: "u5v6w7x8",
        nombre: "Manual de Procedimientos",
        etiqueta: [30, 25],
        estado: [
          "Procesado",
          {
            validaciones: "Manual aprobado y publicado",
            asignadas: "Sin asignaciones pendientes",
          },
        ],
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
        fecha: "10/04/2024 - 11:10",
        favorito: true,
        documentData: [
          {
            id: "1011-0",
            NombreDocumentoCompleto:
              "Manual detallado de los procedimientos internos de la empresa.",
            evaluacion: "Procesado",
            date: "2021-06-20",
            plantilla: "Plantilla de Manual de Procedimientos",
            restricciones: 0,
            etiquetas: ["Manual", "Procedimientos", "Interno"],
          },
        ],
      },
      {
        id: "1012",
        code: "a2b4c6d8",
        nombre: "Proyecto de Investigación",
        etiqueta: [15, 28, 33, 45, 50, 65],
        estado: [
          "Procesado",
          {
            validaciones: "Informe de investigación completo",
            asignadas: "Sin asignaciones pendientes",
          },
        ],
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
        fecha: "15/08/2024 - 09:20",
        favorito: false,
        documentData: [
          {
            id: "1012-0",
            NombreDocumentoCompleto:
              "Proyecto completo con los resultados de la investigación realizada.",
            evaluacion: "Procesado",
            date: "2022-09-12",
            plantilla: "Plantilla de Proyecto de Investigación",
            restricciones: 0,
            etiquetas: [
              "Proyecto",
              "Investigación",
              "Resultados",
              "Completo",
              "Informe",
            ],
          },
        ],
      },
      {
        id: "1013",
        code: "e1f3g5h7",
        nombre: "Manual de Desarrollo de Software",
        etiqueta: [8, 12, 20, 32, 40, 55, 68],
        estado: [
          "Procesado",
          {
            validaciones: "Manual revisado y actualizado",
            asignadas: "Sin asignaciones pendientes",
          },
        ],
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
        fecha: "25/03/2024 - 13:50",
        favorito: true,
        documentData: [
          {
            id: "1013-0",
            NombreDocumentoCompleto:
              "Manual detallado para el desarrollo de software en la empresa.",
            evaluacion: "Procesado",
            date: "2022-07-15",
            plantilla: "Plantilla de Manual de Desarrollo de Software",
            restricciones: 0,
            etiquetas: [
              "Manual",
              "Desarrollo",
              "Software",
              "Revisado",
              "Actualizado",
              "Empresa",
            ],
          },
        ],
      },
      {
        id: "1014",
        code: "i9j8k7l6",
        nombre: "Informe de Marketing",
        etiqueta: [10, 18, 25, 38, 42, 55, 60],
        estado: [
          "Procesado",
          {
            validaciones: "Informe de marketing aprobado",
            asignadas: "Sin asignaciones pendientes",
          },
        ],
        extension: "Expedientes>Contenido Islas Baleares>Expedientes Material",
        fecha: "08/11/2024 - 15:30",
        favorito: false,
        documentData: [
          {
            id: "1014-0",
            NombreDocumentoCompleto:
              "Informe detallado sobre las estrategias de marketing implementadas.",
            evaluacion: "Procesado",
            date: "2022-01-20",
            plantilla: "Plantilla de Informe de Marketing",
            restricciones: 0,
            etiquetas: [
              "Informe",
              "Marketing",
              "Aprobado",
              "Estrategias",
              "Detallado",
              "Implementadas",
            ],
          },
        ],
      }
    ];
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 15));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
