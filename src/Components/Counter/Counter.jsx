import "./Counter.css";
import PlusPhoto from "../../../public/assets/Images/icon-plus.svg";
import MinusPhoto from "../../../public/assets/Images/icon-minus.svg";
import useCommentsArray from "../../Stores/CommentsArray";

export default function Counter({ commentScore, idClickedComment }) {
  const { IncrementScoreComment, DecrementScoreComment } = useCommentsArray();
  return (
    <div className="Counter">
      <button onClick={() => IncrementScoreComment(idClickedComment)}>
        <img src={PlusPhoto} alt="Not Found" />
      </button>
      <label>{commentScore}</label>
      <button onClick={() => DecrementScoreComment(idClickedComment)}>
        <img src={MinusPhoto} alt="Not Found" />
      </button>
    </div>
  );
}
