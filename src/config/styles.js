import {globalCss} from '@stitches/react'

export const WordpressCSS = globalCss({
    '*': { 
        boxSizing: 'border-box',
        margin: 0, 
        padding: 0 
    },
    body: {
        backgroundColor: '#F0F1F2',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale'
    },
})