import { useRef, useState , useContext } from 'react'
import { PostContext } from '../App'

const CreatePost = ({posts , setPosts , user}) => {
  const[content , setContent] = useState("")
  const[image , setImage] = useState(null)
  const { dispatch } = useContext(PostContext)



  const imageRef = useRef()
  const contentRef = useRef()




  const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = {content , image , user , id : Date.now() }

    // console.log(newPost)



    dispatch({ type: "ADD_NEW_POST", payload: { post: newPost } });

    




    setImage(null)
    imageRef.current.value = ""
    contentRef.current.value = ""
  }
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Create Post' onChange={(e) => setContent(e.target.value)} ref={contentRef}></input>
        <input type='file' onChange={(e) => setImage(e.target.files[0])} ref={imageRef}></input>
        <button type='submit'>POST</button>
      </form>
    </div>
  )
}

export default CreatePost