'use strict';
    /* -------------- STATISTICS SECTION  ----------------- */
    function incrementYearsOfExperience() {
      let start = 0;
      const target = 6;
      const interval = setInterval(() => {
        start += 1;
        document.getElementById('years-stats').innerHTML = `${start}`;
        
        if (start >= target) {
          clearInterval(interval);
        }
      }, 280);
    }

    function incrementYearsOfElectricCars() {
      let start = 0;
      const target = 4;
      const interval = setInterval(() => {
        start += 1;
        document.getElementById('cars-stats').innerHTML = `${start}`;
        
        if (start >= target) {
          clearInterval(interval);
        }
      }, 280);
    }

    function incrementYearsOfDepartments() {
      let start = 0;
      const target = 13;
      const interval = setInterval(() => {
        start += 1;
        document.getElementById('departments-stats').innerHTML = `${start}`;
        
        if (start >= target) {
          clearInterval(interval);
        }
      }, 280);
    }

    function incrementYearsOfSkilledMembers() {
      let start = 0;
      const target = 71;
      const interval = setInterval(() => {
        start += 1;
        document.getElementById('members-stats').innerHTML = `${start}`;
        
        if (start >= target) {
          clearInterval(interval);
        }
      }, 50);
    }

    window.onload = function() {
      incrementYearsOfExperience();
      incrementYearsOfElectricCars();
      incrementYearsOfDepartments();
      incrementYearsOfSkilledMembers();
    };

    const video = document.getElementById("background-vid")
    const muteToggle = document.getElementById("mute-toggle")


    muteToggle.addEventListener('click', ()=>{
      if(video.muted){
        video.muted=false;
        muteToggle.innerText='🔇'
      }
      else{
        video.muted=true;
        muteToggle.innerText='🔊'
      }
    })
    