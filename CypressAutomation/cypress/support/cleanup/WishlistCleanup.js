import { HomePage } from "../pageObjects/HomePage";
import { LoginOrRegisterButton } from "../pageObjects/LoginOrRegisterButton";
import { HeaderStrip } from "../pageObjects/HeaderStrip";
import { MyWishList } from "../pageObjects/MyWishListPOM";

export class WishlistCleanup {
  static cleanupWishlist() {
    HomePage.visitHomePage();

    LoginOrRegisterButton.doesBrowserHaveLoggedInCookie().then((isLoggedIn) => {
      if (isLoggedIn) {
        console.log("User is logged In!");
        HeaderStrip.selectMyWishlist();
      } else {
        LoginOrRegisterButton.clickButton();
        cy.fixture("johndoe").then(function (data) {
          this.data = data;
          LoginPage.login(this.data.loginname, this.data.password);
        });
      }
      MyWishList.deleteAllWishlistItems();
    });
  }
}
