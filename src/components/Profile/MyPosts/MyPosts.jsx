import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div className={classes.posts}>
            <textarea></textarea>
        </div>

        <Post />
        <Post />
        <Post />
    </div>
}

export default MyPosts;