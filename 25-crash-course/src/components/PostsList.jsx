import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [bodyText, setBodyText] = useState("");
  const [author, setAuthor] = useState("");

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function changeBodyHandler(event) {
    setBodyText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
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
