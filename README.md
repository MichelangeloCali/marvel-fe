# App Marvel Frontend

Link de Produção você pode acessar aqui

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

### Contato do desenvolvedor:

- [LinkedIn](https://www.linkedin.com/in/michelangelocali/)
- Email: michelangelocali@hotmail.com
