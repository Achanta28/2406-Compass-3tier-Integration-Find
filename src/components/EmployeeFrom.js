


import React, { useEffect, useState } from 'react'

function EmployeeFrom() {
    let [employee,setEmployee]= useState([]);

    // useEffect(()=>{
    //   getEmployeeFromServer();

    // },
      
    // []);

    let getEmployeeFromServer = async ()=>{
        let reqOptions = {
            method:"GET"
        }

        let JSONData = await fetch("http://localhost:3214/getEmployees",reqOptions);
        let JSO = await JSONData.json();
        console.log(JSO);
        setEmployee(JSO);

    }
  return (
    <div>
        <form>
            <div>
                <button type='button' onClick={()=>{
                    getEmployeeFromServer();

                }}>Get Employee</button>
              
            </div>
        </form>
        <table>
          <thead>
             
             <tr>
                         <th>SNO.</th>
                         <th>ID </th>
                         <th>ProfilePic</th>
                         <th>FirstName</th>
                         <th>LastName</th>
                         <th>Age</th>
                         <th>Email</th>
                         <th>Gender</th>
                         <th>Department</th>
                         <th>Country</th>
                      </tr>
          </thead>
          <tbody>
          {
                  employee.map((ele,i)=>{
                    return(
                      <tr>
                         <td>{i}</td>
                         <td>{ele.id}</td>
                         <td><img src={ele.profilePic}></img></td>
                         <td>{ele.firstName}</td>
                         <td>{ele.lastName}</td>
                         <td>{ele.age}</td>
                         <td>{ele.email}</td>
                         <td>{ele.gender}</td>
                         <td>{ele.department}</td>
                         <td>{ele.country}</td>
             </tr>
                      
                    )
                    

                  })
                }
          </tbody>
          <tfoot></tfoot>
        </table>
       
    </div>
  )
}

export default EmployeeFrom