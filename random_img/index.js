let previousRandom = -1;
function randomImg() {
    let image1= "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"
    let image2= "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg"
    let image3="http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
    
    const images = [image1,image2,image3]
   let randomOne

   do{
       randomOne = Math.floor(Math.random()* images.length)
   }while (previousRandom===randomOne)
       previousRandom= randomOne
   
   

    const chosenImg= images[randomOne]
    const displayImg= document.getElementById('displayImg')
    displayImg.setAttribute('src',chosenImg)

}