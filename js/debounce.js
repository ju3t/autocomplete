function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, args);
  };
}

export default debounce;
