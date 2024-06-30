// import Button from '@material-ui/core/Button';
import axios from 'axios';

import { Button, TopToolbar } from 'react-admin';
import { toast } from 'react-toastify';
import { getApiBaseUrl } from './constants';
import { handleAxiosRequestError } from './utils';


let apiUrl = getApiBaseUrl()

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
}

export const EnableCStoreUserButton = props => {
  return (
    <TopToolbar>
      <Button label="Enable C Store" color="primary" onClick={() => customAction(props.record.userId, window.location.href)} />
    </TopToolbar>
  )
};

const customAction = async (userId, currentPageUrl) => {
  axiosConfig.headers['x-access-token'] = localStorage.getItem('token')

  const url = `${apiUrl}/api/admin/cstore/activateuser/${userId}`
  console.log(url)

  try {
    const res = await axios.patch(url, {}, axiosConfig)
    const serverResponse = res.data;
    console.log(serverResponse)
  
    console.log(window.location.href)
    
    // It is important that it is done this way. Trust me!
    window.location.href = currentPageUrl
    console.log(window.location.href)
    toast.success('User C-Store Activation Was Successful')
    window.location.reload(true)
  } catch(e) {
    const errorMessage = handleAxiosRequestError(e)
    console.log(errorMessage)
    toast.error(errorMessage)
  }


};
