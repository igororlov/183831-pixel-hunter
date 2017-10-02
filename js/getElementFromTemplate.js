export default (htmlString) => {
  const d = document.createElement(`div`);
  d.innerHTML = htmlString;
// return d.firstChild;
  return d.cloneNode(true);
};
