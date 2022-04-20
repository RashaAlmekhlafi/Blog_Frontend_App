import React from 'react';
import { useState } from "react";

const Footer = () => {
    
    const [emailData, setEmailData] = useState(" ")
    const [Messg, setMessg] = useState(" ")

    const subscribe = () => {
        const data = { email: emailData }
        fetch('https://www.wp-course.site/wp-json/youthink/subscribe', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMessg(data.message)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        
    }

    return (
        <footer>
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-md-2 col-sm-12">
                        <h4>Section</h4>


                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h4>Section</h4>

                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h4>Section</h4>

                    </div>
                    <div className="col-md-6 col-sm-12">
                       
                        <form className="form-inline" >
                            <div className="form-group mb-2">
                                <p>Subscrib To Our Newletter</p>

                            </div>
                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm"
                                placeholder="Email"
                                onChange={(e) => { setEmailData(e.target.value) }} />
                            <p className="fs-6 fw-lighter text-muted">We never share your emails with anyone else.</p>
                            <p className="fs-6 fw-lighter text-primary">{Messg}</p>
                            
                            <button type="button" className="btn btn-primary mb-2" onClick={subscribe}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer