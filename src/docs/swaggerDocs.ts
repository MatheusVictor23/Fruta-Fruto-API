const swaggerDocs = {
  "/receitas": {
    get: {
      summary: "Lista todas as receitas",
      description: "Retorna todas as receitas cadastradas no sistema.",
      responses: {
        200: {
          description: "Lista de receitas retornada com sucesso.",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "number", example: 1 },
                    titulo: { type: "string", example: "Tigela de abacate" },
                    passos: {
                      type: "array",
                      example: [
                        {
                          tituloPasso: "1. Preparar os ingredientes",
                          passos: [
                            "Lave e descasque 3 beterrabas médias",
                            "Corte as beterrabas em cubos ou fatias grossas",
                          ],
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    post: {
      summary: "Cria uma nova receita",
      description: "Adiciona uma nova receita ao sistema.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                titulo: { type: "string", example: "Suco Detox" },
                passos: {
                  type: "array",
                  example: [
                    {
                      tituloPasso: "1. Preparar os ingredientes",
                      passos: [
                        "Lave bem os ingredientes",
                        "Descasque o gengibre",
                      ],
                    },
                  ],
                },
              },
              required: ["titulo", "passos"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Receita criada com sucesso.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "number", example: 2 },
                  titulo: { type: "string", example: "Suco Detox" },
                },
              },
            },
          },
        },
        400: {
          description: "Erro ao criar receita. Verifique os dados enviados.",
        },
      },
    },
  },
  "/receitas/{id}": {
    get: {
      summary: "Obtém uma receita específica",
      description: "Retorna os detalhes de uma receita pelo ID.",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
          description: "ID da receita",
        },
      ],
      responses: {
        200: {
          description: "Receita encontrada",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "number", example: 1 },
                  titulo: { type: "string", example: "Tigela de abacate" },
                  passos: {
                    type: "array",
                    example: [
                      {
                        tituloPasso: "1. Preparar os ingredientes",
                        passos: [
                          "Lave e descasque 3 beterrabas médias",
                          "Corte as beterrabas em cubos ou fatias grossas",
                        ],
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Receita não encontrada",
        },
      },
    },
    delete: {
      summary: "Exclui uma receita",
      description: "Remove uma receita do sistema pelo ID.",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
          description: "ID da receita",
        },
      ],
      responses: {
        204: {
          description: "Receita excluída com sucesso.",
        },
        404: {
          description: "Receita não encontrada.",
        },
      },
    },
  },
};

export default swaggerDocs;
