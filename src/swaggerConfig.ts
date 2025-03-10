import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import swaggerDocs from "./docs/swaggerDocs"; // Importação correta do arquivo de endpoints

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fruta&Fruto API",
      version: "1.0.0",
      description: "API para gerenciar receitas e ingredientes",
    },
    servers: [{ url: "http://localhost:3333" }],
  },
  apis: ["./src/routes/*.ts"], // Agora essa parte funciona corretamente
};

const specs = swaggerJsDoc(options);

// Função para configurar o Swagger
export default function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup({ ...specs, paths: swaggerDocs }));
}