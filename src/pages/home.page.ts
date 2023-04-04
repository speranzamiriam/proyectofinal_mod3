import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class HomePage extends BasePage {
    private makeAppointmentButton: string = '#btn-make-appointment';
    private menuIzquierdo: string = "#menu-toggle";
    private opcionHome: string = "//a[contains(text(),'Home')]";
    constructor(){
        super();
    }

    async irMenuHome() {

        await ElementActions.click(this.menuIzquierdo);
        await ElementActions.click(this.opcionHome);        
       
       
    }


    async ingresarMakeAppointment() {
        await ElementActions.click(this.makeAppointmentButton);
       
    }
}
export const homePage = new HomePage();