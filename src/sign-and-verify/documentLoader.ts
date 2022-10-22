import jsonld from 'jsonld';
import {
  contextResolver,
  keyResolver,
  webResolver,
} from './resolvers/index.js';
const documentResolver = async (url) => {
  try {
    if (url.startsWith('did:web')) {
      return await webResolver(url);
    }
    if (url.startsWith('did:key')) {
      return await keyResolver(url);
    }
    return undefined;
  } catch (e) {
    throw new Error(e.message);
  }
};
const documentDereferencer = async (document, iri) => {
  if (iri === document.id) {
    return { document };
  }
  let verificationMethod;
  if (document.verificationMethod) {
    verificationMethod = document.verificationMethod.find((vm) => {
      return vm.id === iri;
    });
  } else {
    if (document.publicKey) {
      verificationMethod = document.publicKey.find((vm) => {
        return vm.id === iri;
      });
    }
  }
  return {
    document: {
      '@context': document['@context'],
      ...verificationMethod,
    },
  };
};
export const documentLoader = async (iri) => {
  const context = await contextResolver(iri);
  if (context) {
    if (typeof context === 'object') {
      return {
        contextUrl: null,
        documentUrl: iri,
        document: context,
      };
    }
    return jsonld.documentLoader(iri);
  }
  const resolution = await documentResolver(iri);
  if (resolution) {
    if (resolution.resolver) {
      return resolution.document;
    }
    if (iri.startsWith(resolution?.documentUrl)) {
      const dereference = await documentDereferencer(resolution?.document, iri);
      if (dereference?.document) {
        return dereference;
      }
    }
  }
  throw new Error('Could not resolve iri: ' + iri);
};
