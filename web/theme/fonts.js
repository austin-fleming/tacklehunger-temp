const fontsBaseUrl = '/fonts';

export const RedHatDisplayRegular = {
  fontFamily: 'RedHatDisplay',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('RedHatDisplay-Regular'),
    local('RedHatDisplay'),
    local('Red Hat Display'),
    local('Red Hat Display Regular'),
    url('${fontsBaseUrl}/RedHatDisplay-Regular.ttf') format('truetype')`,
};

export const RedHatDisplayMedium = {
  fontFamily: 'RedHatDisplay',
  fontStyle: 'normal',
  fontWeight: 500,
  src: `
    local('RedHatDisplay-Medium'),
    local('RedHatDisplay'),
    local('Red Hat Display'),
    local('Red Hat Display Medium'),
    url('${fontsBaseUrl}/RedHatDisplay-Medium.ttf') format('truetype')`,
};

export const RedHatDisplayBold = {
  fontFamily: 'RedHatDisplay',
  fontStyle: 'normal',
  fontWeight: 'bold',
  src: `
    local('RedHatDisplay-Bold'),
    local('RedHatDisplay'),
    local('Red Hat Display'),
    local('Red Hat Display Bold'),
    url('${fontsBaseUrl}/RedHatDisplay-Bold.ttf') format('truetype')`,
};
