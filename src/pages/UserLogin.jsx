import React from "react";


function UserLogin() {
  return (
    <div className="container">
        <div className="d-flex justify-content-center align-items-center form-container">
      <form>
        <h3 className="h3 mb-3">Please sign in</h3>

        <div className="form-floating mb-2 custom-input">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-dark w-100 py-2 mb-2" type="submit">
          Sign in
        </button>
        <div className="text-center mt-2">
          <a href="#">Sign in as an Admin</a>
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </form>
      </div>
    </div>
  );
}

export default UserLogin;
