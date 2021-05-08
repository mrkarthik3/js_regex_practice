/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];

let regex1 = /801-/

let newArray0 = phoneNums.filter((num)=> num.match(regex1))

let newArray1 = phoneNums.filter((num)=> regex1.test(num))


console.log(newArray0)
console.log(newArray1)

let newArray2 = []
for(let i = 0; i < phoneNums.length; i++) {
    if(regex1.test(phoneNums[i])) {
        newArray2.push(phoneNums[i])
    }
}
console.log(newArray2)
