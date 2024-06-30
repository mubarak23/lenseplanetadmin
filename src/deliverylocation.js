// import Button from '@material-ui/core/Button';
import {
  Datagrid, DateField, Filter, List, TextField, TextInput
} from 'react-admin';


const SearchFilter = props => (
  <Filter {...props}>
    <TextInput label="User Id" source="userId" alwaysOn />
  
  </Filter>
)

export const DeliveryLocationList = props => (
  <List {...props} filters={<SearchFilter />}>
    <Datagrid >
      <TextField source="id" label="Id" />
      <TextField source="userId" label="User Id" />
      <TextField source="contactFullName" label="Contact FullName" />
      <TextField source="contactPhoneNumber" label= "Contact PhoneNumber"/>
      <TextField source="address" label="Address" />
      <TextField source="state" label="State" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);



