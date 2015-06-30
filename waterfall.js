var async = require('async')

function first(callback){
  setTimeout(function(){
    console.log('From first function')
    callback(null, 'from first')
  }, 3000)
}


function second(arg, callback){
  setTimeout(function(){
    console.log('From second function and arg' + arg)
    callback(null, 'from first', 'from second')
  }, 2000)
} 

function third(arg1, arg2, callback){
  setTimeout(function(){
    console.log('From third function and arg ' + arg1 + ' ' + arg2 )
    callback(null)
  }, 1000)
} 

function fourth(callback){
  setTimeout(function(){
    console.log('From fourth function')
    callback(null)
  }, 800)
} 

function fourth(callback){
  setTimeout(function(){
    console.log('From fourth function')
    callback(null)
  }, 500)
} 

function fifth(callback){
  setTimeout(function(){
    console.log('From fifth function')
    callback(null,'done')
  }, 300)
} 

var func = [first, second, third, fourth, fifth]

async.waterfall(func,function(err, result){
  if(err)
    console.log("error: "+err)
  else 
    console.log("result: "+result)
})

