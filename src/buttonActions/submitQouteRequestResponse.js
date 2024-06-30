// import Button from '@material-ui/core/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getApiBaseUrl } from '../constants';
import { handleAxiosRequestError } from '../utils';

export const submitQouteRequestResponse = async (qouteRequestId, deliveryFee, unitPriceForBuyer, currentPageUrl) => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  }
  axiosConfig.headers['x-access-token'] = localStorage.getItem('token')
 
  const url = `${getApiBaseUrl()}/api/admin/quoterequest/${qouteRequestId}/adminresponse`
  const putPayload = {
    unitPrice: unitPriceForBuyer,
    deliveryFee: deliveryFee
  }
  try {
    const res = await axios.post(url, putPayload, axiosConfig)
    const serverResponse = res.data
    console.log(serverResponse)

    console.log(window.location.href)
  
    // It is important that it is done this way. Trust me!
    window.location.href = currentPageUrl
    console.log(window.location.href)
    window.location.reload(true)  
  } catch(e){
    const errorMessage = handleAxiosRequestError(e)
    console.log(errorMessage)
    toast.error(errorMessage)
  }
}
