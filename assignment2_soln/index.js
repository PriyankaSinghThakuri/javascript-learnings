fetch("convertcsv.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (datas) {
    let placeholder = document.querySelector("#myTable");
    let out = "";
    for (let data of datas) {
      out += `
         <tr>
            <td>${data.Requestid}</td>
            <td>${data.Pickuppoint}</td>
            <td>${data.Driverid}</td>
            <td>${data.Status}</td>
            <td>${data.Requesttimestamp}</td>
            <td>${data.Droptimestamp}</td>
         </tr>
      `;
    }

    placeholder.innerHTML = out;
  });

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterbystatus() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("Input");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

