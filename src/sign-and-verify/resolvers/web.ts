import axiosPkg from 'axios';
const axios = axiosPkg.default;
export const webResolver = async (url) => {
  const regex = /:/g;
  const root = url.split('did:web:')[1].replace(regex, '/');
  try {
    const documentUrl = `https://${root}/did.json`;
    const { data } = await axios.get(documentUrl);
    return { document: data, documentUrl, resolver: true };
  } catch (e) {
    if (e.response?.status === 404) {
      const documentUrl = `https://${root}/.well-known/did.json`;
      const { data } = await axios.get(documentUrl);
      return { document: data, documentUrl, resolver: true };
    }
  }
};
