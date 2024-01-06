export default defineNuxtRouteMiddleware(async (_to, _from) => {
  if (process.client) {
    return;
  }
  /*
    There should be a Pinia Store to save and use the data on different pages of the project,
    but I'd like to keep the example as simple as possible. You get the point
  */
  await useFetch("/api/me", { retry: 0 });
});
