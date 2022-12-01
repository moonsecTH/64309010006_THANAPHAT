let obj = {
    firstName : "Jack",
    lastname : "Smith",
    age : 25
}

let myJSON = '{"firstName" : "Sam","lastName" : "Smith","age" : 33}'
console.log("myJSON เป็นชนิด ",typeof(myJSON))

let myObj = JSON.parse(myJSON)
console.log("myObj เป็นชนิด",typeof(myObj))
console.log(myObj.firstName)
