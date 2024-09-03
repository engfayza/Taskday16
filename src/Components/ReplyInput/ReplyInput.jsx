import "./ReplyInput.css";
import { useState } from "react";
import useCommentsArray from "../../Stores/CommentsArray";

export default function ReplyInput({
  idClickedComment,
  handleHideReplyInput,
  replyingToUsername,
}) {
  const [replyContent, setReplyContent] = useState("");
  const { CurrentUser, addNewReply } = useCommentsArray();
  const currentUserImage = CurrentUser[0]?.image.png;

  function handleReplyChange(event) {
    setReplyContent(event.target.value);
  }

  function handleSendReply() {
    if (replyContent.trim() !== "") {
      addNewReply(replyContent, idClickedComment, replyingToUsername); // Add the reply to the correct comment
      setReplyContent(""); // Clear the input
      handleHideReplyInput(); // Hide the reply input after sending
    }
  }

  return (
    <div id="ReplyInput">
      <img src={currentUserImage} alt="Not Found" id="NaglaUserAvatar" />
      <textarea value={replyContent} onChange={handleReplyChange} />
      <button onClick={handleSendReply}>Send</button>
    </div>
  );
}
