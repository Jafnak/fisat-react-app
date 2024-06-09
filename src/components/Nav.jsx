import React from 'react'

const Nav = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FISAT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">View</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav