import { response } from "express";

const documentacao = {
    openapi: "3.0.3",
    info: {
        title: 'API de Ordem de Serviço',
        version: '1.0.0',
        description: 'Documentação da API de Ordem de Serviço',
    },
    servers: [
        { url: 'http://localhost:3000', description: 'Localhost' }
    ],
    tags: [
        { name: 'Usuários', description: 'Operações relacionadas a usuários' },
        { name: 'Departamentos', description: 'Operações relacionadas a departamentos' },
        { name: 'Ordem de Serviço', description: 'Operações relacionadas a ordens de serviço' }
    ],
    paths: {
        '/usuarios': {
            get: {
                tags: ['Usuários'],
                summary: 'Listar todos usuários',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso!',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Listar_Usuarios' }
                                }
                            }
                        }
                    },
                    500: {
                        description: 'Erro ao listar usuários'
                    }
                }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Cadastrar novo usuário',
                description: 'Recebe nome, email e senha para cadastrar um novo usuário',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/schemas/Cadastrar_Usuarios',
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Usuário cadastrado com sucesso!'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ['Usuários'],
                summary: 'Atualizar todos os dados do usuário',
                description: 'Atualiza todos os dados de um usuário existente, é necessario enviar todos os campos',
                parameters: [
                    {
                        name: 'id_usuario',
                        in: 'path',
                        description: 'ID do usuário a ser atualizado',
                        required: true,
                        schema: {
                            type: 'integer', example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/schemas/Atualizar_Usuarios'
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'Usuário atualizado com sucesso!'
                    },
                    404: {
                        description: 'Usuário não encontrado'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            },
            patch: {
                tags: ['Usuários'],
                summary: 'Atualizar parcialmente usuário',
                description: 'Atualiza apenas os campos enviados do usuários. Não é necessário enviar todos os campos',
                parameters: [
                    {
                        name: 'id_usuario',
                        in: 'path',
                        description: 'ID do usuário a ser atualizado',
                        required: true,
                        schema: {
                            type: 'integer', example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/schemas/Atualizar_Usuarios',
                                examples: {
                                    Apenas_Nome: {
                                        summary: 'Atualizar apenas o nome',
                                        value: {
                                            nome: 'Lara'
                                        }
                                    },
                                    Apenas_Email: {
                                        summary: 'Atualizar apenas o email',
                                        value: {
                                            email: 'lara@example.com'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Usuário atualizado com sucesso!'
                    },
                    400: {
                        description: 'Nenhum campo para atualizar'
                    },
                    404: {
                        description: 'Usuário não encontrado'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            },
            delete: {
                tags: ['Usuários'],
                summary: 'Remover usuário',
                description: 'Remove um usuário existente do sistema',
                parameters: [
                    {
                        name: 'id_usuario',
                        in: 'path',
                        description: 'ID do usuário a ser removido',
                        required: true,
                        schema: {
                            type: 'integer', example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/schemas/Atualizar_Usuarios'
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Usuário removido com sucesso!'
                    },
                    404: {
                        description: 'Usuário não encontrado'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            },
        },
        '/departamentos': {
            get: {
                tags: ['Departamentos'],
                summary: 'Listar todos departamentos',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso!',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Listar_Departamentos' }
                                }
                            }
                        }
                    },
                    500: {
                        description: 'Erro ao listar departamentos'
                    }
                }
            },
            post: {
                tags: ['Departamentos'],
                summary: 'Cadastrar novo departamento',
                description: 'Recebe nome e descrição para cadastrar um novo departamento',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/schemas/Cadastrar_Departamentos',
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Departamento cadastrado com sucesso!'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            }
        },
        "/departamentos/{id_departamento}": {
            put: {
                tags: ['Departamentos'],
                summary: 'Atualizar todos os dados do departamento',
                parameters: [
                    {
                        name: 'id_departamento',
                        in: 'path',
                        description: 'ID do departamento a ser atualizado',
                        required: true,
                        schema: {
                            type: 'integer', example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/schemas/Cadastrar_Departamentos'
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'Departamento atualizado com sucesso!'
                    },
                    400: {
                        description: 'Nenhum campo para atualizar'
                    },
                    404: {
                        description: 'Departamento não encontrado'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            },
            delete: {
                tags: ['Departamentos'],
                summary: 'Remover departamento',
                description: 'Remove um departamento existente do sistema',
                parameters: [
                    {
                        name: 'id_departamento',
                        in: 'path',
                        description: 'ID do departamento a ser removido',
                        required: true,
                        schema: {
                            type: 'integer', example: 1
                        }
                    }
                ],                
                responses: {
                    200: {
                        description: 'Departamento removido com sucesso!'
                    }, 404: {
                        description: 'Departamento não encontrado'
                    }, 500: {
                        description: 'Erro interno no servidor'
                    }
                }
            },
            patch: {
                tags: ['Departamentos'],
                summary: 'Atualizar departamento',
                parameters: [
                    {
                        name: 'id_departamento',
                        in: 'path',
                        description: 'ID do departamento a ser atualizado',
                        required: true,
                        schema: {
                            type: 'integer', example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/schemas/Cadastrar_Departamentos',
                                examples: {
                                    id_departamento: 1,
                                    nome: 'Departamento 1',
                                    descricao: 'Descrição do departamento 1'
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'Departamento atualizado com sucesso!'
                    },
                    400: {
                        description: 'Nenhum campo para atualizar'
                    },
                    404: {
                        description: 'Departamento não encontrado'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            },
        },
        '/ordem_servicos': {
            get: {
                tags: ['Ordem de Serviço'],
                summary: 'Listar todas as ordens de serviço',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso!',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Listar_Ordem_Servico' }
                                }
                            }
                        }
                    },
                    500: {
                        description: 'Erro ao listar ordens de serviço'
                    }
                }
            },
            post: {
                tags: ['Ordem de Serviço'],
                summary: 'Cadastrar nova ordem de serviço',
                description: 'Recebe título, descrição e ID do departamento para cadastrar uma nova ordem de serviço',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/schemas/Cadastrar_Ordem_Servico',
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Ordem de serviço cadastrada com sucesso!'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            }
        },
        "/ordem_servicos/{id_ordem}": {
            put: {
                tags: ['Ordem de Serviço'],
                summary: 'Atualizar ordem de serviço',
                parameters: [
                    {
                        name: 'id_ordem',
                        in: 'path',
                        description: 'ID da ordem de serviço a ser atualizada',
                        required: true,
                        schema: {
                            type: 'integer', example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                $ref: '#/components/schemas/Cadastrar_Ordem_Servico'
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'Ordem de serviço atualizada com sucesso!'
                    },
                    400: {
                        description: 'Nenhum campo para atualizar'
                    },
                    404: {
                        description: 'Ordem de serviço não encontrada'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            },
            delete: {
                tags: ['Ordem de Serviço'],
                summary: 'Excluir ordem de serviço',
                parameters: [
                    {
                        name: 'id_ordem_servico',
                        in: 'path',
                        description: 'ID da ordem de serviço a ser excluida',
                        required: true,
                        schema: {
                            type: 'integer', example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'Ordem de serviço excluída com sucesso!'
                    },
                    404: {
                        description: 'Ordem de serviço não encontrada'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            },
            patch: {
                tags: ['Ordem de Serviço'],
                summary: 'Atualizar status da ordem de serviço',
                parameters: [
                    {
                        name: 'id_ordem_servico',
                        in: 'path',
                        description: 'ID da ordem de serviço a ser atualizada',
                        required: true,
                        schema: {
                            type: 'integer', example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: { type: 'string', example: 'Em andamento' }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'Status da ordem de serviço atualizado com sucesso!'
                    },
                    400: {
                        description: 'Nenhum campo para atualizar'
                    },
                    404: {
                        description: 'Ordem de serviço não encontrada'
                    },
                    500: {
                        description: 'Erro interno no servidor'
                    }
                }
            },
        }
    },

    components: {
        schemas: {
            Listar_Usuarios: {
                type: 'object',
                properties: {
                    id: { type: 'integer', example: 1 },
                    nome: { type: 'string', example: 'Lara' },
                    email: { type: 'string', example: 'lara@email.com' }
                }
            },
            Listar_Departamentos: {
                type: 'object',
                properties: {
                    id: { type: 'integer', example: 1 },
                    nome: { type: 'string', example: 'TI' },
                    descricao: { type: 'string', example: 'Tecnologia da Informação' }
                }
            },
            Listar_Ordem_Servico: {
                type: 'object',
                properties: {
                    id: { type: 'integer', example: 1 },
                    titulo: { type: 'string', example: 'Computador não liga' },
                    descricao: { type: 'string', example: 'O computador do Ricardão deu pau!' },
                    departamento_id: { type: 'integer', example: 1 }
                }
            },
            Cadastrar_Usuarios: {
                type: 'object',
                properties: {
                    nome: { type: 'string', example: 'Lara' },
                    email: { type: 'string', example: 'lara@email.com' },
                    senha: { type: 'string', example: 'Senha123' }
                }
            },
            Cadastrar_Departamentos: {
                type: 'object',
                properties: {
                    nome: { type: 'string', example: 'TI' },
                    descricao: { type: 'string', example: 'Tecnologia da Informação' }
                }
            },
            Cadastrar_Ordem_Servico: {
                type: 'object',
                properties: {
                    titulo: { type: 'string', example: 'Computador não liga' },
                    descricao: { type: 'string', example: 'O computador do Ricardão deu pau!' },
                    departamento_id: { type: 'integer', example: 1 }
                }
            },
            Atualizar_Usuarios: {
                type: 'object',
                required: ['nome', 'email', 'senha'],
                properties: {
                    nome: { type: 'string', example: 'Lara' },
                    email: { type: 'string', example: 'lara@email.com' },
                    senha: { type: 'string', example: 'Senha123' }
                }
            },
            Atualizar_Departamentos: {
                type: 'object',
                required: ['nome', 'descricao'],
                properties: {
                    nome: { type: 'string', example: 'TI' },
                    descricao: { type: 'string', example: 'Tecnologia da Informação' }
                }
            },
            Atualizar_Ordem_Servico: {
                type: 'object',
                required: ['titulo', 'descricao', 'departamento_id'],
                properties: {
                    titulo: { type: 'string', example: 'Computador não liga' },
                    descricao: { type: 'string', example: 'O computador do Ricardão deu pau!' },
                    departamento_id: { type: 'integer', example: 1 }
                }
            }
        }
    }
}

export default documentacao;