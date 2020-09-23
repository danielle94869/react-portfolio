import React from 'react'

const About = () => {
  return (
    <>

      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Document</title>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous' />

      </head>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#navbar'>Daniel Le</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#about'>About</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#portfolio'>Porfolio</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <img id="image" src="./Daniel-Le.JPG" alt="Daniel Le" />
      </div>
      <h1 className="display-4">Daniel Le</h1>
      <p>Fountain Valley, CA 92708</p>
      <p>Email: lequangduc512014@gmail.com</p>
      <p className="lead">My name is Daniel Le. I am graduated from Coding Boot Camp University of California, Irvine. I love programming and I will try my best to get the experience in the field.</p>

    </>
  )
}

export default About
