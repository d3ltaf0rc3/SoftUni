let table = document.getElementsByTagName("tbody")[0];
let loadButton = document.getElementById("loadStudents");
let submitButton = document.getElementById("submit");
let studentId = 1;
const url = "https://softuni-fa501.firebaseio.com/students.json";

loadButton.addEventListener("click", () => {
    table.innerHTML = "";
    studentId = 1;
    
    //remove error message
    if (document.getElementById("error")) {
        document.getElementById("error").remove();
    }
    
    fetch(url)
        .then(res => {
            if (res.status < 400) {
                return res.json();
            } else {
                throw new Error(`${res.status} - ${res.statusText}`);
            }
        })
        .then(data => {
            for (const fbId in data) {
                createTr(data[fbId]);
            }
        })
        .catch(err => {
            console.error(err);
        });
});

//students load with page
loadButton.click();

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let firstName = document.getElementById("firstName");
    let secondName = document.getElementById("secondName");
    let facultyNum = document.getElementById("facultyNumber");
    let grade = document.getElementById("grade");

    if (!firstName.value || !secondName.value || !facultyNum.value || !grade.value) {
        let h1 = document.createElement("h1");
        h1.setAttribute("id", "error");
        h1.style.color = "red";
        h1.textContent = "Cannot submit empty field!";
        document.body.appendChild(h1);
    } else {
        fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName.value,
                secondName: secondName.value,
                facultyNumber: facultyNum.value,
                grade: grade.value,
                id: studentId
            })
        })
            .then(() => loadButton.click())
            .catch(err => console.error(err));
    }

    firstName.value = "";
    secondName.value = "";
    facultyNum.value = "";
    grade.value = "";
});

function createTr(data) {
    let tr = document.createElement("tr");

    let id = document.createElement("td");
    id.textContent = studentId;
    tr.appendChild(id);
    studentId++;

    let firstName = document.createElement("td");
    firstName.textContent = data.firstName;
    tr.appendChild(firstName);

    let secondName = document.createElement("td");
    secondName.textContent = data.secondName;
    tr.appendChild(secondName);

    let facultyNum = document.createElement("td");
    facultyNum.textContent = data.facultyNumber;
    tr.appendChild(facultyNum);

    let grade = document.createElement("td");
    grade.textContent = Number(data.grade).toFixed(2);
    tr.appendChild(grade);
    table.appendChild(tr);
}