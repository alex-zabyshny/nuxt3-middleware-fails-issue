export default defineEventHandler(async (_event) => {
  console.log("Endpoint called");

  throw createError({
    statusMessage: "Test Error",
  });

  return { name: "John Doe" };
});
