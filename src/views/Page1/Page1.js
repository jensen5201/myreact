import React, { Component } from 'react'
import './Page1.css'
import image from '@/assets/imgs/004.jpg'

export default class Home extends Component {
  render  () {
    return (
      <div className="page-box">
        this is page1~
        <img src={image} />
      </div>
    )
  }
}
