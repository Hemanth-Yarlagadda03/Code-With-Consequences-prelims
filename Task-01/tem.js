// Define an array of team members with their details
const teamMembers = [
    { name: "Vasista", age: 18, Interest: "I am very keen to learn new things about Data science" },
    { name: "Jaidev", age: 18, Interest: "I am very much interested to perceive my goal towards AI" },
    { name: "Mahesh", age: 18, Interest: "I am very much interested in UX design" },
    { name: "Hemanth", age: 18, Interest: "I am very much interested in System design" },
  ];
  
  // Define variables to track the current team member and the HTML elements to update
  let currentMemberIndex = 0;
  const memberName = document.getElementById("member-name");
  const memberAge = document.getElementById("member-age");
  const memberInterest = document.getElementById("member-interest");
  const previousButton = document.getElementById("previous-button");
  const nextButton = document.getElementById("next-button");
  
  // Define a function to update the member details based on the current member index
  function updateMemberDetails() {
    const currentMember = teamMembers[currentMemberIndex];
    memberName.textContent = currentMember.name;
    memberAge.textContent = currentMember.age;
    memberInterest.textContent = currentMember.Interest;
  }
  
  // Add event listeners to the "previous" and "next" buttons to update the member details
  previousButton.addEventListener("click", function() {
    if (currentMemberIndex === 0) {
      currentMemberIndex = teamMembers.length - 1;
    } else {
      currentMemberIndex--;
    }
    updateMemberDetails();
  });
  
  nextButton.addEventListener("click", function() {
    if (currentMemberIndex === teamMembers.length - 1) {
      currentMemberIndex = 0;
    } else {
      currentMemberIndex++;
    }
    updateMemberDetails();
  });
  
  // Call the updateMemberDetails function to display the initial team member details
  updateMemberDetails();
  
  