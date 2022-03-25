class Bicycle {
  constructor(name, type, color) {
    this. name = name;
    this. type = type;
    this.color = color;

  }
  
 }
 const data = [
  ["Name","Type","Color"],
  ["speda", "Bmx", "grey"],
  ["speedaa", "Touring", "silver"],
  ["peda", "mont", "black"]
];

function tableCreate(data){
    let body = document.body,
        tbl  = document.createElement('table');
        tbl.width = "100px";
        tbl.border = "2";
      
    for(let i = 0; i < data.length; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < data[i].length; j++){
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(data[i][j]));
                td.border = "2";
                  
          }
    }
    body.appendChild(tbl);
}
  tableCreate(data);
