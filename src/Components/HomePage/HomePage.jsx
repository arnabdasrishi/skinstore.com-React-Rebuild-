import React from 'react'
import IndividualIntervalsExample from './BannerSlider'
import OverTheBlog from './OverTheBlog'
import ShopByCategory from './ShopByCategory'
import TrendingOffers from './TrendingOffers'
import WhatPeopleAreBuying from './WhatPeopleAreBuying'

const HomePage = () => {
  return (
    <div className='HomePage'>
        <IndividualIntervalsExample />
        <ShopByCategory />
        <TrendingOffers />
        <WhatPeopleAreBuying />
        <OverTheBlog />
    </div>
  )
}

export default HomePage