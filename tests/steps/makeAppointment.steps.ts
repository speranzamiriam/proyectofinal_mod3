import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { loginPage } from "../../src/pages/login.page";
import { makeAppointment } from "../../src/pages/makeAppointment.page";
import { homePage } from "../../src/pages/home.page";

setDefaultTimeout(60 * 1000);

       
Given('registro los datos de Facility {string}, Apply for hospital {string}, HealthcareProgram {string},VisitDate {string} y Comment {string}',
 async ( facility, apply, healthcareProgram,  visitDate , comment) => {    
    await makeAppointment.registrarInformacion(facility, apply, healthcareProgram,  visitDate , comment);   
    
});
When('el usuario hace click en el boton registrar', async function () {
    await makeAppointment.guardarInformacion();

});
Then('se verifican los valores guardados de Facility {string}, Apply for hospital {string}, HealthcareProgram {string},VisitDate {string} y Comment {string}',
async ( facility, apply, healthcareProgram,  visitDate , comment) => {  
    expect( await makeAppointment.getValorlblFacilityInfo()).equal(facility);     
    expect( await makeAppointment.getValorlblCommentInfo()).equal(comment);     
    expect( await makeAppointment.getValorlblVisitInfo()).equal(visitDate);     
    expect( await makeAppointment.getValorlblProgramInfo()).equal(healthcareProgram);     
    expect( await makeAppointment.getValorlblHospitalInfo()).equal(apply);     
     

});

Given('el usuario no pone ningun valor en el campo Visit Date',
 async () => {    
    await makeAppointment.guardarvisitDate("");   
    
});

Then('se verifica que el campo se encuentra en un estado invalido',
async () => {  
    expect( await makeAppointment.isInvalidovisitDate()).equal(true);  
});


Given('el usuario escribe el valor {string} que es una fecha invalida en el campo Visit Date',
 async ( visitDate) => {    
    await makeAppointment.guardarvisitDate(visitDate);        
});
Then('el usuario pasa a otro campo',
async () => {  
    await makeAppointment.guardarComment(" ");  
});
Then('se verifica que el campo se encuentra con la fecha actual',
async () => {  
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("es-ES", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
});
    expect( await makeAppointment.getValorvisitDateTxt()).equal(formattedDate);  
});


Given('Se registran {int} registros con los datos de Facility {string}, Apply for hospital {string}, HealthcareProgram {string},VisitDate {string} y Comment {string}',
 async ( cantidad,facility, apply, healthcareProgram,  visitDate , comment) => {   
    for(let contador = 1;contador<=cantidad;contador++) {
    await makeAppointment.registrarInformacion(facility, apply, healthcareProgram,  visitDate , comment); 
    await makeAppointment.guardarInformacion();  
    await homePage.irMenuHome();
    }
    
});