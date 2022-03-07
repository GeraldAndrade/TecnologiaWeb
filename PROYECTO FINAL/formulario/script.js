let formulario = $(document);
formulario.ready(inicializarEventos);

function inicializarEventos() {
  let formulario = $("#boton1");
  formulario.click(presionBoton1);
  formulario = $("#boton2");
  formulario.click(presionBoton2);
}

function presionBoton1() {
  let formulario = $("#formulario");
  formulario.html('<form>Nombre Completo: <input type="text" id = "nombre" >' +
  '<br><br>Correo electrónico:<input type="text" id="clave">' +
  '<br><br>Celular:<input type="text" id="clave"><br><br>' +
    '<br><br><textarea name="comentario"  rows="5" cols="50">Escribe tu comentario o duda</textarea><br><br>' +
    '<input type="submit" value="confirmar"></form>');
}
