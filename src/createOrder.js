import {
  Create,
  NumberInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';

import { CreateOrderByAdmin } from './buttonActions/createOrderAction';

export const CreateOrder = (props) => {
  const CustomToolbar = (customToolbarProps) => {
    return (
      <Toolbar>
        <SaveButton
          label='Submit'
          handleSubmitWithRedirect={(e) => {
            // single
            // const single = new (document.getElementsByName(
            //   'single'
            // )[0].value)();

            // const patient = new (document.getElementsByName(
            //   'patient'
            // )[0].value)();
            const orderfor = 
              document.getElementsByName('orderfor')[0].value
            ;

            const patientStockname =
              document.getElementsByName('patientStockName')[0].value;
            const quantity = new Number(
              document.getElementsByName('quantity')[0].value
            );

            // lenstypename
            const lenstypename =
              document.getElementsByName('lenstypename')[0].value;

            // lensthicknessname
            const lensthicknessname =
              document.getElementsByName('lensthicknessname')[0].value;

            // lensspherevalue
            const lensspherevalue = new Number(
              document.getElementsByName('lensspherevalue')[0].value
            );

            // lenscylindervalue
            const lenscylindervalue = new Number(
              document.getElementsByName('lenscylindervalue')[0].value
            );

            // lensaxiesvalue
            const lensaxiesvalue = new Number(
              document.getElementsByName('lensaxiesvalue')[0].value
            );

            // lensadditionvalue
            const lensadditionvalue = new Number(
              document.getElementsByName('lensadditionvalue')[0].value
            );

            // lenscoatingname
            const lenscoatingname =
              document.getElementsByName('lenscoatingname')[0].value;

            const shippingAddressId =
              document.getElementsByName('shippingAddressId')[0].value;

            CreateOrderByAdmin(
              orderfor,
              lensspherevalue,
              lenscoatingname,
              patientStockname,
              lenstypename,
              lensthicknessname,
              lenscylindervalue,
              lensaxiesvalue,
              lensadditionvalue,
              quantity,
              shippingAddressId,
              window.location.href
            );
          }}
        />
      </Toolbar>
    );
  };

  return (
    <Create {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source='orderfor' label='User Email' />
        <TextInput source='patientStockName' label='Patient Stock Name' />
        {/* <RadioButtonGroupInput
          source='single'
          choices={[
            { id: 'true', name: 'true' },
            { id: 'false', name: 'false' },
          ]}
        />

        <RadioButtonGroupInput
          source='patient'
          choices={[
            { id: 'true', name: 'true' },
            { id: 'false', name: 'false' },
          ]}
        /> */}

        <NumberInput source='quantity' label='Quantity ' />
        <TextInput source='lenstypename' label='Len Thickness Name' />
        <TextInput source='lensthicknessname' label='Len Type Name' />
        <TextInput source='lenscoatingname' label='Len Coasting Name' />

        <NumberInput source='lensspherevalue' label='Lens Sphere Value ' />
        <NumberInput source='lenscylindervalue' label='Lens Cylinder Value ' />
        <NumberInput source='lensaxiesvalue' label='Lens Axies Value ' />
        <NumberInput source='lensadditionvalue' label='Lens Addition Value ' />

        <NumberInput source='shippingAddressId' label='Shipping Address Id' />
      </SimpleForm>
    </Create>
  );
};
