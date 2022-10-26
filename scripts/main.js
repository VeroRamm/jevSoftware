
const templates={
    home:`
    <div id="home" class="active">
        <img src="../img/banner-central-jpg-1536x751.jpg" alt="bannerCentral" class="bannerCentral">
        <div class="cardPrincipal">
            <div class="card">
            <i class="fa-solid fa-check icono"></i>
                <h5 class="cardTitulo">La mejor relacion calidad precio</h5>
                <p>Nuestros clientes nos eligen por tener los mejores precios del mercado.</p>
            </div>
            <div class="card">
                <i class="fa-solid fa-bolt icono"></i>
                <h5 class="cardTitulo">Entregas en tiempo y forma</h5>
                <p>Más de 200 envíos exitosos en tres años  avalan nuestro trabajo.</p>
            </div>
            <div class="card">
                <i class="fa-regular fa-gem icono"></i>
                <h5 class="cardTitulo">Soporte post-venta sin cargo</h5>
                <p>Sabemos del esfuerzo que realizas al adquirir nuestros productos, 
                por eso desde JEV SOFTWARE estamos con vos en todo momento.</p>
            </div>
        </div>
      
    </div>
    `,
    //Se creo una seccion para mostrar asesoria
    asesoria: `
    <div class="asesoria active" id="asesoria">
        <img src="../img/inpulsa-tu-negocio-psym69fm86ap2py85u3ysrm4lj25fhapaav3m1k26o.jpg" alt="">
        <div class="texto">
          <h3 class="titulo">PROPULSAMOS TU EMPRESA</h3>
          <p>Tenemos a tu disposición un equipo que mejorará e impulsará tu empresa.

            Desarrollamos tu web por una mínima inversión mensual y te garantizamos tu «.com» profesional.
          
            Posicionamiento prioritario en los buscadores.
          
            Insertamos tu empresa en todas las redes sociales y te asesoramos en el uso de  Facebook, Instagram y Google Ads.
          </p>
        </div>
      </div>
    `,
    //Se creo una seccion para mostrar simuladores
    simuladores: `
    <div class="simuladores active" id="simuladores">
      <div class="texto"> 
        <h3 class="titulo">
          SIMULADORES DE CONDUCCION A MEDIDA.
        </h3>
        <p>
          Realizamos los mejores simulares relación calidad/precio del país. 

          Simuladores TC
          Simuladores para pruebas de conducción
          Simuladores para uso general.

          También alquilamos para eventos! 
        </p>
      </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../img/1-scaled.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../img/2-scaled.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../img/3-scaled.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


</div>
    `,
    //Se creo una seccion para mostrar arcades
    arcade: `  
    <div class="arcade active" id="arcade">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../img/1-arcade.jpg" class="d-block w-90 " alt="...">
      </div>
      <div class="carousel-item">
        <img src="../img/2-arcade.jpg" class="d-block w-90" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../img/3-arcade.jpg" class="d-block w-90" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
      <div class="texto"> 
        <h3 class="titulo">
            Arcades
        </h3>
        <p>
          Desarrollamos estas máquinas nostálgicas con 32000 juegos y más de 20 consolas. Los vinilos son personalizables junto a las consolas incorporadas.  

          También desarrollamos consolas retro, pedestales, bartop.
        </p>
      </div>
  </div>
   `,
   // Se creo una seccion para mostrar los datos de contacto
    consultas: ` 
    <div id="consultas" class="active consultas">
        <h1 class="titulo">Consultas</h1>
        <div class="mapa-consulta">
        <form action="" id="formulario" class = "formulario" @submit="checkForm">
          
          <input v-model= "nombre" class= "input" type="text" id="nombre" name="nombre" placeholder="Nombre">
          
          <input v-model= "apellido" class= "input" type="text" id="apellido" name="apellido" placeholder="Apellido">
          
          <input v-model = "email" class= "input" type="email" id="email" name="email" placeholder="Email">
         
          <textarea v-model= "mensaje" class= "inputText" name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>
          <input class= "boton" type="submit" value="Enviar">
          </form> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.6073750227333!2d-60.47744668506866!3d-35.11651369231692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bedc32db0129d9%3A0xf5eeff95059908d6!2s12%20de%20Octubre%202342%2C%20Bragado%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1666749281803!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        <div class="redes">
        
        </div>
    </div>`
}       


const app = new Vue({   // Vue instance         
    el: '#app',
    data: {
        view: 'home',
    },
    components:{
        home: {
            data: function(){
                return {
                  
                   view: 'home',
                }
            },
            template: templates.home,
        },
        asesoria: {
            data: function(){
                return {
                    view: 'asesoria',
                }
            },
            template: templates.asesoria,
        },      
        simuladores: {
            data: function(){
                return {
                   
                    view: 'simuladores',
                }
            },
            template: templates.simuladores,
            
        },
        arcade:{
            data: function(){
                return{
                    view:'arcade',
                }
            },
            template: templates.arcade,
        },
        consultas: {
            data: function(){
                return {
                    titulo: 'Envianos tu comentario',
                    view: 'consultas', 
                    nombre: '',
                    apellido: '',
                    email: '',
                    mensaje: '',          
                }
            },
            template: templates.consultas,  
            methods: {
                checkForm: function(e){
                    e.preventDefault();
                    if(this.nombre == '' || this.apellido == '' || this.email == '' || this.mensaje == ''){
                        alert('Por favor complete todos los campos');
                    }else{
                        alert('Mensaje enviado');
                    }

                }
        },
    }, 
    methods: {
        changeView(view){
            this.view = view
        }, 
    },
    },
  
})