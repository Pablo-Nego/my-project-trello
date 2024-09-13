🚀 Trello API Tests
Este repositório contém testes automatizados para a API do Trello usando Cypress. Os testes cobrem operações básicas com boards e cards, incluindo criação, atualização e exclusão.

🧪 Testes Disponíveis
1. Adicionar Membros ao Board
Objetivo: Adiciona membros ao board recém-criado.
Método: PUT
Endpoint: https://api.trello.com/1/boards/{boardId}/members/{username}
Requisitos: Substitua username1 e username2 pelos usernames reais dos membros a serem adicionados.
2. Criar Board
Objetivo: Cria um novo board e verifica se ele está na lista de boards.
Método: POST para criar o board, GET para listar boards.
Endpoints:
https://api.trello.com/1/boards/
https://api.trello.com/1/members/me/boards
3. Criar Card
Objetivo: Cria um card em uma lista dentro de um board existente e verifica se o board está na lista de boards.
Método: POST para criar o card, GET para listar boards.
Endpoints:
https://api.trello.com/1/boards/
https://api.trello.com/1/boards/{boardId}/lists
https://api.trello.com/1/cards
https://api.trello.com/1/members/me/boards
4. Deletar Board
Objetivo: Deleta um board existente.
Método: DELETE
Endpoint: https://api.trello.com/1/boards/{boardId}
5. Deletar Card
Objetivo: Cria um card e depois o exclui.
Método: POST para criar o card, DELETE para deletar o card.
Endpoints:
https://api.trello.com/1/boards/
https://api.trello.com/1/boards/{boardId}/lists
https://api.trello.com/1/cards
https://api.trello.com/1/cards/{cardId}
⚙️ Configuração
Instale as dependências:

npm install

🚀 Executar os Testes
Para executar todos os testes, use o comando:

npx cypress run

Para executar um teste específico, use o comando:

npx cypress run --spec 'cypress/e2e/filename.cy.js'

Substitua 'cypress/e2e/filename.cy.js' pelo caminho para o arquivo de teste desejado.

🤝 Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções. Para adicionar novos testes ou fazer ajustes, siga os padrões estabelecidos nos arquivos de teste existentes.

📜 Licença
Este projeto está licenciado sob a MIT License.