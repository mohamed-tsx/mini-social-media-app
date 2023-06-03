const postReducer = (state , action) => {
    switch (action.type) {
        case "ADD_NEW_POST" : {
            const newPost = action.payload && action.payload.post;


            return { posts : [newPost , ...state.posts] }

        }
        
        case 'DELETE_POST': {
            // let deletingPostId = action.paylaod.postID
            const deletingPostId = action.payload && action.payload.postID;

            const newPosts = state.posts.filter(post => post.id !== deletingPostId)

            return {posts : newPosts}
        }
        default:
            return state
    }
}

export default postReducer