let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#boton2");
  x.click(ocultar)
  x = $("#boton1");
  x.click(mostrar)
}
function ocultar() {
  let x = $("p");
  x.empty();
}
function mostrar() {
  $("p").html('<p>Servidor es un software que se ocupa de responder a las peticiones de ciertos usuarios de una red, denominados clientes, ofreciéndoles determinados servicios. El servidor informático es un programa o aplicación que requiere del hardware de un computador, por lo que complementa los aspectos lógicos y físicos de la computación. Incluso, un mismo computador puede albergar diferentes servidores simultáneamente.</p>');
}
(function(){
  var actualizarHora=function(){
    var fecha=new Date(),
    horas=fecha.getHours(),
    ampm,
    minutos= fecha.getMinutes(),
    segundos=fecha.getSeconds(),
    diaSemana=fecha.getDay(),
    dia=fecha.getDate(),
    mes=fecha.getMonth(),
    year=fecha.getFullYear();


  var pHoras=document.getElementById('horas'),
      pAMPM=document.getElementById('ampm'),
      pMinutos=document.getElementById('minutos'),
      pSegundos=document.getElementById('segundos'),
      pDiaSemana=document.getElementById('diaSemana'),
      pDia=document.getElementById('dia'),
      pMes=document.getElementById('mes'),
      pYear=document.getElementById('year');
    var semana=['Domingo','Lunes','Martes','Miecoles','Jueves','Viernes','Sabado'];
        pDiaSemana.textContent=semana[diaSemana];
        pDia.textContent=dia;
    var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pMes.textContent=meses[mes];
        pYear.textContent=year;
    if(horas>=12){
        horas=horas-12;
        ampm='PM';
    }
    else{
      ampm='AM';
    }
    if(horas==0){
      horas=12;
    }
    pHoras.textContent=horas;
    pAMPM.textContent=ampm;
    if(minutos<10){
      minutos="0" + minutos;
    }
    if(segundos<10){
      segundos="0" + segundos;
    }
    pMinutos.textContent=minutos;
    pSegundos.textContent=segundos;
  } 
  actualizarHora();
  var intervalo=setInterval(actualizarHora, 1000);
}
())
function saludar(){
  alert("PROYECTO FINAL DE LA MATERIA TECNOLOGIA WEB I UPDS")
};