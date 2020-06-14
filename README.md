<h1 align="center">
<img src="/.github/logo-purple.svg" width="180"/>

<br />

</h1>

<h4 align = "center">
  GoBarber
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/FLVieira/gobarber">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/FLVieira/gobarber">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/FLVieira/gobarber">

  <a href="https://github.com/FLVieira/gobarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/FLVieira/gobarber">
  </a>
  
  <a href="https://github.com/FLVieira/fastfeet/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/FLVieira/gobarber">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/FLVieira/gobarber">
</p>

<p align="center">
  <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a> |
  <a href="#instalação-e-execução">Instalação</a> |
  <a href="#-licença">Licença</a>
</p>

Este é um projeto criado no Bootcamp da Rocketseat. Nele desenvolvemos um serviço apelidado de GoBarber onde os usuários 
podem se cadastrar como prestador de serviços na aplicação web feita em ReactJS, e outros usuários podem agendar horário 
com estes prestadores através do aplicativo desenvolvido em React Native, sendo toda a lógica gerenciada pela api, feita em NodeJS .


## Instalação e execução

1. git clone https://github.com/FLVieira/gobarber.git
2. cd gobarber

## Backend /

```
# Acessar diretório 
$ cd gobarberbackend
```

#### Pré-requisitos:

Ferramentas -

- Yarn/Npm
- Docker

Serviços -

- Postgres
- Redis
- Mongodb

#### Configurando as variavéis de ambiente

1. Renomeie o arquivo '.env_example' para '.env' e substitua as informações de configuração conforme explicado nos passos seguintes

2. É necessário ter uma instância de banco de dados postgres rodando e a partir dela criar uma base de dados com um nome qualquer, adicionando então, estes dados ao arquivo de configuração

> \$ docker run --name gobarber-postgres -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres

```
# Database
DB=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
```

4. Devemos instânciar também o redis e o mongodb, e alterar os dados no arquivo .env

> \$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

> \$ docker run --name gobarber-mongo r -p 27017:27017 -d -t mongo

```
MONGO_URL=mongodb://localhost:27017/gobarber
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

5. Para simular o envio de emails utilizamos o serviço [mailtrap.io](https://mailtrap.io). Crie uma conta e coloque os dados fornecidos por eles nas linhas abaixo do arquivo .env

```
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=
```
#### Iniciado a aplicação

Depois de configurada as variavéis de ambiente e, tendo o postgres, o mongodb e o redis rodando podemos iniciar a api

1. Rodamos o comando yarn para fazer a instalação das dependências passadas no package.json

   > yarn

2. Executamos as migrations para criar as tabelas no banco de dados

   > yarn sequelize db:migrate

3. Rodamos a aplicação da api

   > yarn dev

4. Rodamos a aplicação da fila

   > yarn queue

## Rotas

Se tudo ocorreu bem até aqui significa que a api está rodando, agora, para poder testar as rotas dessa aplicação basta importar o arquivo insomnia.json para o seu insomnia.

## Frontend /

```
# Acessar diretório 
$ cd gobarberweb
```

Pré-requisitos:

- Backend da aplicação executando.

```
# Vá no seu terminal e digite os seguintes comandos:
1. yarn 
2. yarn start
```

## Mobile /

```
# Acessar diretório 
$ cd gobarbermobile
```

Pré-requisitos:

- Backend da aplicação executando.

```
# Configure o arquivo api.js dentro de src/services e o configure de acordo com as configurações do seu emulador. 
# Se você estiver usando um dispositivo físico:
1 - No caso de um IOS, basta trocar o endereço contido por 'localhost'.
2 - No caso de um dispositivo android, coloque o endereço IPV4 da rede local do seu computador.

# Vá no seu terminal e digite os seguintes comandos:
1. yarn 
2. yarn react-native start
3. yarn react-native run-android ( ou run-ios )
```

## Tecnologias utilizadas

### Frontend

- ⚛ **React** — Biblioteca para construir interfaces de usuário
- ⚛ **Redux** — Gerenciamento de estado (inclui Saga e Persist)
- 🔥 **Axios** — Requisições HTTP
- 💅 **CSS** — styled-components
- 💖 **Lint** — ESlint/Prettier/Editor Config


### Backend

- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md)
- [bee-queue](https://github.com/bee-queue/bee-queue)
- [cors](https://github.com/expressjs/cors)
- [date-fns](https://github.com/date-fns/date-fns)
- [dotenv](https://github.com/motdotla/dotenv)
- [express](https://github.com/expressjs/express)
- [express-async-errors](https://github.com/davidbanham/express-async-errors)
- [express-handlebars](https://github.com/ericf/express-handlebars)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [mongoose](https://github.com/Automattic/mongoose)
- [multer](https://github.com/expressjs/multer)
- [nodemailer](https://github.com/nodemailer/nodemailer)
- [nodemailer-express-handlebars](https://github.com/yads/nodemailer-express-handlebars)
- [pg](https://github.com/brianc/node-postgres)
- [pg-hstore](https://github.com/scarney81/pg-hstore)
- [sequelize](https://github.com/sequelize/sequelize)
- [sequelize-cli](https://github.com/sequelize/cli)
- [youch](https://github.com/poppinss/youch)
- [yup](https://github.com/jquense/yup)

### Mobile

- [axios](https://github.com/axios/axios)
- [date-fns](https://github.com/date-fns/date-fns)
- [immer](https://github.com/immerjs/immer)
- [prop-types](https://github.com/facebook/prop-types)
- [react](https://github.com/facebook/react)
- [react-native](https://github.com/facebook/react-native)
- [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler)
- [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-navigation](https://github.com/react-navigation/react-navigation)
- [react-redux](https://github.com/reduxjs/react-redux)
- [reactotron-react-native](https://github.com/infinitered/reactotron-react-native)
- [reactotron-redux](https://github.com/infinitered/reactotron-redux)
- [reactotron-redux-saga](https://github.com/infinitered/reactotron-redux-saga)
- [redux](https://github.com/reduxjs/redux)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [redux-saga](https://github.com/redux-saga/redux-saga)
- [styled-components](https://github.com/styled-components/styled-components)

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
