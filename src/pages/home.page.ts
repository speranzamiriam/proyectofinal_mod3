import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class HomePage extends BasePage {
    private makeAppointmentButton: string = '#btn-make-appointment';

    constructor(){
        super();
    }

  


    async ingresarMakeAppointment() {
        await ElementActions.click(this.makeAppointmentButton);
       
    }
}
export const homePage = new HomePage();