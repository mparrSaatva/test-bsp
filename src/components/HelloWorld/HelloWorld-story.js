import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import HelloWorld from './'
import './helloWorld.scss'

storiesOf('HelloWorld', module)
    .add('standard', () => (
        <HelloWorld message="Storybook Users!" />
    ))

