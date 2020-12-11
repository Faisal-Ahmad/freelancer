import React,{Fragment} from 'react';
import { Typography,Input,Row,Col } from 'antd';
import NormalButton from '../SmallComponents/NormalButton';
import SelectArea from '../SmallComponents/SelectArea';

function RegistrationDetails() {
    const { Title } = Typography;
    const titleStyle={
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '34px',
        textAlign:'center',
    }
    const infoStyle={
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
    }
    const button={
        name:"Verder",
        myurl:"/complete",
    }
    const selections1={
        name:"Sector",
        values : ['abc','def']
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Zoek uw bedrijf</Title>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col className="gutter-row" span={24}>
                    <Input placeholder="Vul uw kvk nummer in"/>
                </Col>
                <Col className="gutter-row" span={24}>
                    <Title style={infoStyle} level={3}>
                    Bedrijfsnaam B.v.<br/>
                    adres 12<br/>
                    123AB Amsterdam
                    </Title>
                </Col>
                <Col className="gutter-row" span={24}>
                    <SelectArea {...selections1}/>
                </Col>
                <Col className="gutter-row" span={24}>
                    <NormalButton {...button}/>
                </Col>
            </Row>
        </Fragment> 
    )
}

export default RegistrationDetails
