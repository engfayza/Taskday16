import "./Comment.css";
import { useState } from "react";
import Counter from "../Counter/Counter";
import useCommentsArray from "../../Stores/CommentsArray";
import DeleteCommentComponent from "../DeleteComment/DeleteComment";
import EditComment from "../EditComment/EditComment";
import ReplyItem from "../ReplyItem/ReplyItem";
import ReplayIcon from "../ReplyIcon/ReplyIcon";
import ReplyInput from "../ReplyInput/ReplyInput";

export default function CommentItem() {
  const { comments, CurrentUser } = useCommentsArray();
  const currentUserUsername = CurrentUser[0]?.username;
  const [replyInputVisibility, setReplyInputVisibility] = useState({});

  // Reply input visibility
  function handleShowReplyIcon(commentId) {
    setReplyInputVisibility((prevVisibility) => ({
      ...prevVisibility,
      [commentId]: true, // Show input for this comment
    }));
  }

  function handleHideReplyIcon(commentId) {
    setReplyInputVisibility((prevVisibility) => ({
      ...prevVisibility,
      [commentId]: false, // Hide input for this comment
    }));
  }

  // Edit function
  const [editMode, setEditMode] = useState({}); // State to track which comment is in edit mode
  function handleToggleEdit(commentId) {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [commentId]: !prevEditMode[commentId], // Toggle the edit mode for this specific comment
    }));
  }

  function handeOnChangeEdit(event) {
    console.log(event.target.value);
  }

  // function handleEditValue(event) {
  //   setShowInputoEdit(false);
  // }

  return (
    <div id="CommentsWrapper">
      {comments.map((comment) => (
        <>
          <div id="commentItem" key={comment.id}>
            <Counter
              commentScore={comment.score}
              idClickedComment={comment.id}
            />
            <div id="commentItemContent">
              <div id="commentHeader">
                <div id="commentTitle">
                  <img src={comment.user.image.png} alt="Not Found" />
                  <h4>{comment.user.username}</h4>

                  {comment.user.username === currentUserUsername ? (
                    <button id="youbtn">You</button>
                  ) : null}

                  <p>{comment.createdAt}</p>
                </div>
                <div id="commentIcons">
                  {comment.user.username === currentUserUsername && (
                    <DeleteCommentComponent idClickedComment={comment.id} />
                  )}
                  {comment.user.username !== currentUserUsername && (
                    <ReplayIcon
                      handleShowReplyIcon={() =>
                        handleShowReplyIcon(comment.id)
                      }
                    />
                  )}
                  {comment.user.username === currentUserUsername && (
                    <EditComment
                      editCommentIdClicked={comment.id}
                      handleToggle={() => handleToggleEdit(comment.id)}
                    />
                  )}
                </div>
              </div>
              <div id="commentContent">
                {editMode[comment.id] == true ? (
                  <>
                    <textarea onChange={handeOnChangeEdit}></textarea>
                    <button>Update</button>
                  </>
                ) : (
                  <p>{comment.content}</p>
                )}
              </div>
            </div>
          </div>

          {/* Reply Section */}
          <div id="ReplySection">
            {replyInputVisibility[comment.id] && (
              <ReplyInput
                idClickedComment={comment.id}
                handleHideReplyInput={() => handleHideReplyIcon(comment.id)} // Pass hide function
                replyingToUsername={comment.user.username}
              />
            )}
            <div id="coverReplyItem">
              <ReplyItem idClickedComment={comment.id} comment={comment} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
