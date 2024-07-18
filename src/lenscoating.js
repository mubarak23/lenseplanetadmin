// import Button from '@material-ui/core/Button';
import {
  BooleanField,
  Datagrid,
  DateField,
  Filter,
  List,
  NumberField,
  TextField,
  TextInput,
} from 'react-admin';

import { Button, TopToolbar } from 'react-admin';
import { cancelOrdercustomAction } from './buttonActions/setOrderCanceledAction';
import { recievedOrderStatus } from './buttonActions/setOrderReceivedStatusAction';
import { flagPodOrderPaymentDefaultCustomAction } from './buttonActions/setPodOrderPaymentIsInDefaultAction';

const SearchFilter = (props) => (
  <Filter {...props}>
    <TextInput label=' Name' source='name' alwaysOn />
  </Filter>
);

export const LensCoatingLists = (props) => (
  <List {...props} filters={<SearchFilter />}>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Name' />
      <TextField source='description' label='Description' />
      <NumberField source='amount' label='Amount' />
      <BooleanField source='special' label='Special' />

      <DateField source='time' />
    </Datagrid>
  </List>
);

export const CancelOrderButton = (props) => {
  return (
    <TopToolbar>
      <Button
        label='Cancel'
        color='primary'
        onClick={(e) => {
          cancelOrdercustomAction(props.record.uuid, window.location.href);
          e.stopPropagation();
        }}
      />
    </TopToolbar>
  );
};

export const FlagPodOrderAsInDefaultButton = (props) => {
  return (
    <TopToolbar>
      <Button
        label='Buyer cant pay'
        color='primary'
        onClick={(e) => {
          flagPodOrderPaymentDefaultCustomAction(
            props.record.uuid,
            window.location.href
          );
          e.stopPropagation();
        }}
      />
    </TopToolbar>
  );
};

export const FlagReceivedOrderStatusButton = (props) => {
  return (
    <TopToolbar>
      <Button
        label='Order Received'
        color='primary'
        onClick={(e) => {
          recievedOrderStatus(props.record.uuid, window.location.href);
          e.stopPropagation();
        }}
      />
    </TopToolbar>
  );
};
