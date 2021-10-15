import React, { useEffect } from 'react'
import base64 from 'base-64'

// Leaf
import { Page, Text } from '@indexorg/leaf'

// Views
import Wrapper from '@views/Wrapper/Wrapper'

const {
    VITE_WORDPRESS_URL,
    VITE_WORDPRESS_USERNAME,
    VITE_WORDPRESS_PASSWORD,
} = import.meta.env

function App() {
    console.log(
        VITE_WORDPRESS_URL,
        VITE_WORDPRESS_USERNAME,
        VITE_WORDPRESS_PASSWORD,
    )

    useEffect(() => {
        var requestHeaders = new Headers()
            requestHeaders.append('Authorization', `Basic ${base64.encode(VITE_WORDPRESS_USERNAME + ":" + VITE_WORDPRESS_PASSWORD)}`)

        fetch(`//${VITE_WORDPRESS_URL}/wp-json/wp/v2/posts`, {
            headers: requestHeaders,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }, [])


  	return(
		<Wrapper>
            {/* edit everything in the Wrapper component... */}

            <Page>
                <Text
                size="title"
                as="h1">
                    Page
                </Text>
            </Page>
		</Wrapper>
	)
}

export default App;
