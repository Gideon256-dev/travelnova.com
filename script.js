/* =====================================================
   TRAVELNOVA WEBSITE JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("show");

        const icon = menuToggle.querySelector("i");

        if (mainNav.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =====================================================
   PASSPORT / NATIONAL ID APPLICATION
   WHATSAPP SUBMISSION
===================================================== */

const applicationForm =
    document.getElementById("applicationForm");


if (applicationForm) {

    applicationForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* ================= GET FORM DATA ================= */

        const service =
            document.getElementById("service").value;

        const fullName =
            document.getElementById("fullName").value;

        const phone =
            document.getElementById("phone").value;

        const email =
            document.getElementById("email").value;

        const dob =
            document.getElementById("dob").value;

        const nationality =
            document.getElementById("nationality").value;

        const address =
            document.getElementById("address").value;

        const message =
            document.getElementById("message").value;


        /* ================= WHATSAPP MESSAGE ================= */

        const whatsappMessage =

`*TRAVELNOVA APPLICATION*

Hello TravelNova, I would like assistance with the following service.

*SERVICE REQUIRED:*
${service}

*PERSONAL DETAILS*

Full Name: ${fullName}

Phone Number: ${phone}

Email: ${email || "Not provided"}

Date of Birth: ${dob || "Not provided"}

Nationality: ${nationality || "Not provided"}

Location / Address: ${address || "Not provided"}

*ADDITIONAL INFORMATION*

${message || "No additional information provided."}

*DOCUMENT*

I will attach my supporting document to this WhatsApp message.

Thank you.`;


        /* ================= WHATSAPP LINK ================= */

        const whatsappNumber =
            "256761663966";


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        /* ================= SUCCESS MESSAGE ================= */

        const formMessage =
            document.getElementById("formMessage");


        formMessage.style.display = "block";

        formMessage.style.background = "#edf8f1";

        formMessage.style.color = "#126b3b";

        formMessage.innerHTML =

            "Your details are ready. " +
            "WhatsApp will open now. " +
            "Please attach your supporting document " +
            "and send the message.";


        /* ================= OPEN WHATSAPP ================= */

        setTimeout(function () {

            window.open(
                whatsappURL,
                "_blank"
            );

        }, 700);

    });

}


/* =====================================================
   SHOW SELECTED DOCUMENT NAME
===================================================== */

const documentInput =
    document.getElementById("document");


if (documentInput) {

    documentInput.addEventListener("change", function () {

        const uploadText =
            document.querySelector(".upload-box p");


        if (this.files.length > 0) {

            uploadText.textContent =
                this.files[0].name;

        } else {

            uploadText.textContent =
                "Select a document";

        }

    });

}


/* =====================================================
   QUESTION / ENQUIRY FORM
===================================================== */

const questionForm =
    document.getElementById("questionForm");


if (questionForm) {

    questionForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("questionName").value;

        const phone =
            document.getElementById("questionPhone").value;

        const subject =
            document.getElementById("questionSubject").value;

        const question =
            document.getElementById("question").value;


        const whatsappMessage =

`*TRAVELNOVA QUESTION / ENQUIRY*

Hello TravelNova.

My name is: ${name}

My phone number is: ${phone}

Subject: ${subject || "General enquiry"}

*My Question:*

${question}

Thank you.`;


        const whatsappURL =

            "https://wa.me/256761663966?text=" +

            encodeURIComponent(whatsappMessage);


        const questionMessage =
            document.getElementById("questionMessage");


        questionMessage.style.display = "block";

        questionMessage.style.background = "#edf8f1";

        questionMessage.style.color = "#126b3b";

        questionMessage.innerHTML =
            "Your question is ready. Opening WhatsApp...";


        setTimeout(function () {

            window.open(
                whatsappURL,
                "_blank"
            );

        }, 700);

    });

}