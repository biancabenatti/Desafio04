# Desafio_04

## Descrição

Este projeto é uma aplicação web desenvolvida em ReactJS que permite aos usuários buscar e visualizar perfis de desenvolvedores no GitHub. Os usuários podem inserir um nome de usuário do GitHub, visualizar informações do perfil e explorar os repositórios do usuário, com opção de ordená-los por número de estrelas ou ordem alfabética.

---

## Índice

1. [Tecnologias](#Tecnologias)
2. [Funcionalidades](#Funcionalidades)
3. [Instalação](#Instalação)
4. [Uso](#Uso)
5. [Testes](#Testes)
6. [Deploy](#Deploy)

---

# Tecnologias

- Node.js
- React.js
- TailwindCSS
- Sweetalert2

# Funcionalidades

1. **Página Inicial (Home)**
   - Campo de busca para o nome de usuário do GitHub.
   - Botão "Pesquisar" que redireciona para a página de perfil do usuário pesquisado.

2. **Página de Perfil**
   - Exibir as seguintes informações do usuário: 
     - Nome
     - Foto de perfil
     - Bio
     - Link para o site pessoal (se disponível)
     - Link para o perfil do Twitter (se disponível)
   - Listar os repositórios do usuário, ordenados por número de estrelas (do maior para o menor).
   - Cada repositório deve ser um link clicável que abre o repositório no GitHub em uma nova aba.
   - Botão "Voltar" para retornar à página inicial.

3. **Integração com a API do GitHub**
   - Utilizar a API pública do GitHub para buscar dados dos usuários e repositórios.
   - Endpoints a serem utilizados:
     - Dados do usuário
     - Repositórios do usuário
     
# Instalação

Para instalar as dependências do projeto, rode o seguinte comando:

**Instalar React e ReactDOM**
npm install react react-dom

**Instalar TailwindCSS**
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

**Instalar SweetAlert2**
npm install sweetalert2


# Uso

Para iniciar o servidor, utilize:

npm start

# Testes
# Deploy



