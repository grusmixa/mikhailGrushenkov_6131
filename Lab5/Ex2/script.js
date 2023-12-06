class Chief {
    dailyTask = '';
    workers = [];
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    get name() {
        let ans = `${this.firstName} ${this.lastName}`;
        return ans;
    } 

    get dailyTask() {
        return this.dailyTask;
    }

    set dailyTask(task) {
        this.dailyTask = task;
    }

    delWorker(firstName, lastName, age) {
        let index;
        for (let i = 0; i < this.workers.length; i++) {
            if (firstName === this.workers[i].firstName && lastName === this.workers[i].lastName && age === this.workers[i].age) {
                index = i;
                break;
            }
        }
        
        //index = this.workers.indexOf(firstName === worker.firstName && lastName === worker.lastName && age === worker.age);
        if (index > -1) {
            this.workers.splice(index, 1);
        }
    }

    addCook(firstName, lastName, age, position) {
        let worker = new Cooks(firstName, lastName, age, position);
        this.workers.push(worker);
    }

    addWaiter(firstName, lastName, age, shift) {
        let worker = new Waiters(firstName, lastName, age, shift);
        this.workers.push(worker);
    }
}

class Workers {
    sanBook = true;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get sanBook() {
        return this.sanBook;
    }

    set sanBook(value) {
        if (value === false || value === true) this.sanBook = value;
    }

    get name() {
        let ans = `${this.firstName} ${this.lastName}`;
        return ans;
    } 
}

class Cooks extends Workers {
    
    constructor(firstName, lastName, age, position) {
        super(firstName, lastName, age);
        this.position = position;
    }

    prepOrder() {
        console.log("Начал(а) готовить блюдо");
        setTimeout(() => console.log('Блюдо готово!'), 3000);
    }
}

class Waiters extends Workers {
    
    constructor(firstName, lastName, age, shift) {
        super(firstName, lastName, age);
        this.shift = shift;
    }

    order(cook) {
        console.log("Заказ получен!");
        setTimeout(() => {
            cook.prepOrder();
            setTimeout(() => {
                console.log("Вот Ваше блюдо.")
            }, 4000)
        }, 2000);
        
    }
}

const chief = new Chief('Alex', "Gorokhov");
chief.dailyTask = 'Get a $1000!!!';
console.log(chief.name);
console.log(chief.dailyTask);
chief.addCook("Иван", "Олегов", 30, "Кондитер");
console.log(chief.workers);
const waiter1 = new Waiters("Елена", "Селова", 18, "8-16");
waiter1.order(chief.workers[0]);

setTimeout(() => {
    chief.workers[0].sanBook = false;
    chief.delWorker("Иван", "Олегов", 30);
    console.log(chief.workers)
}, 7000)

chief.addCook("Mark", "Titov", 30, "cook");
console.log(chief.workers);
chief.delWorker("Mark", "Titov", 25);
console.log(chief.workers);
