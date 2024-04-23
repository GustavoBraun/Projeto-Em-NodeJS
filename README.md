# Projeto por Gustavo Neves Braun

Projeto criado com o intuito de aprender mais sobre nodejs e Express. 
Ele simula um sistema simples com 3 entidades:
    Room, que representam aulas.
    Subjects, que representam materias.
    Video, que representam as gravações das aulas.

Para iniciar, confirme que possui tanto o node quanto o postgree instalados. As variaveis de configuração do banco de dados estão amarzenadas no arquivo .env, altere se for necessário para se conectar ao seu banco.
Utilize o comando npm run dev para iniciar o sistema, o comando migration:generate para gerar as migrations do banco de dados e o migration:run para executar as migrations. A documentação do sistema feita com swagger está na URL /api-docs.
