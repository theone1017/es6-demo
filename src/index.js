var obj = {
  name:'lgh',
  age:26
}
var obj1 = {
  name:'qhl',
  age:26
}
var newObj = {...obj,...obj1}
console.log(newObj)

var arr = [1,2]
var arr1 = [3,4]
var arr2 = [...arr,...arr1]
console.log(arr2)


var [a,b,c] = 'hel'
console.log(a,b,c)

var add = () => {console.log(1)}
console.log(add())
