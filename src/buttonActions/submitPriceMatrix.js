// import Button from '@material-ui/core/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getApiBaseUrl } from '../constants';
import { handleAxiosRequestError } from '../utils';


export const submitPriceMatrix = async (qouteRequestRef,  sellerUserId, productCostPriceMajor, productSellingPriceMajor, deliveryDate, deliveryFee, quantity, transactionType, currentPageUrl) => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  }
  axiosConfig.headers['x-access-token'] = localStorage.getItem('token')

  const url = `${getApiBaseUrl()}/api/admin/pricematrices`
  const postPayload = {
    qouteRequestRef,  sellerUserId, productCostPriceMajor, productSellingPriceMajor, deliveryDate, deliveryFee, quantity, transactionType
  }
  try {
    const res = await axios.post(url, postPayload, axiosConfig)
    const serverResponse = res.data
    console.log(serverResponse)

    console.log(window.location.href)
    toast.success('Price Matrix Submitted')
    // It is important that it is done this way. Trust me!
    window.location.href = currentPageUrl
   
    window.location.reload(true)  
  } catch(e){
    const errorMessage = handleAxiosRequestError(e)
    toast.error(errorMessage)
    console.log(errorMessage)
  }
}
