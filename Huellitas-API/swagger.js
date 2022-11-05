const swaggerAutogen = require("swagger-autogen")({openapi: "3.0.0"});
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/api.js"];

const doc = {
    info: {
      title: 'Huellitas API',
      description: 'Huellitas pets grooming API',
    },
    servers: [
      {
        url: "https://huellitas-nodejs-api.herokuapp.com"
      }
    ],
    components: {
      "@schemas": {
        Producto: {
          type: "object",
          properties: {
            id: {
              type: "number",
              description: "numero de la boleta",
              example: 1
            },
            name: {
              type: "string",
              description: "xxx",
              example: "Curtación"
            },
            precio: {
              type: "string",
              description: "xxx",
              example: "desde 99.99"
            },
            link: {
              type: "string",
              description: "xxx",
              example: "Despachado"
            }        
          },
          example: {
            id: 4,
            name: "Manicure",
            precio: "desde 49.90    ",
            link: ""
          }
        },
        Local: {
            type: "object",
            properties: {
              id: {
                type: "number",
                description: "numero de la boleta",
                example: 1
              },
              name: {
                type: "string",
                description: "xxx",
                example: "Curtación"
              },
              direccion: {
                type: "string",
                description: "xxx",
                example: "desde 99.99"
              },
              horario: {
                type: "string",
                description: "xxx",
                example: "Despachado"
              }        
            },
            example: {
              id: "015673",
              name: "Patacure",
              direccion: "av san miguel 342",
              horario: "9am a 6pm"
            }
          }
      }
    },
    definitions: {
      myReferencedProductArray: [{ $ref: "#/definitions/Producto" }],
      myReferencedLocalArray: [{ $ref: "#/definitions/Local" }]
    }
  };
  
  swaggerAutogen(outputFile, endpointsFiles, doc);