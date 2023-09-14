import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
// Home component serves as the main landing page of the application, displaying featured content in the Main section and multiple rows of 
// content fetched from different API endpoints. Each row represents a category of movies or shows (e.g., "Popular," "Trending," "Top Rated," "Horror"),
// and users can scroll through the content within each row. 
// The specific content displayed in each row is determined by the API endpoints specified in the requests module.
const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home
