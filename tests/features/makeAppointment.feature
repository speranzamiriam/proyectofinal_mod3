@ui-tests
Feature: Registro de informacion en el formulario Make Appointment
Background: Login en la aplicacion katalon-demo
    Given el usuario ingresa al sistema


@Appointment @ui-tests
Scenario: El usuario registra correctamente la informacion Make Appointment 
    Given registro los datos de Facility "<Facility>", Apply for hospital "<Apply for hospital readmission>", HealthcareProgram "<HealthcareProgram>",VisitDate "<VisitDate>" y Comment "<Comment>"
    When el usuario hace click en el boton registrar
    Then se verifican los valores guardados de Facility "<Facility>", Apply for hospital "<Apply for hospital readmission>", HealthcareProgram "<HealthcareProgram>",VisitDate "<VisitDate>" y Comment "<Comment>"
    Examples:
    | Facility                       |Apply for hospital readmission|HealthcareProgram|VisitDate  |Comment     |
    | Hongkong CURA Healthcare Center|Yes                           |Medicaid         |12/05/2023 |El dia lunes|



@Appointment @ui-tests
Scenario: Validar que el campo Visit Date sea requerido
    Given el usuario no pone ningun valor en el campo Visit Date
    When el usuario hace click en el boton registrar
    Then se verifica que el campo se encuentra en un estado invalido
    

@Appointment @ui-tests
Scenario: Validar que si el usuario escribe una fecha invalida en el campo Visit Date,el sistema ponga por defecto la fecha actual
    Given el usuario escribe el valor "<FechaInvalida>" que es una fecha invalida en el campo Visit Date
    When el usuario pasa a otro campo
    Then se verifica que el campo se encuentra con la fecha actual
    Examples:
    | FechaInvalida                  |
    | 34555666                       |
    | unafehca                       |
    | 23/452024                      |