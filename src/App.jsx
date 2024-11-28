import { useState } from 'react'
import './App.css'


function SideBar() {
  return (

    <div className="sidebar-container">
      <div className="div1">
        <h4>Personal Information</h4>
        <ul>
          <li><img src='./whatsapp.svg' /><span>+91-7339587939</span></li>
          <li><img src='./address.svg' /><span>Thanjore, Tamilnadu, India</span></li>
          <li><img src='./gmail.svg' /><span>habismd@gmail.com</span></li>
          <li><img src='./linkedin.svg' /><span><a href="http://linkedin.com/in/habis-mohamed/habisha">My Linkedin Page</a></span></li>
          <li><img src='./github.svg' /><span><a href="http://github.com/fast2run">My Github Page</a></span></li>
        </ul>
      </div>
      <div className="div1">
        <h4>Ms office Skills</h4>
        <ul>
          <li>M.S. Word</li>
          <li>M.S. Excel</li>
          <li>M.S. Power Point</li>
          <li>M.S. Power BI</li>
        </ul>
      </div>
      <div className="div1">
        <h4>IT Skills</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>bootstrap</li>
          <li>nodejs</li>
          <li>expressjs</li>
          <li>mongodb</li>
        </ul>
      </div>
      <div className="div1">
        <h4>ERP Software skills </h4>
        <ul>
          <li>Tally Prime 4.0</li>
          <li>J.D. Edwerd ERP</li>
        </ul>
      </div>
      <div className="div1">
        <h4>Accounting skills</h4>
        <ul>
          <li>Book Keeping </li>
          <li>Accounts Payable</li>
          <li>Accounts Receivable</li>
          <li>Reconcilation</li>
          <li>Reporting</li>
          <li>Payroll</li>
        </ul>
      </div>
      <div className="div1">
        <h4>Soft Skills</h4>
        <ul>
          <li>Good Communication</li>
          <li>Team Work</li>
          <li>Warehouse Management</li>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>felxibility</li>
        </ul>
      </div>
      <div className="div1">
        <h4>Language skills</h4>
        <ul>
          <li>Tamil--------:  S--R--W</li>
          <li>English------:  S--R--W</li>
          <li>Hindi--------:  S-- - --</li>
          <li>Arabic-------:  S-- - --</li>
          <li>Malayalm---:  S-- - --</li>
        </ul>
      </div>
    </div>

  )
}

function MainSide() {
  return (
    <div className="main-container">
      <h1 className='name'>Habis Mohamed M.Sc.,</h1>

      <div className='objective'>
        <div className='objective-inner1'>
          <img src="./objective.png" alt="" />
          <p>Objective</p>
        </div>
        <div className='objective-inner2'>
          <p>Highly motivated and detail-orientated professional seeking challenging
            person. With a solid foundation and a strong desire to further develop my
            skills, I am eager to contribute to the success of an organization through
            dedication, adaptability, and a strong work ethic.
          </p>
        </div>
      </div>

      <div className='objective'>
        <div className='objective-inner1'>
          <img src="./education.png" alt="" />
          <p>Education</p>
        </div>
        <div className='objective-inner2'>
          <ul>
            <li>M.Sc., Information Technology, Barathidasan university, Trichy, India.
              Academic year 2007-2009.
            </li>
            <li>B.Sc., Computer Science, Barathidasan university, Trichy, India.
              Academic year 2004-2007.
            </li>
          </ul>
        </div>
      </div>

      <div className='objective'>
        <div className='objective-inner1'>
          <img src="./certification.png" alt="" />
          <p>Certification Course</p>
        </div>
        <div className='objective-inner2'>
          <ul>
            <li><span>Course:</span>  Web Development using MERN Stack(MongoDB, Express.js, React, and Node.js)</li>
            <li><span>Project:</span>  Learning Dashboard</li>
            <li><span>Completion:</span>  on July 30th </li>
          </ul>
        </div>
      </div>

      <div className='exp-head'>
        <img src="./experience.png" alt="" />
        <p className='exp'>Experience</p>
      </div>

      


      <div className='exp-container'>

      <div className="exp-left">

          <div className='exp-inner'>
            <img src="./university.png"  alt="" />

            <ul>
              <li>Accountant cum Cashier</li>
              <li>Assalam Islamic College</li>
              <li>Tiruchi, Tamilnadu, India.</li>
              <li>July-2022 to At Present </li>
            </ul>
          </div>

          <div className='exp-inner'>
            <img src="./warehouse.png"  alt="" />

            <ul>
              <li>Warehouse In-charge</li>
              <li>Ahamed Mohame Al-Syed Trd. Est.</li>
              <li>Al Jubail, Saudi Arabia</li>
              <li>Jan-2020 to March-2022 </li>
            </ul>
          </div>

          <div className='exp-inner'>
            <img src="./store.png"  alt="" />

            <ul>
              <li>Store In-Charge</li>
              <li>Kurunji Shopping Mall</li>
              <li>Pattukkottai, Tamilnadu, India.</li>
              <li>April -2018 to Dec -2020 </li>
            </ul>
          </div>

        </div>
        <div className="exp-right">

          <div className='exp-inner'>
            <img src="./warehouse.png"  alt="" />

            <ul>
              <li>Branch In-Charge</li>
              <li>Mazaya Food Trading Est.</li>
              <li>Al-Qathif, Saudi Arabia</li>
              <li>Feb-2014 to Jan- 2018 </li>
            </ul>
          </div>

          <div className='exp-inner'>
            <img src="./exchange.png" alt="" />

            <ul>
              <li>Cashier</li>
              <li>City Money Exchange</li>
              <li>Pattukkottai, Tamilnadu, India..</li>
              <li>July-2012 to Dec-2013 </li>
            </ul>
          </div>

          <div className='exp-inner'>
            <img src="./store.png" alt="" />

            <ul>
              <li>Supervisor</li>
              <li>Signtrack Advertising Media Equipment Est.</li>
              <li>Al Dammam , Saudi Arabia.</li>
              <li>May – 2010 to Mrach - 2012 </li>
            </ul>
          </div>

        </div>



      </div>


    </div>
  )
}

function Footer(){
  return(
    <div className='footer'>
      <p>All Rights @ Habis </p>
    </div>
  )
}


function App() {
  return (
    <>
      <div className="resume-container">
        <SideBar />
        <MainSide />
      </div>
      <Footer />
    </>
  )
}

export default App






