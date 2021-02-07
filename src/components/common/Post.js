import React from 'react';
import './Post.css';

const Post = ({username, caption, imageUrl}) => {
  return (
    <div className = "post">
      <div className = "post__username">
        <h3> {username} </h3>
      </div>
      <img className ="post__image" 
           src = "https://avatars.githubusercontent.com/u/77920690?s=460&u=b5ef9f384e47c25a4bd10902f1b65b089608f84e&v=4"
           alt = 'photo'>
      </img>      
      <div className = "post__caption">
        {/* {caption} */}
        caption
        </div>
    </div>
  );
};

export default Post;