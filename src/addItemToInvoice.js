import { 
  Edit, SimpleForm, TextInput,
  TextField,
  NumberField,
  NumberInput, Toolbar, SaveButton,
  Filter,
  Datagrid,
  ArrayField,
} from 'react-admin';

import { submitInvoiceItem } from "./buttonActions/submitInvoiceItem";

export const AddItemToProcurementInvoice = props => {
  console.log(props)
  const CustomToolbar = (customToolbarProps) => {
    return (
      <Toolbar>
        <SaveButton label="Submit" handleSubmitWithRedirect={
          (e) => {
            const productName = document.getElementsByName("productName")[0].value;
            const productId = document.getElementsByName("productId")[0].value;
            const quantity = document.getElementsByName("quantity")[0].value;
            const unitPriceForBuyer = document.getElementsByName("unitPriceForBuyer")[0].value;
            
            submitInvoiceItem(customToolbarProps.record.id, new Number(productId), productName,  new Number(quantity), unitPriceForBuyer, window.location.href)
          }
        } />
      </Toolbar>
    )
  };

  const SearchFilter = props => (
    <Filter {...props}>
      <TextInput label="Procurement Id" source="id" alwaysOn />
    </Filter>
   )

  return (
    <Edit {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
    
      <ArrayField source="invoice.invoiceItem" label="Invoice Items" styles={{ fontSize: '150px'}}>
          <Datagrid>
              <TextField source="productName" />
              <NumberField source="quantity" />
              <NumberField source="unitPriceForBuyer" />
          </Datagrid>
      </ArrayField>
        <NumberInput source="productId" label="Product Id" />
        <TextInput source="productName" />
        <NumberInput source="quantity" />
        <NumberInput source="unitPriceForBuyer" />
      </SimpleForm>
    </Edit>
  )
}