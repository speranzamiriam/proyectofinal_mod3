import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";
 class MakeAppointment extends BasePage {
    // Locators
   
    private makeAppointmentTitle: string = "//section[@id='appointment']/div/div/div/h2";

    private comboFacility: string = "#combo_facility";
    private visitDateTxt: string = "#txt_visit_date";
    private commentTxt: string = "#txt_comment";
    private btnRegistrar: string = "#btn-book-appointment";
    private chkReadmision: string = "#chk_hospotal_readmission";
    private programs: string = "//input[@name='programs'][@value='$VALUE$']";
    private lblFacilityInfo: string = "#facility";
    private lblHospitalInfo: string = "#hospital_readmission";
    private lblProgramInfo: string = "#program";
    private lblVisitInfo: string = "#visit_date";
    private lblCommentInfo: string = "#comment";







    constructor(){
        super();
    }

  


    async getValorTitulo() {
        await ElementActions.isElementVisible(this.makeAppointmentTitle);        
        return await ElementActions.getElementText(this.makeAppointmentTitle);
       
    }
    async registrarInformacion (facility : string, apply: string, healthcareProgram : string,  visitDate: string , comment: string)
    {
        if(apply=="Yes"){
        await ElementActions.click(this.chkReadmision);
        }
        await ElementActions.click(this.programs.replace("$VALUE$",healthcareProgram));
        
        await ElementActions.setCombo(this.comboFacility, facility);   
        await ElementActions.setText(this.visitDateTxt, visitDate);   
        await ElementActions.setText(this.commentTxt, comment);
       
        //await ElementActions.clickCheck(healthcareProgram);       
        
    }
    async guardarvisitDate (visitDate : string)
    {
        
        await ElementActions.setText(this.visitDateTxt, visitDate);  
    }
    async guardarComment (comment : string)
    {
        await ElementActions.ClickText(this.commentTxt);  
        await ElementActions.setText(this.commentTxt, comment);  
    }

    async isInvalidovisitDate ()
    {
           
        return await ElementActions.isElementVisibleExistent("input#txt_visit_date[required]:invalid");  
    }
    async getValorvisitDateTxt() {
        await ElementActions.getValueElement(this.visitDateTxt);        
        return await ElementActions.getValueElement(this.visitDateTxt);      
       
    }

   
    async guardarInformacion ()
    {
           
        await ElementActions.click(this.btnRegistrar);        
        //await ElementActions.pausar();
    }

    async getValorlblFacilityInfo() {
        await ElementActions.isElementVisible(this.lblFacilityInfo);        
        return await ElementActions.getElementText(this.lblFacilityInfo);
       
       
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
export const makeAppointment = new MakeAppointment();