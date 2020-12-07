import React,{Fragment} from 'react';

function TextBetweenLine({text}) {
    const linewithtextStyle ={
    'display': 'flex',
    'flex-direction': 'row',
    'color':'#000000',
//     &:before, &:after{
//     content: "";
//     flex: 1 1;
//     border-bottom: 1px solid #000;
//     margin: auto;
//   }
//   &:before {
//     margin-right: 10px
//   }
//   &:after {
//     margin-left: 10px
//   }
}
    return (
        <Fragment>
            <Heading style={linewithtextStyle}>{text}</Heading>
        </Fragment>
    )
}

export default TextBetweenLine