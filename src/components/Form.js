import React, { Component } from 'react';
import { createForm } from '../utils/createForm';
import { Button } from 'antd';
import InputField from './InputField';
import {
  checkEmail,
  checkBool,
  checkPhone,
  checkLength
} from '../utils/validators';
import CheckboxField from './CheckboxField';
import SelectField from './SelectField';
import cities from '../data/cities.json';

class Form extends Component {
  state = {
    loading: false
  };

  submitForm = event => {
    const { form } = this.props;
    event.preventDefault();

    form.validateFields((errors, fields) => {
      console.log({ errors });
      console.log({ fields });
      const hasErrors = errors && Object.keys(errors).length > 0;
      if (!hasErrors) {
        // This is where we make an axios request
        this.setState({ loading: true }, () => {
          setTimeout(() => {
            this.setState({ loading: false }, () => {
              form.resetFields();
            });
          }, 3000);
        });
      }
    });
  };

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const { loading } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <InputField
          icon="user"
          placeholder="Enter email"
          allowClear
          {...getFieldProps('email', {
            validateFirst: true,
            validateTrigger: 'onblur',
            rules: [{ required: true, validator: checkEmail }]
          })}
          errors={getFieldError('email')}
        />
        <InputField
          icon="lock"
          type="password"
          placeholder="Enter password"
          {...getFieldProps('password', {
            validateFirst: true,
            validateTrigger: 'onblur',
            rules: [{ required: true, validator: checkLength }]
          })}
          errors={getFieldError('password')}
        />
        <InputField
          icon="phone"
          placeholder="Enter your phone number"
          {...getFieldProps('phone', {
            validateFirst: true,
            validateTrigger: 'onblur',
            rules: [{ required: true, validator: checkPhone }]
          })}
          errors={getFieldError('phone')}
        />
        <SelectField
          placeholder="Select your city"
          {...getFieldProps('city', {
            validateFirst: true,
            rules: [{ required: true }]
          })}
          errors={getFieldError('city')}
          options={cities}
        />
        <CheckboxField
          label="I didn't read this shit but I have to accept it"
          {...getFieldProps('acceptTerms', {
            valuePropName: 'checked',
            validateFirst: true,
            rules: [{ required: true, validator: checkBool }]
          })}
          errors={getFieldError('acceptTerms')}
        />
        <Button
          type="primary"
          htmlType="submit"
          {...(loading ? { loading } : null)}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default createForm()(Form);
