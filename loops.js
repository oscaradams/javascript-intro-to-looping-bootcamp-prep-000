function forLoop(array){
  var newArray = [...array]
  for (var i = 0; i < 25; i++){
      if(i != 1){
        
        newArray.push(`I am ${i} strange loops.`)
       
      }
     
     else{
       
       newArray.push("I am 1 strange loop.")
     }
  }
  return newArray
}

function whileLoop(Number){
  countdown = Number
  while (Number > 0){
    if (Number > 1){console.log(-- countdown)
    }
    else {console.log('done')}
    
  }
}