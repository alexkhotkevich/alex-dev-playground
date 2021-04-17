import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      minHeight: '300vh',
    },
    paperRoot: {
      width: '61.8vw',
      marginTop: '6rem',
      padding: '1.5rem',
      // 50.05% to prevent jagged edge
      background: `linear-gradient(-60deg, ${theme.palette.secondary.main} 50%, ${theme.palette.background.paper} 50.05%)`,
    },

    dusk: {
      background: `linear-gradient(0deg, rgba(255,0,0,0.25) 0%, rgba(255,128,0,0.25) 15%, rgba(255,255,0,0.25) 30%, rgba(0,0,255,0.25) 75%)`,
    },
  })
)
