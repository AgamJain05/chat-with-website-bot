import React from 'react'

interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

const page = ({params} : PageProps) => {
    if (params.url && Array.isArray(params.url) && params.url.length === 2) {
        return (
            <h1>this would show : {params.url[0]} and also for up for the {params.url[1]}</h1>
        )
    }

    return (
        <h1>Invalid URL</h1>
    )
}

export default page