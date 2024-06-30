import { Button, Datagrid, DateField, Filter, List, NumberField, TextField, TextInput, TopToolbar } from 'react-admin';
import { markBankDetailsChangeAsApproved } from './buttonActions/markBankDetailsChangeAsApproved';


const SearchFilter = props => (
  <Filter {...props}>

<TextInput label="user Id" source="userId" alwaysOn />
  </Filter>
)

export const bankDetailsChangeList = props => (
  <List {...props} filters={<SearchFilter />}>
    <Datagrid >
      <TextField source="id" label="Id" />
      <TextField source="userId" label="User Id" />
      <TextField source="bankAccountName" label="Account Name" />
      <TextField source="accountNumber" label="Account Number" />
      <NumberField source="bankName" label= "Bank Name"/>
      <DateField source="createdAt" />
      <ApprovedRequestButton {...props} />
    </Datagrid>
  </List>
);


export const ApprovedRequestButton = props => {
  return (
    <TopToolbar>
      <Button label="Mark as Approved" color="primary" onClick={
        (e) => {
          markBankDetailsChangeAsApproved(props.record.id, window.location.href)
        e.stopPropagation()
        }
        } />
    </TopToolbar>
  )
};




