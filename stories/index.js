import React from 'react'
import { storiesOf, action } from '@storybook/react'

import ColorPicker from '../src'

storiesOf('ColorPicker', module)
  .add('simple', () => (
    <ColorPicker
      fullWidth
      defaultValue='#000'
      onChange={action('changed')}
      floatingLabelText='Color picker'
    />
  ))
