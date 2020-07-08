function solve() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work() {
            let currentTask=this.tasks.shift();
            console.log(this.name+currentTask)
            this.tasks.push(currentTask);
        }
        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month`)
        }
        getSalary(){
            return this.salary;
        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} is working on simple task.`)
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} is working on a complicated task.`)
            this.tasks.push(`${this.name} is taking time off work.`)
            this.tasks.push(`${this.name} is supervising junior workers.`)


        }
    }
    class Manager extends Employee {
        constructor(name, age, divident) {
            super(name, age);
            this.divident = divident;
            this.tasks.push(`${this.name} scheduled a meeting.`)
            this.tasks.push(`${this.name} is preparing a quarterly report.`)

        }
    }
    return{
        Employee,
        Junior,
        Senior,
        Manager

    }
}

solve();