import { muiTheme } from 'storybook-addon-material-ui'
import { theme } from '../src/theme'

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
	muiTheme([theme])
]