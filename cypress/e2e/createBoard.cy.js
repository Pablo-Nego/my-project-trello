describe('Criar um board no Trello via API', () => {
    it('Deve criar um board com sucesso', () => {
      const boardName = 'Meu Novo Board'; // Nome do board
      const apiKey = '6a739412aeec973a670955ca88cbdc40';
      const apiToken = 'ATTA0a91e2907e04f1223880e8f1590cc9211b584ee9f20ed7a7bc55a5a2fa508609E734982B';
  
      cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/boards/?name=${boardName}&key=${apiKey}&token=${apiToken}`,
        headers: {
          'Accept': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', boardName);
        expect(response.body).to.have.property('id');
        
        const boardId = response.body.id;
        cy.writeFile('cypress/fixtures/boardId.json', { boardId }); // Armazena o boardId em um arquivo fixture
      });
    });
  });
  