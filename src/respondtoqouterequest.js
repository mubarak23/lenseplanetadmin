import { Edit, NumberInput, SaveButton, SimpleForm, TextField, Toolbar } from 'react-admin';

import { submitQouteRequestResponse } from "./buttonActions/submitQouteRequestResponse";

export const RespondToQouteRequestByAdmin = props => {
  console.log(props)
  const CustomToolbar = (customToolbarProps) => {
    return (
      <Toolbar>
        <SaveButton label="Submit" handleSubmitWithRedirect={
          (e) => {
            const unitPriceForBuyer = document.getElementsByName("unitPriceForBuyer")[0].value;
            const deliveryFee = document.getElementsByName("deliveryFee")[0].value;
            submitQouteRequestResponse(customToolbarProps.record.id, deliveryFee, unitPriceForBuyer, window.location.href)
          }
        } />
      </Toolbar>
    )
  };


  return (
    <Edit {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
    
        <TextField source="product.name" disabled />
        <NumberInput source="quantity" disabled />
        <NumberInput source="unitPriceForBuyer" />
        <NumberInput source="deliveryFee" />
      </SimpleForm>
    </Edit>
  )
}