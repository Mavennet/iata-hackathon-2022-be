import { driver } from '@digitalbazaar/did-method-key';
export const keyResolver = async (url) => {
  const didKeyDriver = driver();
  const didDocument = await didKeyDriver.get({ url });
  return { document: didDocument, documentUrl: url, resolver: false };
};
