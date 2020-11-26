import { useEffect, useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //hooks hanya bisa ditaro dalam component
  //hanya bisa digunakan pada top level component
  //useEffect berjalan setelah render
  //setiap kali ada component re-render maka effect akan dijalankan kembali
  // *** componentDidMount ***
  // useEffect(() => {
  //   console.log("useEffect re-render");
  // });

  //menggunakan dependencie useEffect hanya dijalankan ketika pertama kali component dirender
  useEffect(() => {
    console.log("useEffect sekali aja");
  }, []);
  // *** close componentDidMount ***

  // *** componentDidUpdate ***

  useEffect(() => {
    console.log("Berjalan lagi jika state counter berubah");
  }, [counter]);

  // *** close componentDidUpdate ***

  // *** componentDidUnmount ***

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => console.log(e));

  //   //clean up function dijalankan ketika component diunmount dari DOM
  //   return () => {
  //     window.removeEventListener("mousemove", (e) => console.log(e));
  //   };
  // }, []);

  // *** close componentDidUnmount ***

  console.log("render");

  //fetchAPI menggunakan promise then
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  //     .catch((err) => console.log(err)); //error handling
  // }, []);

  //fetchAPI menggunakan async await
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true); //set lagi loading sebelum fetching menjadi true
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const posts = await response.json();

        //tunggu promise resolve
        //set lagi loading sebelum fetching menajadi false
        setIsLoading(false);

        setPosts(posts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, []);

  //render
  return isLoading || !posts ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>ini adalah app</h1>
      <Counter counter={counter} setCounter={setCounter} />
      <ul>
        {posts.map((post) => {
          return <li>{post.title}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
