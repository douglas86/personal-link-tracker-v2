export const then = async (res, message) => {
  await res.json({ status: 200, message });
};
