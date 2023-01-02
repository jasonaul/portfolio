import React from 'react'

const About = () => {
  return (
    <>
    <div>About</div>
    <h1 className='about-title'>All About <strong class="blue">Me</strong></h1>
    <p className='about-text'>I am fledgling software engineer and full-stack developer. I strive to think big by continuously being customer-focused and customer-obsessed. These are the high standards I insist upon myself, and I continue to raise the bar with each new task and opportunity. I personally own each project I work towards and ensure I deliver results to my colleagues and partners.

</p>

<div className='button-about'>
{/* <button className='button-about' onclick="window.location.href=https://docs.google.com/document/d/1Vh6FUQrakphM2-pTHn-OhNzKgPGOK7NO/edit?usp=sharing&ouid=118256475805045854598&rtpof=true&sd=true">Download Jason's Resume</button> */}
  <a className="resume" href="https://docs.google.com/document/d/1Vh6FUQrakphM2-pTHn-OhNzKgPGOK7NO/edit?usp=sharing&ouid=118256475805045854598&rtpof=true&sd=true">Download Jason's Resume</a>
</div>
    </>
  )
}

export default About