const heading1 = React.createElement("h1", { className: "title", id: "heading1" }, "Heading1");
const heading2 = React.createElement("h2", { className: "title", id: "heading2" }, "Heading2");
const container = React.createElement("div", { id: "content" }, [heading, heading1]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);