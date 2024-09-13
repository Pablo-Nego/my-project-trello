describe('Criar um board no Trello via API', () => {
  // Descreve o bloco de testes para a criação de um board no Trello usando a API.
  it('Deve criar um board com sucesso', () => {
      // Define o nome do board que será criado.
      const boardName = 'Meu Novo Board'; // Nome do board
      // Define as credenciais da API (substitua pelos valores reais).
      const apiKey = 'apiKey'; // Substitua 'apiKey' pela sua chave de API do Trello.
      const apiToken = 'apiToken'; // Substitua 'apiToken' pelo seu token de API do Trello.

      // Faz uma solicitação HTTP POST para criar um novo board no Trello.
      cy.request({
          method: 'POST', // Método HTTP para criar um recurso.
          url: `https://api.trello.com/1/boards/?name=${boardName}&key=${apiKey}&token=${apiToken}`, // URL da API para criar um board, incluindo o nome do board e credenciais de autenticação.
          headers: {
              'Accept': 'application/json' // Define o cabeçalho 'Accept' para informar ao servidor que a resposta deve ser no formato JSON.
          }
      }).then((response) => {
          // Verifica a resposta da solicitação.
          expect(response.status).to.eq(200); // Verifica se o status da resposta é 200 (OK), indicando sucesso.
          expect(response.body).to.have.property('name', boardName); // Verifica se a resposta contém a propriedade 'name' com o valor do nome do board.
          expect(response.body).to.have.property('id'); // Verifica se a resposta contém a propriedade 'id', que é o identificador único do board.

          // Obtém o ID do board criado a partir da resposta.
          const boardId = response.body.id;
          // Armazena o ID do board em um arquivo fixture para que possa ser reutilizado em outros testes.
          cy.writeFile('cypress/fixtures/boardId.json', { boardId }); // Salva o boardId no arquivo 'boardId.json' na pasta 'fixtures'.
      });
  });
});
