/////////////////////////////////
//Easy Going
/////////////////////////////////
for(let i = 0; i<20; i++){
    console.log(i)
}

/////////////////////////////////
//Get Even
/////////////////////////////////
for(let i = 0; i<200; i+=2){
    console.log(i)
}

/////////////////////////////////
//Fizzbuzz
/////////////////////////////////
for(let i = 0; i<100; i+=2){
    let fb = ""
    if (i%3==0){
        fb += "Fizz"
    }
    if (i%5==0){
        fb+= "Buzz"
    }
    if (i%5!=0 && i%3!= 0){
        fb = i
    }
    console.log(fb)
}

/////////////////////////////////
//Wild Wild Life
/////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-to"]
const dart = ["D'art", "Demogorgan Dog", 2, "Upside Down"]
plantee[2]++
wolfy[3] = "Gotham City"
dart[3] = [dart[3],"Hawkins"]
wolfy.shift("Gameboy")
console.log(wolfy)
console.log(plantee)
console.log(dart)

/////////////////////////////////
//Yell at the Ninja Turtles
/////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let i of ninjaTurtles) {
    console.log(i.toUpperCase())
}

/////////////////////////////////
//Methods Revised
/////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
console.log(favMovies[favMovies.indexOf('Titanic')])
console.log(favMovies)
favMovies.sort()
console.log(favMovies)
//yes it changed the order
favMovies.pop()
favMovies.push('Guardians of the Galaxy')
favMovies.reverse()
favMovies.shift()
console.log(favMovies.unshift())
//it returns the length of the string
favMovies.splice(favMovies.indexOf("Django Unchained"),1, "Avatar")
//it will not permanently change our array, it needs to be saved
let someMovies = favMovies.slice(0, Math.floor(favMovies.length/2))
console.log(favMovies)
console.log(someMovies)
console.log(favMovies.indexOf('Volver'))
//We didn't delete Fast and furious, we deleted Volver. It returned -1
//const defines a constant reference, not a constant array

/////////////////////////////////
//Where is Waldo
/////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                     ["Lucinda", "Jacc", "Neff", "Snoop"],
                     ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1,1)
whereIsWaldo[1].splice(2,1,"No One")

console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])

/////////////////////////////////
//Excited Kitten
/////////////////////////////////
let catPhrases = ["...human...why you taking pictures of me?", "...the catnip made me do it...", "...why does the red dot always get away..."]
for(let i = 0; i<20; i++){
    console.log("Love me, pet me! HSSSSSS!")
    if(i%2===0){
        console.log(catPhrases[Math.floor(Math.random()*3)])
    }
}


/////////////////////////////////
//Find the Median
/////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort(function(a, b){return a - b})
console.log(nums[Math.floor(nums.length/2)])

/////////////////////////////////
//Return of the Closets
/////////////////////////////////
let kristynsCloset = [
    "left shoe",
    "cowboy boots",
    'right sock',
    "GA hoodie",
    "green pants",
    "yello knit hat",
    "marshmallow peeps"
];

let thomsCloset = [
    [
        //shirts
        "grey button-up",
        "dark grey button=up",
        "light blue button-up",
        "blue button-up"
    ], [
        //pants
        'grey jeans',
        'jeans',
        'PJs'
    ],[
        //accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];
let kristynsShoe = kristynsCloset.shift()
thomsCloset[2].push(kristynsShoe)
console.log(`Kristyn will be wearing a ${kristynsCloset.splice([Math.floor(Math.random()*kristynsCloset.length)],1)}, a ${kristynsCloset.splice([Math.floor(Math.random()*kristynsCloset.length)],1)}, and a ${kristynsCloset.splice([Math.floor(Math.random()*kristynsCloset.length)],1)}`)
console.log(`Thom will be wearing a ${thomsCloset[0].splice([Math.floor(Math.random()*thomsCloset[0].length)],1)}, a ${thomsCloset[1].splice([Math.floor(Math.random()*thomsCloset[1].length)],1)}, and a ${thomsCloset[2].splice([Math.floor(Math.random()*thomsCloset[2].length)],1)}`)
console.log(`Thom might also wear a ${thomsCloset[0].splice([Math.floor(Math.random()*thomsCloset[0].length)],1)}, a ${thomsCloset[1].splice([Math.floor(Math.random()*thomsCloset[1].length)],1)}, and a ${thomsCloset[2].splice([Math.floor(Math.random()*thomsCloset[2].length)],1)}`)

/////////////////////////////////
//Dirty Laundry
/////////////////////////////////
kristynsCloset = [
    "left shoe",
    "cowboy boots",
    'right sock',
    "GA hoodie",
    "green pants",
    "yello knit hat",
    "marshmallow peeps"
];
thomsCloset = [
    [
        //shirts
        "grey button-up",
        "dark grey button=up",
        "light blue button-up",
        "blue button-up"
    ], [
        //pants
        'grey jeans',
        'jeans',
        'PJs'
    ],[
        //accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

for(let i of kristynsCloset){
    console.log(`WHIRR: Now washing ${i}`)
}

console.log(thomsCloset[0])
console.log(thomsCloset[1])
console.log(thomsCloset[2])

for(let i of thomsCloset){
    console.log(i)
}