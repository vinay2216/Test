 $(document).ready(function() {
     $('#orderbook').click(function() {

         var customer = $('#customer').val();
         var bookname = $('#bookname').val();
         var quantity = $('#quantity').val();

         if (customer != '' && bookname != '' && quantity != '') {
             var orderdata = {
                 customer: customer,
                 bookname: bookname,
                 quantity: quantity
             };

             console.log(orderdata)
             $.ajax({
                 type: "POST",
                 url: "http://localhost:8080/Maventraining/BookController",
                 data: orderdata,
                 success: function(response) {
                     alert();
                     $('#customer').val('');
                     $('#bookname').val('');
                     $('#quantity').val('');
                     $("#success").html("order placed successfully");
                     $("#error").css("display", "none");

                 },
                 error: function(response) {
                     console.log('fail' + response)
                     console.log(response)
                 }
             });

         } else {
             $("#error").html("please fill all fields");

         }

     });




     $('#total_orders').click(function() {

         $.ajax({
             type: "GET",
             url: "http://localhost:8080/Maventraining/BookController",
             data: {},
             success: function(response) {
                 display_data(response);
             },
             error: function(response) {
                 console.log('fail' + response)
                 console.log(response)
             }
         });

         function display_data(output) {
             var out = JSON.parse(output);
             console.log(out);
             console.log(out.length);
             var col = [];
             for (var i = 0; i < out.length; i++) {
                 for (var key in out[i]) {
                     if (col.indexOf(key) === -1) {
                         col.push(key);
                     }
                 }
             }

             var table = document.createElement("table");
             table.setAttribute("class", "table table-striped table-bordered")
             table.setAttribute("id", "example")
             var tr = table.insertRow(-1);

             for (var i = 0; i < col.length; i++) {
                 var th = document.createElement("th");
                 th.innerHTML = col[i];
                 tr.appendChild(th);
             }

             for (var i = 0; i < out.length; i++) {

                 tr = table.insertRow(-1);

                 for (var j = 0; j < col.length; j++) {
                     var tabCell = tr.insertCell(-1);
                     tabCell.innerHTML = out[i][col[j]];
                 }
             }


             var divContainer = document.getElementById("showData");
             divContainer.innerHTML = "";
             divContainer.appendChild(table);




         }

     });

     $('#availble_books').click(function() {

         $.ajax({
             type: "GET",
             url: "http://localhost:8080/Maventraining/AvailiableBookController",
             data: {},
             success: function(response) {
                 display_data(response);
             },
             error: function(response) {
                 console.log('fail' + response)
                 console.log(response)
             }
         });

         function display_data(output) {
             var out = JSON.parse(output);
             console.log(out);
             console.log(out.length);
             var col = [];
             for (var i = 0; i < out.length; i++) {
                 for (var key in out[i]) {
                     if (col.indexOf(key) === -1) {
                         col.push(key);
                     }
                 }
             }

             var table = document.createElement("table");
             table.setAttribute("class", "table table-striped table-bordered")
             table.setAttribute("id", "example")
             var tr = table.insertRow(-1);

             for (var i = 0; i < col.length - 1; i++) {
                 var th = document.createElement("th");
                 th.innerHTML = col[i];
                 tr.appendChild(th);
             }

             for (var i = 0; i < out.length; i++) {

                 tr = table.insertRow(-1);

                 for (var j = 0; j < col.length - 1; j++) {
                     var tabCell = tr.insertCell(-1);
                     console.log(out[i][col[4]])
                     tabCell.innerHTML = out[i][col[j]];
                     if (j == 4)
                         if (out[i][col[j]] > 100) {
                             tabCell.style.backgroundColor = "#4CAF50";
                             tabCell.style.color = "white";
                         }
                     else if (out[i][col[j]] > 50) {
                         tabCell.style.backgroundColor = "#da9a39";
                         tabCell.style.color = "white";
                         1
                     } else {
                         tabCell.style.backgroundColor = "#da5039";
                         tabCell.style.color = "white";
                     }
                 }
             }
             var divContainer = document.getElementById("showData1");
             divContainer.innerHTML = "";
             divContainer.appendChild(table);
         }

     });



     $('#order_book').click(function() {

         $.ajax({
             type: "GET",
             url: "http://localhost:8080/Maventraining/AvailiableBookController",
             data: {},
             success: function(response) {
                 display_data(response);
             },
             error: function(response) {
                 console.log('fail' + response)
                 console.log(response)
             }
         });


         function display_data(output) {
             var out = JSON.parse(output);
             var col = [];
             for (var i = 0; i < out.length; i++) {
                 for (var key in out[i]) {
                     if (col.indexOf(key) === -1) {
                         col.push(key);
                     }
                 }
             }

             var table = document.createElement("table");
             table.setAttribute("class", "table table-striped table-bordered")
             table.setAttribute("id", "example")
             var tr = table.insertRow(-1);

             for (var i = 0; i < col.length; i++) {
                 var th = document.createElement("th");
                 th.innerHTML = col[i];
                 tr.appendChild(th);
             }
             var books = [];

             for (var i = 0; i < out.length; i++) {

                 tr = table.insertRow(-1);

                 for (var j = 0; j < col.length; j++) {
                     var tabCell = tr.insertCell(-1);
                     1
                     tabCell.innerHTML = out[i][col[j]];
                     if (j == 1)
                         books.push(out[i][col[j]]);
                 }
             }
             console.log(books + "------------")
             var datajs = JSON.stringify(books);

             console.log(books[0] + "------------")
             var i = 0;
             var output = [];

             $.each(books, function(i, value) {
                 output.push('<option value="' + books[i] + '">' + books[i] + '</option>');
                 i++;
             });

             $('#bookname').html(output.join(''));

         }

     });




     $(document).ready(function() {

         $.ajax({
             type: "GET",
             url: "http://localhost:8080/Maventraining/AvailiableBookController",
             data: {},
             success: function(response) {
                 display_data(response);
             },
             error: function(response) {
                 console.log('fail' + response)
                 console.log(response)
             }
         });


         function display_data(output) {
             var out = JSON.parse(output);
             var col = [];
             for (var i = 0; i < out.length; i++) {
                 for (var key in out[i]) {
                     if (col.indexOf(key) === -1) {
                         col.push(key);
                     }
                 }
             }

             var table = document.createElement("table");
             table.setAttribute("class", "table table-striped table-bordered")
             table.setAttribute("id", "example")
             var tr = table.insertRow(-1);

             for (var i = 0; i < col.length; i++) {
                 var th = document.createElement("th");
                 th.innerHTML = col[i];
                 tr.appendChild(th);
             }
             var books = [];
             var links = [];
             var author = [];
             var price = [];


             for (var i = 0; i < out.length; i++) {

                 tr = table.insertRow(-1);

                 for (var j = 0; j < col.length; j++) {
                     var tabCell = tr.insertCell(-1);
                     
                     tabCell.innerHTML = out[i][col[j]];
                     if (j == 1)
                         books.push(out[i][col[j]]);
                     if (j == 2)
                         author.push(out[i][col[j]]);
                     if (j == 3)
                         price.push(out[i][col[j]]);
                     if (j == 5)
                         links.push(out[i][col[j]]);
                 }
             }
             console.log(books + "------------")
             var datajs = JSON.stringify(books);

             console.log(books[0] + "------------")
             var i = 0;
             var output = [];

             $.each(books, function(i, value) {
                 output.push('<div class="col-sm-3"><div class="thumbnail"><img src="' + links[i] + '" alt="Paris" width="400" height="350"><h3>' + books[i] + '</h3><p><span class="write">Written By:</span>' + author[i] + '</p><p><span class="write">Price:</span>' + price[i] + '</p></div></div>');
                 i++;
             });


             $('#display_book').html(output.join(''));

         }

     });


     $('#disable').click(function() {
         1
         alert("book")


         //	var a_name = $('#a_name').val();
         var b_name = $('#b_name').val();
         ///	alert(b_name)
         var jsondata = null;
         //	if(a_name == ''){
         jsondata = {
             b_name: b_name
         }
         //}else{1
         //	jsondata = {b_name:a_name}
         //}
         alert(jsondata)
         console.log(jsondata)

         $.ajax({
             type: "GET",
             url: "http://localhost:8080/Maventraining/SearchBookController",
             data: jsondata,
             success: function(response) {
                 console.log(response)
                 display_data(response);
             },
             error: function(response) {
                 console.log('fail' + response)
                 console.log(response)
             }
         });

         function display_data(output) {
             var out = JSON.parse(output);
             console.log(out);
             console.log(out.length);
             var col = [];
             for (var i = 0; i < out.length; i++) {
                 for (var key in out[i]) {
                     if (col.indexOf(key) === -1) {
                         col.push(key);
                     }
                 }
             }

             var table = document.createElement("table");
             table.setAttribute("class", "table table-striped table-bordered")
             table.setAttribute("id", "example")
             var tr = table.insertRow(-1);

             for (var i = 0; i < col.length; i++) {
                 var th = document.createElement("th");
                 th.innerHTML = col[i];
                 tr.appendChild(th);
             }

             for (var i = 0; i < out.length; i++) {

                 tr = table.insertRow(-1);

                 for (var j = 0; j < col.length; j++) {
                     var tabCell = tr.insertCell(-1);
                     tabCell.innerHTML = out[i][col[j]];
                     if (j == 4)
                         if (out[i][col[j]] > 100) {
                             tabCell.style.backgroundColor = "#4CAF50";
                             tabCell.style.color = "white";
                         }
                     else if (out[i][col[j]] > 50) {
                         tabCell.style.backgroundColor = "#da9a39";
                         tabCell.style.color = "white";
                     } else {
                         tabCell.style.backgroundColor = "#da5039";
                         tabCell.style.color = "white";
                     }
                 }
             }
             var divContainer = document.getElementById("showData2");
             divContainer.innerHTML = "";
             divContainer.appendChild(table);
         }

     });


     $('#disable1').click(function() {
         alert("author")
         //	var a_name = $('#a_name').val();
         var a_name = $('#a_name').val();
         ///	alert(b_name)
         var jsondata = null;
         //	if(a_name == ''){
         jsondata = {
             a_name: a_name
         }
         //}else{
         //	jsondata = {b_name:a_name}
         //}
         alert(jsondata)
         console.log(jsondata)

         $.ajax({
             type: "GET",
             url: "http://localhost:8080/Maventraining/SearchAuthorController",
             data: jsondata,
             success: function(response) {
                 console.log(response + "-----")
                 display_data(response);
             },
             error: function(response) {
                 console.log('fail' + response)
                 console.log(response)
             }
         });

         function display_data(output) {
             var out = JSON.parse(output);
             console.log(out);
             console.log(out.length);
             var col = [];
             for (var i = 0; i < out.length; i++) {
                 for (var key in out[i]) {
                     if (col.indexOf(key) === -1) {
                         col.push(key);
                     }
                 }
             }

             var table = document.createElement("table");
             table.setAttribute("class", "table table-striped table-bordered")
             table.setAttribute("id", "example")
             var tr = table.insertRow(-1);

             for (var i = 0; i < col.length; i++) {
                 var th = document.createElement("th");
                 th.innerHTML = col[i];
                 tr.appendChild(th);
             }

             for (var i = 0; i < out.length; i++) {

                 tr = table.insertRow(-1);

                 for (var j = 0; j < col.length; j++) {
                     var tabCell = tr.insertCell(-1);
                     tabCell.innerHTML = out[i][col[j]];
                     if (j == 4)
                         if (out[i][col[j]] > 100) {
                             tabCell.style.backgroundColor = "#4CAF50";
                             tabCell.style.color = "white";
                         }
                     else if (out[i][col[j]] > 50) {
                         tabCell.style.backgroundColor = "#da9a39";
                         tabCell.style.color = "white";
                     } else {
                         tabCell.style.backgroundColor = "#da5039";
                         tabCell.style.color = "white";
                     }
                 }
             }
             var divContainer = document.getElementById("showData2");
             divContainer.innerHTML = "";
             divContainer.appendChild(table);
         }

     });
 });