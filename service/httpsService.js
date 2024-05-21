import axios from 'axios';

export async function getAllCategory(headers) {
    try {
        const options = {
            method: 'GET',
            url: 'https://expressapi9-pnwlwchora-uc.a.run.app/getallcategory',
            ...headers,
            // data: JSON.stringify(payload),
        };
      const response = await axios(options);
      return response?.data
    } catch (error) {
      console.error(error);
    }
}