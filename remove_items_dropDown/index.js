function removecolor(){

    const listItems = document.getElementById('colorSelect')
    const selectedColorIndex= listItems.selectedIndex
if (selectedColorIndex!== -1) {
    listItems.remove(selectedColorIndex)
}

 

}