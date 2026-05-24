[![NPM](https://img.shields.io/npm/l/react)](https://github.com/tiagotsa/magarize-ecommerce/blob/main/LICENSE)

# 🚀 Magazine Hashtag

Um e-commerce full stack moderno desenvolvido com **JavaScript**, **Node.js**, **PostgreSQL**, **Vite** e **TailwindCSS**, preparado para deploy profissional utilizando o **Render**.

---

# 📌 Sobre o projeto


https://ecommercetsa.onrender.com


O **Magazine Hashtag** é uma aplicação de loja virtual construída para simular um fluxo real de e-commerce.

O sistema possui:

* Catálogo de produtos
* Carrinho de compras
* Checkout
* Registro de pedidos
* API REST
* Persistência de dados
* Banco PostgreSQL
* Frontend desacoplado do backend

A arquitetura foi organizada para facilitar:

* manutenção
* deploy
* escalabilidade
* integração com serviços cloud

---

# 🛠️ Tecnologias utilizadas

## Frontend

* HTML5
* CSS3
* JavaScript
* Vite
* TailwindCSS
* LocalStorage

## Backend

* Node.js
* Express
* PostgreSQL
* pg
* dotenv
* cors
* JWT

## Cloud & Deploy

* Render
* PostgreSQL Render
* GitHub

---

# 📂 Estrutura do projeto

```bash
magazine/
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── config/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── src/
├── assets/
├── index.html
├── checkout.html
├── pedidos.html
├── package.json
├── vite.config.js
└── README.md
```


# Telas da Aplicação

<p align="center">
  <img src="https://raw.githubusercontent.com/tiagotsa/readme-assets/main/magazine-ecommerce/home.PNG" alt="Descrição" width="500px">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/tiagotsa/readme-assets/main/magazine-ecommerce/carinho.PNG" alt="Descrição" width="500px">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/tiagotsa/readme-assets/main/magazine-ecommerce/checkout.PNG" alt="Descrição" width="500px">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/tiagotsa/readme-assets/main/magazine-ecommerce/pedidos.PNG" alt="Descrição" width="500px">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/tiagotsa/readme-assets/main/magazine-ecommerce/rota-api-orders.PNG" alt="Descrição" width="500px">
</p>


<div align="center">

### Mobile

</div>


<p align="center">
  <img src="https://raw.githubusercontent.com/tiagotsa/readme-assets/main/magazine-ecommerce/mobile.PNG" alt="Descrição" width="300px">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/tiagotsa/readme-assets/main/magazine-ecommerce/moblie-carrinho.PNG" alt="Descrição" width="300px">
</p>




---

# 🎯 Funcionalidades

## 🛒 Carrinho de compras

* Adicionar produtos
* Remover produtos
* Atualização automática de valores
* Persistência no navegador

---

## 🔎 Catálogo de produtos

* Produtos masculinos
* Produtos femininos
* Filtros de categorias
* Exibição dinâmica

---

## 💳 Checkout

* Dados do cliente
* Endereço de entrega
* Integração com API
* Criação de pedidos

---

## 📦 Pedidos

* Registro automático
* Histórico da última compra
* Persistência no banco de dados

---

# 🌐 API REST

## Produtos

```http
GET /api/products
```

## Pedidos

```http
GET /api/orders
POST /api/orders
```

---

# ☁️ Deploy profissional no Render

O projeto foi estruturado para deploy utilizando:

| Serviço            | Função         |
| ------------------ | -------------- |
| Render Static Site | Frontend       |
| Render Web Service | Backend        |
| Render PostgreSQL  | Banco de Dados |

---

# 🚀 Como hospedar no Render

# 1️⃣ Suba o projeto para o GitHub

Crie um novo repositório:

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
```

Conecte ao GitHub:

```bash
git remote add origin https://github.com/seu-usuario/magazine-hashtag.git
```

Envie o projeto:

```bash
git push -u origin main
```

---

# 🗄️ 2️⃣ Criar banco PostgreSQL no Render

1. Acesse o painel do Render
2. Clique em **New +**
3. Escolha **PostgreSQL**
4. Configure:

| Campo    | Valor              |
| -------- | ------------------ |
| Name     | magazine-db        |
| Database | magazine           |
| User     | magazine_user      |
| Region   | Oregon / Frankfurt |

5. Clique em **Create Database**

Após criar:

Copie a variável:

```env
Internal Database URL
```

---

# ⚙️ 3️⃣ Deploy do Backend

# Criar Web Service

1. Clique em **New +**
2. Escolha **Web Service**
3. Conecte o repositório GitHub
4. Selecione a pasta backend

---

# Configuração do serviço

| Campo         | Valor        |
| ------------- | ------------ |
| Name          | magazine-api |
| Runtime       | Node         |
| Build Command | npm install  |
| Start Command | npm start    |

---

# Variáveis de ambiente

Configure:

```env
DATABASE_URL=sua_database_url
JWT_SECRET=seu_secret
PORT=10000
NODE_ENV=production
```

---

# Configuração obrigatória do servidor

No `server.js`:

```js
const PORT = process.env.PORT || 3001
```

---

# Configuração do PostgreSQL SSL

```js
ssl: {
  rejectUnauthorized: false
}
```

---

# Configuração do CORS

```js
app.use(cors({
  origin: '*'
}))
```

---

# 🌐 4️⃣ Deploy do Frontend

# Criar Static Site

1. Clique em **New +**
2. Escolha **Static Site**
3. Conecte o repositório

---

# Configuração

| Campo             | Valor                        |
| ----------------- | ---------------------------- |
| Build Command     | npm install && npm run build |
| Publish Directory | dist                         |

---

# 🔗 Configurar API no frontend

Altere a URL da API:

```js
const API_URL = 'https://magazine-api.onrender.com'
```

---

# 🔄 Deploy automático

Sempre que houver push:

```bash
git add .
git commit -m "update"
git push
```

O Render fará deploy automaticamente.

---

# 🧪 Estrutura final em produção

```bash
Frontend:
https://magazine-store.onrender.com

Backend:
https://magazine-api.onrender.com

Banco:
PostgreSQL Render
```

---

# ⚠️ Problemas comuns

# Erro de CORS

```js
app.use(cors())
```

---

# Erro PostgreSQL SSL

```js
ssl: {
  rejectUnauthorized: false
}
```

---

# Página branca no frontend

Verifique:

* Build do Vite
* Caminho do dist
* URL da API
* Variáveis de ambiente

---

# 🐳 Docker

## Build

```bash
docker build -t magazine-hashtag .
```

## Executar

```bash
docker run -p 9090:9090 magazine-hashtag
```

---

# 📈 Melhorias futuras

* Login de usuários
* Dashboard administrativo
* Integração com pagamentos
* Upload de produtos
* Testes automatizados
* CI/CD
* Docker Compose
* Kubernetes

---

# 📸 Preview

Adicione screenshots:

```bash
/assets/preview/home.png
/assets/preview/checkout.png
/assets/preview/orders.png
```

---

# 🤝 Contribuição

1. Faça um fork
2. Crie uma branch
3. Commit suas alterações
4. Abra um Pull Request

---

# 📄 Licença

Este projeto está sob a licença MIT.

---

# 👨‍💻 Autor

Desenvolvido por **Tiago Almeida**.

---

# ⭐ Apoie o projeto

Se este projeto foi útil:

* Deixe uma estrela ⭐
* Compartilhe o projeto

