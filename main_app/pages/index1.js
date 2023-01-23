import React from 'react';
import { useState } from 'react';

// import { useState, useRef } from 'react';
// import Modal from 'react-modal';





import ReactModal from 'react-modal';





export const getStaticProps = async() => {
    const res = await fetch('http://localhost:4000/data');
    const data = await res.json();


    return {
        props: { image_blob: data }
    }
}





const getdata = ({ image_blob }) => {


    return (
   
        <>
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="./motion_detection"><span style={{color: "red"}}>SEN</span><span>TINELS</span></a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#team">Team</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="./index1">Captured</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="./">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>


<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />
 

        <div className="page-section-heading">
        
                <h1> Motion Detected</h1> 
               
                    <><table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Date and Time</th>
                                <th scope="col">Captured Image</th>

                            </tr>
                        </thead>
                        <tbody>
                        {image_blob.map(datas => (
                        <tr>
                            <td>{datas.date_time}</td>
                            <td>
                            <img className='im' src={`data:image/png;base64,${datas.captured}`}
                    
                            /></td>
                                                    
                           
                        </tr>


                        ))} 

                        </tbody>
                    </table>
                </>
               
                   

                    
              </div>
               
                
                </>

                
    )

}


export const config = {
    api: {bodyParser: {
            sizeLimit: '4mb',
        },
    },
}
export default getdata;


