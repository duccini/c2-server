![Banner CodigoCerto](https://utfs.io/f/3b2340e8-5523-4aca-a549-0688fd07450e-j4edu.jfif)

<<<<<<< HEAD
<p align="center"> <strong>Bem-vindo ao repositório da Equipe de Desenvolvimento Código Certo Coders 02!</strong></p>
  
<p align="center"> Aqui você encontrará informações sobre nossa equipe e nossos projetos.</P>

---

## Sumário
- [Membros](#membros)
- [Projetos](#projetos-em-desenvolvimento)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

---

## Membros

- Tech Lead [Guilherme Duccini](https://www.linkedin.com/in/guilhermeduccini/)
- UX [Luana Stela](https://www.linkedin.com/in/luana-stela-arantes/)
- Desenvolvimento
  - Frontend [Carlos Levi](https://www.linkedin.com/in/carlos-levi-099761202/) | [José Carlos](https://www.linkedin.com/in/josecarlos0075/) | [Felipe Maia](https://www.linkedin.com/in/felipe-ma1a)
  - Backend [Caio Cesar](https://www.linkedin.com/in/caiocesarss) | [Carlos Daniel Freitas](https://www.linkedin.com/in/carlos806/) | [Victor Lucena](https://www.linkedin.com/in/victor-lucena-2ba1b6175/)
- DevOps [Benício Neto](https://www.linkedin.com/in/benicio-neto/) | [Heberton Geovane](https://www.linkedin.com/in/heberton-geovane/)
- QA [Túlio Santos](https://www.linkedin.com/in/tuliovpsantos/)

---

## Projetos em Desenvolvimento 📈

- **Projeto 1:** **Mais informações em breve** 🚧
- **Projeto 2:** **Mais informações em breve** 🚧

---

## Tecnologias Utilizadas 🛠️

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Nest.js](https://img.shields.io/badge/Nest.js-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![ClickUp](https://img.shields.io/badge/ClickUp-7B68EE?style=for-the-badge&logo=clickup&logoColor=white)
![Git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)

Estas são algumas das tecnologias utlizadas em nossos projetos.
=======
<p align="center"> <strong>Código Certo - Equipe 02</strong></p>
  
<p align="center">Aplicação BackEnd do Projeto 1</P>

---

# Como inicializar o Projeto
Para inicializar o projeto é necessário ter o Docker Engine ou o Docker Desktop instalado.

**1. Clonar o projeto**

```
git clone git@github.com:duccini/c2-server.git
```

ou

```
git clone https://github.com/duccini/c2-server.git
```

**2. Criar as imagens Docker:**
```
docker compose up
```

**3. Criar a base de dados**
- Abrir o pgAdmin: http://localhost:5050
- Nomear o server, pode ser qualquer nome, NestJS Docker
- Host: db
- user: postgre
- Senha: postgre

**4. Atualizar as imagens:**
Importar o TypeORM no arquivo app.module.ts
```
imports: [TypeOrmModule.forRoot(typeOrmConfig), TasksModule],
```

**5. Atualizar as imagens:**
```
docker compose up --build
```
>>>>>>> origin2/main
