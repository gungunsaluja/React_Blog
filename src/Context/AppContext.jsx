import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
export const AppContext = createContext();
function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);
// data filling pending
        async function fetchBlogPosts(page = 1)
        {
            setLoading(true);
            let url = `${baseUrl}?page=${page}`;
            try{
                    const result = await fetch(url);
                    const data = await result.json();
                    console.log(data);
                    setPage(data.page);
                    setPosts(data.posts);
                    setTotalPages(data.totalPages);

            }
            catch(error)
            {
                console.log("Error in fetching data");
                setPage(1);
                setPosts([]);
                setTotalPages(null);


            }
        }
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages
    };

    // step 2
    return <AppContextProvider value = {value}>     
     {children}       
     </AppContextProvider>
}