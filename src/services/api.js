import axios from 'axios'

const BASE_URL = 'https://api.unsplash.com'

// Fetch images using axios
export const fetchImagesWithAxios = async (query = 'office', page = 1, perPage = 12) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: perPage,
    },
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLACE_ACCESS_KEY}`,
    },
  })

  return response.data
}
