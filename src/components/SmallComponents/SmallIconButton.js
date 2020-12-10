import React,{Fragment} from 'react';
import { Button } from 'antd';

function SmallIconButton(props) {
    const {name,icon} = props;
    const buttonStyle = {
        padding:'0px 10px',
        borderRadius:'15px',
        color:'#35DF90',
        border: '1px solid #35DF90',
    }
    return (
        <Fragment>
            <Button style={buttonStyle}>
                <img src={icon} />
                {name}
            </Button>
        </Fragment>
    )
}

export default SmallIconButton
