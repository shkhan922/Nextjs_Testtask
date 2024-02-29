import React from 'react'
import Image from 'next/image'
import aboutUS from '../../../public/images/aboutus.png'
import notes from '../../../public/images/paper.png'
import star from '../../../public/images/white-star.png'
import window from '../../../public/images/window.png'
import filepin from '../../../public/images/filepin.png'
import calendar from '../../../public/images/calendar.png'
import calculate from '../../../public/images/calculator.png'
import arrow from '../../../public/images/arrow.png'
import msg from '../../../public/images/msg.png'

function menu() {
  return (
    <ul className="menu menu-horizontal rounded-box">
  <li>
    <a className="tooltip flex" data-tip="Home">
      <Image src={aboutUS} alt='aboutUS' width={20}height={10}/>About us
    </a>
  </li>
  <li>
    <a className="tooltip flex" data-tip="Details">
      <Image src={notes} alt='aboutUS' width={20}height={10}/> Circular
    </a>
  </li>
  <li>
    <a className="tooltip flex" data-tip="Stats" >
      <Image src={star} alt='star' width={20}height={10}/> E-Journal
    </a>
  </li>
  <li>
    <a className="tooltip flex" data-tip="Home">
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> */}
      <Image src={window} alt='Window' width={20} height={10}/> Publications
    </a>
  </li>

  <li>
    <a className="tooltip flex" data-tip="Stats">
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> */}
      <Image src={filepin} alt='icon' width={20} height={10}/> Sectoral
    </a>
  </li>
  <li>
    <a className="tooltip flex" data-tip="Home">
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> */}
      <Image  src={calendar} alt='Calendar' width={20} height={10}/> Tax Calendar
    </a>
  </li>
  <li>
    <a className="tooltip flex" data-tip="Details">
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
        <Image src={calculate} alt='icon' width={20} height={10}/> Salary Calculation
    </a>
  </li>
  <li>
    <a className="tooltip flex" data-tip="Stats">
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> */}
        <Image src={msg} alt='msg-icon' width={20} height={10}/>EY Webcast
    </a>
  </li>
  <li>
    <a className="tooltip flex" data-tip="Stats">
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> */}
      <Image src={arrow} alt='arrow icon' width={20} height={10}/>EY Turkiye
    </a>
  </li>
</ul>
  )
}

export default menu