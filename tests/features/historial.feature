@ui-tests @History
Feature: Registro de informacion en el formulario Make Appointment
Background: Login en la aplicacion katalon-demo
    Given el usuario ingresa al sistema   


@History @ui-tests
Scenario: El usuario ve el historico correctamente
    Given registro los datos de Facility "<Facility>", Apply for hospital "<Apply for hospital readmission>", HealthcareProgram "<HealthcareProgram>",VisitDate "<VisitDate>" y Comment "<Comment>"
    When el usuario hace click en el boton registrar
    And  el usuario ingresa a la opcion History
    Then se carga el panel History
    And se verifican los valores de Historial de los campos Facility "<Facility>", Apply for hospital "<Apply for hospital readmission>", HealthcareProgram "<HealthcareProgram>",VisitDate "<VisitDate>" y Comment "<Comment>"
    Examples:
    | Facility                       |Apply for hospital readmission|HealthcareProgram|VisitDate  |Comment     |
    | Hongkong CURA Healthcare Center|Yes                           |Medicaid         |12/05/2023 |El dia lunes|

@History @ui-tests
Scenario: El usuario ve la cantidad de registros historicos correcta
    Given Se registran <Cantidad> registros con los datos de Facility "<Facility>", Apply for hospital "<Apply for hospital readmission>", HealthcareProgram "<HealthcareProgram>",VisitDate "<VisitDate>" y Comment "<Comment>"
    And  el usuario ingresa a la opcion History
    Then se carga el panel History
    And se verifican que la cantidad de registros historicos sea de <Cantidad>
    Examples:
    | Facility                       |Apply for hospital readmission|HealthcareProgram|VisitDate  |Comment     |Cantidad|
    | Hongkong CURA Healthcare Center|Yes                           |Medicaid         |12/05/2023 |El dia lunes|2       |


