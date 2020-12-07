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
    const selections2={
        name:"Functie",
        values : ['abc','def']
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Hallo ZZP’er<br/>Waar ben je naar opzoek?</Title>
            <SelectArea {...selections1}/>
            <SelectArea {...selections2}/>
            <NormalButton {...button}/>
        </Fragment> 
    )
}

export default RegistrationDetails
