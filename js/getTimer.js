const getTimer = (value) => {
  return {
    value,
    tick() {
      return getTimer(value - 1);
    },
    reset() {
      return getTimer(0);
    },
    isFinished() {
      return value <= 0;
    }
  };
};

export default getTimer;
