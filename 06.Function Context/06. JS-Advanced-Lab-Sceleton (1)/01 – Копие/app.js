function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, "fullName", {
        set(newfullname) {
            const namearr = newfullname.split(" ");
            this.firstName = namearr[0];
            this.lastName = namearr[1];
        },
        get(){
            return this.firstName + " " + this.lastName;
        }
    });
}
let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
person.fullName;
console.log(person.lastName);
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";