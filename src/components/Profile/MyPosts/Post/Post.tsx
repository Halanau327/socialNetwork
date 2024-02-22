import s from "./Post.module.css"

const Post = (props: any) => {


    return (
        <div className={s.item}>
            {props.message};
            <span>{props.likeCount}</span>
        </div>)
}

export default Post;