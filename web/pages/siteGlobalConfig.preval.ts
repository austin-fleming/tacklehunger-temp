import preval from 'next-plugin-preval';

async function getData() {
  return { hello: 'world' };
}

export default preval(getData());
