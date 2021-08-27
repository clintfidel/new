import React from 'react';
import './FormCom.css';
import Signature from '../assets/icons(svg)/badgeIcon.svg'
import { Link } from 'react-router-dom';


const FormCom = ({active}) => {
  return (
    <form>
      <div className="signature">
        <div className="signature-content">
          <p style={{color: '#989898'}}>By</p>
          <img src={Signature} alt="" />
          <p>Federal Housing Authority</p>
        </div>
      </div>
      <section className="form-section collapse">
        <div className="header-div"></div>
       
          <p  className="header-desc">300,000 Affordable Housing Units</p>
        
        <div className='Survey-title'>Untitled Survey</div>
        <p className='survey-desc'>Survey Description</p>
      </section>


      <section className="form-section shot-section">
        <div className="question-content">
        
        <p className="section-question">Which of these is correct about this project?</p>
        <form className="checkbox-form" >
          
               <label class="container">
  <input className="radio" type="radio" name='answer' />
  Option 1
              <span class="checkmark"></span>
</label>

<label class="container">
  <input className="radio"  type="radio" name='answer' />
  <span class="checkmark"></span> Option 2
</label>



  
          </form>
            
        </div>
      </section>
      

      <section className="form-section shot-section">
        <div className="question-content">
        <p className="section-question">How would you rate this project?</p>
          <div className="rate">
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star plain"></i>
          </div> 
        </div>
        </section>

      <section className="form-section shot-section">
        <div className="question-content">
        <p className="section-question">How would you rate this project?</p>
          <div className="rate">
            <div className="rating">
           <i class="fas fa-star"></i>
           <p>Very poor</p>
            </div>
            
            <div className="rating">
           <i class="fas fa-star"></i>
           <p>Poor</p>
            </div>

            <div className="rating">
            <i class="fas fa-star-half-alt"></i>
           <p>Average</p>
            </div>

            <div className="rating">
            <i class="far fa-star plain"></i>
           <p>Good</p>
            </div>

            <div className="rating">
            <i class="far fa-star plain"></i>
           <p>Very Good</p>
            </div>
          
          </div> 
        </div>
        </section>

      
      <section className="form-section shot-section">
        <div className="question-content">
        <p className="section-question">How would you rate this project?</p>
          <div className="rate">
            <div className="rating">
              <i class="fas fa-angry emoji"></i>
              </div>
            <div className="rating">
              <i class="fas fa-frown-open  emoji"></i>
              </div>
            <div className="rating">
              <i class="fas fa-smile  emoji"></i>
              </div>
            <div className="rating">
  
              <i class="far fa-smile-beam  emoji"></i>
              </div>
              <div className="rating">
              <i class="far fa-laugh  emoji"></i>
              </div>
          </div> 
        </div>
        </section>

     

      <section className="form-section shot-section">
        <div className="question-content">
        <p className="section-question">How would you rate this project?</p>
          <div className="rate">
            <div className="rating">
              <i class="fas fa-angry emoji-rating"></i>
           <p>Very poor</p>
            </div>
            
            <div className="rating">
              <i class="fas fa-frown-open   emoji-rating"></i>
           <p>Poor</p>
            </div>

            <div className="rating">
              <i class="fas fa-smile   emoji-rating"></i>
           <p>Average</p>
            </div>

            <div className="rating">
            <i class="far fa-smile-beam   emoji-rating"></i>
           <p>Good</p>
            </div>

            <div className="rating">
            <i class="far fa-laugh   emoji-rating"></i>
           <p>Very Good</p>
            </div>
          
          </div> 
        </div>
        </section>

      <section className="form-section shot-section">
        <div className="question-content">
        <p className="section-question">How would you rate this project?</p>
          <div className="rate">
            <div class="custom-select">
  <select  style={{width:'320px', padding: '15px 15px'}}>
    <option value="0">Option 1</option>
    <option value="1">Option 2</option>
    <option value="2">Option 3</option>
    <option value="3">Option 4</option>
    <option value="4">Option 5</option>
    <option value="5">Option 6</option>
    <option value="6">Option 7</option>
    <option value="7">Option 8</option>
    <option value="8">Option 9</option>
    <option value="9">Option 10</option>
  </select>
</div>
          
          </div> 
        </div>
      </section>
      
       <section className="form-section">
        <div className="question-content">
        <p className="section-question">Which of these is correct about this project?</p>
          <div className="rate">
            <div class="custom-select">
              <textarea name='foo'   style={{width:'550px', padding: '15px 15px'}} cols="30" rows="6" resize="none" placeholder="Give Us a feedback"></textarea>
</div>
          
          </div> 
        </div>
        </section>
      
       <section className="form-section shot-section">
        <div className="question-content">
        <p className="section-question">Upload file for this project</p>
          <div className="rate">
            <div class="upload-layout">
              <div className='upload-btn'>
                <input className='upload-btn-input' type="text" placeholder="Add"
                />
              <i class="fas fa-upload"></i>
              </div>
</div>
          
          </div> 
        </div>
      </section>
      
       <section className="form-section shot-section">
        <div className="question-content">
        <p className="section-question">Select file for this project</p>
          <div className="rate">
            <div class="upload-layout  long">
              <div className='upload-btn'>
                <div style={{width: '80%', display: 'flex', alignItems: 'center'}}>

                <i class="far fa-image"></i>
                <input className='upload-btn-input color-placeholder' type="text" placeholder="File_name"
                />
                </div>
              <i class="fas fa-times"></i>
              </div>
            </div>
          
          </div> 
        </div>
      </section>
        <Link  className='link' style={{textDecoration: 'none', color: '#ffffff', fontSize: '16px'}} to="/Survey">Submit</Link>
      
      
      
    </form>
  )
}

export default FormCom
