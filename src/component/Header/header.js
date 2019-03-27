import React from "react";
const  Header = () => {
    return (
      <header>
      <div className="row">
        <div className="col-6">
          <h1>CryptoCrunch App</h1>
        </div>
        <div className="col-6 d-flex justify-content-end">
        <div className="search">
          <input text="type" placeholder="Search"/>
          <button type="button"><i className="fas fa-search"></i></button>
        </div>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fas fa-envelope"></i>
          </div>
          
        </div>
      </div>
      </header>

)
}
export default Header;