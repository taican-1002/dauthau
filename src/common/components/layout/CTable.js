import React, { useState } from "react";

const Users = [
  {
    id: 1,
    selected: false,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    selected: false,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    selected: false,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: 4,
    selected: true,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    id: 5,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
];

const CTable = () => {
  const [list, setList] = useState(Users);
  const [masterChecked, setmasterChecked] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  // Select/ UnSelect Table rows
  const onMasterCheck = (e) => {
    let tempList = Users;
    // Check/ UnCheck All Items
    tempList.forEach((user) => (user.selected = e.target.checked));

    //Update State
    setList(tempList);
    setmasterChecked(e.target.checked);
    setSelectedList(list.filter((e) => e.selected));
  };

  // Update List Item's state and Master Checkbox State
  const onItemCheck = (e, item) => {
    let tempList = Users;
    tempList.forEach((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = Users.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    setList(tempList);
    setmasterChecked(totalItems === totalCheckedItems);
    setSelectedList(Users.filter((e) => e.selected));
  };

  // Event to get selected rows(Optional)
  const getSelectedRows = () => {
    setSelectedList(Users.filter((e) => e.selected));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
<<<<<<< HEAD
          <table className="table-primary">
=======
          <table id="table" className="table table-bordered">
>>>>>>> b79d6da26b14da63ae22be64478dab4f91907202
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
                  <div>
                    STT
                  </div>
                </th>
                <th scope="col">
                  <div>
                    Name
                  </div>
                </th>
                <th scope="col">
                  <div>
                    Email
                  </div>
                </th>
                <th scope="col">
                  <div>
                    Phone
                  </div>
                </th>
                <th scope="col">
                  <div>
                    Website
                  </div>
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
                    <div>
                      {index}
                    </div>
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
};

export default CTable;
