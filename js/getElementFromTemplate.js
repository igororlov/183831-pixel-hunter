export default (htmlString) => {
  const d = document.createElement(`div`);
  d.innerHTML = htmlString;
  return d.cloneNode(true);
};
