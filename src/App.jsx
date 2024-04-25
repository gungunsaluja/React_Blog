
import Header from "./Components/Header"
import Blogs from "./Components/Blogs"

import Pagination from "./Components/Pagination"
import { useContext, useEffect } from "react"
import { AppContext } from "./Context/AppContext"



function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(()=>{
    // fetch the initial BlogPosts data
    // fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
      


  },[]);
 

  return (
    // <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    //   <Header/>
    //   <Blogs/>
    //   <Pagination/>
 
      
    // </div>
    <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/blog/:blogId" element = {<BlogPage/>}></Route>
      <Route path="/tags/:tag" element = {<TagPage/>}></Route>
      <Route path="/categories/:category" element = {<CategoryPage/>}></Route>
    </Routes>

  )
}

export default App

// app ke andar jo b components honge vo context folder ke andar ke data ko access kar payenge