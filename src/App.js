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
import { LensCoatingLists } from './lenscoating';
import { LensCylinderLists } from './lenscylinder';
import { LensSphereLists } from './lenssphere';
import { LensThicknessLists } from './lensthickness';
import { LensTypeLists } from './lenstype';
import { OrdersList } from './orders';
import { ShippingAddressList } from './shippingaddress';
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
    <Resource name='lense Additions' list={LensAdditionList} />
    <Resource name='lens Axise' list={LensAxisesList} />
    <Resource name='lens Type' list={LensTypeLists} />
    <Resource name='lens Sphere' list={LensSphereLists} />
    <Resource name='lens cylinder' list={LensCylinderLists} />
    <Resource name='shipping-address' list={ShippingAddressList} />
    <Resource name='lens Thickness' list={LensThicknessLists} />
    <Resource name='lens coating' list={LensCoatingLists} />
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
