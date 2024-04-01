
import Header from "./Components/Header"
import Blogs from "./Components/Blogs"

import Pagination from "./Components/Pagination"
import { useContext, useEffect } from "react"
import { AppContext } from "./Context/AppContext"



function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);
 

  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>

      
    </div>
  )
}

export default App

// app ke andar jo b components honge vo context folder ke andar ke data ko access kar payenge