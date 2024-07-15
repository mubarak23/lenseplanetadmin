// import Button from '@material-ui/core/Button';
import {
  BooleanField,
  Datagrid,
  DateField,
  Filter,
  List,
  NumberField,
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

export const LensAdditionList = (props) => (
  <List {...props} filters={<SearchFilter />}>
    <Datagrid rowClick='edit'>
      <NumberField source='value' label='Value' />
      <NumberField source='amount' label='Amount' />
      <BooleanField source='status' label='Status' />
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
