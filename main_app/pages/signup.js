import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React, {useState } from 'react'
import Axios from 'axios' 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [regUser, setUser] = useState('')
  const [regEmail, setEmail] = useState('')
  const [regPass, setPass] = useState('')
  const [regRepass, setRepass] = useState('')

  const [regStatuseErr, setRegstaterr] = useState('')

  const signup = () =>{
  
      Axios.post('http://localhost:4000/insert',{
        username: regUser, 
        email: regEmail, 
        password: regPass,
        repass: regRepass
      }).then((response)=>{
        console.log(response)
        if (response.data.message == "Successfully Registered"){
          window.location.href='./'
        }else{
          setRegstaterr(response.data.message)
        }
        
      })
  
  
    };
  return (
    <>
      <Head>
        <title>Motion Detection - Signup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      </Head>
      <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                  <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4 pb-5">

                      <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                      <p className="text-white-50 mb-5">Create an Account</p>


                        <h3 className='text-danger'>{regStatuseErr}</h3>
                        <div className="form-outline form-white mb-4">
                            <input type="text" onChange={(e)=>{setUser(e.target.value);}} id="typeUsernameX" className="form-control form-control-lg" placeholder='Enter Username' required />
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input type="text" onChange={(e)=>{setEmail(e.target.value);}} id="typeEmailX" className="form-control form-control-lg" placeholder='Enter Email' required />
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input type="password" onChange={(e)=>{setPass(e.target.value);}} id="typePasswordX" className="form-control form-control-lg" placeholder='Enter Password' required />
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input type="password" onChange={(e)=>{setRepass(e.target.value);}} id="typePasswordreX" className="form-control form-control-lg" placeholder='Retype Password' required />
                          </div>
                          <br/>
                          <button className="btn btn-outline-light btn-lg px-5" onClick={signup} type="submit">Signup</button>
        

                    </div>

                    <div>
                      <p className="mb-0">Already have an account? <a href="./" className="text-white-50 fw-bold">Login</a>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
