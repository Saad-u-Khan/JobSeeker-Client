import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function UpdateJob() {
  let { id } = useParams();
  const [values, setValues] = useState({
    role: "",
    name: "",
    description: "",
    skills: "",
    type: "",
    experience: "",
    salary: "",
    location: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/jobs/${id}`);
        setValues(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching candidate:", error);
      }
    };
    fetchJob();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/jobs/${id}`,
        values
      );
      console.log(response);
      navigate("/jobs");
    } catch (error) {
      console.error("Error updating candidate:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 mx-5">
      <div className="col-md-6">
        <div className="bs">
          <h1>Update Job Details: </h1>
          <form className="mt-5">
            <div className="mb-3">
              <label htmlFor="role" className="col-form-label">
                Role:
              </label>
              <input
                type="text"
                className="form-control"
                id="role"
                value={values.role || ""}
                onChange={(e) => setValues({ ...values, role: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="col-form-label">
                Company Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={values.name || ""}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="col-form-label">
                Job Description:
              </label>
              <textarea
                className="form-control"
                id="jobDescription"
                rows="3"
                value={values.description || ""}
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="skills" className="col-form-label">
                Skills:
              </label>
              <input
                type="text"
                className="form-control"
                id="skills"
                value={values.skills || ""}
                onChange={(e) =>
                  setValues({ ...values, skills: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="employmentType" className="form-label">
                Employment Type
              </label>
              <select
                className="form-control"
                id="employmentType"
                value={values.type || ""}
                onChange={(e) => setValues({ ...values, type: e.target.value })}
              >
                <option value="">Select...</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="experience" className="form-label">
                Experience (in years)
              </label>
              <input
                type="text"
                className="form-control"
                id="experience"
                value={values.experience || ""}
                onChange={(e) =>
                  setValues({ ...values, experience: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">
                Salary
              </label>
              <input
                type="text"
                className="form-control"
                id="salary"
                value={values.salary || ""}
                onChange={(e) =>
                  setValues({ ...values, salary: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                value={values.location || ""}
                onChange={(e) =>
                  setValues({ ...values, location: e.target.value })
                }
              />
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-end mb-3">
          <Link to={`/candidates`} className="btn btn-secondary me-1">
            Close
          </Link>
          <button onClick={handleClick} type="button" className="btn btn-dark">
            Update Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateJob;
