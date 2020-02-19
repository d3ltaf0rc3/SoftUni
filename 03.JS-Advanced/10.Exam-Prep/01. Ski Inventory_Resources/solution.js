function solve() {
    let nameInput = document.querySelectorAll("#add-new input")[0];
    let qtyInput = document.querySelectorAll("#add-new input")[1];
    let priceInput = document.querySelectorAll("#add-new input")[2];
    let addButton = document.getElementsByTagName("button")[1];
    let availableProductsList = document.querySelector("#products ul");  
    let filterInput = document.getElementById("filter");
    let filterButton = document.querySelector(".filter button");

    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        
        let li = document.createElement("li");
        let span = document.createElement("span");
        let strong = document.createElement("strong");
        let div = document.createElement("div");
        let divStrong = document.createElement("strong");
        let button = document.createElement("button");
        
        span.innerHTML = nameInput.value;
        li.appendChild(span);
        
        strong.innerHTML = `Available: ${qtyInput.value}`;
        li.appendChild(strong);
        
        divStrong.innerHTML = Number(priceInput.value).toFixed(2);
        div.appendChild(divStrong);
        
        button.innerHTML = "Add to Client's List";
        div.appendChild(button);
        
        li.appendChild(div);
        availableProductsList.appendChild(li);
    });

    filterButton.addEventListener("click", (e) => {
        e.preventDefault();
        let listArr = Array.from(availableProductsList.children);
        for (let i = 0; i < listArr.length; i++) {
            const element = listArr[i];
            let span = element.children[0];
            if (span.innerHTML.toLowerCase() !== filterInput.value.toLowerCase()) {
                element.style.display = "none";
            } else {
                element.style.display = "block";
            }
        }
    });
    let section = document.querySelector("#myProducts ul");
    let priceH1 = document.getElementsByTagName("h1")[1];
    availableProductsList.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.innerHTML === "Add to Client's List") {
            let li = e.target.parentNode.parentNode;
            let product = li.children[0].innerHTML;
            let price = li.children[2].children[0].innerHTML;
            let newLi = document.createElement("li");
            let strong = document.createElement("strong");
            section = document.querySelector("#myProducts ul");

            newLi.innerHTML = product;
            strong.innerHTML = price;

            newLi.appendChild(strong);
            section.appendChild(newLi);

            priceH1 = document.getElementsByTagName("h1")[1];
            let totalPrice = Number(priceH1.innerHTML.slice(13));
            totalPrice += Number(price);
            priceH1.innerHTML = `Total Price: ${totalPrice.toFixed(2)}`;

            let qty = li.children[1];
            let qtyNum = Number(qty.innerHTML.slice(11));
            if (qtyNum - 1 === 0) {
                li.remove();
            } else {
                qty.innerHTML = `Available: ${qtyNum - 1}`;
            }
        }
    });

    let buyButton = document.querySelector("#myProducts button");

    buyButton.addEventListener("click", () => {
        let sectionArr = Array.from(section.children);
        for (let i = 0; i < sectionArr.length;i++) {
            const element = sectionArr[i];
            element.remove();
        }
        priceH1.innerHTML = `Total Price: 0.00`;
    });
}