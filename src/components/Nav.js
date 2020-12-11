import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Typography,Image} from 'antd';
import JobLogo from './ss/JobLogo.svg';

function Nav() {
    const { Text  } = Typography;
    return (
        <Fragment>
            <Link to="/">
                <Image
              width={33}
              src={JobLogo}
                />
            </Link>
            <Text  type="secondary" style={{color:'white'}}>Helpt freelan cers & werkgevers! <Link to="/login">Login</Link>     <Link to="/register">Register</Link></Text >
        </Fragment>
    )
}

export default Nav
