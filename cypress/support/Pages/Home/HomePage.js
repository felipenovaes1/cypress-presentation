/// <reference types="cypress" />

import { searchButton, searchInput } from "./HomePageElements";

class HomePage {
  goToHome() {
    cy.visit("/");
  }

  searchUser(user) {
    cy.get(searchInput()).type(user);
    cy.get(searchButton()).click();
  }

  getSearchInput() {
    return cy.get(searchInput());
  }
}

export default HomePage;
