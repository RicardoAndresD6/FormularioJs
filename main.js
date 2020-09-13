
function validation() {
  var a = document.form.nombres.value;
  var b = document.form.apellidos.value;
  var c = document.form.rut.value;
  var d = document.form.edad.value;
  var e = document.form.email.value;
  var f = document.form.especialidad.value;
  var h = document.form.fecha.value;

  var imprimir = "Estimado(a) " + a + " " + b + " , su hora para " + f + " ha sido reservada para el " + h +
    ". Además, se le envió un mensaje a su correo " + e + " con el detalle de su cita. Gracias por preferirnos";


  if (a == "" || b == "" || c == "" || d == "" || e == "" ) {
    alert("Ingresa los campos vacíos");
    return false;
  }



  if (/^[A-Za-z ]+$/.test(a) == false) {
    alert('Nombres incorrectos. Ingrese solo letras.');


  } else if (/^[A-Za-z ]+$/.test(b) == false) {
    alert('Apellidos incorrectos. Ingrese solo letras.');


  } else if (/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(c) == false) {
    alert('Rut incorrecto. Ingrese solo números con letra k si corresponde.');


  } else if (/^[0-9]+$/.test(d) == false) {
    alert('Edad incorrecta. Ingrese solo números.');


  } else if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(e)) {
    alert('Mail incorrecto.');
  }

  else if (h == "")
  {
    alert('Ingrese una fecha de atención');
  }

else {alert (imprimir);}

}
