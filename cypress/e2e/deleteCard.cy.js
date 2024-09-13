describe('Deve excluir um board existente', () => {
  it('Deve excluir um board existente', () => {
      cy.fixture('boardId.json').then((data) => {
          const boardId = data.boardId; // Obtém o boardId do arquivo fixture
          const apiKey = 'apiKey';
          const apiToken = 'apiToken';

          // Verifique se o board existe
          cy.request({
              method: 'GET',
              url: `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`,
              failOnStatusCode: false // Não falhar se o board não for encontrado
          }).then((response) => {
              if (response.status === 200) {
                  // Se o board existir, exclua-o
                  cy.request({
                      method: 'DELETE',
                      url: `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`,
                      failOnStatusCode: false // Não falhar se a exclusão não for bem-sucedida
                  }).then((deleteResponse) => {
                      cy.log('Resposta da solicitação DELETE para excluir o board:', JSON.stringify(deleteResponse.body, null, 2));
                      // Verifique se a exclusão foi bem-sucedida
                      expect(deleteResponse.status).to.eq(200);
                      // Em vez de verificar se o corpo está vazio, apenas verifique o status da resposta
                      expect(deleteResponse.body).to.be.empty; // Pode não ser necessário verificar o corpo para DELETE
                  });
              } else if (response.status === 404) {
                  // Se o board não existir, registre uma mensagem e passe o teste
                  cy.log('Board não encontrado para exclusão:', JSON.stringify(response.body, null, 2));
              } else {
                  // Falha o teste se houver outro erro
                  cy.log('Erro ao verificar o board:', JSON.stringify(response.body, null, 2));
                  expect(response.status).to.eq(200); // Falha o teste se a resposta não for 200
              }
          });
      });
  });
});
