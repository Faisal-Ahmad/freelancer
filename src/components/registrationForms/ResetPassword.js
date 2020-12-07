import React,{Fragment} from 'react';
import { Typography,Input } from 'antd';

function ResetPassword() {
    const { Title } = Typography;
    const titleStyle={
        fontFamily: 'GT Walsheim Pro',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '22px',
        textAlign:'center',
    }
    const textStyle={
        fontFamily: 'Basier Square',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '17px',
        textAlign:'center',
    }
    return (
        <Fragment>
            <Title style={titleStyle} level={3}>Wachtwoord resetten</Title>
            <Input size="large" placeholder="Emailadres" />
            <Title style={textStyle} level={5}>We zullen u een email sturen met daarin een reset link.</Title>
        </Fragment>
    )
}

export default ResetPassword
