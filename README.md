api_sqlite
==========

Exemplo de uma API Rest escrita em Javascript com [Node](https://nodejs.org/en/about), [Express](https://github.com/expressjs/express), [Sequelize](https://github.com/sequelize/sequelize) e [SQLite](https://www.sqlite.org).

## Pré-Requisitos

Você vai precisar ter instalado em seu sistema:

  * [Git](https://git-scm.com/downloads)
  * [Node.js](https://tecadmin.net/install-nodejs-with-nvm)
  * [NPM](https://www.npmjs.com/get-npm) ou [Yarn](https://yarnpkg.com/pt-BR/docs/install)
  * [Visual Studio Code](https://code.visualstudio.com/download) (**VSCode**), mas somente no ambiente de desenvolvimento.

No ambiente de desenvolvimento, também recomendamos instalar no **VSCode** a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

Use o **_REST Client_** para testar os endereços relacionados no arquivo **_endpoints.rest_**.

Mas se preferir, você pode utilizar qualquer cliente como [Postman](https://www.getpostman.com), [Insomnia](https://insomnia.rest/download), [httpie](https://httpie.org/doc#installation) ou simplesmente o comando **_curl_** para testar a Api.

## Instalação

O primeiro passo é clonar o projeto para o seu sistema:

```
git clone https://github.com/Marhc/api_sqlite.git
```

Depois, mude para a pasta que foi criada:

```bash
cd api_sqlite
```

A partir daí o procedimento varia conforme o ambiente de instalação.

### No ambiente de produção

Instale somente as dependências de produção:

```
npm install --only=prod
```

E inicie a aplicação digitando:

```
npm run start
```

### No ambiente de desenvolvimento

Instale todos os componentes, tanto de produção como de desenvolvimento:

```
npm install
```

Depois, inicie a Api em modo de desenvolvimento com o comando:

```
npm run dev
```

## Advertência

Esse é apenas um projeto de exemplo e muitos recursos necessários para o funcionamento em produção não foram incluídos na aplicação.

Recursos não incluídos:

- Validação
- Autenticação
- _Query String parsing_

O objetivo inicial do projeto foi apenas exercitar os conceitos básicos envolvidos na criação de uma Api simples, porém escalável. Portanto, **_NÃO USE ESSA API EM PRODUÇÃO_**.

## Lançamentos futuros

Sinta-se a vontade para contribuir com algum recurso que considerar importante. Você só precisa fazer um **_fork_** do projeto e submeter um **_Pool Request_** da sua contribuição.

## Licença

Esse projeto está licenciado sob a licença [MIT](https://choosealicense.com/licenses/mit), isso significa que você é livre para:

- **Compartilhar**: copiar, distribuir e usar o código.
- **Criar**: produzir trabalhos a partir do projeto.
- **Adaptar**: modificar, transformar e desenvolver o código incluído no projeto.

Desde que:

- **Atribua a fonte**: você deve atribuir qualquer uso público do projeto ou trabalhos produzidos a partir do projeto, usando um link semelhante a esse:

  "Construído com Restpy: https://github.com/Marhc/api_sqlite".

Para qualquer uso ou redistribuição do projeto, ou trabalhos produzidos a partir dele, você deve deixar claro qual foi a licença utilizada e manter intactos os avisos originais.

Este texto não é uma licença em si e seu conteúdo não faz parte da licença real.

Leia atentamente a licença completa [MIT](https://choosealicense.com/licenses/mit) para saber os termos exatos que se aplicam.

## Direitos Autorais

Por favor, preserve o aviso de direitos autorais ao usar ou redistribuir esse projeto:

"Copyright (c) 2019 Marcio Coutinho. Alguns direitos reservados."
