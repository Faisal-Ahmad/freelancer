import React,{Fragment} from 'react';
import ButtonWithIcon from '../SmallComponents/ButtonWithIcon';
import GmailLogo from '../ss/GmailLogo.svg';
import FacebookLogo from '../ss/FacebookLogo.svg';
import { Divider,Input,Button,Typography,Anchor,Row,Col   } from 'antd';
import {Link} from 'react-router-dom';
import { UserOutlined,EyeOutlined } from '@ant-design/icons';
import TextBetweenLine from '../SmallComponents/TextBetweenLine'

function Login() {
    const { Text } = Typography;
    

    const linkStyle = {
        textDecorationLine: 'underline',
        background : 'transparent',
        textAlign : 'center',
        color: '#222',
        display: 'block',
        fontWeight:'bold',
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
    const warningstyle={
        fontFamily:'Basier Square',
        fontSize : '12px',
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
                    <Input size="large" placeholder="Gebruikersnaam" addonAfter={<UserOutlined />} />
                </Col>
                <Col className="gutter-row" span={24}>
                    <Input size="large" placeholder="Wachtwoord" addonAfter={<EyeOutlined />} />
                </Col>
                <Col className="gutter-row" span={24}>
                    <Text style={warningstyle}>Uw wachtwoord moet tenminste 8 tekens bevatten waarvan een hoofdletter, kleine letter, cijfer en speciaal teken</Text>
                </Col>
                <Col className="gutter-row" span={24}>
                    <Button type="primary" style={buttonStyle} href="/success">Inloggen</Button>
                </Col>
            </Row>
            <Anchor style={linkStyle}>
                <Anchor.Link href="/forgetpassword" title="Wachtwoord vergeten?"/>
            </Anchor>
            <Text>
            Heeft u nog geen account? 
            <Link to="/register" target="_self">Meld u nu aan</Link>
            </Text>
        </Fragment>
    )
}

export default Login
