const listUser = [];
const listUserInput = ["fullName", "email", "phoneNumber", "age", "gender" ,"hobbies"];
const data = {};
document.getElementById("submit").addEventListener("click", event => {
event.preventDefault();
listUserInput.forEach(id => {
    data[id] = document.getElementById(id).value;
});
listUser.push({...data});
document.getElementById("form--user").reset();
print();
console.log(listUser);
});

function print() {
    list__UserPrint.innerHTML="";
    listUser.map(user => {
        const userItem = document.createElement("tr");
        userItem.classList.add("user--item");
        userItem.innerHTML = `
        <td>${user.fullName}</td>
        <td>${user.email}</td>
        <td>${user.phoneNumber}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
        <td>${user.hobbies}</td>
        `
        document.getElementById("list__UserPrint").appendChild(userItem);
    });
}