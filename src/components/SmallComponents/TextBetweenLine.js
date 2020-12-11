import React,{Fragment} from 'react';
import Styles from '../../globalStyle/customStyle.less';

function TextBetweenLine({text}) {
    console.log(Styles);
    return (
        <Fragment>
            <h3 className={Styles.linetext}>{text}</h3>
        </Fragment>
    )
}

export default TextBetweenLine