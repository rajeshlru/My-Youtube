// import React from "react";
// const commentsData = [
//   {
//     name: "Snehitha",
//     text: "Amazing teaser! Can't wait!",
//     replies: [
//       {
//         name: "chinni",
//         text: "Hrithik and NTR are fire!",
//       },
//       {
//         name: "Sneha",
//         text: "Loved the visuals 🔥",
//       },
//     ],
//   },
//   {
//     name: "Manoj Verma",
//     text: "This is going to break records!",
//     replies: [
//       {
//         name: "Aarav Patel",
//         text: "This Spy Universe is getting better and better!",
//       },
//       {
//         name: "Rajesh",
//         text: "Loved the visuals 🔥",
//       },
//       {
//         name: "Karan Mehta",
//         text: "Ayan Mukerji's direction is top-notch!",
//       },
//     ],
//   },
//   {
//     name: "Lakshmi Narayan",
//     text: "Kiara looks stunning 😍",
//     replies: [
//       {
//         name: "Rohit Bansal",
//         text: "Yes, the cast is perfect!",
//         replies: [
//           {
//             name: "Mishara",
//             text: "Can't wait to see this epic",
//           },
//         ],
//       },
//       {
//         name: "Neha Choudhary",
//         text: "Can’t wait to watch it in theaters!",
//       },
//       {
//         name: "Divya Sharma",
//         text: "Visuals direction is top-notch!",
//       },
//     ],
//   },
// ];
// const Comment = ({ data }) => {
//   const { name, text } = data;
//   return (
//     <div className="flex items-start space-x-2 my-2">
//       <img
//         className="h-8 w-8 rounded-full"
//         alt="UserIcon"
//         src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
//       />
//       <div>
//         <p className="font-bold text-[17px]">{name}</p>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };
// const CommentList = ({ comments }) => {
//   return comments.map((comment, index) => (
//     <div key={index} className="ml-4">
//       <Comment data={comment} />
//       <div className="ml-10 my-6 border border-l-black ">
//         {comment.replies && <CommentList comments={comment.replies} />}
//       </div>
//     </div>
//   ));
// };
// const CommentContainer = () => {
//   return (
//     <div className="my-6 p-4 bg-gray-100 rounded-[17px] w-[890px]">
//       <h1 className="text-xl font-bold mb-4">Comments:</h1>
//       <CommentList comments={commentsData} />
//     </div>
//   );
// };
// export default CommentContainer;

import React, { useState } from "react";

// 🧾 Sample Comment Data
const commentsData = [
  {
    name: "Snehitha",
    text: "Amazing teaser! Can't wait!",
    replies: [
      {
        name: "Chinni",
        text: "Hrithik and NTR are fire!",
      },
      {
        name: "Sneha",
        text: "Loved the visuals 🔥",
      },
    ],
  },
  {
    name: "Manoj Verma",
    text: "This is going to break records!",
    replies: [
      {
        name: "Aarav Patel",
        text: "This Spy Universe is getting better and better!",
      },
      {
        name: "Rajesh",
        text: "Loved the visuals 🔥",
      },
      {
        name: "Karan Mehta",
        text: "Ayan Mukerji's direction is top-notch!",
      },
    ],
  },
  {
    name: "Lakshmi Narayan",
    text: "Kiara looks stunning 😍",
    replies: [
      {
        name: "Rohit Bansal",
        text: "Yes, the cast is perfect!",
        replies: [
          {
            name: "Mishara",
            text: "Can't wait to see this epic",
          },
        ],
      },
      {
        name: "Neha Choudhary",
        text: "Can’t wait to watch it in theaters!",
      },
      {
        name: "Divya Sharma",
        text: "Visuals direction is top-notch!",
      },
    ],
  },
];

// 🧱 Single Comment Component
const Comment = ({ name, text }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      <img
        src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
        alt="User"
        width="40"
        height="40"
        style={{ borderRadius: "50%" }}
      />
      <div>
        <p>
          <strong>{name}</strong>
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

// 🧠 Comment With Replies
const CommentWithReplies = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState(comment.replies || []);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [newReply, setNewReply] = useState("");

  const handleAddReply = () => {
    if (newReply.trim() === "") return;

    const replyObject = {
      name: "You",
      text: newReply,
    };

    setReplies([...replies, replyObject]);
    setNewReply("");
    setShowReplies(true); // Show replies after adding
    setShowReplyInput(false);
  };

  return (
    <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
      <Comment name={comment.name} text={comment.text} />

      <div style={{ marginLeft: "50px", marginBottom: "8px" }}>
        {replies.length > 0 && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            style={{
              marginRight: "15px",
              color: "blue",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {showReplies ? "Hide Replies" : "Show Replies"}
          </button>
        )}
        <button
          onClick={() => setShowReplyInput(!showReplyInput)}
          style={{
            color: "green",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {showReplyInput ? "Cancel" : "Reply"}
        </button>
      </div>

      {showReplyInput && (
        <div style={{ marginLeft: "50px", marginBottom: "10px" }}>
          <textarea
            rows="2"
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Write your reply..."
            style={{ width: "100%", padding: "8px" }}
          />
          <button
            onClick={handleAddReply}
            style={{
              marginTop: "5px",
              padding: "5px 10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Add Reply
          </button>
        </div>
      )}

      {showReplies && replies.length > 0 && (
        <div
          style={{
            marginLeft: "30px",
            borderLeft: "2px solid gray",
            paddingLeft: "15px",
          }}
        >
          {replies.map((reply, idx) => (
            <CommentWithReplies key={idx} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

// 📜 Comment List
const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, idx) => (
        <CommentWithReplies key={idx} comment={comment} />
      ))}
    </div>
  );
};

// 🚀 Main Container
const CommentContainer = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        width: "885px",
        borderRadius: "30px",
      }}
    >
      <h2 className="font-bold text-xl" style={{ marginBottom: "20px" }}>
        Comments:
      </h2>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
