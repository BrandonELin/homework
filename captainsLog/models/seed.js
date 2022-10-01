// Starter data to refresh the documents in our database
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    },
    {
        name: 'kiwi',
        color: 'green',
        readyToEat: false
    },
    {
        name: 'papaya',
        color: 'orange',
        readyToEat: true
    }
];

const meats = [
    {
        name: 'hamburger',
        type: 'rare'
    },
    {
        name: 'bacon',
        type: 'crispy',
    },
    {
        name: 'chicken',
        type: 'wing',
    }
];

const vegetables = [
    {
        name: 'broccoli',
        color: 'green'
    },
    {
        name: 'kale',
        color: 'green'
    },
    {
        name: 'corn',
        color: 'yellow'
    }
];

module.exports = {
    fruits,
    meats,
    vegetables
}