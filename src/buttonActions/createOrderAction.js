// import Button from '@material-ui/core/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getApiBaseUrl } from '../constants';
import { handleAxiosRequestError } from '../utils';


export const CreateOrderByAdmin = async (userId, productId, quantity, unitPrice, orderPaymentVariant, orderReceiveType, deliveryAddressId, currentPageUrl) => {
  
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  }
 
  axiosConfig.headers['x-access-token'] = localStorage.getItem('token')
  
  const url = `${getApiBaseUrl()}/api/admin/orders`
  const putPayload = {
    userId, productId, quantity, unitPrice, orderPaymentVariant, orderReceiveType, deliveryAddressId,
  }
  try {
    const res = await axios.post(url, putPayload, axiosConfig)
    const serverResponse = res.data
    console.log(serverResponse)

    console.log(window.location.href)
  
    // It is important that it is done this way. Trust me!
    window.location.href = currentPageUrl
    console.log(window.location.href)
    toast.success('Order Created Successfully')
    window.location.reload(true)  
  } catch(e){
    const errorMessage = handleAxiosRequestError(e)
    toast.error(errorMessage)
    console.log(errorMessage)
  }
}
