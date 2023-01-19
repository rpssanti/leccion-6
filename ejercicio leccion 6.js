//Ejercicio leccion 6

const listacompra = ["Garbanzos" , "Leche" , "Chocolate" , "Mantequilla" , "cocacola"]

listacompra.splice(2 , 0 , "Aceite de girasol")

console.log(listacompra)

listacompra.splice(2 , 1)

console.log(listacompra)


const peliculasFav = [{nombre:"Tarzan"  , director: "Kevin_Lima" , año : 1999 } , 
                        {nombre:"Rey_leon" , director : "Rob_Minkoff" , año : 1994},
                        {nombre : "Home_Alone" , director : "Chris_Columbus" , año : 1990},
]


const listaPeliculas = peliculasFav.filter(obj => obj.año> 2010)
console.log(listaPeliculas)


const listaPeliculas2 = peliculasFav.map (obj => obj.director)  
console.log(listaPeliculas2)



const listaPeliculas3 = peliculasFav.map (obj=>  obj.nombre)
console.log(listaPeliculas3)


const listaPeliculas4 = listaPeliculas2.concat(listaPeliculas3)
console.log(listaPeliculas4)

const listaPeliculas6 = [...listaPeliculas2 , ...listaPeliculas3]
console.log(listaPeliculas6)
