import React, { Component } from 'react'

export default class BannerComponent extends Component {
  render() {
    return (
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
    )
  }
}
