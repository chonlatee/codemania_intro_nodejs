var async = require('async')

//example task and duration for process
var tasks = [{name: 'first', time: 1000}, 
  {name: 'second', time: 2000}, 
  {name: 'third', time: 3000}, 
  {name: 'fourth', time: 4000}, 
  {name: 'fifth', time: 5000}
]

var start = new Date()

q = async.queue(function(task, callback){

  // process task
  setTimeout(function(){
    console.log(task.name)
    callback()
  },task.time)

},1) // You can change concurrent to 5

// push task
q.push(tasks)

// after all task is done calculate process time
q.drain = function(){
  console.log("All task is done")
  var end = new Date() - start
  console.log(end / 1000)
}
