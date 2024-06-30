import {
  ArrayField, Button, Datagrid, Filter, List, NumberField, TextField, TextInput, TopToolbar
} from 'react-admin';
import { markDeliveryAsShipped } from './buttonActions/markDeliveryAsShipped';


const SearchFilter = props => (
  <Filter {...props}>

<TextInput label="user Id" source="userId" alwaysOn />
  </Filter>
)

export const deliveryRequestFeeList = props => (
  <List {...props} filters={<SearchFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="Id" />
      <TextField source="userId" label="User Id" />
      <TextField source="wareHouseDetails.name" label="WareHouse Name" />
      <TextField source="deliverySiteDetails.address" label="Delivery Location address" />
      <NumberField source="deliveryFeeAmountMajor" label= "Delivery Fee Amount Major"/>
      <ArrayField source="deliveryItems">
                <Datagrid>
                    <TextField source="productName" />
                    <NumberField source="quantity" />
                </Datagrid>
      </ArrayField>
      <TextField source="status" label="Delivery Fee Status" />
      <TextField source="deliveryRequestHistory" label="Status History" />
      <MarkDeliveryAsShippedButton {...props} />
    </Datagrid>
  </List>
);


export const MarkDeliveryAsShippedButton = props => {
  return (
    <TopToolbar>
      <Button label="Mark As Shipped" color="primary" onClick={
        (e) => {
          markDeliveryAsShipped(props.record.id, window.location.href)
        e.stopPropagation()
        }
        } />
    </TopToolbar>
  )
};




