type PostType = {
    cat: string
    slug?: string
    title?: string
}

export const postsList:PostType[] = [
    {
        cat: "Form",
    },
    {
        cat: 'form',
        slug: 'form-with-react-hook-form',
        title: 'Form with React Hook Form'
    },
    {
        cat: 'form',
        slug: 'traditional-form',
        title: 'Traditional form in React'
    },
]
