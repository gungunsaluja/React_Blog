import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
export const AppContext = createContext();
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
// data filling pending
        async function fetchBlogPosts(page = 1,tag = null,category)
        {
            // provider likh re haiii
            setLoading(true);
            let url = `${baseUrl}?page=${page}`;
            if(tag )
            {
                url +=`&tag=${tag}`;
            }
            if(category){
                url+=`&category=${category}`;
            }
            console.log("printin the final url");
            console.log(url);
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
            setLoading(false);
        }
        // to toggle between previous page and next page
        function handlePageChange(page){
                setPage(page);
                fetchBlogPosts(page);
        }
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    // step 2 context providing 
    return <AppContext.Provider value = {value}>     
     {children}      
      {/*children app vaala component hai!! or usko hum value pass kar re hai  */}
     </AppContext.Provider>
}
// app ke andar ke sare component access karpayenge us data ko jo hum yha daal re hai!!!