import React from 'react';
import './Myposts.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../redux/state";

const Myposts = (props) => {

    let postsElements =
        props.posts.map (p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( {type: 'ADD-POST'});
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST', newText: text};
        props.dispatch(action);
    }
    return (
        <div className="postsBlock">
            <h3>Myposts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className="posts">
                {postsElements}
                <Post/>
            </div>
        </div>
    )
}
export default Myposts;