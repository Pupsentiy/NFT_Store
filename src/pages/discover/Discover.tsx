import React from 'react'
import './Discover.scss'
    
const Discover = () => {
  return (
    <div className='discover'>
      <div className="container">
                <div className="discover__header">
                    <h3>Explore Collectibles</h3>
                    <input type="text" className='discover__search' placeholder='Type your keywords . . .' />
                </div>


              <div className="discover__wrapper-nav">
                {/* <div className="discover__wrapper-select">
                  <select name="select" id="" className='discover__select'>
                        <option value="Sort By" className='discover__select-item' >Sort By</option>
                  </select>
                </div> */}
              <nav className="discover__button-nav">
                    <button className="discover__btn-nav">Music</button>
                    <button className="discover__btn-nav">Art</button>
                    <button className="discover__btn-nav">Sports</button>
                    <button className="discover__btn-nav">Virtual</button>
                    <button className="discover__btn-nav">Videos</button>
                    <button className="discover__btn-nav">More</button>
                </nav>
              </div>

              <button className="vievMore">Viev More</button>
      </div>
    </div>
  )
}

export default Discover