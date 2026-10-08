
const billingSwitch =
    document.getElementById("billingSwitch");

const monthlyText =
    document.getElementById("monthlyText");

const yearlyText =
    document.getElementById("yearlyText");

const amounts =
    document.querySelectorAll(".amount");

const billingNotes =
    document.querySelectorAll(".billing-note");


billingSwitch.addEventListener("change", function () {

    if (billingSwitch.checked) {

        // YEARLY

        monthlyText.classList.remove("active");

        yearlyText.classList.add("active");


        amounts.forEach(function (amount) {

            amount.style.opacity = "0";

            amount.style.transform =
                "translateY(-8px)";

            setTimeout(function () {

                amount.textContent =
                    amount.dataset.yearly;

                amount.style.opacity = "1";

                amount.style.transform =
                    "translateY(0)";

            }, 150);

        });


        billingNotes.forEach(function (note) {

            note.textContent =
                "Billed yearly";

        });

    } else {

        // MONTHLY

        yearlyText.classList.remove("active");

        monthlyText.classList.add("active");


        amounts.forEach(function (amount) {

            amount.style.opacity = "0";

            amount.style.transform =
                "translateY(8px)";

            setTimeout(function () {

                amount.textContent =
                    amount.dataset.monthly;

                amount.style.opacity = "1";

                amount.style.transform =
                    "translateY(0)";

            }, 150);

        });


        billingNotes.forEach(function (note) {

            note.textContent =
                "Billed monthly";

        });

    }

});
