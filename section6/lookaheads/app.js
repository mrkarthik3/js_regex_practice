let data = "allthingsjavascript.com http:// google.com youtube.com";

let reg = /\w+(?=\.com)/g,
    arr = data.match(reg);

console.log(arr);



