import './About.css'
import Card from '../Card/Card'
import img1 from '../../assets/img.jpg'


function About(){
    return(
    <div className="outbox">
        <div className="container">
            <h1 className='title'>About me</h1>
            <p className='context'>Hi, I'm <span className='highlight'>Baranidharan</span>, a dedicated 
            <span className='highlight'> web developer,</span><span className='highlight'> software developer, </span>
            <span className='highlight'>front-end developer,</span> and <span className='highlight'>back-end developer.</span> My
            passion lies in <span className='highlight'>creating seamless</span> and efficient application that
            solve <span className='highlight'>real-world </span>problems and enhance
            <span className='highlight'> user-experiences. </span>with a strong foundation in both the <span className="highlight">front-end </span>
            and <span className="highlight"> backend</span>, I bridge the gap between design and functionality,
            delivering comprehensive and scalable <span className='highlight'>software solutions</span>.
            </p>
        </div>
    </div>)
}

export default About