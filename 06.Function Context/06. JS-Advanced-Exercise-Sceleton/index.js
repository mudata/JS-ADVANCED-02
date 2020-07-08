class Company {
   constructor() {
      this.departments = [];
   }
   addEmployee(username, salary, Position, department) {
      if (username === "" || username === undefined || username === null || salary === "" || salary === undefined || salary === null || Position === "" || Position === undefined || Position === null || department === "" || department === undefined || department === null) {
         console.log("Invalid input!");
      }
      else if (salary < 0) { console.log(" Invalid input!"); }
      else if(username !== "" || username !== undefined || username !== null || salary !== "" || salary !== undefined || salary !== null || Position !== "" || Position !== undefined || Position !== null || department !== "" || department !== undefined || department !== null) {
         let obj = {};
         obj.username = username;
         obj.salary = salary;
         obj.Position = Position;
         obj.department = department;
         this.departments.push(obj);
         console.log(`New employee is hired. Name: ${username}. Position: ${Position}`);
         
      }else{}
   }
   bestDepartment() {
      let departmentInfo = {};
      for (let i = 0; i < this.departments.length; i++) {
         const element = this.departments[i];
         if (departmentInfo.hasOwnProperty(element.department)) {
            departmentInfo[element.department] = {
               count: departmentInfo[element.department].count + 1,
               salary: departmentInfo[element.department].salary + element.salary
            }
         } else {
            departmentInfo[element.department] = {
               count: 1,
               salary: element.salary
            }
         }

      }
      let y = Array.from(departmentInfo)
      for (let i = 0; i < departmentInfo.length; i++) {
         const element = departmentInfo[i];
         console.log(element)
      }
      //console.log(y)
      for (const key in departmentInfo) {
         departmentInfo[key].salary = departmentInfo[key].salary / departmentInfo[key].count
      }

      let maxDepartment = "";
      let arr = Object.entries(departmentInfo)
      //console.log(arr);
      arr.sort((a, b) => {
         return b[1].salary - a[1].salary;
      })
      //console.log(arr)
      let avgSalary = arr[0][1].salary;
      //console.log(avgSalary)
      maxDepartment = arr[0][0];
      //console.log(maxDepartment)
      let x = this.departments.filter(x => x.department === maxDepartment)
      //console.log(x)
      x.sort((a, b) => {
         return b.salary - a.salary || a.username.localeCompare(b.username)
      })
      console.log(`Best Department is: ${maxDepartment}`);
      console.log(`Average salary: ${avgSalary}`)
      for (const key in x) {
         console.log(x[key].username + " " + x[key].salary + " " + x[key].Position)
      }
      //console.log(this.departments)
   }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
c.bestDepartment();