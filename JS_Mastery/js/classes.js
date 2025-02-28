class Person {
name = "Kallu";
#age = 20;

constructor(name){
this.name = name;
}

helloWorld(){
    console.log(`${this.name} is a boy`)
}

get fetchAge(){
    return this.#age;
}
}

let obj = new Person("Ballu");
console.log(obj.fetchAge);
