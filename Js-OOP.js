class Bicycle {
  constructor({ columns, data }) {
    this.columns = columns;
    this.data = data;
  }

  render(element) {
    const headString = this.renderColumns();
    const bodyString = this.renderData();
    console.log(headString);
    console.log(bodyString);
    element.innerHTML = `<table class="table">${headString}${bodyString}</table>`;
  }
  renderColumns() {
    let head = "<thead><tr>";
    for (let i = 0; i < this.columns.length; i++) {
      const element = this.columns[i];
      head += `<th scope="col">${element}</th>`;
    }
    head += "</tr></thead>";
    console.log(head);
    return head;
  }

  renderData() {
    let body = "<tbody>";
    for (let j = 0; j < this.data.length; j++) {
      body += "<tr>";
      for (let k = 0; k < this.data[j].length; k++) {
        const element = this.data[j][k];
        body += `<td scope="row">${element}</td>`;
      }
      body += "</tr>";
    }
    body += "</tbody>";
    return body;
  }
}
new Bicycle({
  columns: ["Type", "Color"],
  data: [
    ["Bmx", "grey"],
    ["Touring", "silver"],
    ["Connect", "black"],
  ],
}).render(document.getElementById("tabledata"));
