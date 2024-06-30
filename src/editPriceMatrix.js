import {
  DateInput, Edit, NumberInput, RadioButtonGroupInput, SaveButton, SimpleForm, Toolbar
} from 'react-admin';

import { submitPriceMatrix } from "./buttonActions/submitPriceMatrix";

export const EditPriceMatrix = props => {
  const CustomToolbar = (customToolbarProps) => {
    return (
      <Toolbar>
        <SaveButton label="Submit" handleSubmitWithRedirect={
          (e) => {
            const sellerUserId = new Number(document.getElementsByName("sellerUserId")[0].value);
            const productSellingPriceMajor = new Number(document.getElementsByName("productSellingPriceMajor")[0].value)
            const productCostPriceMajor = new Number(document.getElementsByName("productCostPriceMajor")[0].value)
            const deliveryFee =  new Number(document.getElementsByName("deliveryFee")[0].value)
            const deliveryDate = document.getElementsByName("deliveryDate")[0].value;
            const quantity = document.getElementsByName("quantity")[0].value;
            const transactionType = document.getElementsByName("transactionType")[0].value;
            
            submitPriceMatrix(customToolbarProps.record.qouteRequestRef, sellerUserId, productCostPriceMajor, productSellingPriceMajor, deliveryDate, deliveryFee, quantity, transactionType, window.location.href)
          }
        } />
      </Toolbar>
    )
  };

  return (
    <Edit {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <NumberInput source="sellerUserId" label="Seller" />
        <NumberInput source="productSellingPriceMajor" />
        <NumberInput source="productCostPriceMajor" />
        <NumberInput source="deliveryFee" />
        <NumberInput source="quantity" label="Current Qauntity" disabled />
        <NumberInput source="quantity" placeholder='Change Quantity' />
        <DateInput source="deliveryDate"  />
        <RadioButtonGroupInput source="transactionType" choices={[
          { id: 'CASH_ON_DELIVERY', name: 'CASH ON DELIVERY' },
          { id: 'C_STORES', name: 'C STORES' },
          ]} />
       
      </SimpleForm>
    </Edit>
  )
}
