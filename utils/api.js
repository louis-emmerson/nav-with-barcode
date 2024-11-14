import axios from "axios";

function getFoodInfo(barcode){
   return axios.get(`https://world.openfoodfacts.org/api/v2/product/${barcode}`).then(({data})=>{
        return data.product
    })
}


export {getFoodInfo}