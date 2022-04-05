import React, { Component } from "react";
import ModalFines from "./components/ModalFines";

class App extends Component {
  state = {
    finesInformation: [],
    modalVision: false,
    currentData: "",
  };
  componentDidMount() {
    const finesInformation = [
      {
        fullName: "Daniel Riordan",
        model: "Audi",
        regNumber: "01 A 001 AA",
        offence: "Speeding",
        fine: 98,
      },
      {
        fullName: "Arman Ulysses Darbo",
        model: "BMW",
        regNumber: "01 B 007 AA",
        offence: "Using a mobile phone",
        fine: 21,
      },
      {
        fullName: "Daisy Eagan",
        model: "BYD",
        regNumber: "01 C 101 CA",
        offence: "Dangerous driving",
        fine: 86,
      },
      {
        fullName: "Georges Radu Metaxa",
        model: "Cherry",
        regNumber: "01 D 707 CD",
        offence: "Documents",
        fine: 49,
      },
      {
        fullName: "Vinny Cerrato",
        model: "Tesla",
        regNumber: "01 M 110 BB",
        offence: "Insurance",
        fine: 27,
      },
    ];
    this.setState({
      finesInformation,
    });
  }
  deleteFine = (index) => {
    const finesInformation = this.state.finesInformation;
    finesInformation.splice(index, 1);
    this.setState({
      finesInformation,
    });
  };
  openModal = () => {
    this.setState({
      modalVision: true,
    });
  };
  closeModal = () => {
    this.setState({
      modalVision: false,
    });
  };
  changeCurrentData = (type, isInc) => {
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : {
          fullName: "Name",
          model: "Model car",
          regNumber: "00 A 000 AA",
          offence: "Documents",
          fine: 0,
        };
    if (type === "fine") {
      if (isInc) {
        newCurrentData.fine++;
      } else {
        newCurrentData.fine--;
      }
    }
    this.setState({
      currentData: newCurrentData,
    });
  };
  saveChanges = () => {
    const { finesInformation, currentData } = this.state;
    finesInformation.push(currentData);
    this.setState({
      finesInformation,
      modalVision: false,
    });
  };
  clearCurrentData = () => {
    this.setState({
      currentData: "",
    });
  };
  render() {
    const { finesInformation, modalVision, currentData } = this.state;
    return (
      <div className="contain">
        <div className="container">
          <h1 className="text-center">Traffic Fines</h1>
          <div className="row my-2">
            <div className="col">
              <button className="btn btn-primary" onClick={this.openModal}>
                Add fines information
              </button>
              <div>
                {modalVision ? (
                  <ModalFines
                    closeModal={this.closeModal}
                    currentData={currentData}
                    changeCurrentData={this.changeCurrentData}
                    saveChanges={this.saveChanges}
                    clearCurrentData={this.clearCurrentData}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-light table-hover">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Driver name</th>
                    <th>Model</th>
                    <th>Register number</th>
                    <th>Driving offence</th>
                    <th>Amount of fine</th>
                    <th>Editing ...</th>
                  </tr>
                </thead>
                <tbody>
                  {finesInformation.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.fullName}</td>
                      <td>{item.model}</td>
                      <td>{item.regNumber}</td>
                      <td>{item.offence}</td>
                      <td>${item.fine}</td>
                      <td>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => this.deleteFine(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
