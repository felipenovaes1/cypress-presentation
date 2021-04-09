/// <reference types="cypress" />
/* global Given, Then, When */

import HomePage from "../Pages/Home/HomePage";
import UserPage from "../Pages/User/UserPage";

const homePage = new HomePage();
const userPage = new UserPage();

const comment = "Comentário de teste" + new Date().getTime();

Given("eu busquei pelo jogador {}", (username) => {
  homePage.goToHome();
  homePage.searchUser(username);
});

When("eu adiciono um comentário", () => {
  userPage.createComment(comment);
});

Then("o comentário deverá ser exibido", () => {
  expect(userPage.getFirstComment().should("have.text", comment));
});
