import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
    // consume
    const {posts,loading} = useContext(AppContext);
    console.log("printing inside loop")

  return (
    <div className='w-11/12 max-w-[450px] py-3 flex flex-col gap-y-7'>{
        loading?(<Spinner/>):(posts.length===0?(<div>
            <p>No Post Found</p>
            </div>):(posts.map((post)=>(<div key = {post.id}>
                <p className='font-bold text-xs text-blue-500'>{post.title}</p>
                <p className = 'text-[10px]'>
                    By<span className='italic'>{post.author}</span>on<span className='underline font-bold'>{post.category}</span>
                </p>
                <p className = 'text-[10px]'>Posted on{post.date}</p>
                <p className='text-[10px] mt-[10px]'>{post.content}</p>
                <div>
                    {post.tags.map((tag,index)=>{
                        return <span key = {index}>{`#${tag}`}</span>
                    })}
                </div>
                </div>))
            ))
    }

      
    </div>
  )
}

export default Blogs
