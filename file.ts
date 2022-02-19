// Basic Types 
let id: number = 5 
let company: string = "Company X"
let isActive: boolean = false
let x : any ="Hello"

// arrays 
let ids: number[] = [1,2,3]
let arr: any[] = [1,2,3, true, "Hello"]

//tuple
let tuple: [number, string, boolean] = [1, "Hello", false]

// tuple array
let employee : [number, string][]
employee = [
    [1, "John"],
    [2, "Jane"]

]

// Union Types
let pid: string  | number = 2 

pid = '22'
pid = 22

// enums enumerated types

enum Direction1{
    Up =1,
    Down,
    Left,
    Right
}
enum Direction2{
    Up ="UP",
    Down = "DOWN",
    Left= "LEFT",
    Right= "RIGHT"
}

// Objects Types
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: "John",
}

// Type Assertion

let cid: any = 1 
// let customerId = <number>cid
let customerId = cid as number 

// Function

function addNum(x:number, y:number) : number{
    return x+y
}
// console.log(addNum(1,2))

function log(message: string | number ): void {
    console.log(message)
}

// Interface Types
// cannot be used with unions 
// ? optionals 
interface  UserInterface {
   readonly id: number
    name: string
    age?: number
}
const user1: UserInterface = {
    id: 1,
    name: "John",
}


// type Point = number | string
// const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number 
}

const add: MathFunc = (x: number, y: number) => x+y
const sub: MathFunc = (x: number, y: number) => x-y


interface  PersonInterface {
    readonly id: number
     name: string
     register(): string
 }
// Classes 

class Person implements PersonInterface {
    // private, protected 
    id: number
    name: string
    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} is registered`
    }
}
const brad = new Person(1, "Brad")
const mike = new Person(2, "Mike Jordan")
console.log(brad, mike)
console.log(brad.register())

// extend class (Sub Classes)
class Employee extends Person {
    position: string 
    constructor(id:number, name:string, position:string){
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(1, "Brad", "CEO")

// Generics Types