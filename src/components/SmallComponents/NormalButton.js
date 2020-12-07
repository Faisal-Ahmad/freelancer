import React,{Fragment} from 'react';
import { Button } from 'antd';

function NormalButton(props) {
    const {name} = props;
    const buttonStyle = {
        width: '100%',
        lineHeight: '1.2',
        borderRadius: '0.375rem',
        fontWeight:'600',
        height: '40px',
        minWidth: '3rem',
        fontSize: '1.125rem',
        border: '1px solid',
        color: '#002333',
        borderColor: '2px solid #002333'
    }
    return (
        <Fragment>
            <Button style={buttonStyle}>
                {name}
            </Button>
        </Fragment>
    )
}

export default NormalButton
