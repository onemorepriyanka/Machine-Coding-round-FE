(async function () {
    const data = await fetch("./data.json");
    const res = await data.json();
    const employees = res;
  
    // rendering all EMployee List
    const employeeList = document.querySelector(".employee__names--list");
  
    const renderEmployees = () => {
      employeeList.innerHTML = " ";
      employees.forEach((emp) =>{
        const employee = document.createElement("span");
        employee.classList.add("employee__names--item");
        employee.innerHTML=` ${emp.firstName} ${emp.lastName} <i class="employeeDelete" style="color:red"><strong>X </strong></i>`;
        employeeList.append(employee);
      });
     
    }
  
    renderEmployees();
    
  })();
  