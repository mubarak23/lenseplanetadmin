import {
  Create, NumberInput, SaveButton, SimpleForm, TextInput, Toolbar
} from 'react-admin';

import { AddDeliveryLocationByAdmin } from './buttonActions/addDeliveryLocationAction';

export const AddDeliveryLocation = props => {
  const CustomToolbar = (customToolbarProps) => {
    return (
      <Toolbar>
        <SaveButton label="Submit" handleSubmitWithRedirect={
          (e) => {
            
            const userId = new Number(document.getElementsByName("userId")[0].value)
            const contactFullName = document.getElementsByName("contactFullName")[0].value
            const contactPhoneNumber = document.getElementsByName("contactPhoneNumber")[0].value
            const address = document.getElementsByName("address")[0].value
            const state = document.getElementsByName("state")[0].value
            
            AddDeliveryLocationByAdmin(userId, contactFullName, contactPhoneNumber, address, state, window.location.href)
          }
        } />
      </Toolbar>
    )
  };


  return (
    <Create {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
      <NumberInput source="userId" label="User id"/>
      <TextInput source="contactFullName" label="Contact FullName "/>
      <TextInput source="contactPhoneNumber" label="Contact PhoneNumber "/>
      <TextInput source="address" label="Address"/>
      <TextInput source="state" label="State"/>
      </SimpleForm>
    </Create>
  )
}
