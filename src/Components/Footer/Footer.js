import React from 'react';
import {FaCopyright} from 'react-icons/fa';
function Footer(props){
    let footer =(
        <div className='footer clearfix'>
            <div className='copyright'>
                <FaCopyright/> {props.name}
            </div>
            <div className='info'>
                Design: <a href='http://sandeeppangeni.com.np'>Sandeep Pangeni</a>
            </div>
        </div>
    )
    return footer;
}

export default Footer;
