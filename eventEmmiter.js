const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
    }
);

eventEmitter.emit('tutorial',1,2);


class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

const pedro = new Person('Pedro')
const chirstina = new Person('Christina')
chirstina.on('name', () => {
    console.log(`my name is ${chirstina.name}`)
})
pedro.on('name', () => {
    console.log(`my name is ${pedro.name}`)
})

pedro.emit('name');
chirstina.emit('name')