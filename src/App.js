import {
  Admin,
  Create,
  Datagrid,
  Filter,
  List,
  Resource,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import dataProvider from './dataProvider';

import { CreateOrder } from './createOrder';
import { LensAdditionList } from './lensaddition';
import { LensAxisesList } from './lensaxies';
import { LensSphereLists } from './lenssphere';
import { LensTypeLists } from './lenstype';
import { OrdersList } from './orders';
const UserSearchFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search with User Id' source='userId' alwaysOn />
    <TextInput label='Search with Phone Number' source='phoneNumber' alwaysOn />
  </Filter>
);

export const UserList = (props) => (
  <List {...props} filters={<UserSearchFilter />}>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Full Name ' />
      <TextField source='email' label='Email Address' />
      <TextField source='city' label='City' />
      <TextField source='country' label='Country ' />
      <TextField source='phoneNumber' label='Phone Number' />

      {/* <EnableAccountPlpButton {...props} /> */}
      {/* <ImageField source="photo.url" label= "Photo" /> */}
    </Datagrid>
  </List>
);

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name='users' list={UserList} create={userCreate} />
    <Resource name='orders' list={OrdersList} create={CreateOrder} />
    <Resource name='lenseadditions' list={LensAdditionList} />
    <Resource name='lensaxise' list={LensAxisesList} />
    <Resource name='lenstype' list={LensTypeLists} />
    <Resource name='lenssphere' list={LensSphereLists} />
  </Admin>
);

const userCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' label=' Name' />
      <TextInput source='email' label='Email Address' />
      <TextInput source='city' label='City ' />
      <TextInput source='phoneNumber' label='Phone Number' />
    </SimpleForm>
  </Create>
);

export default App;
