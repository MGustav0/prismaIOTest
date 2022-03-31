# GoBarber Back-end

![Badge](https://img.shields.io/badge/node-%3E%3D%2012.18.2-brightgreen) ![Badge](https://img.shields.io/badge/types-Flow%20%7C%20TypeScript-blue)

## Status do Projeto

> Concluido :heavy_check_mark:

## Descrição do projeto

Neste projeto testo o ORM PrismaIO com express, PostgreSQL via docker e typescript.

## Linguagens, dependencias e libs utilizadas :books:

- [TypeScript](https://www.typescriptlang.org/)

## Funcionalidades

:heavy_check_mark: Criar usuário.

:heavy_check_mark: logar usuário.

:heavy_check_mark: Atualizar avatar do usuário.

:heavy_check_mark: Criar agendamentos.

:heavy_check_mark: Listar agendamentos.

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)
:warning: [Yarn](https://yarnpkg.com/getting-started/install)
:warning: [Docker](https://www.docker.com/products/docker-desktop)
:warning: [Compose](https://docs.docker.com/compose/install/)
:warning: [PostgreSQL Docker](https://hub.docker.com/_/postgres)

### Criar Banco de Dados

1. Instale o DBeaver, ou outro gerenciador de Banco de Dados, ou faça por linha de comando.
2. Acesse com o usuário e senha supracitados.
3. Crie um Banco de Dados com o nome __prismaio__.

## Como rodar a aplicação

1. No terminal, clone o projeto: `git@github.com:MGustav0/prismaIOTest.git`

2. Acesse a pasta backend via terminal `cd /backend`.

3. Instale as dependencias: `yarn install`

4. Execute: `docker-compose up -d` para rodar o banco de dados.

5. Execute: `yarn dev:server`

Pronto! Agora basta acessar a aplicação à partir do link: http://localhost:3333/

## Layout da aplicação (back-end)

Resultados obtidos pelo [Insomnia](https://insomnia.rest/download/) um software para interação com o backend (API) via HTTP e JSON.

### Criar usuário

<img src="" max-width="800" max-heigth="600" />

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Projeto proposto pela Rocketseat para o curso Ignite
