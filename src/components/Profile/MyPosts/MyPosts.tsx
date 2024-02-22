import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props: any) => {
    return <div>
        My posts
        <div className={classes.posts}>
            <textarea></textarea>
        </div>
        <Post message='Hi, how are you?' likeCount='40' />
        <Post message="It's my first post" likeCount='33'  />
    </div>
}

export default MyPosts;