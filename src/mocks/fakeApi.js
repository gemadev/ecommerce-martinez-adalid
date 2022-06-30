
const products= [
    {id:'01', name:'Vaso Termico', description:' ·Material plástico apto para alimentos. ·Capacidad 350 cc. ·Doble vaso con cámara de aire en su interior. ·Cierre con tapa rosca hermético con bebedor. ·Vinilo exterior laminado , resistente a rayaduras y lavados.. ·Apto microondas.' ,img:'https://holadecodistribuidora.com/wp-content/uploads/2020/05/greys-anatomy1.jpeg', stock:30},
    {id:'02', name:'Pelota de Futbol Nro. 5', description:"Diseños disponibles: Spiderman, Capitan América, Boca River, Paris Saint Germain, Medidas: 22 cm de Diametro Aprox.", img:'https://holadecodistribuidora.com/wp-content/uploads/2022/06/IMG_20220628_135758.jpg', stock:10},
    {id:'03', name:'Mate Diamante – Se ilumina!',description:"– Contiene Luz de Led el material del mate hace que la luz se expanda por todo su espesor.– La luz de led se activa al girar su base– Disponible en 5 colores: NARANJA – VERDE– MAGENTA – ROSA – AMARILLO.",img:'https://holadecodistribuidora.com/wp-content/uploads/2021/05/Banners1-scaled.jpg', stock:15},
    {id:'04', name:'Botella Emi',description:"Capacidad: 400cc Altura: 19.5cm. Colores disponibles: Lila, Salmon, Verde Agua y Rosa.",img:'https://holadecodistribuidora.com/wp-content/uploads/2022/06/Water3.jpeg', stock:14},
    {id:'05', name:'Lapiceras Mario Bros x6:', description: "Trazo: fino Tinta: negra/azul.", img:'https://holadecodistribuidora.com/wp-content/uploads/2022/05/jyhgfds.jpg', stock:47},
    {id:'06', name: 'Sahumerios – Natural:',description:"Incienso Artesanal Hecho a mano Contenido: 8 varillas gruesas de duración extra Duración: cada varilla dura 1 horaAromas disponibles: Citronella, Naranja y Palo Santo – Ruda, Romero e Incienso – Yagra",img:'https://holadecodistribuidora.com/wp-content/uploads/2022/04/yagraNatural.jpg', stock:158}
]

export const getData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
    if(condition){
        resolve(products)
    }else{
        reject('Peticion Bad')
    }
    },3000)
})