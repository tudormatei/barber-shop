import React from 'react';

import './Pricing.css'; 

const Pricing = () => {
  return (
    <div className='app'>
      <div className='background'>
        
      </div>
      <div className='app__pricing'>
        <div className='card-holder'>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title bold-text">Lorem Ipsum</h4>
          <h5>20$</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, nam prompta democritum vituperata ut, vis ad quas eloquentiam. At nominavi imperdiet has.</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Prompta</li>
          </ul>
          <br/>
          <a className='book-button' href="/contact"><button class="btn btn-success" type="submit">Book</button></a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title bold-text">Lorem Ipsum</h4>
          <h5>25$</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, nam prompta democritum vituperata ut, vis ad quas eloquentiam. At nominavi imperdiet has.</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Prompta</li>
          </ul>
          <br/>
          <a className='book-button' href="/contact"><button class="btn btn-success" type="submit">Book</button></a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title bold-text">Lorem Ipsum</h4>
          <h5>30$</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, nam prompta democritum vituperata ut, vis ad quas eloquentiam. At nominavi imperdiet has.</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Prompta</li>
          </ul>
          <br/>
          <a className='book-button' href="/contact"><button class="btn btn-success" type="submit">Book</button></a>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Pricing