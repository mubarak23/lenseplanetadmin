import logo from './logo.svg';
import './App.css';
import { 
  Admin, Resource, ListGuesser, List, Datagrid, ReferenceField, 
  TextField, NumberField, BooleanField, DateField, UrlField, ImageField, EditButton,
  Edit, SimpleForm, TextInput, SelectInput, ReferenceInput, DateTimeInput, BooleanInput,
  Create, Filter, NumberInput,
} from 'react-admin';


const SearchFilter = props => (
  <Filter {...props}>
    <TextInput label="Search with User Id" source="userId" alwaysOn />
  </Filter>
)

export const FinancialTransctionsList = props => (
  <List {...props} filters={<SearchFilter />}>
    <Datagrid rowClick="edit">
      {/* <TextField source="id" /> */}
      {/* <TextField source="uuid" /> */}
      <TextField source="userId" label = "User ID"  link={false} />

      <ReferenceField source="publicProfile.userUuid" reference="users" label="First Name" link={false}>
        <TextField source="firstName" />
      </ReferenceField>

      <ReferenceField source="publicProfile.userUuid" reference="users"  label="Last Name" link={false}>
        <TextField source="lastName" />
      </ReferenceField>

      <TextField source="currency" />
      <NumberField source="amountMajor" label= "Amount Major"/>
      
      <NumberField source="walletBalanceMajorBefore" label= "Wallet Balance Major (Before)"/>
      <NumberField source="walletBalanceMajorAfter" label= "Wallet Balance Major (After)"/>

      <TextField source="type" />
      <TextField source="paidStatus" />
      <TextField source="description" />
      <TextField source="flowType" />
      
      <TextField source="metadata" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);

export const FinancialTransctionsCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="userId" />
          <NumberInput source="amountMajor" />
          <TextInput source="description" />
      </SimpleForm>
  </Create>
);
