let getData = document.querySelector("#get-data");

getData.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fakestoreapi.com/products", true);

  //   xhr.onreadystatechange=function(){
  //     console.log("");

  //   }
  xhr.onload = function () {
    if (this.status === 200) {
      let objData = JSON.parse(this.responseText);

      //   console.log(objData);

      let tableData = document.querySelector("#table-data");
      data = `
        <thead class="table-dark">
            <tr>

              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
        `;
      for (let value in objData) {
        data += `<tr>
        <td>${objData[value].title}</td>
        <td>${objData[value].price}</td>
        <td><img src='${objData[value].image}'></td>
        </tr>`;
      }
      tableData.innerHTML = data;
    }
  };
  xhr.send();
});
