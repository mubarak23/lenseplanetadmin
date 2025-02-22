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
    <TextInput label='order Number' source='orderNo' alwaysOn />
  </Filter>
);

export const OrdersList = (props) => (
  <List {...props} filters={<SearchFilter />}>
    <Datagrid rowClick='edit'>
      <BooleanField source='patient' label='Patient' />
      <TextField source='patientStockName' label='Patient Stock Name ' />
      <TextField source='orderNo' label='order Number' />
      <NumberField source='quantity' label='Quantity' />
      <NumberField source='totalAmount' label='Total Amount' />
      <NumberField source='platformChargeAmount' label='Platform Charges' />
      <NumberField source='subtotalAmount' label='Sub Total Amount' />
      <BooleanField source='specialRequest' label='Special Request' />
      <DateField source='createdAtDate' />
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
