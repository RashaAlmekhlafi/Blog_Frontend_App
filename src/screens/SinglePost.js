import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/comments';
import SPostDesc from '../components/SPostDesc';
import StickyBox from "react-sticky-box";
import Footer from '../components/Footer';
const SinglePost = () => {
  const [comments, setComments] = useState([])
  let { slug } = useParams();
  const [PostData, setPostData] = useState([])

  useEffect(() => {
    fetch(`https://www.wp-course.site/wp-json/youthink/post?slug={${slug}}`)
      .then(response => response.json())
      .then(result => {
        setPostData(result.data)

      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [!PostData])



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

  return (
    <React.Fragment>


      <div className='row'>
        <div className='col-12 m-3'>
          <h3>{PostData.title}</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-9 '>


          <SPostDesc PostData={PostData} />


        </div>
        <div className='col-3 '>
          <StickyBox offsetTop={20} offsetBottom={20}>
            <h6>Our Latest Comments</h6>
            {comments.map((json, i) => {
              return <Comments comment={json} key={i} />
            })
            }
          </StickyBox >
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default SinglePost;