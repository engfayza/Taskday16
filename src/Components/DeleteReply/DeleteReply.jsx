import DeleteIcon from "../../../public/assets/Images/icon-delete.svg";
import { useState } from "react";
import useCommentsArray from "../../Stores/CommentsArray";

export default function DeleteReply({ idClickedComment, idClickedReply }) {
  const { deleteReply } = useCommentsArray();

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  function HandleCancelDelete() {
    setShowConfirmDialog(false);
  }

  function HandleReplyComment() {
    setShowConfirmDialog(true);
  }

  function HandleConfirmDelete() {
    deleteReply(idClickedComment, idClickedReply);
    setShowConfirmDialog(false);
  }

  return (
    <>
      <div id="deleteReplyBtn">
        <div id="deleteComment">
          <img src={DeleteIcon} alt="Not Found" />
          <button onClick={HandleReplyComment}> Delete </button>
        </div>

        {showConfirmDialog && (
          <div id="confirm-dialog-container">
            <div className="confirm-dialog">
              <p>Are you sure you want to delete this reply?</p>
              <div id="btns">
                <button
                  className="confirm-button cancel"
                  onClick={HandleCancelDelete}
                >
                  dont, Cancel
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
