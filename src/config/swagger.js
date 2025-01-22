const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "TESTE TECNICO OTAVIO",
    },
    servers: [
      {
        url: "http://localhost:3000 ",
        description: "Servidor local",
      },
    ],
  },
  apis: ["../routes/*.js"], // local do arquivo da rotas
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app)=>{
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;