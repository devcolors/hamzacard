import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../transactionHistory.css"

const TransactionHistory = () => {
    // const [isSliding, setSliding] = useState(true)
    const [milli, setAmilli] = useState(false)
    const navigate = useNavigate()
    // const handleSlide = () => {
    //     setSliding(true)
    // }

    const reachAMilli = () => {
        setAmilli(true)
    }
    return (
        <div>
            <div className='header-container'>
                <a className='nodec' href='/'>
                    <img src='/logo.png' className='logo' alt='logo'/>
                </a>
                <h3 className='about-link'>
                    <a className='nodec' color='grey' onClick={() => navigate('/about')}>&#9432; About Hamza</a>
                </h3>
            </div>
            <hr className='header-line' />

            <div className='content sliding'>
                <div className='row'>
                    <h3 className='flex text'>Total:</h3>
                    <h3 className={milli ? 'flex text green' : 'flex text'}>{milli ? `$1,000,000!!!` : `$999,999`}</h3>
                </div>

                <hr className='top-section-line'/>
                
                <div className='row'>
                    <h3 className='half-flex secondary-text text'>
                        JavaScript <br/> Investment:
                    </h3>
                    <h3 className='half-flex secondary-text text green'>+$250,000</h3>
                </div>

                <hr className='section-line'/>
                
                <div className='row'>
                    <h3 className='half-flex secondary-text text'>
                        Python <br/> Investment:
                    </h3>
                    <h3 className='half-flex secondary-text text green'>+$250,000</h3>
                </div>

                <hr className='section-line'/>
                
                <div className='row'>
                    <h3 className='half-flex secondary-text text'>
                        Java <br/> Investment:
                    </h3>
                    <h3 className='half-flex secondary-text text green'>+$300,000</h3>
                </div>

                <hr className='section-line'/>
                
                <div className='row'>
                    <h3 className='half-flex secondary-text text'>
                        AWS Cloud <br/> Investment:
                    </h3>
                    <h3 className='half-flex secondary-text text green'>+$100,000</h3>
                </div>

                <hr className='section-line'/>
                
                <div className='row'>
                    <h3 className='half-flex secondary-text text'>
                        SQL/NoSQL DB <br/> Investment:
                    </h3>
                    <h3 className='half-flex secondary-text green text'>+$100,000</h3>
                </div>

                <hr className='section-line'/>
                
                {
                milli? 
                <div className='row'>
                    <h3 className='half-flex secondary-text text'>
                        Full-Stack Dev <br/> Reward:
                    </h3>
                    <h3 className='half-flex secondary-text text green'>+$1</h3>
                </div> :
                <div className='row'>
                    <h3 className='half-flex secondary-text text'>
                        No Full-Stack Dev <br/> Penalty:
                    </h3>
                    <h3 className='half-flex secondary-text text red'>-$1</h3>
                </div>
                }

                
                
                <hr className='section-line'/>

                

                <div className='row'>
                    <h3 className='flex secondary-text text bottom-text'>
                     <span className='yellow'>&#9888;</span> Uh oh!
                    <br/>
                    It looks like you've invested in some great tech, but you still don't have a full-stack dev to build with it!
                    <br/><br/>
                    As a CapitalTwo&trade; <i> <span className='red'>Hamza</span><span className='grey'>Card</span></i> holder, you can hire an amazing full-stack dev to make the best use of your tech investments: 
                    <br/><br/> Hamza Siddiqui!
                    </h3>
                </div>
                
                <div className='row'>
                    <span className='text bottom-text'>Click below to send Hamza an email and reach your first $1,000,000!</span>
                </div>
                <br/>
                <br/>
                <div className='row'>
                    <button className='mail-button' onClick={reachAMilli}>
                    <a href="mailto:hamzasiddiqui205@gmail.com?subject=Job Inquiry%20-%20<YOUR COMPANY>&body=Write%20your%20message%20here" class="white nounderline">Send Email</a>
                    </button>
                </div>
                <br/>
                <div className='row'>
                    <button className='mail-button' onClick={() => navigate('/about')}>
                        <span className='white'>
                        Learn More
                        </span>
                    </button>
                </div>
                
                <br/>
                <br/>
                <div className='row'>
                    <span className='bottom-text text'>Or reach me at hamzasiddiqui205@gmail.com</span>
                </div>
                
                <br/>
                <br/>
            </div>
            

            
        </div>
    )
}

export default TransactionHistory