/* eslint-disable import/no-default-export */
import preval from 'next-plugin-preval';
import { sanity } from './sanity';

const getSiteGlobalConfig = async () => {
  const [config] = await sanity.getAll('site-config');

  if (!config?.frontpage) throw new Error('yikes! no front page in global config');

  const frontpage = await sanity.expand(config.frontpage);

  return { ...frontpage, config };
};

export default preval(getSiteGlobalConfig());
