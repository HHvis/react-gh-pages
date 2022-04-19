import React, { Component } from "react";
import ControlledInputsMultiList from "./ControlledInputsMultiList";

export default class ControlledInputsMulti extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: "Edvinas",
          surname: "Karalis",
          birthdate: "1991-09-05",
          city: "Vilnius",
          module: "PHP",
          group: "PHP21",
          id: Date.now() + 1,
        },
      ],
      name: "",
      surname: "",
      birthdate: "",
      city: "",
      module: "",
      group: "",
      btn: "Submit",
      updateId: "",
    };
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();

    if (this.state.btn === "Submit") {
      const data = [
        ...this.state.users,
        {
          id: Date.now(),
          name: this.state.name,
          surname: this.state.surname,
          birthdate: this.state.birthdate,
          city: this.state.city,
          module: this.state.module,
          group: this.state.group,
        },
      ];
      console.log(data);
      this.setState({
        users: data,
        name: "",
        surname: "",
        birthdate: "",
        city: "",
        module: "",
        group: "",
      });
    } else {
      const data = [...this.state.users];
      const index = this.state.users.findIndex(
        (user) => user.id === this.state.updateId
      );
      data[index] = {
        ...data[index],
        name: this.state.name,
        surname: this.state.surname,
        birthdate: this.state.birthdate,
        city: this.state.city,
        module: this.state.module,
        group: this.state.group,
      };
      this.setState({
        users: data,
        btn: "Submit",
        name: "",
        surname: "",
        birthdate: "",
        city: "",
        module: "",
        group: "",
      });
    }
  };

  deleteUser = (id) => {
    const data = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: data,
    });
  };

  editUser = (user) => {
    this.setState({
      name: user.name,
      surname: user.surname,
      birthdate: user.birthdate,
      city: user.city,
      module: user.module,
      group: user.group,
      btn: "Redaguoti",
      updateId: user.id,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <form className="border p-3" onSubmit={this.submitForm}>
              <h3 className="mb-3">Registracija</h3>
              <div className="form-group">
                <label htmlFor="name">Vardas</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Įrašykite vardą"
                  value={this.state.name}
                  name="name"
                  onChange={this.inputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Pavardė</label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  placeholder="Įrašykite pavardę"
                  value={this.state.surname}
                  name="surname"
                  onChange={this.inputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="birthdate">Gimtadienis</label>
                <input
                  type="date"
                  className="form-control"
                  id="birthdate"
                  placeholder="MM/DD/YYYY"
                  value={this.state.birthdate}
                  name="birthdate"
                  onChange={this.inputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Miestas</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Įrašykite miestą"
                  value={this.state.city}
                  name="city"
                  onChange={this.inputChange}
                  required
                />
                </div>
                <div className="form-group">
                <label htmlFor="module">Programa</label>
                <input
                  type="text"
                  className="form-control"
                  id="module"
                  placeholder="Įrašykite programą"
                  value={this.state.module}
                  name="module"
                  onChange={this.inputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="group">Grupė</label>
                <input
                  type="text"
                  className="form-control"
                  id="group"
                  placeholder="Įrašykite grupę"
                  value={this.state.group}
                  name="group"
                  onChange={this.inputChange}
                  required
                />
                </div>
              <button type="submit" className="btn btn-primary">
                {this.state.btn}
              </button>
            </form>
          </div>
          <div className="col-9">

            {this.state.users.length > 0 && (
              <ControlledInputsMultiList
                users={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
