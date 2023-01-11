import React from 'react'

const About = () => {
  return (
    <>
    <div>About</div>
    <h1 className='about-title'>All About <strong class="blue">Me</strong></h1>
    <p className='about-text'>I am fledgling software engineer and full-stack developer. I strive to think big by continuously being customer-focused and customer-obsessed. These are the high standards I insist upon myself, and I continue to raise the bar with each new task and opportunity. I personally own each project I work towards and ensure I deliver results to my colleagues and partners.

</p>
<p className='about-text'>
  I'm constantly learning! While I am still perfecting my skills in the MERN stack and related technologies, I am constantly strengthening my skills in Python while exploring new languages such as Go.
</p>
<p className='about-text'>Throughout my career, I strive to think big by continuously being customer-focused and customer-obsessed. Having spent over 10 years in communications and marketing, culminating in leadership roles, I’m intimately familiar with telling the story of products and connecting their relevance to the user. I understand what works for people and why certain products matter, but I’ve been deeply interested in working on the actual products themselves.
</p>
<p className='about-text'>
I’ve helped organizations generate $100,000s in revenue, executed marketing campaigns reaching over 20 international markets, and earned the “Maximizing Opportunities Award” from the State of Maryland’s Tourism Coalition. The more I work with partners and colleagues, the more I learn and the more I crave to be part of the on-the-ground work. I’m excited to combine my extensive communications and marketing experience with Software Engineering for a role with a new team.

I challenge the status quo successfully while earning trust from my partners and colleagues along the way. Through this, I am always seeking to learn and achieve more, and to better myself and the work that I do.</p>

<div className='button-about'>
{/* <button className='button-about' onclick="window.location.href=https://docs.google.com/document/d/1Vh6FUQrakphM2-pTHn-OhNzKgPGOK7NO/edit?usp=sharing&ouid=118256475805045854598&rtpof=true&sd=true">Download Jason's Resume</button> */}
  <a className="resume" href="https://docs.google.com/document/d/1Vh6FUQrakphM2-pTHn-OhNzKgPGOK7NO/edit?usp=sharing&ouid=118256475805045854598&rtpof=true&sd=true">Download Jason's Resume</a>
</div>
    </>
  )
}

export default About