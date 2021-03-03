# Projeto - MonoRepo & Micro-Front-end

Author:
Everton Ferreira

## Conteúdo
- [Visão Geral do Projeto](#visão-geral-do-projeto)
  - [Tecnologias](#tecnologias)
- [Informações Iniciais](#informações-iniciais)
  - [Clonando o Repositório](#clonando-o-repositório)
  - [Instalando as Dependências](#instalando-as-dependências)
- [Servidor de Desenvolvimento](#servidor-de-desenvolvimento)
- [Executar cada projeto individual](#executar-cada-projeto-individual)

## Visão Geral do Projeto
O principal objetivo do desafio é o desenvolvimento de um monorepo para utilizar varios projetos com a arquitetura de micro front-end 

### Tecnologias
- HTML5

- CSS
  - [SCSS](https://sass-lang.com/)
  
- JavaScript
  - TypeScript
  - [REACT] (https://pt-br.reactjs.org/) 
  - [Ant Design](https://ng.ant.design/docs/introduce/en) 

## Informações Iniciais
Para realizar as passos a seguir, será necessário que tenha instalado em seu computador o **git** e o **node.js**. Abaixo seguem os sites para realizar o download e efetuar a instalação:
- [Git](https://git-scm.com/downloads)
- [Node.js - Windows/Mac](https://nodejs.org/en/download/)
- [Node.js - Linux](https://nodejs.org/en/download/package-manager/)

### Clonando o Repositório
Primeiro é preciso que efetue a clonagem do repositório para o seu computador para assim efetuar alterações de código.
**clone or download** e copiar a URL do respositório.

Já abrindo o bash do Git para efetuar a clonagem será necessário que digite a seguinte linha de código e informe a URL copiada anteriormente:
git clone <url-do-repositorio>

### Instalando as Dependências
Para instalar as dependências do projeto basta abrir o **Prompt de Comando** (caso você esteja no linux, basta utilizar o terminal), acessar a pasta do repositório e inserir o seguinte comando:
npm install

## Servidor de Desenvolvimento

Execute no **Prompt de Comando** (caso você esteja no linux, basta utilizar o terminal) `yarn start` para rodar o projeto todo em um servidor dev. Navegue para `http://localhost:3000/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Executar cada projeto individual

Para executar cada projeto individualmente basta ir no **Prompt de Comando** (caso você esteja no linux, basta utilizar o terminal) `yarn start:app` para rodar somente o projeto  **APP** ou `yarn start:star` para rodar somente o projeto **Star Wars** ou `yarn start:marvel` para rodar somente o projeto **Marvel**.