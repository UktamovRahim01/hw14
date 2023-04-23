let fib = [0, 1]

let ask = +prompt(`Ведите число`)

for (i=0; i<=ask; i++) {
    fib.push(fib[fib.length-1]+fib[fib.length-2])
}
console.log(fib);