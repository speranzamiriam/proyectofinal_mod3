import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { loginPage } from "../../src/pages/login.page";
import { makeAppointment } from "../../src/pages/makeAppointment.page";
import { homePage } from "../../src/pages/home.page";
import { history } from "../../src/pages/history.page";
setDefaultTimeout(60 * 1000);


When('el usuario ingresa a la opcion History', async function () {
    await history.irMenuHistory();

});
Then('se carga el panel History', async function () {
    
    expect( await history.isVisibleTitulo()).equal(true);  
});
Then('se verifican los valores de Historial de los campos Facility {string}, Apply for hospital {string}, HealthcareProgram {string},VisitDate {string} y Comment {string}',
async ( facility, apply, healthcareProgram,  visitDate , comment) => {  
    expect( await history.getValorlblFacilityInfo()).equal(facility);     
    expect( await history.getValorlblCommentInfo()).equal(comment);     
    expect( await history.getValorlblVisitInfo()).equal(visitDate);     
    expect( await history.getValorlblProgramInfo()).equal(healthcareProgram);     
    expect( await history.getValorlblHospitalInfo()).equal(apply);     
     

 });

