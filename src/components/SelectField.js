import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

class SelectField extends Component {
  render() {
    const { onChange, errors, placeholder, options } = this.props;
    const hasErrors = errors && errors.length > 0;
    return (
      <div className="mb-1">
        <Select
          onChange={onChange}
          {...(placeholder ? { placeholder } : null)}
          showSearch
        >
          {options.map(({ text, value }) => (
            <Option key={value} value={value}>
              {text}
            </Option>
          ))}
        </Select>
        {hasErrors &&
          errors.map((error, index) => (
            <p className="error" key={index}>
              {error}
            </p>
          ))}
      </div>
    );
  }
}

export default SelectField;
