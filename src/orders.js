// import Button from '@material-ui/core/Button';
import {
  Datagrid,
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
    <TextInput label='Prescription Id' source='prescriptionId' alwaysOn />
    <TextInput label='Quantity' source='quantity' alwaysOn />
   
  </Filter>
);

export const OrdersList = (props) => (
  <List {...props} filters={<SearchFilter />}>
    <Datagrid rowClick='edit'>
      <TextField source='referenceNumber' label='Reference Number' />
      <TextField source='patientStockName' label='Patient Stock Name ' />
      <TextField source='prescriptionId' label='Prescription Id' />
      <TextField source='quantity' label='Quantity' />
      <NumberField source='shippingAddressId' label='Shipping Address Id ' />

      <TextField source='status' label='Status' />
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
