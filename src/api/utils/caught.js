export const caught = async (res, err = null) => {
  return await res.json({
    status: 400,
    message: err ? err.message : "Something went wrong",
  });
};
