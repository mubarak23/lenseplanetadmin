// import Button from '@material-ui/core/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getApiBaseUrl } from '../constants';
import { handleAxiosRequestError } from '../utils';


export const sendQuoteRequestForPriceMatrixApproval = async (sellerUserId, buyerUserId, productId, quantity, productCostPriceMajor, productSellingPriceMajor, transactionType, deliveryDate, orderReceiveType, deliveryFee, deliveryAddress, currentPageUrl) => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  }
  axiosConfig.headers['x-access-token'] = localStorage.getItem('token')

  const url = `${getApiBaseUrl()}/api/admin/quoterequest/create-admin`
  const postPayload = {
    buyerUserId,
    sellerUserId,
    productId, quantity,
    productCostPriceMajor, productSellingPriceMajor, 
    transactionType, deliveryDate, orderReceiveType,
    deliveryAddress,
    deliveryFee,
  }
 
  try {
    const res = await axios.post(url, postPayload, axiosConfig)
    const serverResponse = res.data
    console.log(serverResponse)

    console.log(window.location.href)
    toast.success('Quote with Price Matrix Approval Request Sent')
    // It is important that it is done this way. Trust me!
    window.location.href = currentPageUrl
    
    window.location.reload(true)  
    
  } catch(e){
    const errorMessage = handleAxiosRequestError(e)
    toast.error(errorMessage)
    console.log(errorMessage)
  }
}
