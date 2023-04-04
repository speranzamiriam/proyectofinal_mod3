import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { headerPage } from "../../src/pages/components/header.page";
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

// Given('el usuario no pone ningun valor en el campo Visit Date',
//  async () => {    
//     await makeAppointment.guardarvisitDate("");   
    
// });

// Then('se verifica que el campo se encuentra en un estado invalido',
// async () => {  
//     expect( await makeAppointment.isInvalidovisitDate()).equal(true);  
// });


// Given('el usuario escribe el valor {string} que es una fecha invalida en el campo Visit Date',
//  async ( visitDate) => {    
//     await makeAppointment.guardarvisitDate(visitDate);        
// });
// Then('el usuario pasa a otro campo',
// async () => {  
//     await makeAppointment.guardarComment(" ");  
// });
// Then('se verifica que el campo se encuentra con la fecha actual',
// async () => {  
// const currentDate = new Date();
// const formattedDate = currentDate.toLocaleDateString("es-ES", {
//   day: "2-digit",
//   month: "2-digit",
//   year: "numeric"
// });
//     expect( await makeAppointment.getValorvisitDateTxt()).equal(formattedDate);  
// });