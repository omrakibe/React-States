import { useState } from "react";

function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    let newVal = !isLiked;
    setIsLiked(newVal);
  };

  let likestyle = { color: "red" };

  return (
    <div>
      <p onClick={toggleLike}>
        {!isLiked ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart" style={likestyle}></i>
        )}
      </p>
    </div>
  );
}

export default LikeButton;
