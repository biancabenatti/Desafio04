# Desafio_04

## Descrição

Este projeto é uma aplicação web desenvolvida em ReactJS que permite aos usuários buscar e visualizar perfis de desenvolvedores no GitHub. Os usuários podem inserir um nome de usuário do GitHub, visualizar informações do perfil e explorar os repositórios do usuário, com opção de ordená-los por número de estrelas ou ordem alfabética.

---

## Índice

1. [Tecnologias](#Tecnologias)
2. [Funcionalidades](#Funcionalidades)
3. [Instalação](#Instalação)
4. [Uso](#Uso)

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
   - Exibi as seguintes informações do usuário: 
     - Nome
     - Foto de perfil
     - Bio
     - Organização
     - Localização
     - Email
     - Link para o site pessoal (se disponível)
     - Link para o perfil do Twitter (se disponível)
   - Lista os repositórios do usuário, com opçaõ de ordena-los por número de estrelas ou ordem alfabética.
   - Cada repositório é um link clicável que abre o repositório no GitHub em uma nova aba.
   - Botão "Voltar" para retornar à página inicial.

3. **Integração com a API do GitHub**
   - Utiliza a API pública do GitHub para buscar dados dos usuários e repositórios.
   - Endpoints utilizados:
     - Dados do usuário
     - Repositórios do usuário
     
# Instalação

Para instalar o projeto, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

Depois de clonar o repositório, instale as dependências do projeto rodando o seguinte comando:

**Instalar Node Package Manager**
npm install

# Uso

Para iniciar o servidor, utilize:

npm start




