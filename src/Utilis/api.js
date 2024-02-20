const axios = require('axios')


const base_URL = 'https://youtube138.p.rapidapi.com'

export const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_KEY ,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  }


export const fetchDataFromAPI = async(url) => {
    const data = await fetch(`${base_URL}/${url}`,options)
    const json = await data.json()
    return json
}


export const  YOUTUBE_SEARCH_SUGGESTION_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
