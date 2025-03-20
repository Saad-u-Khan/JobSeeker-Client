import React from "react";
import { useState } from "react";
import axios from "axios";

function Modal() {

  const [values, setValues] = useState([]);
    
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/candidates', values);
      console.log(response);
      closeModal();
      location.reload();
    } catch (error) {
      console.error("Error adding candidate:", error);
    }
  };

  return (
    <div>
      <button onClick={openModal} className="btn btn-success">
        Add New Candidate
      </button>
      {modal && (
        <div
          className="modal fade show d-block modal-wrapper"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content animate-modal">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Enter Candidate Details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Name:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      onChange={e => setValues({...values, name: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Email:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      onChange={e => setValues({...values, email: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Contact:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      onChange={e => setValues({...values, contact: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Qualification:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      onChange={e => setValues({...values, qualification: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Skills:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      onChange={e => setValues({...values, skills: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Location:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      onChange={e => setValues({...values, location: e.target.value})}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button onClick={handleClick} type="button" className="btn btn-dark">
                  Add Candidate
                </button>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Modal;
