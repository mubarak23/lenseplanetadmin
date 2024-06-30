// import Button from '@material-ui/core/Button';
import axios from 'axios'

import { TopToolbar, List, Button  } from 'react-admin';
import { getApiBaseUrl } from './constants';


let apiUrl = getApiBaseUrl()

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
}

export const EnableAccountPlpButton = props => {
  return (
    <TopToolbar>
      <Button label="Toggle PLP" color="primary" onClick={() => customAction(props.record.userId, window.location.href)} />
    </TopToolbar>
  )
};

const customAction = async (userId, currentPageUrl) => {
  axiosConfig.headers['x-access-token'] = localStorage.getItem('token')

  const url = `${apiUrl}/api/admin/productleases/toggle`
  console.log(url)
  const putPayload = {
    customerUserId: userId,
  }
  console.log('create payload', putPayload)

  const res = await axios.put(url, putPayload, axiosConfig)
  const serverResponse = res.data;
  console.log(serverResponse)

  console.log(window.location.href)
  alert('PLP Toggled to: ' + serverResponse.data)

  // It is important that it is done this way. Trust me!
  window.location.href = currentPageUrl
  console.log(window.location.href)
  window.location.reload(true)
};
