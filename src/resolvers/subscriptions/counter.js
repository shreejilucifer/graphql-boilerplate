const counter = async (parent, args, { pubsub }, info) => {
  const channel = Math.random()
    .toString(36)
    .substring(2, 15);
  let count = 0;
  setInterval(
    () => pubsub.publish(channel, { counter: { count: count++ } }),
    5000
  );
  return pubsub.asyncIterator(channel);
};

module.exports = counter;
