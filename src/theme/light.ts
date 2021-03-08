import { createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'

export const light = createMuiTheme({
  palette: {
    type: 'light',
    primary: green,
    secondary: orange,
  },
})
