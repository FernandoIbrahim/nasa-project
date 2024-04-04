# nasa-project
Projeto está sendo implementado durante o curso de Node da plataforma ZeroToMastery, com o objetivo do desenvolvimento das competências necessárias para a criação de uma API restful. 

Durante o curso de node da ZTM somos solicitados a desenvolver uma solução para um site da "Nasa", a qual deseja gerenciar os lançamentos dos seus foguetes à exoplanetas. Nesse contexto a plataforma nos fornece o frontend e devemos implementar uma API para o mesmo.

O projeto foi desenvolvido em Node junto a framework Express.


## Execução

Para executar o projeto por completo, vá para o diretório raiz no console e execute o seguinte comando:

``` cmd
npm run deploy
```

Para a execução apenas do backend implementado por mim deve ser executado o seguinte comando:

``` cmd
npm run server
```

Após a execução dessas instruções a aplicação passa a rodar nas porta 8000 da máquina local e pode ser acessada no seguinte link ```http://localhost:8000```

## Rotas

### Lançamentos

| Método | Rota                          | Descrição                             |
| :----: | ----------------------------- | ------------------------------------- |
|  GET   | `/launches`               | Consultar os lançamentos criados     |
|  GET   | `/launches/{id}`          | Consultar um lançamento pelo ID        |
|  POST  | `/launches`               | Criar um novo lançamento              |


### Planetas


| Método | Rota                          | Descrição                             |
| :----: | ----------------------------- | ------------------------------------- |
|  GET   | `/planets`               | Consultar os planetas  |



