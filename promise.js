var Promise = require('bluebird')


var add = function(a, b, callback){
  return new Promise(function(resolve, reject){
    if(a == 'x')
      reject('a must be a number')
    else
      resolve(a+b)
  })
}

var minus = function(b, callback){
  return new Promise(function(resolve, reject){
    if(b != 3)
      reject("b is not 3")
    else
      resolve(b-2)
  })
}


add(1, 2)
//call minus function
.then(minus)
//return new promise object
.then(function(result){
  return new Promise(function(resolve, reject){
    resolve(result+10)
  })
})
//show result
.then(function(result){
  console.log("result is "+result)
})
//catch error
.catch(function(err){
  console.log("error: "+err)
})
// finally ru
.finally(function(){
  console.log('finally is run')
})



