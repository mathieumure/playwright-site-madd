const apiHandler = defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  return {
    hasValidToken: query.token === config.SECRET_PASSWORD,
  };
});

export default apiHandler;
