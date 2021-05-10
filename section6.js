/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/

let data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];

let reg = /(\w+), (\w+)/;

// If you use global flag, note that exec and test behave differently by saving index of last match
// and then the next match starts at that index position.
// This would throw the matching off...



let newData = data.map((val)=>{
    let arr = reg.exec(val)
    if(arr !== null){
        return arr[2] + " " + arr[1]
    } else {
        return null;
    }
})

console.log(newData)