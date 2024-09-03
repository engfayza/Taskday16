import "./ReplyCounter.css";
import PlusPhoto from "../../../public/assets/Images/icon-plus.svg";
import MinusPhoto from "../../../public/assets/Images/icon-minus.svg";
import useCommentsArray from "../../Stores/CommentsArray";

export default function ReplyCounter({
  replyScore,
  idClickedReply,
  idClickedComment,
}) {
  const { IncrementScoreReply, DecrementScoreReply } = useCommentsArray();
  return (
    <div className="Counter">
      <button
        onClick={() => IncrementScoreReply(idClickedComment, idClickedReply)}
      >
        <img src={PlusPhoto} alt="Not Found" />
      </button>
      <label>{replyScore}</label>
      <button
        onClick={() => DecrementScoreReply(idClickedComment, idClickedReply)}
      >
        <img src={MinusPhoto} alt="Not Found" />
      </button>
    </div>
  );
}
