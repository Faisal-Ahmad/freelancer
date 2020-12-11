import React,{Fragment} from 'react';
import { Typography,Button,Row,Col } from 'antd';

function  PasswordSent() {
    const { Title } = Typography;
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
        fontSize: '12px',
        lineHeight: '17px',
        textAlign:'center',
    }
    const buttonStyle={
        width : '100%',
        background: '#35DF90',
        borderRadius: '5px',
        align:'center',
    }
    const button={
        name:"Verder"
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Uw wachtwoord <br/>is verstuurd naar uw emailadres.</Title>
            <Title style={textStyle}>U ontvangt een een email met daarin een link, klik hierop om uw wachtwoord te resetten.</Title>
            <Row justify="center">
                <Col span={16}>
                    <Button type="primary" style={buttonStyle} href='/newpassword'>Inloggen</Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default PasswordSent
