function handleTicketChange(ticket, isIncrease) {
            const ticketCount = getInputValue(ticket);
            let ticketNewCount = ticketCount;
            if (isIncrease == true) {
                ticketNewCount = ticketCount + 1;
            }
            if (isIncrease == false && ticketCount > 0) {
                ticketNewCount = ticketCount - 1;
            }
            document.getElementById(ticket + '-count').value = ticketNewCount;
            let ticketTotal = 0;
            if (ticket == 'firstClass') {
                ticketTotal = ticketNewCount * 150;
            }
            if (ticket == 'economy') {
                ticketTotal = ticketNewCount * 100;
            }
            calculateTotal();
        }

        // Total ticket price calculation 
        function calculateTotal() {
            const firstClassCount = getInputValue('firstClass');
            const economyCount = getInputValue('economy');

            const totalAmount = firstClassCount * 150 + economyCount * 100;
            document.getElementById('total-amount').innerText = '$' + totalAmount;

            const vat = Math.round(totalAmount * 0.1);
            document.getElementById('vat-amount').innerText = '$' + vat;

            const grandTotal = totalAmount + vat;
            document.getElementById('grand-total').innerText = "$" + grandTotal;
        }

        // Get User Input Value
        function getInputValue(ticket) {
            const ticketInput = document.getElementById(ticket + '-count');
            const ticketCount = parseInt(ticketInput.value);
            return ticketCount;
        }

        // Congrats message funtion
        function confirmMassege() {
            document.getElementById('booking-area').style.display = 'none';
            document.getElementById('congrats-message').style.display = 'block';
        }