import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <Section className='RegistrationPage'>
        <h2>Register</h2>
      </Section>
    )
  }
}