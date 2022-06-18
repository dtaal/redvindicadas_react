let recursos=[
    {
        "id":1,
        "titulo":"La ciudadanía sexual: un aporte al disfrute - IDEP",
        "formato":"Documento pdf",
        "link":"https://revistas.idep.edu.co/index.php/mau/article/download/1741/1711#:~:text=Luis%20Miguel%20Berm%C3%BAdez%3A%20la%20ciudadan%C3%ADa,hab%C3%ADa%20sido%20excluida%20por%20tab%C3%BA"
    },
    {
        "id":2,
        "titulo":"Educación en ciudadanía sexual  Consensos Mínimos",
        "formato":"Video",
        "link":"https://youtu.be/IuZLvb2zMP4"
    },
    {
        "id":3,
        "titulo":"Educación integral en sexualidad",
        "formato":"Página web",
        "link":"https://es.unesco.org/fieldoffice/quito/dsostenible/aceleracion"
    },
]
let recursos2=[
    {
        "id":4,
        "titulo":"Consejos para padres en educación sexual",
        "formato":"Documento pdf",
        "link":"https://spapex.es/sites/default/files/educacion_sexual.pdf"
    },
    {
        "id":5,
        "titulo":"Derechos sexuales parte del desarrollo del país",
        "formato":"Video",
        "link":"https://www.youtube.com/watch?v=smbdvl6E9do&t=129s"
    },
    {
        "id":6,
        "titulo":"Tips para hablar con tus hijos sobre el tema",
        "formato":"Página web",
        "link":"https://www.plannedparenthood.org/es/temas-de-salud/para-padres/tips-para-platica"
    },
    {
        "id":7,
        "titulo":"Política Nacional: derechos sexuales y reproductivos",
        "formato":"Documento pdf",
        "link":"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/LIBRO%20POLITICA%20SEXUAL%20SEPT%2010.pdf"
    },
    {
        "id":8,
        "titulo":"Educación en ciudadanía sexual  Consensos Mínimos",
        "formato":"Video",
        "link":"https://youtu.be/5DpkWD7NMwQ"
    },
    {
        "id":9,
        "titulo":"Conoce tu cuerpo, vive tu sexualidad",
        "formato":"Página web",
        "link":"https://profamilia.org.co/aprende/cuerpo-sexualidad/derechos-sexuales-y-derechos-reproductivos/#:~:text=Derecho%20a%20tener%20una%20vida,la%20intimidad%20sexual%20y%20confidencialidad"
    },
]
let juegos=[
    {
        "id":1,
        "titulo":"El derecho a elegir",
        "texto":"Informar y concientizar sobre la prevención del embarazo adolescente no intencional a adolescentes y jóvenes. Transmitir información accesible, confiable y científicamente basada, sobre los derechos sexuales y reproductivos.",
        "desarrollox":"Asociación Civil Doncel y Jakairá/Fundación Kaleidos (Argentina), en el marco de la Campaña “Mostrá tu poder” de prevención del embarazo no planificado en adolescentes, realizada en 2018.",
        "articulo":"https://doncel.org.ar/2019/05/10/juego-el-derecho-a-elegir/",
        "descarga":"https://doncel.org.ar/wp-content/uploads/2019/05/Juego_Doncel_Kaleidos.pdf",
        "foto":"https://ricoththth.github.io/redvindicadas/src/utils/images/adultos/1-jg-adult-elegir.svg"
    },
    {
        "id":2,
        "titulo":"Tod@s nosotr@s",
        "texto":"Es un juego para demostrar la diversidad sexual que existe. El objetivo es comunicar el derecho a decidir la orientación sexual y la identidad y expresión de género.",
        "desarrollox":"Diego Juodziukynas, Vito Rodríguez Christensen, Francisco Ruiz Huidobro, Lian Gerbino.",
        "articulo":"https://www.huesped.org.ar/informacion/derechos-sexuales-y-reproductivos/juegos/",
        "descarga":"https://diegoslts.itch.io/all-of-us",
        "foto":"https://ricoththth.github.io/redvindicadas/src/utils/images/adultos/2-jg-adult-orientacion.svg"
    },
    {
        "id":3,
        "titulo":"Violentometro",
        "texto":"El Violentómetro es una herramienta de gran utilidad la cual permite a hombres y mujeres estar alerta, capacitados y atentos para detectar y atender la violencia en cualquiera de sus tipos y modalidades a través de diferentes manifestaciones.",
        "desarrollox":"Gobierno del Estado de Zacatecas",
        "articulo":"https://juventud.zacatecas.gob.mx/juegosinteractivos/",
        "descarga":"https://juventud.zacatecas.gob.mx/juegosinteractivos/violentometro.html",
        "foto":"https://ricoththth.github.io/redvindicadas/src/utils/images/adultos/3-jg-adult-violencia.svg"
    }, 
    {
        "id":4,
        "titulo":"Cuestionario de riesgo de embarazo",
        "texto":"El juego consiste en un cuestionario sobre preguntas relacionadas sobre el riesgo de embarazo, y así responder si hay riesgo o no, y en base a eso se mostraran los resultados sobre tu porcentaje que tienes de un riesgo de embarazo. ",
        "desarrollox":"Gobierno del Estado de Zacatecas",
        "articulo":"https://juventud.zacatecas.gob.mx/juegosinteractivos/",
        "descarga":"https://juventud.zacatecas.gob.mx/juegosinteractivos/riesgodeembarazo.html",
        "foto":"https://ricoththth.github.io/redvindicadas/src/utils/images/adultos/4-juego-adultos-embarazo.svg"
    }, 
]
export function getAllCards(){
    return recursos;
}
export function getAllCards2(){
    return recursos2;
}
export function getAllJuegos(){
    return juegos;
}
