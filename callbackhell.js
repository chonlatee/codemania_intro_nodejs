var first = function(a, b, callback){
  if(a == 'x')
    callback('a must be a number', null)
  else
    callback(null, a + b)
}

var second = function(c, callback){
  callback(null, c + 2)
}

var third = function(d, callback){
  callback(null, d + 3)
}


first(1, 2, function(err, result){
  if(err) 
    console.log("err: "+err)
  else
    console.log("result: "+result)
})


// test callback error
first('x', 2, function(err, result){
  if(err) 
      console.log("err: "+err)
    else
      console.log("result: "+result)
})



// callback hell example
first(1, 2, function(err, resultFirst){
  second(resultFirst, function(err, resultSecond){
    third(resultSecond, function(err, resultThird){
      console.log("result third: " + resultThird)
    })
  })
})