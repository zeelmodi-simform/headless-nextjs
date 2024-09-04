export const contentGqlFetcher = async <T>({
    query, variables = {}, preview = false
}: {
    query: string, variables?: any, preview?: boolean
}): Promise< T | undefined> => {
    const res = await fetch(`${process.env.CONTENTFUL_GRAPHQL_API_URL}/${process.env.CONTENTFUL_SPACE_ID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': preview ?
                `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}` :
                `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({query, variables})
    });

    const { data, errors } = await res.json();
    
    if (errors) {
        console.log(errors);
        
        throw new Error(`Could not get content: ${JSON.stringify({errors})}`)
    }

    return data as T;
}