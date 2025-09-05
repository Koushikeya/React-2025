function car(tata) {
    return function wheel(four) {
        return `we are returning ${tata}`
    }
}

const one = car("tata")
// const two = wheel("char")
console.log(one);
