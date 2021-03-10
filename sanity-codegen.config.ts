/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  outputPath: './web/types/generated/schema.ts',
  schemaPath: './studio/schema',
};

export default config;
