import { useState } from "react";

const Home = () => {
    const [blogPost, setBlogPost] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "Phil", id:1 },
        { title: "Para's first post", body: "lorem ipsum...", author: "Para", id:2 },
        { title: "third ever post!", body: "lorem ipsum...", author: "Phil", id:3 }
    ])

    return (
        <div className="home">
            { blogPost.map((post) => (
                <div className="blog-preview" key={post.id}>
                    <h2>{ post.title }</h2>
                    <p>Written by { post.author }</p>
                </div>
            )) }
        </div>
    );
}
 
export default Home;