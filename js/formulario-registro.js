$(document).ready(function(){
    
    $('#form_usuario').submit(function(e){
        //preventDefault() evita que el formulario se envíe por defecto, ya que primero validaremos.
        e.preventDefault();
        var nombre_usuario = $("#txt_nombre").val();
        var username = $("#txt_username").val();
        var email = $("#txt_email").val();
        var password = $("#txt_password").val();
        var pasword2 = $("#txt_password2").val();
        var fecha_nac = $("#txt_fecha_nac").val();
    
        // Validación campos vacíos
        if (nombre_usuario == "" || username == "" || email == "" ||
            password == "" || pasword2 == "" || fecha_nac == "" )
        {
            alert("Debe ingresar campos obligatorios");
            return false;
        }

        // Validación que las dos contraseñas sean iguales
        if (password != pasword2)
        {
            alert("Contraseñas deben ser iguales entre si");
            return false;
        }

        // Validación de rango de longitud de contraseña entre 6 y 18 caracteres
        if (password.length < 6 || password.length > 18)
        {
            alert("Contraseña debe tener una longitud entre 6 y 18 caracteres");
            return false;
        }
        // Validación para que la persona no sea a menor de 13 años
        var anios = calcular_anios(fecha_nac);
        console.log("años obtenidos: " + anios);

        if (anios < 13){
            alert("Persona no puede ser menor de 13 años");
            return false;
        }

    });

    function calcular_anios(fecha_nac){
        // convierte a milisegundos la fecha ingresada en el input "Fecha de Nacimiento" (con formato dd/mm/yyyy)
        var fecha_nac_milliseconds = new Date(fecha_nac).getTime();
        // Toma los milisegundos del instante actual en sistema (ahora mismo)
        var hoy_milliseconds = Date.now();
        // Calculo la diferencia entre los milisegundos de ahora menos los de la fecha de nacimiento ingresada
        var dif_anios_milliseconds = (hoy_milliseconds - fecha_nac_milliseconds);
        // operación matemática: convierto los milisegundos a segundos (divido por 1000), después dichos segundos
        // los convierto a días (divido por 86400 que son los segundos que tiene un día) y esos días los convierto
        // a años (dividiendo por 365). El resultado lo dejo como entero, sin decimales ni redondear con la función Math.floor
        var anios = Math.floor(((dif_anios_milliseconds / 1000) / 86400) / 365);

        console.log("fecha_nac_milliseconds: " + fecha_nac_milliseconds);
        console.log("hoy_milliseconds: " + Date.now());
        console.log("dif_anios (milliseconds): " + dif_anios_milliseconds );
        console.log("dif_anios (años): " +  anios);

        return anios;
    }

});