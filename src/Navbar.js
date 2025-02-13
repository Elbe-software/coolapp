import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar">
            
            <div className="navbar-logo">
                
                
                <svg className = "spinner" width="84" height="87" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="26.98 13.55 79.42 82.25"> <path d="M27.7265 27.222C26.7683 27.1147 26.7122 25.7426 27.6585 25.5575L45.6071 22.0465L45.9016 29.2579L27.7265 27.222Z" fill="#02365E"></path> <path d="M88.5264 78.6284L87.6413 77.7813L86.5624 78.3619C79.9875 81.9 73.5001 82.8117 67.3582 81.1965C61.1934 79.5752 55.1802 75.3555 49.6885 68.2703C44.2985 61.3163 42.6993 54.2047 42.3312 48.2411C42.1463 45.2464 42.2721 42.5493 42.3885 40.2699C42.3927 40.1886 42.3968 40.1077 42.401 40.0272C42.4541 38.9923 42.5039 38.0206 42.5127 37.1744C42.522 36.2801 42.4891 35.3951 42.3197 34.6426C41.8706 32.6471 41.6067 28.8657 42.2256 25.1709C42.8549 21.4141 44.3068 18.2449 46.8349 16.7927C52.425 13.5817 59.5597 15.5103 62.7708 21.1003L104.716 94.1218L88.5264 78.6284Z" fill="#D23C2F" stroke="#02365E" stroke-width="3.37079"></path> <circle cx="52.6491" cy="24.4113" r="2.22636" transform="rotate(15.1259 52.6491 24.4113)" fill="#02365E"></circle> <path d="M90.0851 68.5824L76.3456 47.8635C74.553 45.1603 70.8013 44.3226 68.5406 46.6485C60.2713 55.1564 67.7682 63.2237 73.6019 68.836C74.0977 69.313 74.8333 69.4351 75.4596 69.1503L76.3045 68.766C76.9219 68.4853 77.6473 68.6019 78.1456 69.062L81.9487 72.5736C82.7563 73.3193 84.067 72.7798 84.1155 71.6816C84.1519 70.8606 84.9356 70.2817 85.731 70.4885L88.2565 71.1451C89.7529 71.5341 90.9397 69.8711 90.0851 68.5824Z" fill="#FCB427" stroke="#02365E" stroke-width="3.37079" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M66.2985 33.6388L69.4479 36.6637" stroke="#FCB427" stroke-width="2.52809" stroke-linecap="round"></path> <path d="M62.1673 35.6824L64.9867 40.2" stroke="#FCB427" stroke-width="2.52809" stroke-linecap="round"></path> <line x1="56.6721" y1="38.3799" x2="57.5564" y2="41.3555" stroke="#FCB427" stroke-width="2.52809" stroke-linecap="round"></line> </svg>

            </div>

            <ul className="navbar-list">
               
                <a className="nav-item" href="https://stocksnap.io/search/beach">Home</a>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item">Services</li>
            </ul>

        </nav>
    )
}

export default Navbar