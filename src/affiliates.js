import logo from './logo.svg';
import './App.css';
import { 
  Admin, Resource, ListGuesser, List, Datagrid, ReferenceField, 
  TextField, NumberField, BooleanField, DateField, UrlField, ImageField, EditButton,
  Edit, SimpleForm, TextInput, SelectInput, ReferenceInput, DateTimeInput, BooleanInput,
  Create, Filter, NumberInput
} from 'react-admin';


export const AffiliatesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="userId" label = "ID" />
      <TextField source="userUuid" label = "UUID" />
      <TextField source="firstName" label= "First Name"/>
      <TextField source="lastName" label= "Last Name"/>
      <TextField source="msisdn" label= "MSISDN"/>
    </Datagrid>
  </List>
);


export const AffiliatesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" label="First Name" />
      <TextInput source="lastName" label="Last Name" />
      <TextInput source="phoneNumber" label="Phone Number" />
      <TextInput source="emailAddress" label="Email Address" />
    </SimpleForm>
  </Create>
);
