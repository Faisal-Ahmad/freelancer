import React,{Fragment} from 'react';
import { Typography,Row,Col } from 'antd';
import NormalButton from '../SmallComponents/NormalButton';

function AccountType() {
    const { Title } = Typography;
    const titleStyle={
        fontFamily: 'GT Walsheim Pro',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '27px',
        textAlign:'center',
        marginBottom:'35px',
    }
    const button1={
        name:"ZZP",
        myurl:"/details",
    }
    const button2={
        name:"Opdrachtgever",
        myurl:"/freelancer",
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Welkom! <br/>Ben je ZZP’er of heb je een <br/>opdracht?</Title>
            <Row gutter={[16,{ xs: 8, sm: 16, md: 14, lg: 16 }]}>
                <Col className="gutter-row" span={24}>
                    <NormalButton {...button1}/>
                </Col>
                <Col className="gutter-row" span={24}>
                    <NormalButton {...button2}/>
                </Col>
            </Row>
        </Fragment>
    )
}

export default AccountType
