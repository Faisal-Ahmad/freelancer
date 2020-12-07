import React,{Fragment} from 'react';
import ButtonWithIcon from '../SmallComponents/ButtonWithIcon';
import GmailLogo from '../ss/GmailLogo.svg';
import FacebookLogo from '../ss/FacebookLogo.svg';
import { Divider,Input,Button,Typography,Anchor,Row, Col   } from 'antd';

function createAccount() {
    const { Text, Link } = Typography;
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
    const passwordTextstyle={
        fontFamily:'Basier Square',
        fontSize : '12px',
    }
    const twoInputStyle ={
        display:'inline',
    }
    return (
        <Fragment>
            <ButtonWithIcon {...iconButton}/>
            <ButtonWithIcon {...iconButton1}/>
            <Divider orientation="center">Of</Divider>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} align="top">
                <Col span={12}>
                    <Input size="large" placeholder="Voornaam" />
                </Col>
                <Col span={12}>
                    <Input size="large" placeholder="Achternaam" />
                </Col>
            </Row>
            <Input size="large" placeholder="Emailadres" />
            <Input size="large" placeholder="Kies een wachtwoord" />
            <Text style={passwordTextstyle}>Uw wachtwoord moet tenminste 8 tekens bevatten waarvan een hoofdletter, kleine letter, cijfer en speciaal teken</Text>
            <Button type="primary" style={buttonStyle}>Registreren</Button>
            <Text>
                Heeft u al een account? 
                <Link href="#" target="_blank">
                Inloggen
                </Link> 
            </Text>
        </Fragment>
    )
}

export default createAccount
