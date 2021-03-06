import React,{Fragment} from 'react';
import ButtonWithIcon from '../SmallComponents/ButtonWithIcon';
import GmailLogo from '../ss/GmailLogo.svg';
import FacebookLogo from '../ss/FacebookLogo.svg';
import { Divider,Input,Button,Typography,Anchor,Row, Col   } from 'antd';

function CreateAccount() {
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
             <Row gutter={[16,{ xs: 4, sm: 8, md: 16, lg: 16 }]}>
                <Col className="gutter-row" span={24}>
                    <ButtonWithIcon {...iconButton}/>
                </Col>
                <Col className="gutter-row" span={24}>
                    <ButtonWithIcon {...iconButton1}/>
                </Col>
                <Col className="gutter-row" span={24}>
                    <Divider orientation="center">Of</Divider>
                </Col>
                <Col className="gutter-row" span={24}>
                    <Row gutter={[16, 0]} align="top">
                        <Col span={12}>
                            <Input size="large" placeholder="Voornaam" />
                        </Col>
                        <Col span={12}>
                            <Input size="large" placeholder="Achternaam"/>
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" span={24}>
                    <Input size="large" placeholder="Emailadres" />
                </Col>
                <Col className="gutter-row" span={24}>
                    <Input size="large" placeholder="Kies een wachtwoord" />
                </Col>
                <Col className="gutter-row" span={24}>
                    <Text style={passwordTextstyle}>Uw wachtwoord moet tenminste 8 tekens bevatten waarvan een hoofdletter, kleine letter, cijfer en speciaal teken</Text>
                </Col>
                <Col className="gutter-row" span={24}>
                    <Button type="primary" style={buttonStyle} href="/type">Registreren</Button>
                </Col>
             </Row>
            <Text>
                Heeft u al een account? 
                <Link href="/login">
                Inloggen
                </Link> 
            </Text>
        </Fragment>
    )
}

export default CreateAccount
