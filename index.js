// Write your solution in this file!
const employee = {
    name:"Mark",
    streetName:"Buru",
};
console.log(employee);

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    let newObject = {
        ...employeeObject,[key]: value,
    };
    return newObject;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value){
    employeeObject[key] = value;
    return  employeeObject;

};

function deleteFromEmployeeByKey(employeeObject, key, value){
   let newEmployee = {...employeeObject};
   delete newEmployee[key];
   return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employeeObject, key, value){
    delete employeeObject[key];
    return employeeObject;
};
destructivelyDeleteFromEmployeeByKey(employee.name);

