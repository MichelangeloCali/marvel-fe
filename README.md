# App Marvel Frontend

Link de Produção você pode acessar [aqui](https://marvel-fe.vercel.app/)

## O projeto foi desenvolvido com as seguintes stacks

- React js
- Typescript (para tipagem em tempo de desenvolvimento, visando boas práticas de código em legibilidade e manuntenibilidade).
- SCSS (SASS apenas para mixins, aninhamento de classes, sem Libs UIs).
- React Router Dom.
- Zustand e Context API.
- React Query (tanstack).
- Axios.
- Zod para validações e type checks.
- React Rook Form.
- Dayjs (para datas).
- Husky (precommit ativando eslint e prettier automaticamente, como boa prática de padronização).
- Eslint.
- Prettier.
- Cypress E2E
- Actions Github (CI)
- Vercel (CD)

## Arquitetura do Software e padrão

```
/public
/src
  └── /assets
  └── /api
  └── /configs
  └── /components
  └── /enums
  └── /hooks
  └── /libs
  └── /models
  └── /routes
  └── /stores
  └── /pages
  └── /types
  └── /utils
/App.tsx
/index.css
/main.tsx
/vite-env.d.ts
```

``Foi criado Testes E2E com Cypress para o flow de favoritar, onde testa quando o Usuário abre a aplicação, favorita um ou mais Herói e em seguida filtra a visualização para mostrar apenas os favoritos.``

``Foi criado também uma pipeline de CI com Actions do Github, adicionanto lint, typecheck. Em seguida, a aplicação é deployada automaticamente (CD) pela Vercel.``

## Rodar o projeto localmente:

Para rodar o projeto clone esse repositório, navegue até o diretório raiz e instale o `yarn`, tenha certeza de possuir o Node v.20 instalado globalmente em seu computador.
Em seguida, rode o comando `yarn dev` para rodar no navegador.

Você precisará ter acesso as envs:

```
# base URL
VITE_API_BASE_URL=

# Marvel API Key
VITE_MARVEL_PRIVATE_KEY=
VITE_MARVEL_PUBLIC_KEY=
```

## Rodar os testes E2E:

Para rodar os testes, basta iniciar o servidor local com `yarn dev` em seguida, em outro terminal, rode o comando `yarn cypress`.


### Contato do desenvolvedor:

- [LinkedIn](https://www.linkedin.com/in/michelangelocali/)
- Email: michelangelocali@hotmail.com
