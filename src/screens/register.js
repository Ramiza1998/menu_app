import React from "react";
import { Link } from "react-router-dom";

function register() {
  return (
    <form className="form">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="usernmame">usernmame</label>
          <input
            type="text"
            className="from-control"
            placeholder="enter username"
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="from-control"
            placeholder="enter email"
          />
        </div>

        <button type="submit" className="btn btn-primary m-2">
          Create Account
        </button>
        <div classnaime="row">
          I alrready have an account
          <Link to="/" classnaime="nav-link">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}

export default register;
