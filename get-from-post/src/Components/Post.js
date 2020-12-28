import React, { useState } from 'react'

const Post = (props) => {

    const [bodyFromPost, setBodyFromPost] = useState()

    const titleClick = () => {
        const setBody = setBodyFromPost(`${props.body}`)
        return setBody
    }


    return <div>
        <div className="list" onClick={titleClick} >Title: {props.title}</div>
        {bodyFromPost}
    </div>
}


export default Post

