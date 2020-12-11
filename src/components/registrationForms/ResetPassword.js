import React,{Fragment} from 'react';
import { Typography,Input,Button,Divider,Row,Col } from 'antd';

function ResetPassword() {
    const { Title } = Typography;
    const titleStyle={
        fontFamily: 'GT Walsheim Pro',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '22px',
        textAlign:'center',
        marginBottom:'30px',
    }
    const textStyle={
        fontFamily: 'Basier Square',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '17px',
        textAlign:'center',
    }
    const buttonStyle={
        color: '#FFFFFF',
        background: '#664FF3',
        borderRadius: '2px',
        width : '100%',
    }
    const dividerStyle={
        width:'70%',
        textAlign:'center',
        borderTop:'1px solid #002333'
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Wachtwoord resetten</Title>
            <Row gutter={[16,{ xs: 8, sm: 16, md: 18, lg: 18 }]}>
                <Col className="gutter-row" span={24}>
                    <Input size="large" placeholder="Emailadres" />
                </Col>
                <Col className="gutter-row" span={24}>
                    <Button type="primary" style={buttonStyle} href='/passwordsent'>Reset wachtwoord</Button>
                </Col>
                <Col className="gutter-row" span={24}>
                <hr style={dividerStyle}/>
                </Col>
                <Col className="gutter-row" span={24}>
                    <Title style={textStyle} level={5}>We zullen u een email sturen met daarin een reset link.</Title>
                </Col>
            </Row>
           
           
            
           
        </Fragment>
    )
}

export default ResetPassword
