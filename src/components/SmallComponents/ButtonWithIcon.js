import React,{Fragment} from 'react';
import { Button,Row,Col } from 'antd';

function ButtonWithIcon(props) {
    const {name,icon,altText,hight,width} = props;
    const buttonStyle = {
        width: '100%',
        lineHeight: '1.2',
        borderRadius: '0.375rem',
        fontWeight:'600',
        height: '40px',
        minWidth: '3rem',
        padding: '0px',
        fontSize: '1.125rem',
        border: '1px solid',
        color: '#002333',
        borderColor: '#002333'}
    return (
        <Fragment>
            <Button style={buttonStyle}>
                <Row justify="center" align="middle">
                    <Col span={1}>
                    <img style={{height:hight, width:width}} src={icon} alt={altText}/>
                    </Col>
                    <Col span={23}>
                        {name}
                    </Col>
                </Row>
            </Button>
        </Fragment>
    )
}

export default ButtonWithIcon
