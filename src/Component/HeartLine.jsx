import React from 'react'
import { PiHeartbeatFill } from 'react-icons/pi'

function HeartLine() {
    return (
        <div className='mt-5 '>
            <div className="row justify-content-center">
                <div className="p-3 rounded text-center col-10 oooo" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
                    <div className="message  p-5">
                        <h2 className="mb-4 text-danger">Your Kindness Today</h2>
                        <p className="lead text-light" style={{ textShadow: 'none' }}>
                            is a heartbeat  <span className="heart"> <PiHeartbeatFill className="heart-icon ms-2 me-2" /></span> of hope for someone in need
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeartLine