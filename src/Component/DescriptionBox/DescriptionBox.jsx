import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            Lorem ipsum dolor sit amet consectetur 
            <br/>adipisicing elit. Tempora, labore aspernatur. 
            <br/>Libero minima est velit deserunt? Quod fuga 
            <br/>accusamus, sint necessitatibus architecto minima voluptate 
            <br/>doloremque tenetur accusantium quisquam assumenda at?
        </div>
    </div>
  )
}

export default DescriptionBox
