import react from 'react'
import { Link } from 'react-router-dom';

const ShowPost = ({ PostData }) => {
  
  return (

    <div className="card mb-3">
      <Link className="nav-link"
        to={`/Blog/${PostData.slug}`}
        
      >
        <img src={PostData.thumbnail} className="card-img-top" alt="..." />
      </Link>


      <div className="card-body d-flex flex-column justify-content-center">
        <h4 className="card-title">{PostData.title}</h4>

        <p className="card-text">{PostData.excerpt}</p>
        <p><i className="bi bi-eye"></i> {PostData.views} / 
        <i className="bi bi-calendar"></i>  {PostData.date} / 
        <i className="bi bi-tags"></i>{PostData.tags.join(", ")}</p>

      </div>
    </div>



  )
}
export default ShowPost