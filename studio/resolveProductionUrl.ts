const resolveProductionUrl = (document) => `http://localhost:3000/preview/${document.slug.current}`;

export default resolveProductionUrl;
