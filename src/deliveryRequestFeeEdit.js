import { 
  Edit, SimpleForm,
  NumberInput, Toolbar, SaveButton, TextInput,
  ArrayField,
  TextField,
  Datagrid,
  NumberField
} from 'react-admin';

import { submitDeliveryRequestFee } from "./buttonActions/submitDeliveryRequestFeeAction";

export const EditDeliveryRequestFee = props => {
  const CustomToolbar = (customToolbarProps) => {
    return (
      <Toolbar>
        <SaveButton label="Submit" handleSubmitWithRedirect={
          (e) => {
            const deliveryFeeAmountMajor = document.getElementsByName("deliveryFeeAmountMajor")[0].value;
            submitDeliveryRequestFee(customToolbarProps.record.id, new Number(deliveryFeeAmountMajor), 
             window.location.href)
          }
        } />
      </Toolbar>
    )
  };

  return (
    <Edit {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
      <TextField source="deliverySiteDetails.address" label="Delivery Location address" />
      <ArrayField source="deliveryItems" label='Delivery Items'>
                <Datagrid>
                    <TextField source="productName" />
                    <NumberField source="quantity" />
                </Datagrid>
      </ArrayField>
        <NumberInput source="deliveryFeeAmountMajor" />
      </SimpleForm>
    </Edit>
  )
}
