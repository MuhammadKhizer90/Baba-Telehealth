import { useState } from 'react';
import "./questions.scss"; 
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function DropdownComponent() {
    const [openIndex, setOpenIndex] = useState(null); 

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className='question-txt-btn'>
                <p className="question-text">Q. How soon can i make appointment with Dr. Baba Hub?</p>
                <button
                    className={`icon-button ${openIndex === 0 ? 'open' : ''}`} 
                    onClick={() => toggleDropdown(0)}
                >
                    {openIndex === 0 ? <FaMinus className='minus'/> : <FaPlus />} {/* Change icon based on isOpen state */}
                </button>
            </div>
            {openIndex === 0 && (
                <div className="dropdown">
                    {/* Dropdown content */}
                    <p className='dropdown-text'>
                       generally Dr.Baba Hub has appointments available on Baba Telehealth with in 1 week.You can see Baba Hub earliest availability on Baba Telehealth and make an appointment online.
                    </p>
                </div>
            )}
               <hr className='dropdown-line'/>
            <div className='question-txt-btn'>
                <p className="question-text">Q. Is Dr. Baba Hub accepting new patients?</p>
                <button
                    className={`icon-button ${openIndex === 1 ? 'open' : ''}`} 
                    onClick={() => toggleDropdown(1)}
                >
                    {openIndex === 1 ? <FaMinus className='minus'/> : <FaPlus />} 
                </button>
            </div>
            {openIndex === 1 && (
                <div className="dropdown">
                    {/* Dropdown content */}
                    <p className='dropdown-text'>
                    generally Dr.Baba Hub has appointments available on Baba Telehealth with in 1 week.You can see Baba Hub earliest availability on Baba Telehealth and make an appointment online.
                    </p>
                </div>
            )}
              <hr className='dropdown-line'/>
            <div className='question-txt-btn'>
                <p className="question-text">Q. Can I make appointment with Dr. Baba Hub online?</p>
                <button className={`icon-button ${openIndex === 2 ? 'open' : ''}`} onClick={() => toggleDropdown(2)}>
                    {openIndex === 2 ? <FaMinus className='minus'/> : <FaPlus />} 
                </button>
            </div>
            {openIndex === 2 && (
                <div className="dropdown">
                    <p className='dropdown-text'>
                    Yes, you can make an appointment online with Dr. Baba Hub using Baba Telehealth. It’s simple, secure, and free.
                    </p>
                </div>
            )}
            <hr className='dropdown-line'/>
            <div className='question-txt-btn'>
             <p className='question-text'>Q. Does Dr.Baba Hub accept my insurance?</p>
             <button className={`icon-button ${openIndex === 3 ? 'open':''}`} onClick={()=>toggleDropdown(3)}>
             {openIndex === 3 ? <FaMinus className='minus'/> : <FaPlus />}
             </button>
            </div>
            {openIndex === 3 && (
                <div className='dropdown'>
                  <p className='dropdown-text'>
                  Yes, you can make an appointment online with Dr. Baba Hub using Baba Telehealth. It’s simple, secure, and free
                    </p>
                </div>
            )}
        </>
    );
}

export default DropdownComponent;