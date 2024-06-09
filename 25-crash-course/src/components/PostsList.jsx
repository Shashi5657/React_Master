import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [bodyText, setBodyText] = useState("");
  const [author, setAuthor] = useState("");

  function changeBodyHandler(event) {
    setBodyText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post name={author} message={bodyText} />
        <Post name="vinay" message="Continous learning is essential" />
        <Post name="sathu" message="Enhancing skills matter" />
      </ul>
    </>
  );
}

export default PostsList;
