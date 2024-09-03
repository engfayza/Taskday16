import "./EditComment.css";
import EditIcon from "../../../public/assets/Images/icon-edit.svg";
import useCommentsArray from "../../Stores/CommentsArray";

export default function EditComment({ editCommentIdClicked, handleToggle }) {
  const { EditComment } = useCommentsArray();

  function handleEditComment() {
    EditComment(editCommentIdClicked);
    handleToggle();
  }
  return (
    <div id="editIcon">
      <img src={EditIcon} alt="" />
      <button onClick={handleEditComment}>Edit</button>
    </div>
  );
}
