## NLW Heat

[] Conteúdo Técnico
    [x] Criar Projeto
    <br>
    [x] Instalar Express, Prisma, Typescript
    [x] Configurar Github OAuth
    [x] Criar rota login github
    [x] Criar rota callback
    [x] Autenticação usuário recebendo o código
    [x] Cadastro de mensagem
    [x] Configuração websocket
    [x] Retornar 3 últimas mensagens
    [] Criar profile do users


Express:
yarn add express
yarn add -D @types/express typescript ts-node-dev

Prisma:
yarn add prisma -D
yarn prisma init
yarn prisma migrate dev (cria migration)
yarn prisma studio (mostra estrutura models no schema)

Axios:
yarn add axios
yarn add @types/axios -D (instalar tipagens do axios como dependencia de desenvolvimento)

Socket.io:
yarn add socket.io
yarn add @types/socket.io -D

Cors:
yarn add cors
yarn add @types/cors -D

JSON Web Token:
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D

Iniciar aplicação:
cd backend && npm run dev || yarn dev

Subir no git:
PS E:\NLW-7> git add .
PS E:\NLW-7> git commit -m "ajuste readme"
PS E:\NLW-7> git push


Perguntar para Adri:
AuthenticateUserService linha 50, pq usar let e o que é?