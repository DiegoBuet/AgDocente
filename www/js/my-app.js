var test=1
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [      
      {
        path: '/index/',
        url: 'index.html',
      },
      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/panel/',
        url: 'panel.html',
      },
      {
        path: '/registro1/',
        url: 'registro1.html',
      },
      {
        path: '/registro2/',
        url: 'registro2.html',
      },
      {
        path: '/calendario/',
        url: 'calendario.html',
      },
      {
        path: '/principal/',
        url: 'principal.html',
      },
      {
        path: '/msemana/',
        url: 'msemana.html',
      },
      {
        path: '/psemana/',
        url: 'psemana.html',
      },
      {
        path: '/cursos/',
        url: 'cursos.html',
      },
      {
        path: '/dictado/',
        url: 'dictado.html',
      },
      {
        path: '/personalizacion/',
        url: 'personalizacion.html',
      },
      {
        path: '/curso1/',
        url: 'curso1.html',
      },
      {
        path: '/curso2/',
        url: 'curso2.html',
      },
      {
        path: '/curso2/',
        url: 'curso2.html',
      },
      {
        path: '/datosal/',
        url: 'datosal.html',
      },
            
     
    ]
    
    // ... other parameters
  });

var mainView = app.views.create('.view-main');
var email, latitud, longitud;
var p = 1;
var arrayId =[];

// Handle Cordova Device Ready Event
//crearcurso


//.then( function () {

  //mainView.router.navigate('/about/');

//});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
  mostrar(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    mostrar("init index");
    $$("#btnLogin").on("click", fnLogin);
})

$$(document).on('page:init', '.page[data-name="panel"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  mostrar('init panel');
  $$('#btnGal').on('click', fnGaleria);
  $$('#btnCam').on('click', fnCamara);
});

$$(document).on('page:init', '.page[data-name="registro1"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  mostrar('init reg1');

  $$('#btnReg1').on('click', fnReg1);


});

$$(document).on('page:init', '.page[data-name="principal"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  

});

$$(document).on('page:init', '.page[data-name="registro2"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  mostrar('init reg2');

  $$('#btnReg2').on('click', fnReg2);

});
$$(document).on('page:init', '.page[data-name="principal"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  

});
$$(document).on('page:init', '.page[data-name="msemana"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  $$("#btnmSemana").on("click", mSemanaD);
  $$("#guardarMsem").on("click", mSemana);


});
$$(document).on('page:init', '.page[data-name="psemana"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  

});
$$(document).on('page:init', '.page[data-name="cursos"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  
  $$("#rompamo").on("click", function(){ 
        $$("#contenedorCurso"+p).append(" <div id='muestra' class='col button button-fill'><button id='mostrar'>Lista Alumnos</button></div><div id='traerM'></div><button type='button' class='link sheet-close btn btn-secondary col-50' data-dismiss='modal'>Cerrar</button><button class='col button button-fill color-grey'><p><a type='button' href='#' data-sheet='.my-sheet' class='sheet-open button button-fill'> Abrir Coso</a></p></button><div><table id='tablaAlumno' class='table table-bordered'><thead><tr class='bg-dark text-light'><th scope='col'>Nombre</th><th scope='col'>Apellido</th><th scope='col'>Curso</th><th scope='col'>Materia</th><th scope='col'>Email</th><th scope='col'>teléfono</th></tr></thead><tbody id='bodyAlumnos'></tbody> </table>      </div>");
        

    $$("#contenedorCurso").append("<div class='col button button-fill color-red' id='"+p+"'><a href='curso"+p+"'><input id='"+p+"'></a></div>");
    $$("#"+p).append("'<div id='muestra' class='col button button-fill'><button id='mostrar'>Lista Alumnos</button></div><div id='traerM'></div><button type='button' class='link sheet-close btn btn-secondary col-50' data-dismiss='modal'>Cerrar</button><button  class='col button button-fill color-grey'><p><a type='button' href='#' data-sheet='.my-sheet' class='sheet-open button button-fill '> Abrir Coso</a></p></button><div><table id='tablaAlumno' class='table table-bordered'><thead><tr class='bg-dark text-light'><th scope='col'>Nombre</th><th scope='col'>Apellido</th><th scope='col'>Curso</th><th scope='col'>Materia</th><th scope='col'>Email</th><th scope='col'>teléfono</th></tr></thead><tbody id='bodyAlumnos'></tbody></table></div><div class='sheet-modal sheet-modal-top' style='height: auto'><div class='sheet-modal-inner'><div class=''><div id='btnSumarAlumno' class='sheet-modal my-sheet' style='height: auto'><div id='modalAltaEdicion' class='sheet-modal-inner'><div class='sheet-modal-swipe-step'><form id='formAl' ><div class='modal-body'><div class='form-group'><label>Nombre</label><input id='nombreAl' type='text' class='form-control'></div><div class='form-group'><label>Apellido</label><input id='apellidoAl' type='text' class='form-control'></div><div class='form-group'><label>Curso</label><input id='cursoAl' type='text' class='form-control'></div><div class='form-group'><label>Materia</label><input id='materiaAl' type='text' class='form-control'></div><div class='form-group'><label>Email</label><input id='emailAl' type='email' class='form-control'></div><div class='form-group'><label>Teléfono</label><input id='telefonoAl' type='text' class='form-control'></div></form></div><div class='row'><button type='button' id='agregarAl' class='btn btn-primary col-50'>Agregar</button><button type='button' class='link sheet-close btn btn-secondary col-50 data-dismiss=modal'>Cerrar</button><button type='button' id='guardarDatosAl' class='col button button-fill color-grey'>Guardar</button></div></div></div></div></div></div>")
    p++;


  })

  //var panelRight = app.panel.get('.panel-right-1');
  //panelRight.on('open', function () {
 // console.log('Panel right: open');
//});

});
$$(document).on('page:init', '.page[data-name="dictado"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  

});

