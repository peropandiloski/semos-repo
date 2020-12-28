import React, { useState, useEffect } from 'react'
import Post from './Post.js'
import '../App.css'


const Posts = () => {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const htmlList = data.map((element, index) => <Post key={index} title={element.title} body={element.body} />) // ako sakam i drugi elementi da zemam dodavam atribut na primer id={post.id}
                setPosts(htmlList)
            })
    }, [])

    return (
        <div>{posts}</div>
    )

}

export default Posts;