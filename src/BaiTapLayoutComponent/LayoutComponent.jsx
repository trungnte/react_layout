import React, { Component } from 'react'

export default class LayoutComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-lg-5">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>

        <div className='container p-5'>
          <div classname="container p-lg-5">
            <div className='p-4 p-lg-5 bg-light text-center'>
              <div classname="m-4 m-lg-5 p-lg-5">
                <h1 className='mt-5 mb-3 h1_bold'>A warm welcome!</h1>
                <p className='px-5 banner_text'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <button type="button" className="btn btn-primary banner_text mb-5">Call to action</button>
              </div>
            </div>
            
          </div>
        </div>
        
        <footer className='py-5 bg-dark'>
          <div className='container'>
            <p className='m-0 text-center text-white'>Copyright © Your Website 2022</p>
          </div>
        </footer>

      </div>
    )
  }
}
