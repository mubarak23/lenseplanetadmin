// markOrderAsDeliveredAction
// import Button from '@material-ui/core/Button';

import axios from 'axios';
import { toast } from 'react-toastify';
import { getApiBaseUrl } from '../constants';
import { handleAxiosRequestError } from '../utils';

export const markPriceMatrixOrderAsDeliveredAction = async (priceMatrixId, currentPageUrl) => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  }
  console.log(priceMatrixId)
  axiosConfig.headers['x-access-token'] = localStorage.getItem('token')

  const url = `${getApiBaseUrl()}/api/admin/pricematrices/delivered/${priceMatrixId}`
  console.log(axiosConfig.headers['x-access-token'])
  try {
    
    const res = await axios.patch(url, {}, axiosConfig)
    const serverResponse = res.data
    console.log(serverResponse)

    console.log(window.location.href)
  
    // It is important that it is done this way. Trust me!
    window.location.href = currentPageUrl
    console.log(window.location.href)
    toast.success('Price Matrix Order Status Updated')
    window.location.reload(true)  
  } catch(e){
    const errorMessage = handleAxiosRequestError(e)
    console.log(errorMessage)
    toast.error(errorMessage)
  }
}