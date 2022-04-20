import React, { useEffect } from 'react';
import { useRef, useState } from "react";
import ShowPost from '../components/ShowPost';
import Comments from '../components/comments';
import StickyBox from "react-sticky-box";
import Footer from '../components/Footer';

const Blog = () => {
  const loadMore = useRef(null)
  const [pageNum, setpageNum] = useState(2)
  const [PostsData, setPostsData] = useState([])
  const [PostsDataLoad, setPostsDataLoad] = useState([])
  const [isLoad, setIsLoad] = useState(0)
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://www.wp-course.site/wp-json/youthink/posts')
      .then(response => response.json())
      .then(result => {
        setPostsData(result.data)
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [!PostsData])

 
  useEffect(() => {
    fetch('https://www.wp-course.site/wp-json/wp/v2/comments')
      .then(response => response.json())
      .then(result => {
        
        setComments(result)
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [!comments])

  const LoadMore =()=>{
    setpageNum(pageNum+1)
   
    fetch(`https://www.wp-course.site/wp-json/youthink/posts?page=${pageNum}`)
      .then(response => response.json())
      .then(result => {
        setPostsDataLoad([...PostsDataLoad, ...result.data])
        setIsLoad(1)
       
      })
      .catch(error => {
        console.error('Error:', error);
      });

      if (pageNum===4){
        loadMore.current.classList.add('d-none')
      }

  }
  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-12 m-3'>
          <h3>Our Latest Posts</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-9 '>


          {PostsData.map((json, i) => {
            return <ShowPost PostData={json} key={i} />
          })
          }

          {(isLoad===1)? (PostsDataLoad.map((json, i) => {return <ShowPost PostData={json}  key={i} />})): " "  } 
           <button ref={loadMore} type="button"   className="btn btn-danger w-100 " onClick={LoadMore} >Load More</button> 


        </div>


        <div className='col-3 '>
        <StickyBox offsetTop={20} offsetBottom={20}>
            <h6>Our Latest Comments</h6>
            {comments.map((json, i) => {
              return <Comments comment={json} key={i} />
            })
            }
          </StickyBox>
        </div>


      </div>

      <Footer />

    </React.Fragment>



  )
}

export default Blog;