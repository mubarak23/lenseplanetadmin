import { 
    Edit, SimpleForm,
    NumberInput, Toolbar, SaveButton
  } from 'react-admin';
  
  import { changeMarginOnCategory } from "./buttonActions/changeCategoryMergin";
  
  export const EditCategory = props => {
    const CustomToolbar = (customToolbarProps) => {
      return (
        <Toolbar>
          <SaveButton label="Submit" handleSubmitWithRedirect={
            (e) => {
              const categoryMargin = document.getElementsByName("categoryMargin")[0].value;
              
              changeMarginOnCategory(customToolbarProps.record.id, new Number(categoryMargin), 
               window.location.href)
            }
          } />
        </Toolbar>
      )
    };
  
    return (
      <Edit {...props}>
        <SimpleForm toolbar={<CustomToolbar />}>
          <NumberInput source="settings.cinderbuildProfiltMargin.amountMajor" label="Current Category Margin (NGN)" disabled />
          <NumberInput source="categoryMargin" />
        </SimpleForm>
      </Edit>
    )
  }
  