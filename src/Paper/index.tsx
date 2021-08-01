import { ComponentType } from 'react'
import { Paper as MuiPaper, PaperProps as MuiPaperProps, withStyles } from '@material-ui/core'

export type PaperProps = Omit<MuiPaperProps, 'css'>

export const Paper: ComponentType<PaperProps> = withStyles(theme => ({
  root: {
    color: '#72767d',
    backgroundColor: theme.palette.background.mobilePrimary,
    borderRadius: 5,
  },
}))(MuiPaper)
