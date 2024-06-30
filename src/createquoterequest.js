import { Create, DateInput, NumberInput, RadioButtonGroupInput, SaveButton, SimpleForm, TextInput, Toolbar } from 'react-admin';

import { sendQuoteRequestForPriceMatrixApproval } from "./buttonActions/sendQuoteRequestAction";

export const CreateQuoteRequest = props => {


  const CustomToolbar = (customToolbarProps) => {
    return (
      <Toolbar>
        <SaveButton label="Submit" handleSubmitWithRedirect={
          (e) => {
            const sellerUserId = new Number(document.getElementsByName("sellerUserId")[0].value);
            const buyerUserId = new Number(document.getElementsByName("buyerUserId")[0].value);
            const productId = new Number(document.getElementsByName("productId")[0].value);
            const quantity = document.getElementsByName("quantity")[0].value;
            const productSellingPriceMajor = new Number(document.getElementsByName("productSellingPriceMajor")[0].value)
            const productCostPriceMajor = new Number(document.getElementsByName("productCostPriceMajor")[0].value)
            const transactionType = document.getElementsByName("transactionType")[0].value;
            const deliveryDate = document.getElementsByName("deliveryDate")[0].value;
            const orderReceiveType = document.getElementsByName("orderReceiveType")[0].value;
            const deliveryFee =  new Number(document.getElementsByName("deliveryFee")[0].value)
            const deliveryAddress = document.getElementsByName("deliveryAddress")[0].value
            
            sendQuoteRequestForPriceMatrixApproval(sellerUserId, buyerUserId, productId, quantity, productCostPriceMajor, productSellingPriceMajor, transactionType, deliveryDate, orderReceiveType, deliveryFee, deliveryAddress, window.location.href)
          }
        } />
      </Toolbar>
    )
  };

  return (
    <Create {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <NumberInput source="buyerUserId" label="Buyer Id" />
        <NumberInput source="sellerUserId" label="Seller Id" />
       
        <NumberInput source="productId" label="Product Id" />
        <NumberInput source="quantity" label="Quantity" />
        <NumberInput source="productSellingPriceMajor" />
        <NumberInput source="productCostPriceMajor" />
        <RadioButtonGroupInput source="transactionType" choices={[
          { id: 'CASH_ON_DELIVERY', name: 'CASH ON DELIVERY' },
          { id: 'C_STORES', name: 'C STORES' },
          ]} />
        <DateInput source="deliveryDate"  />
        <RadioButtonGroupInput source="orderReceiveType" choices={[
          { id: 'DELIVERY', name: 'DELIVERY' },
          { id: 'PICKUP', name: 'PICKUP' },
        ]} />
        <NumberInput source="deliveryFee" />
        <TextInput source="deliveryAddress" label="Delivery Address"/>
       
      </SimpleForm>
    </Create>
  )
}

