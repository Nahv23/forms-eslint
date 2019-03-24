import React, { Component } from 'react';
import { Input, Icon } from 'antd';

class InputField extends Component {
  render() {
    console.log(this.props);
    const { onChange, value, icon, placeholder, errors, onblur } = this.props;
    const hasErrors = errors && errors.length > 0;
    return (
      <div className="mb-5">
        <Input
          onChange={onChange}
          value={value}
          allowClear
          {...(icon ? { prefix: <Icon type="user" /> } : null)}
          {...(placeholder ? { placeholder } : null)}
          {...(onblur ? { onBlur: onblur } : null)}
        />
        {hasErrors && errors.map((error, index) => <p key={index}>{error}</p>)}
      </div>
    );
  }
}

export default InputField;
