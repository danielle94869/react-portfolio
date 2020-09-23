import React from 'react'

const Portfolio = () => {
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
      <a href='https://daniellehillman.github.io/Sensify/' target='_blank'>Project 1: Sensify</a>
      <a href='https://dashboard.heroku.com/apps/cryptic-savannah-70126' target='_blank'>Project 2: TrActivity</a>
      <a href='url' target='_blank'>Project 3</a>
    </>
  )
}

export default Portfolio
