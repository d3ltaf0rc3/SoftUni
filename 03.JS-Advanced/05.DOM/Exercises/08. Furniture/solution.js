function solve() {
    let generate = document.getElementsByTagName("button")[0];
    let buy = document.getElementsByTagName("button")[1];
    let inputArea = document.getElementsByTagName("textarea")[0];
    let outputArea = document.getElementsByTagName("textarea")[1];

    generate.addEventListener("click", () => {
        let input = JSON.parse(inputArea.value);
        let tbody = document.getElementsByTagName("tbody")[0];
        
        input.forEach(element => {
            let tr = document.createElement("tr");
            
            let firstTd = document.createElement("td");
            let img = document.createElement("img");
            img.setAttribute("src", element.img);
            firstTd.appendChild(img);
            tr.appendChild(firstTd);
            
            let secondTd = document.createElement("td");
            let name = document.createElement("p");
            name.textContent = element.name;
            secondTd.appendChild(name);
            tr.appendChild(secondTd);
            
            let thirdTd = document.createElement("td");
            let price = document.createElement("p");
            price.textContent = element.price;
            thirdTd.appendChild(price);
            tr.appendChild(thirdTd);
            
            let fourthTd = document.createElement("td");
            let decFactor = document.createElement("p");
            decFactor.textContent = element.decFactor;
            fourthTd.appendChild(decFactor);
            tr.appendChild(fourthTd);
            
            let fifthTd = document.createElement("td");
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            fifthTd.appendChild(checkbox);
            tr.appendChild(fifthTd);
            
            tbody.appendChild(tr);
        });
    });

    buy.addEventListener("click", () => {
        let checked = Array.from(document.getElementsByTagName("input")).filter(element => element.checked === true);
        const info = {
            "furniture":[],
            "totalPrice":0,
            "avrgDecFactor":0
        };
        
        checked.forEach(element => {
            let tr = element.parentNode.parentNode;
            let type = tr.children[1].children[0].textContent;
            let price = tr.children[2].children[0].textContent;
            let decFactor = tr.children[3].children[0].textContent;
            
            info.furniture.push(type);
            info.totalPrice += Number(price);
            info.avrgDecFactor += Number(decFactor);
        });

        let avrgDecFactor = info.avrgDecFactor / info.furniture.length;

        outputArea.value = `Bought furniture: ${info.furniture.join(", ")}\nTotal price: ${info.totalPrice.toFixed(2)}\nAverage decoration factor: ${avrgDecFactor}`;
    });
}