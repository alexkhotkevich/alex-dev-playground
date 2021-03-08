import { createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'

export const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: orange,
  },
})
