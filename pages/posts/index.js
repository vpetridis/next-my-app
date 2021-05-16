import React from "react"

export default function Posts({ posts }) {
  return (
    <div>
      {posts
        ? posts.map((post) => (
            <div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          ))
        : "nothing"}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://serene-falls-74612.herokuapp.com/posts`)
  const posts = await res.json()
  return { props: { posts: posts } }
}
