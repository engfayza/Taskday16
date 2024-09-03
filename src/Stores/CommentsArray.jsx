import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useCommentsArray = create((set) => ({
  // Start comments data
  CurrentUser: [
    {
      image: {
        png: "/assets/avatars/juliusomo.png",
      },
      username: "juliusomo",
    },
  ],
  comments: [
    {
      id: "1",
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "/assets/avatars/image-amyrobson.png",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: "2",
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "/assets/avatars/image-maxblagun.png",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "/assets/avatars/image-ramsesmiron.png",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "/assets/avatars/juliusomo.png",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ],
  // End comments data

  //Start Increment and Decrement Comment Functions for the counter
  IncrementScoreComment: (idClickedComment) =>
    set((state) => ({
      comments: state.comments.map((comment) =>
        comment.id === idClickedComment
          ? { ...comment, score: comment.score + 1 }
          : comment
      ),
    })),
  DecrementScoreComment: (idClickedComment) =>
    set((state) => ({
      comments: state.comments.map((comment) =>
        comment.id === idClickedComment && comment.score > 0
          ? { ...comment, score: comment.score - 1 }
          : comment
      ),
    })),
  //End Increment and Decrement Functions for the counter

  //Start Increment and Decrement Reply Functions for the counter
  IncrementScoreReply: (idClickedComment, idClickedReply) =>
    set((state) => ({
      comments: state.comments.map((comment) => {
        if (comment.id === idClickedComment) {
          return {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === idClickedReply
                ? { ...reply, score: reply.score + 1 }
                : reply
            ),
          };
        }
        return comment;
      }),
    })),

  DecrementScoreReply: (idClickedComment, idClickedReply) =>
    set((state) => ({
      comments: state.comments.map((comment) => {
        if (comment.id === idClickedComment) {
          return {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === idClickedReply && reply.score > 0
                ? { ...reply, score: reply.score - 1 }
                : reply
            ),
          };
        }
        return comment;
      }),
    })),
  //End Increment and Decrement Functions for the counter

  // Start Add New Comment Function
  addNewComment: (newComment) =>
    set((state) => ({
      comments: [...state.comments, newComment],
    })),
  // End Add New Comment Function

  // Start Delete Comment Function
  deleteComment: (idClicked) =>
    set((state) => ({
      comments: state.comments.filter((comment) => comment.id !== idClicked),
    })),

  // End Delete Comment Function

  // Start Add New Reply Function
  addNewReply: (newReply, idClickedComment, replyingToUsername) =>
    set((state) => {
      // console.log(idClickedComment);
      return {
        comments: state.comments.map((comment) => {
          if (comment.id === idClickedComment) {
            // console.log(comment.id);
            return {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: uuidv4(),
                  content: newReply,
                  createdAt: "Just now",
                  score: 0,
                  replyingTo: replyingToUsername,
                  user: {
                    image: {
                      png: "/assets/avatars/juliusomo.png",
                    },
                    username: "juliusomo",
                  },
                },
              ],
            };
          }
          return comment;
        }),
      };
    }),
  // End Add New Reply Function
  // Start Delete Reply  Function
  deleteReply: (idCommentClicked, idReplyClicked) =>
    set((state) => {
      // console.log(idCommentClicked, idReplyClicked);
      return {
        comments: state.comments.map((comment) => {
          if (comment.id === idCommentClicked) {
            let updatedReplies = comment.replies.filter(
              (reply) => reply.id !== idReplyClicked
            );
            return { ...comment, replies: updatedReplies };
          }
          return comment;
        }),
      };
    }),

  // End Delete Reply  Function

  //Start Edit Comment Function
  EditComment: (editCommentIdClicked, updatedCommentContent) =>
    set((state) => {
      // console.log(editCommentIdClicked);
      return {
        comments: state.comments.map((comment) => {
          if (comment.id === editCommentIdClicked) {
            return {
              ...comment,
              content: updatedCommentContent,
            };
          }
          return comment;
        }),
      };
    }),
  //End Edit Comment Function
}));

export default useCommentsArray;
