<h1 align="center">Projeto Trybers and Dragons</h1>
<p align="center">Esse projeto foi desenvolvido usando os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de RPG (Role Playing Game).</p>

---

<br>

<h2 align="center">📃 Sobre o Projeto</h2>

<p align="center">O projeto foi desenvolvido em <b>TypeScript</b>, que é um superconjunto sintático estrito e serve para potencializar a linguagem JavaScript tornando-a uma linguagem de tipagem estática.
  A ideia do projeto é simular desde a criação de personagens e inimigos customizados até épicas batalhas PVP (player vs player) e PVE (player vs environment).
</p>

<br>

---

### 🛠 Tecnologias e Bibliotecas utilizadas no desenvolvimento do projeto

- **[Node.js](https://nodejs.org/en/)**

- **[TypeScript](https://www.typescriptlang.org/pt/)**

- **[POO](https://www.freecodecamp.org/portuguese/news/programacao-orientada-a-objetos-em-javascript-explicada-com-exemplos/)**

- **[SOLID](https://www.treinaweb.com.br/blog/principios-solid-single-responsability-principle)**

---

### 🚀 Como executar o projeto

_Pré-requisitos_

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-docker/) caso opte por rodar em container.

É recomendado ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

_1- Clonar o repositorio_

```jsx
git clone git@github.com:TonyyCruz/trybers-and-dragons.git
```

---


<details>
  <summary><strong>:whale: Rodando no Docker</strong></summary><br />
  
  ## Com Docker
 
 
_Rode o serviço `node` com o comando_

```jsx
  docker-compose up -d
```

- Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

_Via CLI use o comando_
```jsx
docker exec -it trybers_and_dragons bash
```
- Ele te dará acesso ao terminal interativo do container trybers_and_dragons(node) criado pelo compose, que está rodando em segundo plano.

_Instale as dependências `dentro do container` com_

```jsx
npm install
```

⚠️Atenção: Caso opte por utilizar o Docker, TODOS os scripts disponíveis no package.json devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec.
  
  </details>
  
---
  
<details>
  <summary><strong>:computer: Rodando Localmente</strong></summary><br />
 
 _Instale as dependências com o comando_
 
 ```jsx
npm install
```
- Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  - Recomenda-se a versão `^16`

</details>

---


### 💡 Scripts prontos
<details>
  <summary><strong>Scripts</strong></summary><br />

  - Iniciar o servidor Node:
  ```sh
    npm start
  ```

  - Iniciar o servidor Node com nodemon:
  ```sh
    npm run dev
  ```

  <br />
</details>

---
