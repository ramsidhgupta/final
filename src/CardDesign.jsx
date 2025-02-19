import React from 'react';
import './CardDesign.css'
const CardDesign = () => {
  return (
    <>
    <div class="container h-100">
  <div class="row mt-5">
    <div class="col-md-6 col-lg-4 column">
      <div class="card gradient1-bg ">
        <div class="txt">
          <h1>BRANDING AND
CORPORATE DESIGN</h1>
          <p>Visual communication and problem-solving</p>
        </div>
        <a href="#">more</a>
        <div class="ico-card">
        <i class="fa fa-rebel"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gradient2-bg ">
        <div class="txt">
          <h1>Web Front-End 
SOLUTIONS</h1>
          <p>How design is implemented on the web.</p>
        </div>
        <a href="#">more</a>
      <div class="ico-card">
        <i class="fa fa-codepen"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gradient3-bg ">
        <div class="txt">
          <h1>UX/UI WEBsite AND MOBILE app</h1>
          <p>User Interface and User Experience Design.</p>
        </div>
        <a href="#">more</a>
      <div class="ico-card">
        <i class="fa fa-empire"></i>
      </div>
      </div>
    </div>
    
  </div>
</div>
    </>
  )
}

export default CardDesign