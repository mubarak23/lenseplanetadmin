export const handleAxiosRequestError = (error) => {
  if (error.response) {
    /*
    * The request was made and the server responded with a
    * status code that falls out of the range of 2xx
    */
    return error.response.data.error
  } if (error.request) {
    /*
    * The request was made but no response was received, `error.request`
    * is an instance of XMLHttpRequest in the browser and an instance
    * of http.ClientRequest in Node.js
    */
    const errorMessage = 'The server seems down at the moment. Please try again later.'
    return errorMessage
  } 
  
  // Something happened in setting up the request and triggered an Error
  return error.message
}
