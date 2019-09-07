import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography
} from '@lukejamesk-ui'

const App = ({ name }) => (
  <div>
    <Typography type="heading1">{name}</Typography>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus perferendis molestiae.
    </Typography>
  </div>
)

App.propTypes = {
  name: PropTypes.string.isRequired
}

export default App
