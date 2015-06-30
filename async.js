
function first(){
  setTimeout(function(){
    console.log('From first function')
  }, 5000)
}


function second(){
  setTimeout(function(){
    console.log('From second function')
  }, 4000)
} 

function third(){
  setTimeout(function(){
    console.log('From third function')
  }, 3000)
} 

function fourth(){
  setTimeout(function(){
    console.log('From fourth function')
  }, 2000)
} 

function fourth(){
  setTimeout(function(){
    console.log('From fourth function')
  }, 2000)
} 

function fifth(){
  setTimeout(function(){
    console.log('From fifth function')
  }, 1000)
} 

first()
second()
third()
fourth()
fifth()



