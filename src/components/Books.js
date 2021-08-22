import React,{useRef} from 'react';
import './Books.css';

function Books() {
    const refbook=useRef();
    const handleMouseEnter = () => {
        refbook.current.classList.add("rotate")
    }

    const handleMouseOut = () => {
        refbook.current.classList.remove("rotate")
    }

    const handleOnClick = () => {
        refbook.current.classList.add("flip")
    }

    const handleOnClickBack = () => {
        refbook.current.classList.remove("flip")
    }
  return (
    <div className="wrap">
        <div className="perspective">
            <div className="book-wrap" id="books" ref={refbook}>
                <div className="book book-1" onClick={handleOnClick} onMouseOut={handleMouseOut} onMouseEnter={handleMouseEnter}>

                </div>
                <div className="title book-1"></div>
                <div className="book-back book-1" onClick={handleOnClickBack}>
                    <div className="text">
                        <h3>Math for kids: Learn to Count, Addition, Substraction, Multuplication, and ...</h3>
                        <p>
                            <span>Copyright 2020 by Paulina Fischer All rights reserved. 
                                <br/>First Printing 
                                <br/>ISBN: 9798632748568
                                <br/>ninotchkazc@gmail.com paulina-fisher.com
                            </span>
                        </p>    
                    </div>
                </div>
            </div>
            <a className="buyBoton" target='_blank' href='https://www.amazon.com/Math-Kids-Addition-Subtraction-Multiplication-ebook/dp/B086RFZFDC/'>Buy</a>
            <div className="description">
                <p>Paulina Fischer is a psychologist and graphic designer interested in developing educational products that give joy and knowledge to the children of the world. If you want to buy a book you can do it through Amazon worldwide.</p>
            </div>
        </div>
       
    </div>
   
 
  );
}

export default Books;