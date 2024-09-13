BoardAPI
describe('Trello API', () => {
  const apiUrl = 'https://api.trello.com/1';
  const apiKey = 'sua_chave_api';
  const apiToken = 'seu_token_api';

  it('Lista todos os quadros criados pelo usuário', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/members/me/boards`,
      qs: {
        fields: 'name,url',
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });

    cy.request({
      method: 'GET',
      url: `${apiUrl}/members/me/boards`,
      qs: {
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });

  it('Cria um quadro', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/boards`,
      qs: {
        name: 'DEV - TICKETS',
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });

  it('Consulta as listas contidas no quadro', () => {
    const boardId = 'idboard';
    cy.request({
      method: 'GET',
      url: `${apiUrl}/boards/${boardId}/lists`,
      qs: {
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });

  it('Atualiza um quadro', () => {
    const boardId = 'idboard';
    cy.request({
      method: 'PUT',
      url: `${apiUrl}/boards/${boardId}`,
      qs: {
        name: 'nome do board',
        desc: 'descrição',
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });

  it('Consulta todos os cards em um determinado quadro', () => {
    const boardId = 'idboard';
    cy.request({
      method: 'GET',
      url: `${apiUrl}/boards/${boardId}/cards`,
      qs: {
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });

  it('Exclui um quadro', () => {
    const boardId = 'idboar';
    cy.request({
      method: 'DELETE',
      url: `${apiUrl}/boards/${boardId}`,
      qs: {
        key: apiKey,
        token: apiToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });
});
