function greet(name: string) {
    console.log('hello...');
}

greet('Santosh Marigowda');

let myName: string = 'Santosh Marigowda';
// myName = 20;

function getMyName(): string {
    return myName; //?
    // return myAge;
}

getMyName();

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

multiply(2, 4);

function sayHello(): void {
    console.log('Hello Santosh');
}

sayHello();


let myAge = 45;
// myAge = 'Santosh';

let hasHobbies: boolean = true;
// hasHobbies = 45;

let myRealAge: number = 46;

let hobbies: any = ['Reading', 'Sleeping'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [10, 20];
hobbies = ['watching'];
hobbies = [56];
hobbies = 45;

let address: [number, string] = [14, 'Fulmer Close'];
// address = ['Dartmouth Terrace', 8];


enum Color {
    Red,
    Green = 100,
    Blue
};

let myColor: Color = Color.Blue;
console.log(myColor);

let car: any = 'BMW';
console.log(car);
car = { model: 'BMW', series: 5 };
console.log(car);
