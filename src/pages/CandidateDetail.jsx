import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function CandidateDetail() {
  let { id } = useParams();
  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/candidates/${id}`
        );
        setCandidate(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching candidate: ", error);
      }
    };
    fetchCandidate();
  }, []);

  return (
    <div>
    <div className="d-flex justify-content-end m-3">
        <Link to={`/candidate/details/${candidate.id}`} className="btn btn-dark me-1">Update</Link>
        <Link to={'/'} className="btn btn-dark me-1">Home</Link>
        </div>
    <div className="row justify-content-center mt-5">
      <div className="col-md-11">
        <div className="bs">
            <h3><b>Name: </b>{candidate.name}</h3>
            <h3><b>Email: </b>{candidate.email}</h3>
            <h3><b>Contact Information: </b>{candidate.contact}</h3>
            <h3><b>Qualification: </b>{candidate.qualification}</h3>
            <h3><b>Skills: </b>{candidate.skills}</h3>
            <h3><b>Location: </b>{candidate.location}</h3>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default CandidateDetail;
