'use strict';


    // Increment "Years of Experience" up to target
    function incrementYearsOfExperience() {
      let start = 0;
      const target = 8;
      const interval = setInterval(() => {
        start += 1;
        document.getElementById('years-stats').innerHTML = `${start}`;
        
        // Stop counter when target is reached
        if (start >= target) {
          clearInterval(interval);
        }
      }, 700);
    }

    // Increment "Electric Cars Built" up to target
    function incrementYearsOfElectricCars() {
      let start = 0;
      const target = 4;
      const interval = setInterval(() => {
        start += 1;
        document.getElementById('cars-stats').innerHTML = `${start}`;
        
        if (start >= target) {
          clearInterval(interval);
        }
      }, 700);
    }

    // Increment "Departments" up to target
    function incrementYearsOfDepartments() {
      let start = 0;
      const target = 10;
      const interval = setInterval(() => {
        start += 1;
        document.getElementById('departments-stats').innerHTML = `${start}`;
        
        if (start >= target) {
          clearInterval(interval);
        }
      }, 700);
    }

    // Increment "Skilled Members" up to target
    function incrementYearsOfSkilledMembers() {
      let start = 0;
      const target = 71;
      const interval = setInterval(() => {
        start += 1;
        document.getElementById('members-stats').innerHTML = `${start}`;
        
        if (start >= target) {
          clearInterval(interval);
        }
      }, 500);
    }

    // Run all counters on page load
    window.onload = function() {
      incrementYearsOfExperience();
      incrementYearsOfElectricCars();
      incrementYearsOfDepartments();
      incrementYearsOfSkilledMembers();
    };

