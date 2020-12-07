import React,{Fragment} from 'react';
import { Button } from 'antd';

function ButtonWithIcon(props) {
    const {name,icon,altText,hight,width} = props;
    const buttonStyle = {
        'width': '100%',
        'line-height': '1.2',
        'border-radius': '0.375rem',
        'font-weight':'600',
        'height': '40px',
        'min-width': '3rem',
        'font-size': '1.125rem',
        'border': '1px solid',
        'color': '#002333',
        'border-color': '#002333'}
    return (
        <Fragment>
            <Button style={buttonStyle}>
                <img style={{height:hight, width:width}} src={icon} alt={altText}/>
                {name}
            </Button>
        </Fragment>
    )
}

export default ButtonWithIcon
