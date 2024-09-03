import "./ReplyIcon.css";
import ReplayIcon from "../../../public/assets/Images/icon-reply.svg";

export default function RepliesComponent({ handleShowReplyIcon }) {
  return (
    <div id="Reply">
      <img src={ReplayIcon} alt="Not Found" id="replyImg" />
      <button onClick={handleShowReplyIcon}>Reply</button>
    </div>
  );
}
