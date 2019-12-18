import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'

import './Hero.css'
import {responsiveTitle3} from './typography.module.css'

const Hero = props => (

  <div className="Hero">
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <a>{props.url}</a>

     
  </div>

)

export default Hero
