export const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("en-GB");
};

export const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString("en-GB");
};
