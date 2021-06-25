export const formatTimestamp = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("en-GB");
};
