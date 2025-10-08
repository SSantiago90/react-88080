import viajes from "./data"

function getData(){
  return new Promise( (resolve) => {
    setTimeout( () => {
      console.log("Promise completada")
      resolve(viajes)
    }, 1000 )
  })
}

// ? Array.find()
export function getProductById(idParam){
  return new Promise( (resolve) => {
      const itemRequested = viajes.find( (item) => String(item.id) === idParam)
      setTimeout( ()=> { resolve(itemRequested)}, 1000)
  })
} 

export function getProductsByCategory(catParam){
   return new Promise( (resolve,reject) => {
      const itemsRequested = viajes.filter( (item) => item.category === catParam)
      if (itemsRequested.length === 0) {
        reject("No encontramos productos")
      } 
      setTimeout( ()=> { resolve(itemsRequested)}, 1000)
  })
}


export default getData