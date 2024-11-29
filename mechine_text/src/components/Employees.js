import React from "react";

function Employees() {
  return (
    <>
      <div className="mx-3">
        <a class="btn btn-success my-4" href="dele.html" role="button">
          ADD-EMPLOYEE
        </a>

        <table class="table table-bordered ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Designation</th>
              <th scope="col">Gender</th>
              <th scope="col">Course</th>
              <th scope="col">Create Date</th>
              <th scope="col" class="text-center" colspan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1234567890</td>
              <td>Manager</td>
              <td>Male</td>
              <td>Course Name</td>
              <td>2024-11-28</td>
              <td className="text-center">
                <a class="btn btn-primary btn-sm px-3" href="dele.html" role="button">
                  Edit
                </a>
                <a class="btn btn-danger btn-sm ms-5" href="dele.html" role="button">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Employees;
