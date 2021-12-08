import React, { useState, useRef, useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Accordion = props => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toogleActive = () => {
    setActive(!active)
  }

  const titleStyle = {
    fontWeight: 600,
    fontSize: '14px',
  }

  useEffect(()=>{Aos.init({duration: 2000});}, []);

  return (
    <div className="accordion-section" data-aos='fade-up'> 
      <button className="accordion-title" onClick={toogleActive}>
      <div className="pre-phase">
        <h1>PRE-PHASE (Q3 2021)</h1>
        <p>-Art pieces are drawn out and vigorously vetted through</p>
        <p>-Roadmap is planned out</p>
        <p>-Social media and domain registrations acquired</p>
      </div>
        <span className={active ? 'accordion-icon rotate': 'accordion-icon'}>
        
        </span>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
      >
        {props.children}
      </div>
    </div>
  )
}

export default Accordion