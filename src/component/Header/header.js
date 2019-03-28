import React from "react";
const  Header = () => {
    return (
      <header>
      <div className="row">
        <div className="col-sm-6">
          <h1>
            <img className="img-fluid d-sm-none mr-2" src={require('../../assets/img/logo-green.png')} alt="Logo"/>
              CryptoCrunch App
          </h1>
        </div>
        <div className="col-sm-6 d-flex justify-content-md-end justify-content-center">
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