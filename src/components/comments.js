
const Comments=({comment})=>{
 
  function createMarkup(data) {
    return { __html: data };
  }
    return(
        <div className="row">
        <div className="col-md-2">
        <img src={comment.author_avatar_urls[24]}  alt="..."/>
        </div>
        <div className="col-md-10">
        <h5 className="fs-6">{comment.author_name}</h5>
              <p dangerouslySetInnerHTML={createMarkup(comment.content.rendered)} className="fs-6"></p>
        </div>
        </div>
      
        
        )
}
export default Comments