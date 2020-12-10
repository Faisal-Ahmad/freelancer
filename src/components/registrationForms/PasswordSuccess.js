import React,{Fragment} from 'react';
import { Typography,Button,Row,Col } from 'antd';

function PasswordSuccess() {
    const { Title } = Typography;
    const titleStyle={
        fontFamily: 'GT Walsheim Pro',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '22px',
        textAlign:'center',
        color: '#002333',
    }
    const buttonStyle={
        width : '100%',
        background: '#35DF90',
        borderRadius: '5px',
        align:'center',
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Uw wachtwoord <br/>is gereset, meld u opnieuw aan.</Title>
            <Row justify="center">
                <Col span={16}>
                    <Button type="primary" style={buttonStyle} href='/login'>Inloggen</Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default PasswordSuccess
