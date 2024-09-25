import React, {useEffect} from 'react';
import {getPosts} from "../../store/PostsSlice";
import {useDispatch, useSelector} from "react-redux";
import Post from "../../components/Post";
import PostSpiner from "../../components/PostSpiner";

const PostPage = () => {

    const {posts, preloader} = useSelector(state => state.postsReducer)

    const dispatch = useDispatch()

    const getPostsFunc = () => {
        dispatch(getPosts())
    }

    useEffect(() => {
        getPostsFunc()
    }, []);

    return (
        <div>
            {/*<button onClick={getPostsFunc}>get posts</button>*/}
            {/*<button>delete all</button>*/}

            {/*{preloader ? <PostSpiner/> : posts.map(post => <Post postInfo={post}/>)}*/}

            {preloader && <PostSpiner />}
            {!preloader && posts.map(post => (
                <Post key={post.id} postInfo={post} />
            ))}
        </div>
    );
};

export default PostPage;