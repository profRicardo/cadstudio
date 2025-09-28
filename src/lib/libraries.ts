// Get base URL with fallback
const getBaseUrl = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
};

export const libraries = [
  {
    // https://github.com/openscad/MCAD
    name: 'MCAD',
    description: 'A library for OpenSCAD that includes a number of utilities.',
    url: `${getBaseUrl()}libraries/MCAD.zip`,
  },
  {
    // https://github.com/BelfrySCAD/BOSL2/
    name: 'BOSL2',
    description: 'A library for OpenSCAD that includes a number of utilities.',
    url: `${getBaseUrl()}libraries/BOSL2.zip`,
  },
  {
    // https://github.com/revarbat/BOSL
    name: 'BOSL',
    description: 'A library for OpenSCAD that includes a number of utilities.',
    url: `${getBaseUrl()}libraries/BOSL.zip`,
  },
];
