import { 
  Create, SimpleForm, TextInput,
  NumberInput, Toolbar, SaveButton, TextField,
} from 'react-admin';

import { AddNewProductByAdmin } from './buttonActions/addNewProductAction'

export const AddProduct = props => {
  const CustomToolbar = (customToolbarProps) => {
    return (
      <Toolbar>
        <SaveButton label="Submit" handleSubmitWithRedirect={
          (e) => {
            const name = document.getElementsByName("name")[0].value;
            const description = document.getElementsByName("description")[1].value;
            const locationState = document.getElementsByName("locationState")[0].value;
            const userId = new Number(document.getElementsByName("userId")[0].value)
            const price = new Number(document.getElementsByName("price")[0].value);
            const minQty = new Number(document.getElementsByName("minQty")[0].value)
            const maxQty = new Number(document.getElementsByName("maxQty")[0].value);
            const categoryId = document.getElementsByName("categoryId")[0].value
            const brandId = document.getElementsByName("brandId")[0].value
            
            AddNewProductByAdmin(userId, name, description, categoryId, brandId, price, locationState, minQty, maxQty, window.location.href)
          }
        } />
      </Toolbar>
    )
  };

  // categoryId, brandId, name, description, userId, price, locationState, minQty, maxQty 

  return (
    <Create {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source="name" label="Product Name"/>
      <TextInput source="description" label="Product Description"/>
        <NumberInput source="userId" label="Seller Id" />
        <NumberInput source="categoryId" label="Category Id" />
        <NumberInput source="brandId" label="Brand Id" />
        <NumberInput source="price" label="Product Price" />
        <NumberInput source="minQty" label="Product Min. Quantity" />
        <NumberInput source="maxQty" label="Product Max.Quantity" />
        <TextInput source="locationState" label="Product Location"/>
      </SimpleForm>
    </Create>
  )
}
