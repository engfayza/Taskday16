import { useState } from "react";
import "./AddNewComment.css";
import useCommentsArray from "../../Stores/CommentsArray";
import { v4 as uuidv4 } from "uuid";

export default function AddNewComment() {
  const [valueInput, setValueInput] = useState("");
  const { CurrentUser, addNewComment } = useCommentsArray();

  function HandleSendComment() {
    const newComment = {
      id: uuidv4(),
      content: valueInput,
      createdAt: "Just now",
      score: 0,
      user: {
        image: {
          png: "/assets/avatars/juliusomo.png",
        },
        username: "juliusomo",
      },
      replies: [],
    };
    addNewComment(newComment);
    setValueInput("");
  }

  function HandleChangeComment(event) {
    // console.log(event.target.value);
    setValueInput(event.target.value);
  }
  const currentUserImage = CurrentUser[0]?.image.png;

  return (
    <div id="NewComment">
      <img src={currentUserImage} alt="Not Found" />
      <textarea
        type="text"
        placeholder="Add a comment..."
        value={valueInput}
        onChange={HandleChangeComment}
      />
      <button
        onClick={HandleSendComment}
        disabled={valueInput ? false : true}
        className={valueInput ? "activeBTN" : "disabledBTN"}
      >
        SEND
      </button>
    </div>
  );
}
