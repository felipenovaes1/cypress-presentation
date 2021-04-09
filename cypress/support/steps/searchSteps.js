/// <reference types="cypress" />
/* global Given, Then, When */

import HomePage from "../Pages/Home/HomePage";
import UserPage from "../Pages/User/UserPage";

const homePage = new HomePage();
const userPage = new UserPage();

let userNameExpect;

Given("eu acesso a home da aplicação", () => {
  homePage.goToHome();
});

When("realizo uma busca pelo usuário {}", (userName) => {
  homePage.searchUser(userName);
  userNameExpect = userName;
});

Then(
  "eu deverei ser redirecionado para a tela de detalhes de invocador",
  () => {
    cy.location().should((location) => {
      expect(location.pathname).contains("/summoner");
    });
  }
);

And("o meu nome de invocador deverá ser exibido", () => {
  expect(userPage.getNickName().should("have.text", userNameExpect));
});

Then("eu deverei continuar na tela inicial", () => {
  cy.location().should((location) => {
    expect(location.pathname).to.equal("/app/");
  });
});

Then("o campo de busca deverá exibir uma borda vermelha", () => {
  expect(
    homePage
      .getSearchInput()
      .should("have.css", "border")
      .and("match", /2px solid/)
  );
});
