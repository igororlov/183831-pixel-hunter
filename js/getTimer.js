const getTimer = (value) => {
  return {
    value,
    tick() {
      if (value <= 0) {
        return this;
      }
      return getTimer(value - 1);
    },
    reset() {
      return getTimer(30);
    },
    isFinished() {
      return value <= 0;
    }
  };
};

export default getTimer;
