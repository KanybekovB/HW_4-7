import { useState, useEffect } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_Orpeue0bGfbaDCGkcgngK9yLg4GTSlDYfO4BpuZmcp5GStTktEjVPaltmaCa6b8A"
    );
    const data = await response.json();
    setPosts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <main>
        <h1>Posts</h1>
        <section className="posts-container">
          {posts.map((post) => (
            <div className="post-card" key={post.id}>
              <img src={post.url} alt={post.id} />
              <h2 className="post-name">{post.breeds[0].name}</h2>
              <p className="post-description">{post.breeds[0].description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};
