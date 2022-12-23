import React, { Component } from 'react'
import BannerComponent from './BannerComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ItemComponent from './ItemComponent'

export default class LayoutComponent extends Component {
  render() {
    return (
      <div>
        
        <HeaderComponent/>

        <BannerComponent/>

        {/* items */}
        <section className='mx-5'>
          <div className="container text-center p-5">
            <div className="row">
              <ItemComponent/>
              <ItemComponent/>
              <ItemComponent/>
              <ItemComponent/>
              <ItemComponent/>
              <ItemComponent/>
            </div>
          </div>
        </section>
        
        <FooterComponent/>

      </div>
    )
  }
}
