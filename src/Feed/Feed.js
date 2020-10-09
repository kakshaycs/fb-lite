import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel.js";
import MessageSender from "./MessageSender/MessageSender.js";
import FeedPost from "./FeedPost/FeedPost.js";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <FeedPost
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timeStamp}
          username={post.data.userName}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
