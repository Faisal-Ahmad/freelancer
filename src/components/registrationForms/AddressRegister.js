import React,{Fragment} from 'react';
import { Typography } from 'antd';
import NormalButton from '../SmallComponents/NormalButton';

function AddressRegister() {
    const { Title } = Typography;
    const titleStyle={
        fontFamily: 'GT Walsheim Pro',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '27px',
        textAlign:'center',
    }
    const button1={
        name:"ZZP"
    }
    const button2={
        name:"Opdrachtgever"
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Welkom! <br/>Ben je ZZP’er of heb je een opdracht?</Title>
            <NormalButton {...button1}/>
            <NormalButton {...button2}/>
        </Fragment>
    )
}

export default AddressRegister
