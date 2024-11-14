import { StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useRoute } from "@react-navigation/native"


export function ResultsPage() {
  const route = useRoute()
  console.log(route.params)
  const { barcodeValue } = route.params

  return (
    <View style={{ flex: 1, alignItems: "center"}}>
      <Text>Result</Text>
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
