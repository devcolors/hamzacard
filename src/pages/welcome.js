import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Welcome.css"

const Welcome = () => {
    const [isSliding, setSliding] = useState(false)
    const navigate = useNavigate()
    const handleSlide = () => {
        setSliding(true)
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

            <div className='container'>
                <div className={isSliding ? 'welcome-text-container-sliding' : 'welcome-text-container'}>
                    <h1 className='welcome-text'>
                        Congratulations! <br/><br/>
                        You have qualified for the CapitalTwo &trade;<i> 
                            <h1> <span className='red'>Hamza</span>  Card</h1></i>
                        Click below to learn more:
                    </h1>
                    <div>
                        <button className='next-button' onClick={handleSlide}>
                            <span className='white'> Next &#8594; </span> 
                        </button>
                    </div>
                </div>
                
                <div id="replacingdiv" className={`prompt-text-container ${isSliding ? "slide-in" : ""}`}>
                    <h1 className='prompt-text'>
                        Hmm... <br/><br/>
                        It seems you already have some transactions on your CapitalTwo &trade;<i> 
                            <h1> <span className='red'>Hamza</span>  Card</h1></i>
                        Would you like to see what they are?
                    </h1>
                    <div>
                        <button className='next-button' onClick={() => {
                            handleSlide()
                            navigate('/transactionHistory')
                        }}>
                            <span className='white'> Yes &#8594; </span> 
                        </button>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Welcome