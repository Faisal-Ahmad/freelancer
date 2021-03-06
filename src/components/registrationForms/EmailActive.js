import React,{Fragment} from 'react';
import { Typography,Button,Row,Col } from 'antd';

function EmailActive() {
    const { Title } = Typography;
    const titleStyle={
        fontFamily: 'GT Walsheim Pro',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '33px',
        textAlign:'center',
    }
    const textStyle={
        fontFamily: 'Basier Square',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
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
            <Row  gutter={[16, 0]} justify="center" align="middle">
                <Col span={24}>
                    <Title style={titleStyle} level={3}>Gefeliciteerd! <br/>Uw email is bevestigd.</Title>
                </Col>
                <Col span={11}>
                    <Button type="primary" style={buttonStyle} href="/login">Inloggen</Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default EmailActive
