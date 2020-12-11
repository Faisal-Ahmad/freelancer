import React,{Fragment} from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

function NormalButton(props) {
    const {name,myurl} = props;
    const buttonStyle = {
        width:'100%',
        lineHeight: '24px',
        borderRadius: '0.375rem',
        fontWeight:'bold',
        height: '40px',
        minWidth: '3rem',
        fontSize: '16px',
        border: '2px solid #002333',
        background:'#FFFFFF',
        color:'#002333',
    }
    return (
        <Fragment>
            <Button type="primary" style={buttonStyle} href={myurl}>
                {name}
            </Button>
        </Fragment>
    )
}
NormalButton.propTypes ={
    name : PropTypes.string.isRequired,
    myurl : PropTypes.string.isRequired,
}

export default NormalButton
