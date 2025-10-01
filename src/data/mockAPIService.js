import viajes from "./data"

function getData(){
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      console.log("Promise completada")
      resolve(viajes)
    }, 1000 )
  })
}

export default getData