const showSpinner = () => {
  document.querySelector('.spinner').style.display = 'block';
};
const hideSpinner = () => {
  document.querySelector('.spinner').style.display = 'none';
};

const displayUser = (user) => {
  const userDisplay = document.getElementById('user');
  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'pink';
  } else {
    document.body.style.backgroundColor = 'lightblue';
  }
  userDisplay.innerHTML = `<div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${user.picture.large}"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span> ${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>
  </div>`;
};
const fetchUser = () => {
  showSpinner();
  const url = 'https://randomuser.me/api';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      hideSpinner();
      displayUser(data.results[0]);
    });
};

document.getElementById('generate').addEventListener('click', fetchUser);
fetchUser();
