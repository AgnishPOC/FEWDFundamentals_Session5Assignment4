//Storing data for 5 Employees
var Employee1 = {
    name:"Agnish",
    age:27,
    salary:1500000,
    Address:{city:"Bangalore",state:"Karnataka",pincode:560034}
};
var Employee2 = {
    name:"Rajesh",
    age:29,
    salary:1200000,
    Address:{city:"Bangalore",state:"Karnataka",pincode:560099}
};
var Employee3 = {
    name:"Mahesh",
    age:27,
    salary:2000000,
    Address:{city:"Hyderabad",state:"Telangana",pincode:831020}
};
var Employee4 = {
    name:"Jack",
    age:26,
    salary:1900000,
    Address:{city:"Bangalore",state:"Karnataka",pincode:560001}
};
var Employee5 = {
    name:"Jones",
    age:27,
    salary:1700000,
    Address:{city:"Kolkata",state:"West Bengal",pincode:700031}
};

//Array to store objects
var Array=[Employee1,Employee2,Employee3,Employee4,Employee5];

//Printing Details of Employee5

console.log("Name : "+Array[4].name);
console.log("Age : "+Array[4].age);
console.log("Salary: "+Array[4].salary);
console.log("City : "+Array[4].Address.city);
console.log("State : "+Array[4].Address.state);
console.log("Pincode : "+Array[4].Address.pincode);


alert("Please check console for values");
