export default (type) => {
  return (payload, error, meta) => {
    return {
      type,
      payload,
      error,
      meta
    };
  };
};