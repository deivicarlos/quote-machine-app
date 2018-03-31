
export const fadeIn = (elementID) => {
    let opacity = 0;
    if (opacity<1) {
      opacity += .1;
      setTimeout(function(){fadeIn()},100);
   }
   document.getElementById(elementID).style.opacity = opacity;
}

export const fadeOut = (elementID) => {
    let opacity = 1;
    if (opacity!=0) {
       opacity -= .1;
       setTimeout(function(){fadeOut()},100);
    }
    
    
    
    $document.getElementById(elementID).style.opacity = opacity;
 }
