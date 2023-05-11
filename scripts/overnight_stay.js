"use strict";


  const checkinRateButton = document.getElementById("checkinRate");
  checkinRateButton.addEventListener("click", calculateRate);

  function calculateRate() {
    const queenRoom = document.getElementById("queenRoom");
    const kingRoom = document.getElementById("kingRoom");
    const twoBed = document.getElementById("twoBed");
    const adultNum = document.getElementById("adultNum").value;
    const childrenNum = document.getElementById("childrenNum").value;
    const visitNights = document.getElementById("visitNights").value;
    const discount = getDiscount();

    let roomType = "";
    let roomPrice = 0;
    let maxGuests = 0;

    if (queenRoom.checked) {
      roomType = "Queen";
      roomPrice = 100;
      maxGuests = 5;
    } else if (kingRoom.checked) {
      roomType = "King";
      roomPrice = 150;
      maxGuests = 2;
    } else if (twoBed.checked) {
      roomType = "2-Bedroom";
      roomPrice = 200;
      maxGuests = 6;
    }

    if (adultNum === "" || childrenNum === "" || visitNights === "" || !queenRoom.checked && !kingRoom.checked && !twoBed.checked) {
      alert("Please fill out all fields.");
    } else if (parseInt(adultNum) + parseInt(childrenNum) > maxGuests) {
      alert(`The selected room type can only accommodate up to ${maxGuests} guests.`);
    } else {
      const subtotal = (roomPrice * visitNights) * (parseInt(adultNum) + parseInt(childrenNum));
      const total = subtotal - (subtotal * discount);

      const fullName = document.getElementById("FullNameInput").value;
      const email = document.getElementById("emailInput").value;
      const checkinDate = document.getElementById("checkinDate").value;

      const confirmationMessage = `Thank you, ${fullName}! Your booking starting on ${checkinDate} for ${visitNights} nights in a ${roomType} room with ${adultNum} adults and ${childrenNum} children has been confirmed. The total cost for your stay is $${total.toFixed(2)}. We have sent a confirmation email to ${email}.`;

      alert(confirmationMessage);
    }
  }

  function getDiscount() {
    let discount = 0;

    if (document.getElementById("aaaDiscount").checked) {
      discount = 0.1;
    } else if (document.getElementById("vetDiscount").checked) {
      discount = 0.2;
    }

    return discount;
  }



