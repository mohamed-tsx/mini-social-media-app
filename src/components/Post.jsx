import { useContext } from 'react'

import { UserContext } from '../App'

import { PostContext } from '../App'


const Post = ({content , image , user , id}) => {

  const userValue =  useContext(UserContext)

  const { dispatch } = useContext(PostContext)

  let currUser = userValue == user

  const handleDelete = () => {
    if(!window.confirm("Are you sure to delete!"))
    return
    dispatch({type : "DELETE_POST" , payload : {postID : id}})
  }
  return (
    <div>
          <>
            <p>{content}</p>
            {image && <img src={URL.createObjectURL(image)} 
            style={{ width : 400 }} />}
            {user && <p style={{color : currUser && "red"}}>{user}!</p>}

            {currUser && <button onClick={handleDelete}>DELETE</button>}
          </>
    </div>
  )
}

export default Post