import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";
 class History extends BasePage {
    // Locators
   
    private menuIzquierdo: string = "#menu-toggle";
    private opcionHistory: string = "//a[@href='history.php#history']";
    private titulo: string = "//section[@id='history']/div/div/div/h2";
    private lblFacilityInfo: string = "#facility";
    private lblHospitalInfo: string = "#hospital_readmission";
    private lblProgramInfo: string = "#program";
    private lblVisitInfo: string = "//section[@id='history']/div/div[2]/div/div/div";
    private lblCommentInfo: string = "#comment";
    

    constructor(){
        super();
    }

  


    async irMenuHistory() {

        await ElementActions.click(this.menuIzquierdo);
        await ElementActions.click(this.opcionHistory);        
       
       
    }
    async isVisibleTitulo ()
    {           
        ElementActions.pausar();
        return await ElementActions.isElementVisibleExistent(this.titulo);  
    }

    async getValorlblFacilityInfo() {
        await ElementActions.isElementVisible(this.lblFacilityInfo);        
        return await ElementActions.getElementText(this.lblFacilityInfo);
       
       
    }
    async getCantidadlblFacilityInfo() {
        await ElementActions.isElementVisible(this.lblFacilityInfo);        
        return await ElementActions.getCountElement(this.lblFacilityInfo);
       
       
    }



    async getValorlblHospitalInfo() {
        await ElementActions.isElementVisible(this.lblHospitalInfo);        
        return await ElementActions.getElementText(this.lblHospitalInfo);
        
       
    }
    async getValorlblProgramInfo() {
        await ElementActions.isElementVisible(this.lblProgramInfo);        
        return await ElementActions.getElementText(this.lblProgramInfo);
       
       
    }
    async getValorlblVisitInfo() {
        await ElementActions.isElementVisible(this.lblVisitInfo);        
        return await ElementActions.getElementText(this.lblVisitInfo);
     
       
    }
    async getValorlblCommentInfo() {
        await ElementActions.isElementVisible(this.lblCommentInfo);        
        return await ElementActions.getElementText(this.lblCommentInfo);       
       
    }

   

  
   
}
export const history = new History();