import React, { Component } from 'react';
import { createForm } from 'rc-form';
import { Button, Input } from 'antd';
import InputField from './InputField';
import { checkEmail } from '../utils/validators';

class Form extends Component {
  submitForm = event => {
    const { form } = this.props;
    event.preventDefault();

    form.validateFields((errors, fields) => {
      console.log({ errors });
      console.log({ fields });
    });
  };

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <form onSubmit={this.submitForm}>
        <InputField
          icon="user"
          placeholder="Enter email"
          {...getFieldProps('email', {
            validateFirst: true,
            validateTrigger: 'onblur',
            rules: [{ required: true, validator: checkEmail }]
          })}
          errors={getFieldError('email')}
        />
        <InputField
          icon="user"
          placeholder="Enter password"
          {...getFieldProps('password', {
            validateFirst: true,
            rules: [{ required: true }]
          })}
          errors={getFieldError('password')}
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default createForm()(Form);
