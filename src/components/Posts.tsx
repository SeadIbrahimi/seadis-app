import axios from "axios";
import React, { useEffect, useState } from "react";
import Motions from "./Motions";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: [];
  reactions: number;
}

function Posts() {
  const [posts, setUsers] = useState<Post[]>([]);
  // const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/user/1`)
      .then((res) => setUsers(res.data.posts));
    // .catch((err) => setError(err.message));
  }, []);

  return (
    <Motions>
      <div className="container mx-auto grid gap-5 mb-8 md:mb-12 md:grid-cols-2 ">
        {posts &&
          posts.map((post) => (
            <Motions>
              <div key={post.id} className="flex flex-col items-center rounded-lg shadow-sm justify-center p-8 text-center  md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="my-4">{post.body}</p>
                </blockquote>
              </div>
            </Motions>
          ))}
      </div>
    </Motions>
  );
}

export default Posts;
