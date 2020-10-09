import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import React, { useState } from "react";
import "./MessageSender.css";
import { useStateValue } from "../../store/StateProvider";
import db from "../../firebase";
import firebase from "firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input, imageUrl);

    db.collection("posts").add({
      message: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      image: imageUrl,
      userName: user.displayName,
    });
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="message_sender">
      <div className="message_sender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="message_sender_input"
            placeholder={`What's on your mind, ${user.displayName} ?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="image URL(Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            hidden submit
          </button>
        </form>
      </div>
      <div className="message_sender_bottom">
        <div className="message_sender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message_sender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message_sender_option">
          <EmojiEmotionsIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
