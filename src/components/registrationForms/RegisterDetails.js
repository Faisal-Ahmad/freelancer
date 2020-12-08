import React,{Fragment} from 'react';
import { Typography,Input,Row,Col } from 'antd';
import NormalButton from '../SmallComponents/NormalButton';
import SelectArea from '../SmallComponents/SelectArea';
import OkSign from '../ss/OkSign.svg';
import SmallIconButton from '../SmallComponents/SmallIconButton'

function RegisterDetails() {
    const { Title } = Typography;
    const titleStyle={
        fontFamily: 'GT Walsheim Pro',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '23px',
        textAlign:'center',
    }
    const button={
        name:"Verder"
    }
    const select1 ={
        name :"Select",
        value:['abc','def'],
    }
    const select2 ={
        name :"Functie",
        value:['abc','def'],
    }
    const select3 ={
        name :"Specialisme",
        value:['abc','def'],
    }
    const select4 ={
        name :"Regio",
        value:['abc','def'],
    }
    const iconButton1={
        name:"PHP",
        icon:OkSign,
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Hallo Name...<br/>Vertel ons wat over jezelf!</Title>
            <SelectArea {...select1}/>
            <SelectArea {...select2}/>
            <SelectArea {...select3}/>
            <SmallIconButton {...iconButton1}/>
            <SelectArea {...select4}/>
            <Input placeholder="Ervaringsjaren"/>
            <Title level={5}>Tarief</Title>
            <Row gutter={16,{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                    <Input placeholder="Ervaringsjaren"/>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Input placeholder="Ervaringsjaren"/>
                </Col>
            </Row>
            <NormalButton {...button}/>
        </Fragment>
    )
}

export default RegisterDetails
