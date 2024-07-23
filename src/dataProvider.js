/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { stringify } from 'query-string';
import { fetchUtils } from 'react-admin';
import { handleAxiosRequestError } from './utils';

const httpClient = fetchUtils.fetchJson;

 let apiUrl = 'https://lens-plannet-17cc7458993a.herokuapp.com';

// 'https://staging.api.lensesplanet.com';

// let apiUrl = 'http://localhost:5001';

//getApiBaseUrl()

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

export default {
  getList: async (resource, params) => {
    resource = resource.replaceAll(' ', '');
    const { page, perPage } = params.pagination;
    // const { field, order } = params.sort;
    const query = {
      limit: 40,
      page: page,
      // range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    };
    if (params.filter && Object.keys(params.filter).length) {
      query.filter = JSON.stringify(params.filter);
    }
    console.log(query.filter);
    const url = `${apiUrl}/super/${resource}?${stringify(query)}`;
    console.log(url);

    axiosConfig.headers['x-access-token'] = localStorage.getItem('token');

    const res = await axios.get(url, axiosConfig);
    const serverResponse = res.data;
    console.log(serverResponse);
    console.log('serverResponse full', serverResponse);

    if (serverResponse) {
      console.log('serverResponse.data', serverResponse.data);
      return {
        data: serverResponse.data,
        total: serverResponse.total,
      };
    } else {
      throw new Error(serverResponse.error);
    }
  },

  getOne: async (resource, params) => {
    console.log('Inside get one');
    resource = resource.replaceAll(' ', '');

    axiosConfig.headers['x-access-token'] = localStorage.getItem('token');

    const url = `${apiUrl}/api/admin/${resource}/${params.id}`;
    console.log(url);

    const res = await axios.get(url, axiosConfig);
    const serverResponse = res.data;
    console.log(serverResponse);

    if (serverResponse && serverResponse.status) {
      return {
        data: serverResponse.data,
      };
    } else {
      throw new Error(serverResponse.error);
    }
  },

  getMany: async (resource, params) => {
    console.log('Inside get many');
    resource = resource.replaceAll(' ', '');
    const query = {
      ids: JSON.stringify(params.ids),
      sortOrder: 'DESC',
    };
    axiosConfig.headers['x-access-token'] = localStorage.getItem('token');

    const url = `${apiUrl}/api/admin/${resource}?${stringify(query)}`;
    console.log(url);

    const res = await axios.get(url, axiosConfig);
    const serverResponse = res.data;
    console.log(serverResponse);

    if (serverResponse && serverResponse.status) {
      return {
        data: serverResponse.data,
      };
    } else {
      throw new Error(serverResponse.error);
    }
  },

  getManyReference: async (resource, params) => {
    resource = resource.replaceAll(' ', '');
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    axiosConfig.headers['x-access-token'] = localStorage.getItem('token');

    const query = {
      pageNumber: page,
      ids: JSON.stringify(params.ids),
      sortOrder: 'DESC',
    };
    const url = `${apiUrl}/api/admin/${resource}?${stringify(query)}`;
    console.log(url);

    const res = await axios.get(url, axiosConfig);
    const serverResponse = res.data;
    console.log(serverResponse);

    if (serverResponse && serverResponse.status) {
      return {
        data: serverResponse.data.dataset,
        total: serverResponse.data.total,
      };
    } else {
      throw new Error(serverResponse.error);
    }
  },

  update: async (resource, params) => {
    resource = resource.replaceAll(' ', '');
    axiosConfig.headers['x-access-token'] = localStorage.getItem('token');

    try {
      const url = `${apiUrl}/api/admin/${resource}/${params.id}`;
      console.log(url);
      console.log('update payload', params.data);

      const res = await axios.put(url, params.data, axiosConfig);
      const serverResponse = res.data;
      console.log(serverResponse);

      // It is important that it is done this way. Trust me!
      return {
        data: {
          id: serverResponse.data.id,
        },
      };
    } catch (e) {
      const errorMessage = handleAxiosRequestError(e);

      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },

  updateMany: (resource, params) => {
    resource = resource.replaceAll(' ', '');
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    axiosConfig.headers['x-access-token'] = localStorage.getItem('token');

    return httpClient(`${apiUrl}/api/admin/${resource}?${stringify(query)}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
      headers: axiosConfig.headers,
    }).then(({ json }) => ({ data: json }));
  },

  create: async (resource, params) => {
    resource = resource.replaceAll(' ', '');
    axiosConfig.headers['x-access-token'] = localStorage.getItem('token');

    try {
      const url = `${apiUrl}/api/admin/${resource}`;
      console.log(url);
      console.log('create payload', params.data);

      const res = await axios.post(url, params.data, axiosConfig);
      const serverResponse = res.data;
      console.log(serverResponse);

      // It is important that it is done this way. Trust me!
      return {
        data: {
          id: serverResponse.data.id,
        },
      };
    } catch (e) {
      const errorMessage = handleAxiosRequestError(e);

      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },

  delete: async (resource, params) => {
    resource = resource.replaceAll(' ', '');
    axiosConfig.headers['x-access-token'] = localStorage.getItem('token');

    return {
      data: {},
    };
  },

  deleteMany: async (resource, params) => {
    resource = resource.replaceAll(' ', '');
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    axiosConfig.headers['x-access-token'] = localStorage.getItem('token');

    return {
      data: {},
    };
  },
};
