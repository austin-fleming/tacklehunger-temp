import preval from 'next-plugin-preval';
import { sanity } from '../config/sanity';

const getSiteGlobalConfig = async () => (await sanity.getAll('site-config'))[0];

export default preval(getSiteGlobalConfig());
