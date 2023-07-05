window.addEventListener('resize', windowResize)


function windowResize() {
    //with the scroll bar
    // const windowHeight= window.innerHeight
    // const windowWidth= window.innerWidth

    //or
    // without the scroll bar
    const windowHeight= document.documentElement.clientHeight
     const windowWidth= document.documentElement.clientWidth
    
    console.log(windowHeight)
    console.log(windowWidth)
}


windowResize()