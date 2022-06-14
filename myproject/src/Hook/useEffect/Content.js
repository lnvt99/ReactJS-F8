import { useState, useEffect } from "react";
/*
- Dùng trong Side effects: khi có 1 tác động xảy ra dẫn đến dữ liệu chương trình bị thay đổi.
- Các phần học: 
1. Title blog
2. Call api: useEffect(callback, [deps])
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener / Unsubcribe
    - Clear timers
*/

/*
1. useEffect(callback)
    - Gọi callback mỗi khi component re-render
    - Gọi callback sau khi component thêm element vào DOM
2. useEffect(callback, [])
    - Chỉ gọi callback 1 lần sau khi component Mounted
3. useEffect(callback, [deps])
    - Callback sẽ được gọi lại mỗi khi deps thay đổi
------------------------------------
1. Callback luôn được gọi sau khi component mounted
2. Cleanup function luôn được gọi trước khi component umounted
3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần đầu tiên)
*/

const tabs = ['posts', 'comments', 'albums']

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type , setType] = useState('posts');
  const [status , setStatus] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [countdown, setCountDow] = useState(365)
  /* 
    FLOW WORK: Chạy đoạn return trước sau đó mới vô useEffect 
    Callback trong useEffect chỉ được gọi sau khi element đã được render vào DOM.
*/

  // console.log(type)

  useEffect(() => {
    // console.log('Mounted');
    // document.title = title;

    // Type 2:
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((posts) => {
    //     setPosts(posts);
    //   });
    // }, []);

    // Type 3: useEffect(callback, [deps]): deps là variable, props
    // console.log('Title changed');
    //   - Callback sẽ được gọi lại mỗi khi type thay đổi
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      })

  }, [type]);

  // Thêm nút button vào khi scroll screen > 200px
  useEffect(() => {
    console.log('useEffect 1')
    const handleScroll= () => {
      if( window.scrollY >= 200) {
        setStatus(true)
      }
      else {
        setStatus(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    console.log('Mouting')

    // Cleanup function: Dọn dẹp bộ nhớ khi component umounted
    // Luôn được gọi trước khi component unmount
    return () => {
      console.log('Unmouting')
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  useEffect(() => {
    console.log('useEffect 2')
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return() => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Countdown
  // useEffect(() => {
  //     setTimeout(() => {
  //         setCountDow(countdown -1)
  //         // console.log('Countdown: ' + countdown)
  //     }, 1000)
  //   console.log('useEffect 3')
  // }, [countdown])

  return (
    <div>
      {/* <div>
        {countdown}
      </div> */}
      {tabs.map(tab => (
        <button 
          key={tab}
          style= {type === tab ? {
            color: 'fff',
            backgroundColor: '#333'
          }: {}}
          onClick= {() => {setType(tab)}}>
            {tab}
        </button>
      ))}
      <div>
        {width}
      </div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.key}> {post.title || post.name}</li>
        ))}
      </ul>
      {/* {console.log("Render")} */}
      {status && (
        <button
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20
          }}
          >Go to Top</button>
      )}
    </div>
  );
}
export default Content;
