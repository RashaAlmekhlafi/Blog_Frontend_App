import { NavLink } from 'react-router-dom';

const Navs = () => {

    return(
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                <img src="https://youthink.la/wp-content/themes/youthinkadult/assets/images/logo.svg" alt="" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/"
                                    style={actveStatus => ({
                                        color: actveStatus.isActive ? "green" : "white"
                                    })}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/Blog"
                                    style={actveStatus => ({
                                        color: actveStatus.isActive ? "green" : "white"
                                    })}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            
                            
                            

                        </ul>

                    </div>

                </div>
               
            </nav>
        </div>
    )

}
export default Navs

