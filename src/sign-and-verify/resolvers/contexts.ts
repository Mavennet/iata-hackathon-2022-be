import { contexts } from '../contexts.js';

export const contextResolver = async (iri) => {
  if (contexts[iri]) {
    return contexts[iri];
  }
  return undefined;
};
