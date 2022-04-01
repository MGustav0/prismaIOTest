# Prisma IO

![Badge](https://img.shields.io/badge/node-%3E%3D%2016.14.2-brightgreen) ![Badge](https://img.shields.io/badge/types-Flow%20%7C%20TypeScript-blue) ![Badge](https://img.shields.io/badge/prisma-3.11.1-blueviolet)

## Status do Projeto

> Concluído :heavy_check_mark:

## Descrição do projeto

Neste projeto testo o ORM PrismaIO com express, PostgreSQL via docker e typescript.

## Linguagens, dependências e libs utilizadas

- [TypeScript](https://www.typescriptlang.org/)

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)
:warning: [Yarn](https://yarnpkg.com/getting-started/install)
:warning: [Docker](https://www.docker.com/products/docker-desktop)
:warning: [Compose](https://docs.docker.com/compose/install/)
:warning: [PostgreSQL Docker](https://hub.docker.com/_/postgres)

### Criar Banco de Dados

1. Instale o [DBeaver](https://dbeaver.io/download/), outro gerenciador de Banco de Dados ou faça por linha de comando.
2. Crie uma conexão com:
   1. Nome do banco: __prismaio__
   2. Acesse com o usuário e senha do arquivo `.env`.

## Como rodar a aplicação

1. No terminal, clone o projeto: `git@github.com:MGustav0/prismaIOTest.git`

2. Acesse a pasta backend via terminal `cd /backend`.

3. Instale as dependências: `yarn install`

4. Execute: `make up` para rodar o banco de dados em modo detached.

5. Execute: `make db-pull` e `make migrate` para sincronizar o banco com as migrations.

6. Execute: `make execute args=src/nome_da_pasta/nome_do_arquivo_a_ser_executado.ts` para rodar o arquivo.

Pronto! Agora basta acessar o Prisma Client à partir deste [link](http://localhost:5555).

## Layout da aplicação (back-end)

Resultados podem ser obtidos diretamente pelo terminal.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Projeto proposto pela Rocketseat para o curso Ignite
