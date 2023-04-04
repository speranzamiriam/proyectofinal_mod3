@login @ui-tests
Feature: Login en la aplicacion katalon-demo

Scenario: Iniciar sesión correctamente en el sitio web 
    Given el usuario ingresa a la opcion Make Appointment
    And el usuario ingresa el login
    And el usuario ingresa el password
    When el usuario hace click en el boton Login
    Then se despliega una pagina con el titulo "Make Appointment" 


