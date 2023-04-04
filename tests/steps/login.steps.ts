import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { loginPage } from "../../src/pages/login.page";
import { makeAppointment } from "../../src/pages/makeAppointment.page";
import { homePage } from "../../src/pages/home.page";

setDefaultTimeout(60 * 1000);


Given('el usuario ingresa al sistema', async () => {
    await homePage.ingresarMakeAppointment();
    const email = TESTDATA.email == '' ? process.env.EMAIL as string : TESTDATA.email;
    await loginPage.setEmail(email);
    const password = TESTDATA.password == '' ? process.env.PASSWORD as string : TESTDATA.password;
    await loginPage.setPassword(password);
    await loginPage.clickLogin();
});


Given('el usuario ingresa a la opcion Make Appointment', async () => {
    await homePage.ingresarMakeAppointment();
});

Given('el usuario ingresa el login', async function () {
    const email = TESTDATA.email == '' ? process.env.EMAIL as string : TESTDATA.email;
    await loginPage.setEmail(email);

});

Given('el usuario ingresa el password', async function () {
    const password = TESTDATA.password == '' ? process.env.PASSWORD as string : TESTDATA.password;
    await loginPage.setPassword(password);

});

When('el usuario hace click en el boton Login', async function () {
    await loginPage.clickLogin();
});

Then('se despliega una pagina con el titulo {string}', async function (titulo) {
    expect( await makeAppointment.getValorTitulo()).equal(titulo);    

});
