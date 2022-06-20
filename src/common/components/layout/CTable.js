import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table id="table" className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={masterChecked}
                      id="mastercheck"
                      onChange={(e) => onMasterCheck(e)}
                    />
                  </div>
                </th>
                <th scope="col">
                  <div>STT</div>
                </th>
                <th scope="col">
                  <div>Name</div>
                </th>
                <th scope="col">
                  <div>Email</div>
                </th>
                <th scope="col">
                  <div>Phone</div>
                </th>
                <th scope="col">
                  <div>Website</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((user, index) => (
                <tr key={user.id} className={user.selected ? "selected" : ""}>
                  <th scope="row">
                    <div>
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => onItemCheck(e, user)}
                      />
                    </div>
                  </th>
                  <td>
                    <div>{index}</div>
                  </td>
                  <td>
                    <div>{user.name}</div>
                  </td>
                  <td>
                    <div>{user.email}</div>
                  </td>
                  <td>
                    <div>{user.phone}</div>
                  </td>
                  <td>
                    <div>{user.website}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button className="btn btn-primary" onClick={getSelectedRows()}>
            Get Selected Items {selectedList.length}
          </button>
          <div className="row">
            <b>All Row Items:</b>
            <code>{JSON.stringify(list)}</code>
          </div>
          <div className="row">
            <b>Selected Row Items(Click Button To Get):</b>
            <code>{JSON.stringify(selectedList)}</code>
          </div> */}
        </div>
      </div>
    </div>
  );
}
