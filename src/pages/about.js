import React from 'react'
import "../transactionHistory.css"
import "../about.css"
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()
    const windowwidth = window.screen.width
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
                        <div className='flex-top-section headshot-container'>
                            <img src='../headshot.png' className='headshot'/>
                        </div>
                        
                        {windowwidth > 950 && <h3 className='text aboutme'>hamzasiddiqui205@gmail.com</h3>}
                        

                        <a className='flex-top-section text linkedin' href='https://www.linkedin.com/in/hamza-sid/'>Linkedin</a>
                </div>
                <hr className='top-section-line'/>
                
                <div className='about-row'>
                    <h3 className='flex-section-header text'>Background</h3>
                </div>
                
                <div className='row'>
                    <span className='align-left text grey'>
                        I am a full-stack software engineer with a wide variety of technical skills/interests. 
                        When I was younger, I taught myself game development and began designing my own videogames using the Unity Engine.
                        Since then I have been fascinated by software development, and went on to study Computer Science at the University of Maryland, College Park.
                        <br/><br/>
                        Having taken courses in mobile app development and web development, I began building my own full-stack applications as a 2nd year college student.
                        I quickly learned how to design fluid user interfaces, intergrate UIs with backend infrastructure, and create full-fledged applications that people around me could use.
                        <br/><br/>
                        At the end of my 2nd year I interned at Capital One, where I acquired hands-on experience with software and data engineering in the fintech world.
                        After graduation I took this knowledge to my full-time job at Qualtrics, where I would design services that supported Qualtrics's banking/fintech integrations.
                        <br/><br/>
                        Recently, I founded a social media startup, called Beya, focused on redefining professional networking with a community driven approach. My startup placed In the top 5% of applicants for the Fall 2024 Y Combinator batch.
                        <br/><br/>
                        I am now looking for my next full-time opportunity as a software engineer. If you or anyone you know may be interested in my skills, shoot me an email at:
                        <br/>
                        hamzasiddiqui205@gmail.com
                    </span>
                </div>
                
                <div className='about-row'>
                    <h3 className='flex-section-header text'>Work History</h3>
                </div>
                
                <div className='row'>
                    <h4 className='flex-section-header text grey'>
                    Qualtrics - Software Engineer (Aug 2022 - October 2024)
                    </h4>
                </div>
                <div className='row'>
                    <span className='align-left text grey'>
    As a software architect for the Qualtrics XM Discover platform, an AI-powered customer experience analytics tool, I played a critical role in shaping the backend microservice data pipeline that powers Qualtrics' natural language processing insights. 
    Joining Qualtrics during the early stages of the Discover platform, I contributed to its evolution from a nascent project to an industry-leading AI-driven experience management solution. 
    <br/><br/>
    In my role, I drove several key improvements in a highly agile environment, including optimizing our data compression strategy to achieve a 5x increase in processing speed, which allowed us to meet stringent performance goals. Additionally, I led the development of a proxy server to securely handle PCI data for the banking sector, processing over 25 million daily requests. 
    <br/><br/>
    Beyond engineering, I ensured platform reliability through proactive on-call responsibilities, creating alerting tools that detect early signs of production issues. These tools have significantly reduced latency and response times, reinforcing the platform's stability and performance as it expanded into new regions and industries.
    <br/><br/>
    Stack: Java/Spring, Golang, Kubernetes/Docker, AWS, Splunk, ElasticSearch, RabbitMQ
                        </span>
                </div>
               
                <hr className='divider'/>
                <div className='row'>
                    <h4 className='flex-section-header text grey'>
                    Capital One - Software Engineer Intern (Jun 2021 - Aug 2021)
                    </h4>
                </div>
                <div className='row'>
                    <span className='align-left text grey'>
                    During my internship at Capital One, I collaborated with a team of software engineers to develop and deploy a Python and Spark-based ETL application that pruned highly redundant databases of duplicate rows. 
                    <br/><br/>
                    The final product was packaged as a reusable library, enabling data engineering teams across C1 to streamline their workflows. One of my key achievements was reducing the size of major internal databases to just 8% of their original sizes. This optimization significantly accelerated data analyses and cut SQL query times by over 90%.
                    <br/><br/>
    Stack: Python, Pandas, Snowflake SQL, DataBricks, Apache Airflow
                    </span>
                </div>
                
                <hr className='divider'/>
                <div className='row'>
                    <h4 className='flex-section-header text grey'>
                    Beya - Cheif Technology Officer (Oct 2023 - Present)
                    </h4>
                </div>
                <div className='row'>
                    <span className='align-left text grey'>
                    Currently working full-time as a founder, engineer and product lead of Beya: a secure, exclusive social network for Muslims. As a technical founder, I helped guide Beya's evolution into a ground-breaking vision with a clear path to reality by tackling the engineering challenges behind building a privacy-first social media app. I regularly use my background as an active member of the Muslim community and as an engineer with experience in AI/cybersecurity to make informed decisions about product features with respect to our target demographic. 
                    <br/><br/>
                    As CTO, I lead system design to ensure Beya is secure, scalable, and always available as we prepare for launch in early 2025. I manage 2 team members who are helping build Beya: a UX/UI designer and a frontend developer. I support them in a technical and managerial capacity, ensuring they have the resources to build the UI for Beya and that they meet milestones in alignment with our launch timeline. I have designed and implemented Beya's core social media features using a CRUD (create, read, update, delete) philosophy. Finished features include authentication/user profile creation, multimedia uploads, encrypted direct/group messaging, user networking/discovery, and an AI powered recommendation algorithm. Beya is configured to use AWS cloud resources including DynamoDB, S3, and EC2 for maximum availability, scalability, and partition tolerance.
                    <br/><br/>
    Stack: JavaScript (Node.js/Express), TypeScript (React), AWS (S3/DynamoDB)
                    </span>
                </div>
                
                <div className='about-row'>
                    <h3 className='flex-section-header text'>Education</h3>
                </div>
                
                <div className='row'>
                    <h4 className='flex-section-header text grey'>
                        B.S in Computer Science from the University of Maryland, College Park (grad. 2022)
                    </h4>
                </div>
                
                <div className='about-row'>
                    <h3 className='flex-section-header text'>Interested In</h3>
                </div>
                
                <div className='row'>
                    <h4 className='flex-section-header text grey'>
                        Entry-Mid level Software Engineering Roles (does not have to be full-stack)
                    </h4>
                </div>
                
                <div className='about-row'>
                    <h3 className='flex-section-header text'>Reach me at:</h3>
                </div>
                
                <div className='row'>
                    <h4 className='flex-section-header text grey'>
                        hamzasiddiqui205@gmail.com
                    </h4>
                </div>

            </div>
        </div>
    )
}

export default About