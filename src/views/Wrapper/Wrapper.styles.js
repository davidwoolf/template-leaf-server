import {styled} from '@stitches/react'

export const WrapperElement = styled('div', {
    display: 'flex',
})

export const Content = styled('div', {
    flex: 1,
    margin: '10px 20px 0 2px',
    paddingLeft: 20,
})


export const Sidebar = styled('div', {
    backgroundColor: '#23282D',
    flex: 'none',
    minHeight: '100vh',
    width: 160,
})