const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API de Controle Financeiro - FinanControl',
        description: 'Documentação da API do sistema FinanControl',
        version: '1.0.0'
    },
    servers: [
        { url: 'http://localhost:3000', description: 'localhost' }
    ],
    tags: [
        { name: 'Usuários', description: 'Operações relacionadas aos usuários' },
        { name: 'Categorias', description: 'Operações relacionadas as Categorias' }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar todos os usuários",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "apllication/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Usuarios' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Cadastrar novo usuário',
                description: "Recebe nome, email, senha para cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário cadastrado com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ['Usuários'],
                summary: 'Atualizar todos os dados do usuário',
                description: 'Atualiza todos os dados de um usuário existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Usuario" },
                            example: {
                                nome: "Ricardo Santos",
                                email: "ricardo5@sesisp.com",
                                senha: "senhaAtualizada"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário atualizado com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }

            },
            delete: {
                tags: ['Usuários'],
                summary: 'Remover Usuário',
                description: 'Remove usuário existente pelo ID',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Usuário removido com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }
            },

        },
        //Swagger Login
        "/login": {
            post: {
                tags: ['Usuários'],
                summary: 'Realizar Login',
                description: "Autentica um usuário e retorna seus dados",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Login_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Login realizado com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Resposta_Login"
                                }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/categorias": {
            get: {
                tags: ["Categorias"],
                summary: "Listar todas as categorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Categorias' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Categorias'],
                summary: 'Cadastrar Categoria',
                description: "Recebe nome, descrição, cor, icone e tipo para cadastrar nova categoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Categoria"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Categoria cadastrada com sucesso!",
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/categorias/{id_categoria}": {
            put: {
                tags: ['Categorias'],
                summary: 'Atualizar dados da categoria',
                description: 'Atualiza os dados de uma categoria existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "ID da categoria a ser atualizada",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Categoria" },
                            example: {
                                "nome": "Tipo Alimentação",
                                "descricao": "Descrição da categoria",
                                "cor": "#FF0000",
                                "icone": "nomeicone",
                                "tipo": "E",
                                "ativo": true
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Categoria atualizada com sucesso!"
                    },
                    404: {
                        description: "Categoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "Categoria não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ['Categorias'],
                summary: 'Remover Categoria',
                description: 'Remove categoria existente pelo ID',
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "ID da categoria a ser removida",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Categoria removida com sucesso!"
                    },
                    404: {
                        description: "Categoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "Categoria não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/subcategorias": {
            get: {
                tags: ["SubCategorias"],
                summary: "Listar todas as subcategorias",
                responses: {
                    200: {
                        description: "SubCategorias obtidas com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_SubCategorias' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["SubCategorias"],
                summary: "Cadastrar nova subcategoria",
                description: "Recebe nome, descrição e id_categoria para cadastrar nova subcategoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_SubCategoria"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "SubCategoria cadastrada com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/subcategorias/{id_subcategoria}": {
            put: {
                tags: ['SubCategorias'],
                summary: 'Atualizar dados da subcategoria',
                description: 'Atualiza os dados de uma subcategoria existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria a ser atualizada",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_SubCategoria" },
                            example: {
                                "nome": "Tipo Alimentação",
                                "id_categoria": 1,
                                "ativo": true
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "SubCategoria atualizada com sucesso!"
                    },
                    404: {
                        description: "SubCategoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "SubCategoria não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ["SubCategorias"],
                summary: "Remover subcategoria",
                description: "Remove uma subcategoria existente",
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria a ser removida",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "SubCategoria removida com sucesso!"
                    },
                    404: {
                        description: "SubCategoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "SubCategoria não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        }
        },
        components: {
            schemas: {
                Listar_Usuarios: {
                    type: 'object',
                    properties: {
                        id: { type: "integer", example: 1 },
                        nome: { type: "string", example: "Ricardo" },
                        email: { type: "string", example: "ricardo@email.com" }
                    }
                },
                Cadastrar_Usuario: {
                    type: 'object',
                    properties: {
                        nome: { type: "string", example: "Ricardo" },
                        email: { type: "string", example: "ricardo2@email.com" },
                        senha: { type: "string", example: "Senha123" },
                        tipo_acesso: { type: "string", example: "Administrador" }
                    }
                },
                Atualizar_Usuario: {
                    type: 'object',
                    required: ["nome", "email", "senha"],
                    properties: {
                        nome: { type: "string", example: "Nina" },
                        email: { type: "string", example: "nina@email.com" },
                        senha: { type: "string", example: "Senha123" },
                        tipo_acesso: { type: "string", example: "Administrador" }
                    }
                },
                Login_Usuario: {
                    type: 'object',
                    required: ['email', 'senha'],
                    properties: {
                        email: { type: "string", example: "ricardo2@email.com" },
                        senha: { type: "string", example: "Senha123" }
                    }
                },
                Resposta_Login: {
                    type: 'object',
                    properties: {
                        message: { type: 'string', example: 'Login realizado com sucesso' },
                        usuario: {
                            type: 'object',
                            properties: {
                                id_usuario: { type: "integer", example: 1 },
                                email: { type: "string", example: "ricardo2@email.com" },
                                senha: { type: "string", example: "Senha123" }
                            }
                        }
                    }
                },
                Listar_Categorias: {
                    type: 'object',
                    properties: {
                        id_categoria: { type: "integer", example: 1 },
                        nome: { type: "string", example: "Tipo Alimentação" },
                        descricao: { type: "text", example: "Descrição da categoria" },
                        cor: { type: "string", example: "#FF0000" },
                        icone: { type: "string", example: "nomeicone" },
                        tipo: { type: "string", example: "E" }
                    }
                },
                Cadastrar_Categoria: {
                    type: 'object',
                    required: ['nome', 'descricao', 'cor', 'icone', 'tipo'],
                    properties: {
                        nome: { type: "string", example: "Tipo Alimentação" },
                        descricao: { type: "text", example: "Descrição da categoria" },
                        cor: { type: "string", example: "#FF0000" },
                        icone: { type: "string", example: "nomeicone" },
                        tipo: { type: "string", example: "E" }
                    }
                },
                Atualizar_Categoria: {
                    type: 'object',
                    required: ['nome', 'descricao', 'cor', 'icone', 'tipo'],
                    properties: {
                        nome: { type: "string", example: "Tipo Alimentação" },
                        descricao: { type: "text", example: "Descrição da categoria" },
                        cor: { type: "string", example: "#FF0000" },
                        icone: { type: "string", example: "nomeicone" },
                        tipo: { type: "string", example: "E" }
                    }
                },
                Listar_SubCategorias: {
                    type: 'object',
                    properties: {
                        id_subcategoria: { type: "integer", example: 1 },
                        id_categoria: { type: "integer", example: 1 },
                        nome: { type: "string", example: "Alimentação" },
                        ativo: { type: "boolean", example: true }
                    }
                },
                Cadastrar_SubCategoria: {
                    type: 'object',
                    required: ['nome', 'id_categoria'],
                    properties: {
                        nome: { type: "string", example: "Alimentação" },
                        id_categoria: { type: "integer", example: 1 }
                    }
                },
                Atualizar_SubCategoria: {
                    type: 'object',
                    required: ['nome', 'id_categoria'],
                    properties: {
                        nome: { type: "string", example: "Alimentação" },
                        id_categoria: { type: "integer", example: 1 }
                    }
                }
            }
        }
   
}
export default documentacao
