import React,{Fragment} from 'react';
import ButtonWithIcon from '../SmallComponents/ButtonWithIcon';
import GmailLogo from '../ss/GmailLogo.svg';
import FacebookLogo from '../ss/FacebookLogo.svg';
import { Divider,Input,Button,Typography,Anchor   } from 'antd';
import {Link} from 'react-router-dom';

function CompanyRegister() {
    const { Text } = Typography;
    

    const linkStyle = {
        'text-decoration-line': 'underline',
        'background' : 'transparent',
        'text-align' : 'center',
        "color": "#222",
        "display": "block"
    }
    const iconButton={
        name:"Aanmelden met Google",
        icon:GmailLogo,
        altText:"GmailLogo",
        hight:33,
        width:33,
    }
    const iconButton1={
        name:"Aanmelden met Facebook",
        icon:FacebookLogo,
        altText:"FacebookLogo",
        hight:33,
        width:33,
    }
    const buttonStyle={
        width:'100%',
        background:'#35DF90',
    }
    return (
        <Fragment>
            <ButtonWithIcon {...iconButton}/>
            <ButtonWithIcon {...iconButton1}/>
            <Divider orientation="center">Of</Divider>
            <Input size="large" placeholder="Emailadres" />
            <Input size="large" placeholder="Wachtwoord" />
            <Button type="primary" style={buttonStyle}>Inloggen</Button>
            <Anchor style={linkStyle}>
                <Anchor.Link href="#" title="Wachtwoord vergeten?"/>
            </Anchor>
            <Text>
            Heeft u nog geen account? 
            <Link to="/register" target="_self">Meld u nu aan</Link>
            </Text>
        </Fragment>
    )
}

export default CompanyRegister
