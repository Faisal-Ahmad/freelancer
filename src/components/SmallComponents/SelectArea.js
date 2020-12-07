import React,{Fragment} from 'react';
import { Select } from 'antd';

function SelectArea(props) {
    const { Option } = Select;
    const {name,values} = props;
    const selectStyle = {
        width: '100%',
        lineHeight: '1.2',
        borderRadius: '0.375rem',
        fontWeight:'600',
    }
    return (
        <Fragment>
            <Select defaultValue="Sector" style={selectStyle} >
    <Option value="Sector">{name}</Option>
            </Select>
        </Fragment>
    )
}

export default SelectArea
