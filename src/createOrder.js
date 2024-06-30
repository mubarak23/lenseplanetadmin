import {
  Create,
  NumberInput,
  SaveButton,
  SimpleForm,
  Toolbar,
  TextInput,
} from 'react-admin';

import { CreateOrderByAdmin } from './buttonActions/createOrderAction';

export const CreateOrder = (props) => {
  const CustomToolbar = (customToolbarProps) => {
    return (
      <Toolbar>
        <SaveButton
          label='Submit'
          handleSubmitWithRedirect={(e) => {
            const prescriptionId = new Number(
              document.getElementsByName('prescriptionId')[0].value
            );
            const patientStockName = new Number(
              document.getElementsByName('patientStockName')[0].value
            );
            const quantity = new Number(
              document.getElementsByName('quantity')[0].value
            );

            const shippingAddressId =
              document.getElementsByName('shippingAddressId')[0].value;

            CreateOrderByAdmin(
              prescriptionId,
              patientStockName,
              quantity,
              shippingAddressId,
              window.location.href
            );
          }}
        />
      </Toolbar>
    );
  };

  return (
    <Create {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source='patientStockName' label='Patient Stock Name' />
        <NumberInput source='prescriptionId' label='Prescription Id' />

        <NumberInput source='quantity' label='Quantity ' />

        <NumberInput source='shippingAddressId' label='Shipping Address Id' />
      </SimpleForm>
    </Create>
  );
};
