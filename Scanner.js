import { StyleSheet, Text, View, Button,
  TouchableOpacity,
  TextInput, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

export function Scanner() {
  const [permission, requestPermission] = useCameraPermissions()
  const [cameraActive, setCameraActive] = useState()
  const [scannedBarcode, setScannedBarcode] = useState()
  const navigation = useNavigation()
  const lastScannedTimestampRef = useRef(0)
  const [scanned, setScanned] = useState(false)

  if (!permission) {
    // Camera permissions are still loading.
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>

        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }



  if (scannedBarcode)
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TextInput style={styles.input} value={scannedBarcode} />
        </View>
      </View>
    )

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={'back'}
        onBarcodeScanned={({data}) => {
          // console.log(scannedBarcode.data)
          // // setScannedBarcode(scannedBarcode.data)
          // setCameraActive(false)
          // navigation.navigate('Results', { barcodeValue: scannedBarcode.data })
          const timestamp = Date.now()

          if (scanned || timestamp - lastScannedTimestampRef.current < 1000) {
            return
          }
          lastScannedTimestampRef.current = timestamp
          console.log("NEW code scanned")
          console.log(data)
          navigation.navigate('Results', { barcodeValue: data })
          
        }}
      >
        
      </CameraView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  barcode: {
    flex: 1,
    alignSelf: "flex-start",
    alignItems: "center",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "red",
    fontSize: 30,
    borderColor: "red",
  },
})
