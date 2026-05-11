export const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  rowGap: "15px",
columnGap: "15px",

};

export const pageLayout = {
  marginLeft: window.innerWidth > 768 ? "260px" : "0px",
  padding: "20px",
  color: "#111827",
  background: "#f5f7fb",
  minHeight: "100vh",
};

export const mobileLayoutFix = `
@media (max-width: 768px) {
  .page {
    margin-left: 0;
  }
}
`;