$$(document).on('page:init', '.page[data-name="personalizacion"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  $("#btnRojo").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("rojo");
    });
  $("#btnVerde").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("verde");
    });
  $("#btnAzul").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("azul");
    });
  $("#btnRosa").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("rosa");
    });
  $("#btnAmarillo").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("amarillo");
    });
  $("#btnNaranja").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("naranja");
    });
  $("#btnVioleta").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("violeta");
    });
  $("#btnPurpura").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("purpura");
    });
  $("#btnGris").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("gris");
    });
  $("#btnNegro").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("negro");
    });
  $("#btnCeleste").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("celeste");
    });
  $("#btnVerdeClaro").on("click", function () {
    $("#cambiarColor").removeClass("tema rojo verde azul rosa amarillo naranja violeta purpura gris negro celeste verdeaz").addClass("verdeaz");
    });
  

});
$$(document).on('page:init', '.page[data-name="datosal"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  $$("#guardaAl").on("click", datosAlumnos);

});
$$(document).on('page:init', '.page[data-name="curso2"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  //probando desplegar tabla
  $$("#mostrar").on("click", vamoAver);
  $$("#guardarDatosAl").on("click", function(){
    console.log($$("#nombreAl").val())
    dbPublicacion = firebase.firestore();
    var sumarAlumn =
    {
      
      nombre: $$("#nombreAl").val(),
      apellido: $$("#apellidoAl").val(),
      curso: $$("#cursoAl").val(),
      materia: $$("#materiaAl").val(),
      email: $$("#emailAl").val(),
      telefono: $$("#telefonoAl").val(),      
      
    
      
    };
    dbPublicacion.collection("datosAl").sadd(sumarAlumn)
    .then(function()
  {
    app.dialog.alert("Subida con exito");
    console.log("Subida con exito");
    
    $$("#nombreAl").val(""),
    $$("#apellidoAl").val(""),
    $$("#cursoAl").val(""),
    $$("#materiaAl").val(""),
    $$("#emailAl").val(""),
    $$("#telefonoAl").val("")  
  })
  .catch(function(error) 
  {
    app.dialog.alert("Error al subir un documento:  ", error);
    console.error("Error al subir un documento:  ", error);
  });
});
$$("#mostrar").on("click", function(){

  dbPublicacion = firebase.firestore();
  var docRef = dbPublicacion.collection("datosAl");
  docRef.get().then(function(doc) 
  {    
    doc.forEach(element => 
    {
      console.log(element.data());
      $$("#muestra").append('<div id="1"></div>');
      $$("#").append('<input type="text" id="nes" value="'+element.data().nombre+'">');
    });
  })
  .catch(function(error) 
  {
    console.log("Error getting document:", error);
  });


})
  //app.request.post('curso1.html', {  }, function (el) {
   
  //$$('#tabla1').html(data);
  //app.dataTable.create('.mytable'); 
   
// });
 
 

});


