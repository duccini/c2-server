# Etapa de construção
FROM node:20-alpine

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código da aplicação para o diretório de trabalho
COPY . .

# Compila o código TypeScript
RUN npm run build

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]

