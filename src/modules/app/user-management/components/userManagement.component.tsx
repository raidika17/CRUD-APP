import {
  Alert,
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import DashboardStyle from "../../dashboard/styles/dashboard.style";
import Image from "next/image";
import { useEffect, useState } from "react";
import editIcon from "../../../../assets/icons/edit_icon.png";
import deleteIcon from "../../../../assets/icons/delete_icon.png";
import plusIcon from "../../../../assets/icons/plus-outlined.png";

export default function UserManagement() {
  const [searchValue, setsearchValue] = useState("");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [employee, Setemployee] = useState("");
  const [departement, setDepartement] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [newEmployee, SetNewEmployee] = useState("");
  const [newDepartement, setNewDepartement] = useState("");
  const [newIsActive, setNewIsActive] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [dataById, setDataById] = useState({
    email: "",
    id: "",
    employee: "",
    is_active: false,
    departement: "",
  });

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    getAllUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => setModal(!modal);

  //Get Current Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e: any) => {
    setCurrentPage(e);
  };

  const handleDeleteUser = (id: string) => {
    fetch(`https://be-ksp.analitiq.id/user/${id}`, {
      method: "DELETE",
      headers: new Headers({
        Authorization: "bearer " + token,
        "Content-Type": "application/json",
      }),
    });
    getAllUser();
  };

  const getAllUser = () => {
    setTimeout(() => {
      fetch("https://be-ksp.analitiq.id/user/?page=1&page_size=10", {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + token,
          "Content-Type": "application/json",
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data.results);
        });
    }, 1000);
  };

  const userActive = (active: boolean) => {
    if (active == true) {
      return "ACTIVE";
    } else {
      return "NOT ACTIVE";
    }
  };

  const handleCreateUser = () => {
    fetch("https://be-ksp.analitiq.id/user/", {
      method: "POST",
      headers: new Headers({
        Authorization: "bearer " + token,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email: email,
        password: password,
        confirm_password: confirmPassword,
        employee: employee,
        is_active: isActive,
        departement: departement,
      }),
    });
    getAllUser();
    toggle();
  };

  const handleUpdate = () => {
    fetch(`https://be-ksp.analitiq.id/user/${dataById.id}`, {
      method: "PUT",
      headers: new Headers({
        Authorization: "bearer " + token,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email: newEmail,
        employee: newEmployee,
        password: newPassword,
        confirm_password: newConfirmPassword,
        is_active: newIsActive,
        departement: newDepartement,
      }),
    });
    toggleUpdate();
    getAllUser();
  };

  const handleOnChange = (e: any) => {
    let id = e.target.id;
    let value = e.target.value;

    if (id == "email") {
      setEmail(value);
    }

    if (id == "password") {
      setPassword(value);
    }
    if (id == "confirmPassword") {
      setConfirmPassword(value);
    }
    if (id == "employee") {
      Setemployee(value);
    }
    if (id == "departement") {
      setDepartement(value);
    }
    if (id == "isActive") {
      if (value == "ACTIVE") {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
      return;
    }
  };

  const handleOnChangeUpdate = (e: any) => {
    let id = e.target.id;
    let value = e.target.value;

    if (id == "email") {
      setNewEmail(value);
    }

    if (id == "password") {
      setNewPassword(value);
    }
    if (id == "confirmPassword") {
      setNewConfirmPassword(value);
    }
    if (id == "employee") {
      SetNewEmployee(value);
    }
    if (id == "departement") {
      setNewDepartement(value);
    }
    if (id == "isActive") {
      if (value == "ACTIVE") {
        setNewIsActive(true);
      } else {
        setNewIsActive(false);
      }
    }
  };

  const pageNumbers = [];
  let sisa = Math.ceil(data?.length / postsPerPage);

  for (let index = 1; index <= sisa; index++) {
    pageNumbers.push(index);
  }

  const getUserById = (id: string) => {
    fetch(`https://be-ksp.analitiq.id/user/${id}`, {
      method: "GET",
      headers: new Headers({
        Authorization: "bearer " + token,
        "Content-Type": "application/json",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDataById({
          email: data.email,
          id: data.id,
          employee: data.employee,
          is_active: data.is_active,
          departement: data.departement,
        });
        toggleUpdate();
      });
  };

  const toggleUpdate = () => {
    setUpdate(!update);
  };

  const dataUser: JSX.Element[] = currentPosts
    ?.filter((item) =>
      String(item.employee).match(new RegExp(searchValue, "i"))
    )
    .map((item, user) => {
      const str = item.employee;
      const matches = str.match(/\b(\w)/g);
      const initialName = matches.join("").toUpperCase();

      return (
        <tr key={user}>
          <td className="d-flex justify-content-left">
            <div
              className="rounded-circle bg-success text-light d-flex justify-content-center align-items-center"
              style={{
                width: "31.5px",
                height: "31.5px",
              }}
            >
              {initialName}
            </div>
            <label className="ms-3 mt-1">{item.employee}</label>
          </td>
          <td className={DashboardStyle.EMAIL}>{item.email}</td>
          <td className={DashboardStyle.DEPARTEMENT}>
            {item.departement == undefined ? "-" : item.departement}
          </td>
          <td
            className={`d-flex justify-content-left ${DashboardStyle.STATUS}`}
          >
            <Alert
              className={DashboardStyle.STATUS}
              color="success"
              style={{
                width: "max-content",
                height: "34px",
                paddingTop: "4px",
                paddingRight: "12px",
                paddingBottom: "8px",
                paddingLeft: "12px",
              }}
            >
              {userActive(item.is_active)}
            </Alert>
          </td>
          <td>
            <Button
              className="bg-dark me-1"
              onClick={() => getUserById(item.id)}
            >
              <Image src={editIcon} alt="edit_user" />
            </Button>
            <Button
              className="bg-danger ms-1"
              onClick={() => handleDeleteUser(item.id)}
            >
              <Image src={deleteIcon} alt="delete_user" />
            </Button>
          </td>
        </tr>
      );
    });

  return (
    <>
      <Col lg={10} id="UserManagement" className="tabcontent">
        <Row>
          <Col lg={5}>
            <label className={DashboardStyle.LABEL}>User Management</label>
            <p className={DashboardStyle.LABEL_DESC}>User</p>
          </Col>
          <Col lg={4}>
            <input
              className={DashboardStyle.INPUT_SEARCH}
              type="search"
              name="search"
              value={searchValue}
              onChange={(e) => setsearchValue(e.target.value)}
              placeholder="Search name"
            />
          </Col>
          <Col lg={1}>
            <button
              className={`d-flex justify-content-center align-items-center ${DashboardStyle.BUTTON_CREATE_USER}`}
              onClick={toggle}
            >
              <Image src={plusIcon} alt="create user" />
              <label className="ms-2">Create User</label>
            </button>
          </Col>
        </Row>
        <Row>
          <Table className="table align-middle table-borderless">
            <thead className="bg-light border border-light">
              <tr>
                <th>Employee</th>
                <th className={DashboardStyle.EMAIL}>Email</th>
                <th className={DashboardStyle.DEPARTEMENT}>Department</th>
                <th className={DashboardStyle.STATUS}>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="border border-light">{dataUser}</tbody>
          </Table>
        </Row>
        <Row>
          <Col lg={9}>Ditampilkan 1 ke 5 dari {data?.length}</Col>
          <Col lg={2}>
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li key={number} className="page-item ">
                  <a
                    onClick={() => paginate(number)}
                    className="page-link rounded-circle ms-1 me-1 bg-success text-dark fw-bolder"
                  >
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Col>
      {/* Create User Modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create User</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="employee">Employee</Label>
              <Input
                onChange={(e) => handleOnChange(e)}
                id="employee"
                name="employee"
                placeholder="employee"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                onChange={(e) => handleOnChange(e)}
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                onChange={(e) => handleOnChange(e)}
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Confirm Password</Label>
              <Input
                onChange={(e) => handleOnChange(e)}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="employee">Departement</Label>
              <Input
                onChange={(e) => handleOnChange(e)}
                id="departement"
                name="departement"
                placeholder="departement"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Status">Status</Label>
              <Input
                id="isActive"
                className="mb-3"
                type="select"
                onChange={(e) => handleOnChange(e)}
              >
                <option>ACTIVE</option>
                <option>NOT ACTIVE</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleCreateUser}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* Update User Modal */}
      <Modal isOpen={update} toggle={toggleUpdate}>
        <ModalHeader toggle={toggleUpdate}>Edit</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="employee">Employee</Label>
              <Input
                defaultValue={dataById.employee}
                onChange={(e) => handleOnChangeUpdate(e)}
                id="employee"
                name="employee"
                placeholder="employee"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                defaultValue={dataById.email}
                onChange={(e) => handleOnChangeUpdate(e)}
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                onChange={(e) => handleOnChangeUpdate(e)}
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Confirm Password</Label>
              <Input
                onChange={(e) => handleOnChangeUpdate(e)}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="departement">Departement</Label>
              <Input
                defaultValue={dataById.departement}
                onChange={(e) => handleOnChangeUpdate(e)}
                id="departement"
                name="departement"
                placeholder="departement"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Status">Status</Label>
              <Input
                defaultValue={
                  dataById.is_active == true ? "ACTIVE" : "NOT ACTIVE"
                }
                id="isActive"
                className="mb-3"
                type="select"
                onChange={(e) => handleOnChangeUpdate(e)}
              >
                <option>ACTIVE</option>
                <option>NOT ACTIVE</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleUpdate}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggleUpdate}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
