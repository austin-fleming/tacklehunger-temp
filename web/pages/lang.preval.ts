import preval from 'next-plugin-preval';
import { sanity } from '../config/sanity';

const getLang = async () => {
  const langData = sanity.query('*[_id == "global-config"] {lang}.lang[0]');
  console.log(langData);
  return langData;
};

export default preval(getLang());
