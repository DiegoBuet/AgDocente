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
     /* { ACA SE CREA SOLA LA NUEVA VENTANA
        path: '/login-screen/',
        /*
        We can load it from url like:
        url: 'login-screen.html'
        But in this example we load it just from content string
        */
      /*  content: '\
        <div class="page no-navbar no-toolbar no-swipeback">\
            <div class="page-content login-screen-content">\
              <div class="login-screen-title">Agenda docente</div>\
              <form>\
                <div class="list">\
                </div>\
                <div class="list">\
                  <ul>\
                    <li><a href="#" class="list-button">Ingresar</a></li>\
                  </ul>\
                  <div class="block-footer">\
                    <p>Bienvenido, ya tienes una cuenta?</p>\
                    <p><a href="#" class="link back">Cerrar ventana de usuario</a></p>\
                  </div>\
                </div>\
              </form>\
            </div>\
          </div>'
        }
      */
    ]
    
    // ... other parameters
  });

var mainView = app.views.create('.view-main');
var email, latitud, longitud;

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  mostrar("Device is ready!");
});


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

$$(document).on('page:init', '.page[data-name="registro2"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  mostrar('init reg2');

  $$('#btnReg2').on('click', fnReg2);

});

/* MIS FUNCIONES */
function mostrar(txt) {
  if (test==1) {
    console.log(txt);
  }
}


function fnLogin() {
  // prueba@prueba.com - prueba
  email = $$('#logEmail').val(); 
  password = $$('#logPass').val();

  mostrar('email: ' +email);
  mostrar('password: ' +password);


  firebase.auth().signInWithEmailAndPassword(email, password)
  .then( function() {

       mainView.router.navigate("/panel/");


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
        mainView.router.navigate("/panel/");


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

var calendarDateTime = app.calendar.create({
  inputEl: '#demo-calendar-date-time',
  timePicker: true,
  dateFormat: { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' },
});
