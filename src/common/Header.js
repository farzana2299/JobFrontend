import React from 'react'
import { Link } from 'react-router-dom';


function Header({ login }) {

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary"  >
        <div class="container-fluid">

          <Link to={'/'}>
            <img
              alt=""
              src="https://i.postimg.cc/pr5yqFGd/download-1-removebg-preview.png"
              width="125"
              height="125"
              className="d-inline-block align-top"
            />{' '}
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='d-flex ' style={{ position: 'relative', left: '85%' }}>

              <Link to={'/login'}>
                <button class="btn btn-outline-success" type="submit">LOGIN<i class="fa-solid fa-circle-chevron-left"></i></button>
              </Link>
              {/* } */}
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header