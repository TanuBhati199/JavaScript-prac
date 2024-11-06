const heading = React.createElement("h1", { className: "title", id: "heading" }, "Heading");
const heading1 = React.createElement("h2", { className: "title", id: "heading1" }, "my heading1");
const container = React.createElement("div", { id: "content" }, [heading, heading1]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);