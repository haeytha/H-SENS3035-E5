"use client";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from "react";

export default function Content() {
    return (
        <>
            <header className='muheader bg-primary text-white text-center p-4 mb-3'>
                <h1 className='custom-font'>Exercise &#35;2&#58; Plugin integration with React and npm</h1>
            </header>
            
            <main className='flex-grow-1'>
               
                <div className="container">
                <h2>Practice 2</h2>
                <div className="row">
                    <div className="col-6">
                        [MAP HERE]
                    </div>
                    <div className="col-6">
                        [CART HERE]
                    </div>
                    <div className="col-12">
                        [PLAYER HERE]
                    </div>
                </div>
                </div>




            </main>
            
            <footer className='footerstyle bg-primary text-white text-center p-4 sticky-bottom'>
                <span id="datetime" className='text-warning'><small>September 12, 2024</small></span>
                <span><small>&copy; 2024 Haeytham Almalak. All rights reserved.</small></span>
            </footer>
        </>
    );
}
