import {
  userNickname,
  commentBox,
  commentsList,
  createCommentButton,
} from "./UserElements";

class UserPage {
  getNickName() {
    return cy.get(userNickname());
  }

  createComment(comment) {
    cy.get(commentBox()).type(comment);
    cy.get(createCommentButton()).click();
    cy.wait(1500);
  }

  getFirstComment() {
    return cy.get(commentsList()).first();
  }
}

export default UserPage;
