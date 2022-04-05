import React, { Component } from "react";

class ModalFines extends Component {
  cancelModal = () => {
    this.props.closeModal();
  };
  changeCurrentData = (type, isInc) => {
    this.props.changeCurrentData(type, isInc);
  };
  saveChanges = () => {
    this.props.saveChanges();
  };
  componentWillMount = () => {
    this.props.clearCurrentData();
  };
  render() {
    const { currentData, fullName } = this.props;
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h2>Add Fines</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <form>
                  <label htmlFor="name">Driver Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="off"
                    value={fullName}
                  />
                </form>
              </div>
              <div className="col-4">
                <form>
                  <label htmlFor="model">Model</label>
                  <input
                    className="form-control"
                    type="text"
                    name="model"
                    id="model"
                    autocomplete="off"
                  />
                </form>
              </div>
              <div className="col-4">
                <form>
                  <label htmlFor="register">Register number</label>
                  <input
                    className="form-control"
                    type="text"
                    name="register"
                    id="register"
                    autocomplete="off"
                    placeholder="00 A 000 AA"
                  />
                </form>
              </div>
              <div className="col-6">
                <form>
                  <label htmlFor="offence">Driving offence</label>
                  <input
                    className="form-control"
                    type="text"
                    name="offence"
                    id="offence"
                    autocomplete="off"
                  />
                </form>
              </div>
              <div className="offset-2 col-4">
                <h5>Fine amount</h5>
                <div className="btn-group">
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.changeCurrentData("fine", false)}
                  >
                    -
                  </button>
                  <button className="btn">
                    ${currentData ? currentData.fine : 0}
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => this.changeCurrentData("fine", true)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-warning " onClick={this.cancelModal}>
              Cancel
            </button>
            <button className="btn btn-primary mx-2" onClick={this.saveChanges}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalFines;