$$(document).on('page:init', '.page[data-name="curso1"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  //probando desplegar tabla
  $$("#agregarAl").on("click", guardarDatAl)
  app.request.post('curso1.html', {  }, function (el) {
   
  $$('#tabla1').html(data);
  app.dataTable.create('.mytable'); 
   
 });
 
 

});

$$(document).on('page:init', '.page[data-name="calendario"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  

  var calendarDateTime = app.calendar.create({
    inputEl: '#demo-calendar-date-time',
    timePicker: true,
    dateFormat: { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' },
  });
  
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var weekLater = new Date().setDate(today.getDate() + 7);
  var calendarEvents = app.calendar.create({
      inputEl: '#demo-calendar-events',
      events: [
        {
          from: today,
          to: weekLater
        },
        //- more events this day
        {
          date: today,
          color: '#ff0000'
        },
        {
          date: today,
          color: '#00ff00'
        },
      ]
  });

  

});


/* MIS FUNCIONES */
function mostrar(txt) {
  if (test==1) {
    console.log(txt);
  }
}
$$('.my-sheet').on('sheet:open', function (e) {
  console.log('my-sheet open');
});
$$('.my-sheet').on('sheet:opened', function (e) {
  console.log('my-sheet opened');
});

function fnLogin() {
  // prueba@prueba.com - prueba
  email = $$('#logEmail').val(); 
  password = $$('#logPass').val();

  mostrar('email: ' +email);
  mostrar('password: ' +password);


  firebase.auth().signInWithEmailAndPassword(email, password)
  .then( function() {

       mainView.router.navigate("/principal/");


  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    $$('#logMensaje').html(errorMessage);
    // ...
  });
}
function fnReg1() {
  email = $$('#regEmail').val(); 
  password = $$('#regPass').val();

  mostrar('email: ' +email);
  mostrar('password: ' +password);
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(  function() {
    
    mainView.router.navigate("/registro2/");
    
  }  )
  
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

  function fnReg2() {

    var db = firebase.firestore();
    var colPersonas = db.collection('Personas');

    claveDeColeccion = email;
    nombre = $$('#regNombre').val();
    apellido = $$('#regApellido').val();

    datos = {
        nombre: nombre,
        apellido: apellido,
        foto: 'no',
        latitud: latitud,
        longitud: longitud
    }

    colPersonas.doc(claveDeColeccion).set(datos)
    .then( function() {
        mainView.router.navigate("/principal/");


    })

    .catch( function(e) {

        
    });
  }
function fnGaleria() {

  navigator.camera.getPicture(onSuccessCamara,onErrorCamara,
  {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  });

}

function fnCamara() {

  navigator.camera.getPicture(onSuccessCamara,onErrorCamara,
  {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA
  });


}
function onSuccessCamara(imageURI) {

  $$('#perFoto').attr('src',imageURI);

}
function onErrorCamara(message) {
  alert('Failed because: ' + message);

}
;
$$("#nuevaf").on("click",)
calendar:open

function calendario () {
  return (calendarDateTime)

};
function datosAlumnos () {
  var db = firebase.firestore();  
  var colAlumnos = db.collection('alumnos');
  var fechaEnMiliseg = ""+ Date.now();

  
  

  nombre=""+ $$("#nombreAl").val();
  apellido=""+ $$("#apellidoAl").val();
  curso=""+ $$("#cursoAl").val();
  materia=""+ $$("#materiaAl").val();
  email=""+ $$("#emailAl").val();
  telefono=""+ $$("#telefonoAl").val();

  datos = {
    nombre: nombre,
    apellido: apellido,
    curso: curso, 
    materia: materia,
    email: email,
    telefono: telefono

  };

  colAlumnos.doc(fechaEnMiliseg).set(datos)
      .then(function(){ 
      alert("datos ingresados");
  } );

  





};
function mSemana () {
  var db = firebase.firestore();  
  var colmSemana = db.collection('miSemana');
  
  

  

  datosMsem = {
    hmL1:$$("#1hmL").val(),
    hmL2:$$("#2hmL").val(),
    hmL3:$$("#3hmL").val(),
    hmL4:$$("#4hmL").val(),
    hmL5:$$("#5hmL").val(),
    hmL6:$$("#6hmL").val(),

    htL1:$$("#1htL").val(),
    htL2:$$("#2htL").val(),
    htL3:$$("#3htL").val(),
    htL4:$$("#4htL").val(),
    htL5:$$("#5htL").val(),
    htL6:$$("#6htL").val(),

    hnL1:$$("#1hnL").val(),
    hnL2:$$("#2hnL").val(),
    hnL3:$$("#3hnL").val(),
    hnL4:$$("#4hnL").val(),
    hnL5:$$("#5hnL").val(),
    hnL6:$$("#6hnL").val(),
    
    hmMar1:$$("#1hmMar").val(),
    hmMar2:$$("#2hmMar").val(),
    hmMar3:$$("#3hmMar").val(),
    hmMar4:$$("#4hmMar").val(),
    hmMar5:$$("#5hmMar").val(),
    hmMar6:$$("#6hmMar").val(),

    htMar1:$$("#1htMar").val(),
    htMar2:$$("#2htMar").val(),
    htMar3:$$("#3htMar").val(),
    htMar4:$$("#4htMar").val(),
    htMar5:$$("#5htMar").val(),
    htMar6:$$("#6htMar").val(),

    hnMar1:$$("#1hnMar").val(),
    hnMar2:$$("#2hnMar").val(),
    hnMar3:$$("#3hnMar").val(),
    hnMar4:$$("#4hnMar").val(),
    hnMar5:$$("#5hnMar").val(),
    hnMar6:$$("#6hnMar").val(),

    hmMie1:$$("#1hmMie").val(),
    hmMie2:$$("#2hmMie").val(),
    hmMie3:$$("#3hmMie").val(),
    hmMie4:$$("#4hmMie").val(),
    hmMie5:$$("#5hmMie").val(),
    hmMie6:$$("#6hmMie").val(),

    htMie1:$$("#1htMie").val(),
    htMie2:$$("#2htMie").val(),
    htMie3:$$("#3htMie").val(),
    htMie4:$$("#4htMie").val(),
    htMie5:$$("#5htMie").val(),
    htMie6:$$("#6htMie").val(),

    hnMie1:$$("#1hnMie").val(),
    hnMie2:$$("#2hnMie").val(),
    hnMie3:$$("#3hnMie").val(),
    hnMie4:$$("#4hnMie").val(),
    hnMie5:$$("#5hnMie").val(),
    hnMie6:$$("#6hnMie").val(),

    hmJ1:$$("#1hmJ").val(),
    hmJ2:$$("#2hmJ").val(),
    hmJ3:$$("#3hmJ").val(),
    hmJ4:$$("#4hmJ").val(),
    hmJ5:$$("#5hmJ").val(),
    hmJ6:$$("#6hmJ").val(),

    htJ1:$$("#1htJ").val(),
    htJ2:$$("#2htJ").val(),
    htJ3:$$("#3htJ").val(),
    htJ4:$$("#4htJ").val(),
    htJ5:$$("#5htJ").val(),
    htJ6:$$("#6htJ").val(),

    hnJ1:$$("#1hnJ").val(),
    hnJ2:$$("#2hnJ").val(),
    hnJ3:$$("#3hnJ").val(),
    hnJ4:$$("#4hnJ").val(),
    hnJ5:$$("#5hnJ").val(),
    hnJ6:$$("#6hnJ").val(),

    hmV1:$$("#1hmV").val(),
    hmV2:$$("#2hmV").val(),
    hmV3:$$("#3hmV").val(),
    hmV4:$$("#4hmV").val(),
    hmV5:$$("#5hmV").val(),
    hmV6:$$("#6hmV").val(),

    htV1:$$("#1htV").val(),
    htV2:$$("#2htV").val(),
    htV3:$$("#3htV").val(),
    htV4:$$("#4htV").val(),
    htV5:$$("#5htV").val(),
    htV6:$$("#6htV").val(),

    hnV1:$$("#1hnV").val(),
    hnV2:$$("#2hnV").val(),
    hnV3:$$("#3hnV").val(),
    hnV4:$$("#4hnV").val(),
    hnV5:$$("#5hnV").val(),
    hnV6:$$("#6hnV").val(),

    hmS1:$$("#1hmS").val(),
    hmS2:$$("#2hmS").val(),
    hmS3:$$("#3hmS").val(),
    hmS4:$$("#4hmS").val(),
    hmS5:$$("#5hmS").val(),
    hmS6:$$("#6hmS").val(),

    htS1:$$("#1htS").val(),
    htS2:$$("#2htS").val(),
    htS3:$$("#3htS").val(),
    htS4:$$("#4htS").val(),
    htS5:$$("#5htS").val(),
    htS6:$$("#6htS").val(),

    hnS1:$$("#1hnS").val(),
    hnS2:$$("#2hnS").val(),
    hnS3:$$("#3hnS").val(),
    hnS4:$$("#4hnS").val(),
    hnS5:$$("#5hnS").val(),
    hnS6:$$("#6hnS").val(),

    hmD1:$$("#1hmD").val(),
    hmD2:$$("#2hmD").val(),
    hmD3:$$("#3hmD").val(),
    hmD4:$$("#4hmD").val(),
    hmD5:$$("#5hmD").val(),
    hmD6:$$("#6hmD").val(),

    htD1:$$("#1htD").val(),
    htD2:$$("#2htD").val(),
    htD3:$$("#3htD").val(),
    htD4:$$("#4htD").val(),
    htD5:$$("#5htD").val(),
    htD6:$$("#6htD").val(),

    hnD1:$$("#1hnD").val(),
    hnD2:$$("#2hnD").val(),
    hnD3:$$("#3hnD").val(),
    hnD4:$$("#4hnD").val(),
    hnD5:$$("#5hnD").val(),
    hnD6:$$("#6hnD").val(),

    

  };

  colmSemana.doc().set(datosMsem)
      .then(function(){ 
      alert("datos ingresados");
  } );



};

function mSemanaD (){
  var db = firebase.firestore();  
  var docRef = db.collection("miSemana").doc(datosMsem);
  
  db.collection("miSemana").doc("datosMsem")
      .onSnapshot(function(doc) {
          console.log("", doc.data());
      });

}
//Tratando de recuperar los datos

function recSem () {


  var recuperaSem = firebase.database().ref('miSemana/' + postId + '/datosMsem');
  starCountRef.on('value', (snapshot) =>{
    const data = snapshot.val();
    updateStarCount(postElement, data);
  });
}
//tratando de traer el id
//private void datosAlumno (){
 // mFirestore.collection(collectionPath:"datosAl")}

 function vamoAver(){


  db=firebase.firestore();
   var tabla = document.getElementById("bodyAlumnos");
   db.collection("datosAl").onSnapshot((querySnapshot)=> {
     tabla.innerHTML = "";
     querySnapshot.forEach((doc)=>{
       console.log(`${doc.id}=>${doc.data()}`);       
       tabla.innerHTML +=`
       <tr>
            
       <td>${doc.data().nombre}</td>
       <td>${doc.data().apellido}</td>
       <td>${doc.data().curso}</td>
       <td>${doc.data().materia}</td>
       <td>${doc.data().email}</td>
       <td>${doc.data().telefono}</td>
       </tr>
       `
      // arrayId.push(doc.id);

     })
     //console.log(arrayId);
    
   }
   )
 };



//function guardarDatAl (){
function guardarD(){
  


  dbPublicacion = firebase.firestore();
  var sumarAlumn =
  {
    //id:$$('#id').val(),
    nombre: $$("#nombre").val(),
    apellido: $$("#apellidoAl").val(),
    curso: $$("#cursoAl").val(),
    materia: $$("#materiaAl").val(),
    email: $$("#emailAl").val(),
    telefono: $$("#telefonoAl").val()
    
  };
  idFirebase = id;
    if(idFirebase == ''){
     idFirebase = coleccionProductos.push().key;
    };
    data = {
      codigo:codigo, 
      descripcion: 
      descripcion, 
      cantidad:cantidad
    };
    actualizacionData = {};
    actualizacionData[`/${idFirebase}`] = data;
    coleccionProductos.update(actualizacionData);
    id = '';
    $('formAl').trigger('reset');
  dbPublicacion.collection("datosAl").add(sumarAlumn)
  .then(function()
  {
    app.dialog.alert("Subida con exito");
    console.log("Subida con exito");
  })
  .catch(function(error) 
  {
    app.dialog.alert("Error al subir un documento:  ", error);
    console.error("Error al subir un documento:  ", error);
  });
}

