![Banner CodigoCerto](https://utfs.io/f/3b2340e8-5523-4aca-a549-0688fd07450e-j4edu.jfif)

<p align="center"> <strong>Código Certo - Equipe 02</strong></p>
  
<p align="center">Aplicação BackEnd do Projeto 1</P>

---

# Como inicializar o Projeto
Para inicializar o projeto é necessário ter o Docker Engine ou o Docker Desktop instalado.

**1. Clonar o projeto**

```
git clone git@github.com:duccini/codigocerto-docker.git
```

ou

```
git clone https://github.com/duccini/codigocerto-docker.git
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