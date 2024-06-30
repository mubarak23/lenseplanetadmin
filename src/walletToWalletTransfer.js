import logo from './logo.svg';
import './App.css';
import { 
  Admin, Resource, ListGuesser, List, Datagrid, ReferenceField, 
  TextField, NumberField, BooleanField, DateField, UrlField, ImageField, EditButton,
  Edit, SimpleForm, TextInput, SelectInput, ReferenceInput, DateTimeInput, BooleanInput,
  Create, Filter, NumberInput,
} from 'react-admin';


export const WalletToWalletTransfersList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="adminUserId" label = "Admin User ID"  link={false} />
      <TextField source="senderUserId" label = "Sender User ID"  link={false} />
      <TextField source="receiverUserId" label = "Receiver User ID"  link={false} />

      <TextField source="currency" />
      <NumberField source="amountMajor" label= "Amount Major"/>
      
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);

export const WalletToWalletTransfersCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="senderUserId" />
          <TextInput source="receiverUserId" />
          <NumberInput source="amountMajor" />
          <TextInput source="description" />
      </SimpleForm>
  </Create>
);
