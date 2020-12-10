import React,{Fragment} from 'react';
import { Typography,Input,Button,Row,Col } from 'antd';
import {Link} from 'react-router-dom';

function NewPassword() {
    const { Title,Text } = Typography;
    const titleStyle={
        fontFamily: 'GT Walsheim Pro',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '22px',
        textAlign:'center',
    }
    const textStyle={
        fontFamily: 'Basier Square',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '17px',
    }
    const buttonStyle={
        width : '100%',
        background: '#664FF3',
        borderRadius: '5px',
        align:'center',
    }
    const linkStyle={
        color: '#664FF3',
        fontFamily: 'GT Walsheim Pro',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '22px',
    }
    const button={
        name:"Verder"
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Nieuw wachtwoord</Title>
            <Input size="large" placeholder="Wachtwoord" />
            <Input size="large" placeholder="Herhaal wachtwoord" />
            <Title style={textStyle} level={5}>Uw wachtwoord moet tenminste 8 tekens bevatten waarvan een hoofdletter, kleine letter, cijfer en speciaal teken</Title>
            <Button type="primary" style={buttonStyle} href='/resetcomplete'>Inloggen</Button>
            <Row justify='center'>
                <Col>
                    <Text>
                    Niet veranderen?  
                    <Link to="/login" target="_self" style={linkStyle}>Inloggen</Link>
                    </Text>
                </Col>
            </Row>
            
        </Fragment >
    )
}

export default NewPassword
