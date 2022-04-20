import React from 'react'

const SPostDesc = ({ PostData }) => {
   
    function createMarkup(data) {
        return { __html: data };
      }
    
    return (
        <React.Fragment>


            <div className="card mb-3">
                <img src={PostData.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-center">
                    <h4 className="card-title">{PostData.title}</h4>
                    <div className="d-flex flex-row justify-content-between my-3 p-2">
                        <div ><i className="bi bi-person"></i>{PostData.author}</div>
                        <div ><i className="bi bi-eye"></i> {PostData.views} / <i className="bi bi-calendar"></i>  {PostData.date} /  <i className="bi bi-tags"></i>{PostData.tags} </div>
                    </div>
                   
                    
                    <p dangerouslySetInnerHTML={createMarkup(PostData.content)}></p>

                </div>
            </div>

        </React.Fragment>


    )
}
export default SPostDesc