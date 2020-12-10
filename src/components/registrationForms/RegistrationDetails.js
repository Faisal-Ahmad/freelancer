import React,{Fragment} from 'react';
import { Typography } from 'antd';
import NormalButton from '../SmallComponents/NormalButton';
import SelectArea from '../SmallComponents/SelectArea';

function RegistrationDetails() {
    const { Title } = Typography;
    const titleStyle={
        fontFamily: 'GT Walsheim Pro',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '34px',
        textAlign:'center',
    }
    const button={
        name:"Verder"
    }
    const selections1={
        name:"Sector",
        values : ['abc','def']
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Zoek uw bedrijf</Title>
            <SelectArea {...selections1}/>
            <NormalButton {...button}/>
        </Fragment> 
    )
}

export default RegistrationDetails
