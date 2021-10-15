import React from 'react'

import {WordpressCSS} from '@config/styles'

import {
    Content,
    Sidebar,
    WrapperElement
} from './Wrapper.styles.js'

const Wrapper = ({
	children
}) => {
	WordpressCSS()
    
	return(
		<WrapperElement>
			<Sidebar>
			</Sidebar>

			<Content>
                {children}
            </Content>
		</WrapperElement>
	)
}

export default Wrapper