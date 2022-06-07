import { useState, useEffect } from "react";
/*
- Dùng trong Side effects: khi có 1 tác động xảy ra dẫn đến dữ liệu chương trình bị thay đổi.

- 
*/

/*
1. useEffect(callback)
    - Gọi callback mỗi khi component re-render
    - Gọi callback sau khi component thêm element vào DOM
2. useEffect(callback, [])
    - Chỉ gọi callback 1 lần sau khi component Mounted
3. useEffect(callback, [deps])
------------------------------------
1. Callback luôn được gọi sau khi component mounted
*/
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  /* 
    FLOW WORK: Chạy đoạn return trước sau đó mới vô useEffect 
    Callback trong useEffect chỉ được gọi sau khi element đã được render vào DOM.
*/
  useEffect(() => {
    // console.log('Mounted');
    // document.title = title;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.key}> {post.title}</li>
        ))}
      </ul>
      {console.log("Render")}
    </div>
  );
}
export default Content;
