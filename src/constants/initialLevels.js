import SWIMTERMS from './swimTerms.js';

const INITIALLEVELS = SWIMTERMS.map(term => ({
  key: term.key,
  name: term.name,
  level: '-'
}));

export default INITIALLEVELS;