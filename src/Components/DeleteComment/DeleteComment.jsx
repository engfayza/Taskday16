import "./DeleteComment.css";
import DeleteIcon from "../../../public/assets/Images/icon-delete.svg";
import { useState } from "react";
import useCommentsArray from "../../Stores/CommentsArray";

export default function DeleteComment({ idClickedComment }) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const { deleteComment } = useCommentsArray();

  function HandleCancelDelete() {
    setShowConfirmDialog(false);
  }

  function HandleDeleteComment() {
    setShowConfirmDialog(true);
  }

  function HandleConfirmDelete() {
    deleteComment(idClickedComment);
    setShowConfirmDialog(false);
  }
  return (
    <>
      <div id="deleteCommentBtn">
        <div id="deleteComment">
          <img src={DeleteIcon} alt="Not Found" />
          <button onClick={HandleDeleteComment}>Delete</button>
        </div>
        {showConfirmDialog && (
          <div id="confirm-dialog-container">
            <div className="confirm-dialog">
              <p>Are you sure you want to delete this comment?</p>
              <div id="btns">
                <button
                  className="confirm-button cancel"
                  onClick={HandleCancelDelete}
                >
                  No, Cancel
                </button>
                <button
                  className="confirm-button delete"
                  onClick={HandleConfirmDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
