import React from 'react'
import './style.css';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function Register() {

  const submit = () =>{
    alert("Your accounte is created",)
  }
  return (
    <>
      <div className='Main_container'>
        <div className='Main-box'>
          <div className='box-contianer'>
            <div className='row background_image'>
            <div className='col-6'>
                <p className='Heading_title'></p>
              </div>
              <div className='col-6 half_background'>
                <p className='Heading_title'>Join us</p>
                <p>Create your free account and start coding now.</p>
                <div>
                  <Form >
                  <Form.Group md="6" controlId="validationCustom03">
                  <Form.Group  controlId="validationCustom03">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="" required />
                    </Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>

                    <div className='row mainContainer' >
                      <div className='col-6'>
                        <Button as="a" variant="white"  className='Create'>
                          <Link className='link' to='/'>
                          LOGIN
                          </Link>
                        </Button>
                      </div>
                      <div className='col-6'>
                        <Button as="a" type='submite' onClick={submit}  variant="success" >
                          CREATE ACCOUNT
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
