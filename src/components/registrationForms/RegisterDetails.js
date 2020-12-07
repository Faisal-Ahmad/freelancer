import React,{Fragment} from 'react';
import { Typography } from 'antd';
import NormalButton from '../SmallComponents/NormalButton';
import SelectArea from '../SmallComponents/SelectArea';

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
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Ik ben opzoek naar de mensen in de sector:</Title>
            <SelectArea/>
            <NormalButton {...button}/>
        </Fragment>
    )
}

export default RegisterDetails
