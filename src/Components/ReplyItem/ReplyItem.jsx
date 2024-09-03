import "./ReplyItem.css";
import ReplyCounter from "../ReplyCounter/ReplyCounter";
import useCommentsArray from "../../Stores/CommentsArray";
import DeleteReply from "../DeleteReply/DeleteReply";

export default function ReplyItem({ comment, idClickedComment }) {
  const { CurrentUser } = useCommentsArray();

  // Current userName
  const currentUserUsername = CurrentUser[0]?.username;

  return (
    <>
      {comment.replies.map((reply) => (
        <div key={reply.id} id="replyItem">
          <ReplyCounter
            replyScore={reply.score}
            idClickedReply={reply.id}
            idClickedComment={comment.id}
          />
          <div id="replayContent">
            <div id="replyHeader">
              <div id="replyTitle">
                <img src={reply.user.image.png} alt="Not Found" />
                <h4>{reply.user.username}</h4>
                {reply.user.username === currentUserUsername ? (
                  <button id="youbtn">You</button>
                ) : null}
                <p>{reply.createdAt}</p>
              </div>
              <div id="replyIcons">
                {reply.user.username === currentUserUsername ? (
                  <DeleteReply
                    idClickedComment={idClickedComment}
                    idClickedReply={reply.id}
                  />
                ) : null}

                {/* {props.replyUserName == "juliusomo" && (
                  <EditReplyComponent handleEditMyReply={handleEditMyReply} />
                )} */}
              </div>
            </div>

            <div id="replyContent">
              <p>
                <span>{`@${reply.replyingTo}`}</span>
                {reply.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
