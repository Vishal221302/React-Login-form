import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

function Login() {


  return (
    <>
      <div className='Main_container'>
        <div className='Main-box'>
          <div className='box-contianer'>
            <div className='row background_image'>
              <div className='col-6 half_background'>
                <p className='Heading_title'>Welcome back to Login form</p>
                <p>It's great to have you back!</p>
                <div>
                  <Form >
                    <Form.Group md="6" controlId="validationCustom03">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" required />
                      <Form.Control.Feedback type="invalid">
                        Please enter your email.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='row'>
                      <div className='col-6'>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check
                            required
                            label="Remember me?"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                          />
                        </Form.Group>
                      </div>
                      <div className='col-6'>
                        <Form.Group className="mb-3 forgot" controlId="formBasicCheckbox">
                          <p>Forgot password?</p>
                        </Form.Group>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-6'>
                        
                        <Button as="a" type='submite' variant="success">
                          LOGIN
                        </Button>
                      </div>
                      <div className='col-6'>
                        
                        <Button as="a" variant="white" className='Create'>< Link to='/register'>
                          CREATE ACCOUNT
                          </Link>
                        </Button>
                        
                      </div>
                    </div>
                  </Form>
                </div>
                <div className='row '>
                  <div className='login-with'>Or login with</div>
                  <div className='col  Other_link'>
                    <div className='kgik'>Facebook</div>
                    <div className='kgik'>Google</div>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <p className='Heading_title'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
