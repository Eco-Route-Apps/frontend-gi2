import styled from "@emotion/styled";
import { ArrowBack } from "@mui/icons-material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllBlogs } from "../hooks/useGetAllBlogs";
import { BlogCard } from "../components/home/BlogCard";
import Footer from "../components/footer/Footer";

export const AllBlogs: React.FC = () => {
    const navigate = useNavigate();
  
    const {blogs,loading,error,refetch} = useGetAllBlogs()
  
    useEffect(() => {
      // console.log("id",blog)
      refetch();
    }, []);
  
    const Container = styled.div`
      .blog-header {
        padding:    15px;
        text-align: center;
        background: #55b76b;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
  
      .blog-title {
        padding: 0;
        margin: 0;
        color: white;
        flex-grow: 2;
      }
  
      .blog-body {
        width: 80vw;
        margin: 20px auto;
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
        gap:20px;
      }

        @media (max-width: 768px) {
            .blog-body {
                width: 90vw;
                grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
            }

}
      @media (max-width: 480px) {

        .blog-body {
            grid-template-columns: repeat(auto-fill,minmax(200px,1fr));

        }
    }
  
    
    `;
    return (
        <Container style={{
            backgroundColor: "#f5f5f5",
        }}>
            
            {/* Blog Header */}
            <div className="blog-header">
                <ArrowBack sx={{ color: "white" }} onClick={
                ()=>navigate("/")
                } />
                <h1 className="blog-title">Blogs</h1>
            </div>
                {loading && <p>Loading...</p>}

                <div className="blog-body">
                    
                {blogs?.map((item,index)=>{
                            return <BlogCard key={index} title={item.title} desc={item.description} hero={item.hero_image} url={item.id}></BlogCard>
                        })}
                </div>
                <Footer></Footer>
        </Container>
    )
}