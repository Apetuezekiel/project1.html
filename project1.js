const colorsArray = ["blue", "red", "yellow", "grey", "pink", "cyan", "seagreen", "green", "yellowgreen", "purple", "orange"];


magic.addEventListener("click", changebg => {
    let colorPicker = Math.floor(Math.random()*colorsArray.length);
    container.style.backgroundColor = colorsArray[colorPicker];
    console.log(colorPicker);
    
})

//AS AT 16-04-20 i do not know why my colorPicker has to be declared in my function
//using my console log i realised wen it is out outside, the random number picked is always the same
