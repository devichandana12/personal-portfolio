
import React from 'react'
import { ChevronRight } from 'react-feather'


function Skill() {
  return (
    <>

      <div className='skill-section'>
        <div className="tech-skill">
          <div className="skill-section-title">What I Know</div>

          <div className='card-list'>
            <div className="frontend-card shadow">
              <div className="skill_heading">Frontend</div>
              <div className='skills p-2'>
  
                <div className="p-2 rounded m-2 shadow-lg" style={{
                  backgroundColor: "rgba(35, 35, 50, 0.35)",
                  color: "#8b8a91"
                }}>HTML</div>
                <div className="p-2 rounded m-2 shadow-lg" style={{
                  backgroundColor: "rgba(35, 35, 50, 0.35)",
                  color: "#8b8a91", border: "1px solid rgba(0,0,0,.6)"
                }}>CSS</div>
                <div className="p-2 rounded m-2 shadow-lg" style={{
                  backgroundColor: "rgba(35, 35, 50, 0.35)",
                  color: "#8b8a91", border: "1px solid rgba(234,179,8,.6)"
                }}>Javascript</div>
                <div className="p-2 rounded m-2 shadow-lg" style={{
                  backgroundColor: "rgba(35, 35, 50, 0.35)",
                  color: "#8b8a91", border: "1px solid rgba(59,130,246,.6)"
                }}>React Js</div>
              </div>
            </div>
  
            <div className="backend-card shadow">
              <div className="skill_heading">Backend</div>
              <div className='skills p-2'>
  
                <div className="p-2 rounded m-2 shadow-lg" style={{
                  backgroundColor: "rgba(35, 35, 50, 0.35)",
                  color: "#8b8a91", border: "1px solid rgba(34,197,94,.6)"
                }}>Nodejs</div>
  
              </div>
            </div>
            <div className="database-card shadow">
              <div className="skill_heading">Database</div>
              <div className='skills p-2'>
  
                <div className="p-2 rounded m-2 shadow-lg" style={{
                  backgroundColor: "rgba(35, 35, 50, 0.35)",
                  color: "#8b8a91", border: "1px solid rgba(59,130,246,.6)"
                }}>MySql</div>
                <div className="p-2 rounded m-2 shadow-lg" style={{
                  backgroundColor: "rgba(35, 35, 50, 0.35)",
                  color: "#8b8a91", border: "1px solid rgba(16,185,129,.6)"
                }}>MongoDB</div>
              </div>
            </div>
          </div>
        </div>
        <div className="more-porjects p-4">
          <div className='project-section-title'>More Projects</div>

          <div className='project-details-section'>
            <div className='more-project-details  p-2'>
              <div style={{ width: "50px" }}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="78" viewBox="0 0 48 48" ><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.319 16.408c-4.4 0-5.16 3.43-8.266 7.916" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.823 16.4c6.126.604 5.467 7.685 13.405 13.725c.69.517 1.467.949 2.33 1.208c1.207.345 2.243.345 3.106.345c4.486 0 7.765-3.624 8.11-8.11v-.691c0-1.553-.259-3.193-1.294-4.4c-1.208-1.381-3.106-1.899-4.832-1.985c-3.733-.197-16.95-.311-23.296 0c-1.726.086-3.624.604-4.832 1.984c-1.036 1.208-1.294 2.848-1.294 4.4v.691c.345 4.487 3.623 8.11 8.11 8.11c1.208 0 3.279.087 4.918-.948c1.812-1.036 2.33-2.158 3.624-3.797" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.52 18.476l-2.934 1.467l-.086 2.502h1.639m34.341-3.969l2.934 1.467l.086 2.502h-1.639" /></svg></div>
             <a href='https://github.com/devichandana12?tab=repositories' style={{textDecoration:'none'}} >
                <div className='project-details'>
                  <div className='project-title'>LensCart</div>
                  <div style={{ color: "#4f4f52", fontSize: "0.81rem", paddingTop: "3px" }}>React</div>
                </div>
            </a>
              <div className='link'><ChevronRight style={{ marginLeft: "8px" }} /></div>

            </div>
            {/* <div>Restaurant Website</div> */}
            <div className='more-project-details p-2'>
              <div style={{ width: "50px" }}><svg id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="35" height="78" ><path d="m292.75 358.526a7.875 7.875 0 1 1 -7.8752 7.875 7.8762 7.8762 0 0 1 7.8752-7.875zm-116.2346-19.8447-.893 15.75h38.7452l-1.1022-15.75zm116.2346-11.6553a7.875 7.875 0 1 1 -7.8752 7.875 7.8762 7.8762 0 0 1 7.8752-7.875zm0-31.5a7.875 7.875 0 1 1 -7.8752 7.875 7.8762 7.8762 0 0 1 7.8752-7.875zm-53.4976-45.9375 40.3724 161.4375h-70.8754v-11.392a44.8462 44.8462 0 0 0 17.9029-11.3921 21.0007 21.0007 0 0 0 6.3-15.75l-4.3053-51.1875h-65.887v-12.4961a40.0638 40.0638 0 0 0 -8.0848-24.1514 269.4531 269.4531 0 0 1 68.8277-31.1309q7.875-2.1276 15.75-3.9375zm107.0476-.2631c5.25 1.2612 10.5 2.68 15.75 4.2006 29.4 8.4014 58.8 21 81.9 39.9014a43.8377 43.8377 0 0 1 16.8 33.5986v84h-154.8752zm-19.7929-15.0664c1.3653-.8409 2.9923.3657 2.9923 2.1533v46.1977a2.101 2.101 0 0 1 -2.9923 2.4165l-33.7577-20.1079-33.757 20.1079a2.1 2.1 0 0 1 -2.993-2.1533v-46.2012c0-1.7841 1.6278-2.9907 2.993-2.15l33.757 19.5816 33.7577-19.8447zm-214.8819-14.4375h17.3248a3.4533 3.4533 0 0 1 1.8376.5776 9.7652 9.7652 0 0 1 6.7723 9.3447v2.4678h-3.9375l2.8875 50.3467a29.5564 29.5564 0 0 1 15.75 26.25v118.86c0 1.6817-1.3646 3.2539-3.78 4.6211h23.94a.9193.9193 0 0 1 -.2623-.7895c.3676-1.7329 2.4147-3.0967 6.1946-4.1973a38.5659 38.5659 0 0 1 7.6654-1.2612c2.6776-.8921 4.5147-2.1533 4.5147-3.36v-30.5567a34.9615 34.9615 0 0 1 -21-10.1309 11.34 11.34 0 0 1 -3.517-8.5039l2.9922-42h50.4525l3.5177 42a11.8775 11.8775 0 0 1 -3.7277 8.61 34.66 34.66 0 0 1 -20.37 10.0249v30.4507c0 1.1552 1.68 2.3618 4.6723 3.36h1.9429q2.6466.3435 5.25.9468c4.2524 1.1006 6.1949 2.519 6.1949 4.3579a1.9889 1.9889 0 0 1 0 .7861h102.0599a10.5 10.5 0 0 1 0 21h-257.25a10.5 10.5 0 0 1 0-21h30.03c-2.4148-1.3637-3.78-2.9394-3.78-4.621v-118.597a29.5569 29.5569 0 0 1 15.75-26.25l3.15-50.3467h-3.9377v-2.4678a9.8133 9.8133 0 0 1 6.8252-9.3447 3.2719 3.2719 0 0 1 1.8376-.5776zm181.1248-165.7955a84 84 0 1 1 -84 84 84 84 0 0 1 84-84z" fill-rule="evenodd" fill="#000000" style={{ fill: " rgb(255, 255, 255)" }}></path></svg></div>
              <a href='https://github.com/devichandana12?tab=repositories' style={{textDecoration:'none'}} className='more-project-link'>
                <div className='project-details'>
                  <div className='project-title'>Restaurant Website</div>
                  <div style={{ color: "#4f4f52", fontSize: "0.81rem", paddingTop: "3px" }}>HTML,CSS,Bootstrap</div>
                </div>
              </a>
              <div className='link'><ChevronRight /></div>

            </div>
            {/* <div>TODO List</div> */}
            <div className='more-project-details p-2'>
              <div style={{ width: "50px" }}><svg style={{ color: " white" }} width="30" stroke-width="1.5" height="78" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9 6L20 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path> <path d="M3.80002 5.79999L4.60002 6.59998L6.60001 4.59999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path> <path d="M3.80002 11.8L4.60002 12.6L6.60001 10.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path> <path d="M3.80002 17.8L4.60002 18.6L6.60001 16.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path> <path d="M9 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path> <path d="M9 18L20 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path> </svg></div>
             <a href='https://github.com/devichandana12?tab=repositories' style={{textDecoration:'none'}} className='more-project-link'>
                <div className='project-details'>
                  <div className='project-title'>Todo List</div>
                  <div style={{ color: "#4f4f52", fontSize: "0.81rem", paddingTop: "3px" }}>React</div>
                </div>
             </a>
              <div className='link'><ChevronRight /></div>

            </div>
            {/* <div>Ecommerce Website</div> */}
            <div className='more-project-details p-2'>
              <div style={{ width: "50px" }}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="78" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" /></svg></div>
              <a href='https://github.com/devichandana12?tab=repositories' className='more-project-link' style={{textDecoration:'none'}}>
                <div className='project-details'>
                  <div className='project-title'>Ecommerce Website</div>
                  <div style={{ color: "#4f4f52", fontSize: "0.81rem", paddingTop: "3px" }}>HTML,CSS,Bootstrap</div>
                </div>
              </a>
              <div className='link'><ChevronRight style={{ marginLeft: "-5px" }} /></div>

            </div>
          </div>
        </div>
      </div>





    </>
  )
}





export default Skill