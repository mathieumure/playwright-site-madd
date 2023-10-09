const apiHandler = defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  console.log({ c: config.SECRET_PASSWORD, q: query.token });
  return {
    hasValidToken: query.token === config.SECRET_PASSWORD,
  };
});

export default apiHandler;
