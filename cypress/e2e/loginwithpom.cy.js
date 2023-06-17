import Login from "../PageObjects/LoginPage2.js";
const ln = new Login();
describe("2 files test ", () => {
  it("login test with pom", () => {
    ln.visit();
    cy.fixture("orange").then((data) => {
      ln.setUsername(data.username);
      ln.setPassword(data.password);
      ln.clicksubmit();
      ln.verifylogin();
    });
  });
});
