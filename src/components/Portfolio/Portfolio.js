import React from 'react';
import health from '../../assests/health.jpg';
import ielts from '../../assests/ielts.jpg';
import smart from '../../assests/smart.jpg';
import './Portfolio.css';

const Portfolio=()=>{
    return(
        <div>
            <div id="portfolio" class="content">
                <div class="container">
                    <h2 className='content'>My Recent Works</h2>
                    <div class="justified-box">
                        <div class="img-box">
                            <a href="https://healthcare-center.netlify.app/" target="_blank">   <img src={health}/>
                            </a>
                        </div>
                        <div class="img-box">
                            <a href="https://smartware.netlify.app/" target="_blank"><img src={smart}/></a>
                        </div>
                        <div class="img-box">
                            <a href="https://traveled.netlify.app/" target="_blank"><img src={ielts}/></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Portfolio;