import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class LoginPage extends BasePage {
   private username: string = '#txt-username';
    private password: string = '#txt-password';
    private loginButton: string = '#btn-login';

    constructor(){
        super();
    }

    async setEmail(text: string) {        
        await ElementActions.setText(this.username, text);
    }

    async setPassword(text: string) {        
        await ElementActions.setText(this.password, text);
    }

    async clickLogin() {
        await ElementActions.click(this.loginButton);
    }

    async login(emailInput: string, passwordInput: string) {
        await ElementActions.setText(this.username, emailInput);
        await ElementActions.setText(this.password, passwordInput);
        await ElementActions.click(this.loginButton);
    }
}

export const loginPage = new LoginPage();