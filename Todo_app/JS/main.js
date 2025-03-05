const listUser=[];
const listUserInput=["title", "starDate", "endDate", "jobType"];
const data = {};
document.getElementById("form--User").addEventListener("submit", (event) => {
    event.preventDefault();
    listUserInput.forEach(id => {
        data[id]=document.getElementById(id).value;
    });

    listUser.push({ ...data });
    document.getElementById("form--User").reset();
    print();
});

function print() {
    listUserPrint.innerHTML = "";
    listUser.map(user => {
        const userItem = document.createElement("tr")
        userItem.classList.add('user--item')
        userItem.innerHTML = `
        <td>${user.title}</td>
        <td>${user.starDate}</td>
        <td>${user.endDate}</td>
        <td>${user.jobType}</td>
        `
        document.getElementById("listUserPrint").appendChild(userItem)
    })
}