import { StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useRoute } from "@react-navigation/native"
import { useState } from "react"
import { getFoodInfo } from "./utils/api"


export function ResultsPage() {
  const route = useRoute()
  console.log(route.params)
  const { barcodeValue } = route.params
  const [productInfo, setProductInfo] = useState({})

  useState(()=>{
    getFoodInfo(barcodeValue).then((product)=>{
        setProductInfo(product)
    })
  },[])

  return (
    <View style={{ flex: 1, alignItems: "center"}}>
      <Text>Result</Text>
      <Text>Title: {productInfo.product_name}</Text>
      <Text>Barcode: {barcodeValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
