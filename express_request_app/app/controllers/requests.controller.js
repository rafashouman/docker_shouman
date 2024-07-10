import axios from "axios";

export const sendGetRequest = async (id) => {
  try {
    const resp = await axios.get(`https://lojawebcontinental.myvtex.com/api/catalog/pvt/product/${id}`, {
      headers: {
        "X-VTEX-API-AppKey": "vtexappkey-lojawebcontinental-PEEHBM",
        "X-VTEX-API-AppToken": "NJOJCRYDFAQPGIUBVPALXTNVNUMVYYVKIAZKECIWWNTDCBCDVOHMRKVFDCQRQFEKPAVMKKQCWBRTYOINEOMFKSNWAGPTDSTWBSYTVNFXUSHCDGLVLIUHOSRHFPQYKOFU",
        "Cookie": "janus_sid=829a4d9a-2eb1-414f-9a50-a4daf22d0d2b"
      }
    });

    return resp.data
  } catch (err) {
    // Handle Error Here
    return err;
  }
};

export const sendGetRequestSkuID = async (id) => {
  try {
    const resp = await axios.get(`https://lojawebcontinental.myvtex.com/api/catalog/pvt/stockkeepingunit/${id}`, {
      headers: {
        "X-VTEX-API-AppKey": "vtexappkey-lojawebcontinental-PEEHBM",
        "X-VTEX-API-AppToken": "NJOJCRYDFAQPGIUBVPALXTNVNUMVYYVKIAZKECIWWNTDCBCDVOHMRKVFDCQRQFEKPAVMKKQCWBRTYOINEOMFKSNWAGPTDSTWBSYTVNFXUSHCDGLVLIUHOSRHFPQYKOFU",
        "Cookie": "janus_sid=829a4d9a-2eb1-414f-9a50-a4daf22d0d2b"
      }
    });

    return resp.data;
  } catch (err) {
    // Handle Error Here
    return err;
  }
};