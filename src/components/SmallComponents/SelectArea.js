import React,{Fragment} from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

function SelectArea(props) {
    const { Option } = Select;
    const {name,value} = props;
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

SelectArea.propTypes ={
    name : PropTypes.string.isRequired,
    value : PropTypes.array,
}

export default SelectArea
