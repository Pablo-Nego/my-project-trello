describe('Criar um card no Trello via API', () => {
  it('Deve criar um card com sucesso em um board e salvar o cardId', () => {
      cy.fixture('boardId.json').then(({ boardId }) => {
          const listName = 'To Do'; // Nome da lista do card
          const cardName = 'Meu Novo Card'; // Nome do card a ser criado
          const apiKey = '6a739412aeec973a670955ca88cbdc40';
          const apiToken = 'ATTA0a91e2907e04f1223880e8f1590cc9211b584ee9f20ed7a7bc55a5a2fa508609E734982B'; // Substitua pelo token correto

          // Passo 1: Buscar a lista de um board pelo nome
          cy.request({
              method: 'GET',
              url: `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${apiToken}`,
              headers: {
                  'Accept': 'application/json'
              },
              failOnStatusCode: false
          }).then((response) => {
              if (response.status === 404) {
                  cy.log('Board não encontrado ou lista não disponível. Verifique o ID do board e as permissões.');
                  return;
              }

              cy.log('Resposta da solicitação GET para listas do board:', JSON.stringify(response.body, null, 2));
            
              expect(response.status).to.eq(200);
            
              const lists = response.body;
              cy.log('Listas disponíveis no board:', JSON.stringify(lists, null, 2));
            
              const list = lists.find(l => l.name === listName);
            
              if (!list) {
                  cy.log('Lista não encontrada no board.');
                  return;
              }

              cy.log('Lista encontrada:', JSON.stringify(list, null, 2));
            
              // Passo 2: Criar um card na lista encontrada
              cy.request({
                  method: 'POST',
                  url: `https://api.trello.com/1/cards?key=${apiKey}&token=${apiToken}`,
                  body: {
                      name: cardName,
                      idList: list.id
                  },
                  headers: {
                      'Accept': 'application/json'
                  },
                  failOnStatusCode: false
              }).then((response) => {
                  cy.log('Resposta da solicitação POST para criar um card:', JSON.stringify(response.body, null, 2));
            
                  expect(response.status).to.eq(200);
                  expect(response.body).to.have.property('name', cardName);
                  expect(response.body).to.have.property('id');
            
                  const cardId = response.body.id;
                  cy.log('Card criado com ID:', cardId);

                  // Salvar o cardId em cardId.json
                  cy.task('writeFile', { fileName: 'cardId.json', content: { cardId: cardId } });
              });
          });
      });
  });
});
