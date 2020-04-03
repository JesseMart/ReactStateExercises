import React from 'react'

const Blogs = (props) => {
    return (
        <div>
            Im a blog
            <br/> <br/>
            {props.match.params.blogID}
        </div>
    )
}

export default Blogs

