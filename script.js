let getData = document.getElementById("getData");
// console.log(getData);
getData.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://fakestoreapi.com/products', true); //true because you want it to perform anyone that is ready but false means that it must carryout the first one first

    // xhr.onprogress= function(){  //this function will work without the xhr.send()
    //     console.log("I am progressing");
    // }
    xhr.onreadystatechange = function () {
        console.log("Ready state is " + xhr.readyState);
    }
    xhr.onload = function () {
        if (this.status === 200) {
            let objData = JSON.parse(this.responseText);    //this will hold info for source fakestoreapoi
            console.log(objData);  //JSON.parse() convert it to object (array form)
            let table = document.getElementById("tableData");

            // putting the data in a table form
            data = [];
            for (value in objData) {
                data += ` <tbody>
                    <tr>
                        <th>${objData[value].id}</th>
                        <th>${objData[value].title}</th>
                        <th>$ ${objData[value].price}</th>
                        <th><img src="${objData[value].image}"></th>
                    </tr>
                <tbody>`
            }
            table.innerHTML=data;
        } else {
            console.log("Page was not found");
        }
    }
    xhr.send();
})