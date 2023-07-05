function calculate() {
    const radius= document.getElementById('radius')
    const volume= document.getElementById('volume')
    const radiusValue=  Math.abs(radius.value)

    let volumeValue= volume.value
    const pi = 3.14
    let volumeCalcule = (4/3) *pi* Math.pow(radiusValue,3)
    volumeCalcule = volumeCalcule.toFixed(4)
     volume.value = volumeCalcule
    return false
}

