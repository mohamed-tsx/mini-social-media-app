import { useEffect, useState , createContext, useContext, useReducer} from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import postReducer from './postReducer'

export const UserContext = createContext()

export const PostContext = createContext({
  posts: []
})


const App = () => {

  const[user , setUser] = useState('MoyaUser')
  // const[posts , setPosts] = useState([])

  const initialPoststate = useContext(PostContext)


  const [state, dispatch] = useReducer(postReducer, initialPoststate);


  useEffect((e) =>{
    document.title = user ? `${user}'s Feed` : 'Please Login'
  } , [user])


  if (!user) return <Login setUser={setUser}/>

  return(
    <PostContext.Provider value={{state , dispatch}}>
      <UserContext.Provider value={user}>
        <Header setUser={setUser} user={user}/>
        <CreatePost user={user}/>
        <PostList posts={state.posts}/>
        
      </UserContext.Provider>
    </PostContext.Provider>
    
  )
  
}

export default App
