// import Button from '@material-ui/core/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getApiBaseUrl } from '../constants';
import { handleAxiosRequestError } from '../utils';

export const declinePriceMatrixCustomAction = async (priceMatrixId, currentPageUrl) => {
  console.log("price matrix id to cancel: ", priceMatrixId)
  console.log("getApiBaseUrl: ", getApiBaseUrl)
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  }
  axiosConfig.headers['x-access-token'] = localStorage.getItem('token')

  const url = `${getApiBaseUrl()}/api/admin/pricematrices/declined/${priceMatrixId}`
 
  const putPayload = {
  }
  try {
    const res = await axios.patch(url, putPayload, axiosConfig)
    const serverResponse = res.data;
    console.log("server response")
    console.log(serverResponse)
  
    console.log(window.location.href)
  
    // It is important that it is done this way. Trust me!
    window.location.href = currentPageUrl
    toast.success('Price Matrix Cancel')
    console.log(window.location.href)
    window.location.reload(true)  
  } catch(e) {
    const errorMessage = handleAxiosRequestError(e)
    console.log(errorMessage)
    toast.error(errorMessage)
  }
};
