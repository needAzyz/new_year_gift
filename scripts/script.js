function showLocationAndIPDetails() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  if (true) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch("http://ip-api.com/json/")
            .then((response) => response.json())
            .then((data) => {
              const details = `ur country: ${data.country}`;
              const combinedInfo = `ur location:\n${details} \n5tot tol: ${latitude}\n5tot 3orth: ${longitude}\nIP address: ${data.query}\nu got hacked\nso next time accept ma gift okeh?`;
              alert(combinedInfo);
            })
            .catch((error) => {
              console.error("fetching IP address:", error);
              alert("is this ur IP address?  196.237.117.245\nu got hacked\n i knoz where u live \n so next time accept ma gift okeh?");
            });
        },
        (error) => {
          console.error("error getting ur location:", error);
          alert("open ur location dont worry am not hacking u");
        }
      );
    } else {
      alert("change ur browser to not safe browser.");
    }
  } else {
    alert("wait for the first of january");
  }
}
document
  .getElementById("showLocationAndIPButton")
  .addEventListener("click", showLocationAndIPDetails);
function gift() {
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth();
  day = date.getDate();
  if (true) {
    window.location.href = "views/giftpage.html";
  } else {
    alert("wait for the first of january");
  }
}
