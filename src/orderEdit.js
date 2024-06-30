import { 
  Edit, SimpleForm, TextInput,
  NumberInput, Toolbar, SaveButton
} from 'react-admin';

import { changeOrderTotal } from "./buttonActions/changeOrderTotalAction";

export const EditOrder = props => {
  const CustomToolbar = (customToolbarProps) => {
    return (
      <Toolbar>
        <SaveButton label="Submit" handleSubmitWithRedirect={
          (e) => {
            const newOrderAmountMajor = document.getElementsByName("newOrderAmountMajor")[0].value;
            const changeReason = document.getElementsByName("changeReason")[0].value;
            
            changeOrderTotal(customToolbarProps.record.id, new Number(newOrderAmountMajor), 
            changeReason, window.location.href)
          }
        } />
      </Toolbar>
    )
  };

  return (
    <Edit {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <NumberInput source="calculatedTotalCostMajor" label="Current Total Cost Major(NGN)" disabled />
        <NumberInput source="newOrderAmountMajor" />
        <TextInput source="changeReason" />
      </SimpleForm>
    </Edit>
  )
}
