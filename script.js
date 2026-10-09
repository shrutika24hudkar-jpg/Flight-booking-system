/* =====================================
   FLIGHT DATA
===================================== */

const flights = [

    {
        id: 1,
        airline: "IndiGo",
        number: "6E 218",
        from: "Nagpur",
        to: "Delhi",
        departure: "06:30",
        arrival: "08:20",
        duration: "1h 50m",
        price: 4599,
        stops: 0
    },

    {
        id: 2,
        airline: "Air India",
        number: "AI 469",
        from: "Nagpur",
        to: "Delhi",
        departure: "09:15",
        arrival: "11:10",
        duration: "1h 55m",
        price: 5299,
        stops: 0
    },

    {
        id: 3,
        airline: "Vistara",
        number: "UK 798",
        from: "Nagpur",
        to: "Delhi",
        departure: "13:40",
        arrival: "15:35",
        duration: "1h 55m",
        price: 5999,
        stops: 0
    },

    {
        id: 4,
        airline: "Akasa Air",
        number: "QP 142",
        from: "Nagpur",
        to: "Delhi",
        departure: "17:20",
        arrival: "19:15",
        duration: "1h 55m",
        price: 4299,
        stops: 0
    },

    {
        id: 5,
        airline: "IndiGo",
        number: "6E 641",
        from: "Mumbai",
        to: "Delhi",
        departure: "07:10",
        arrival: "09:20",
        duration: "2h 10m",
        price: 3999,
        stops: 0
    },

    {
        id: 6,
        airline: "Air India",
        number: "AI 687",
        from: "Mumbai",
        to: "Delhi",
        departure: "11:30",
        arrival: "13:40",
        duration: "2h 10m",
        price: 4799,
        stops: 0
    },

    {
        id: 7,
        airline: "Vistara",
        number: "UK 945",
        from: "Mumbai",
        to: "Bangalore",
        departure: "08:00",
        arrival: "09:45",
        duration: "1h 45m",
        price: 3599,
        stops: 0
    },

    {
        id: 8,
        airline: "IndiGo",
        number: "6E 532",
        from: "Delhi",
        to: "Bangalore",
        departure: "10:30",
        arrival: "13:15",
        duration: "2h 45m",
        price: 4999,
        stops: 0
    },

    {
        id: 9,
        airline: "Akasa Air",
        number: "QP 136",
        from: "Pune",
        to: "Bangalore",
        departure: "12:10",
        arrival: "13:35",
        duration: "1h 25m",
        price: 2899,
        stops: 0
    },

    {
        id: 10,
        airline: "IndiGo",
        number: "6E 725",
        from: "Hyderabad",
        to: "Mumbai",
        departure: "15:00",
        arrival: "16:35",
        duration: "1h 35m",
        price: 3199,
        stops: 0
    },

    {
        id: 11,
        airline: "Air India",
        number: "AI 955",
        from: "Delhi",
        to: "Mumbai",
        departure: "18:30",
        arrival: "20:40",
        duration: "2h 10m",
        price: 4499,
        stops: 0
    },

    {
        id: 12,
        airline: "IndiGo",
        number: "6E 304",
        from: "Nagpur",
        to: "Mumbai",
        departure: "16:20",
        arrival: "17:55",
        duration: "1h 35m",
        price: 3399,
        stops: 0
    }

];


/* =====================================
   LOGIN / REGISTER
===================================== */

function showLogin() {

    document.getElementById("loginForm").classList.remove("hidden");

    document.getElementById("registerForm").classList.add("hidden");

    const tabs = document.querySelectorAll(".auth-tabs button");

    tabs[0].classList.add("active");
    tabs[1].classList.remove("active");
}


function showRegister() {

    document.getElementById("loginForm").classList.add("hidden");

    document.getElementById("registerForm").classList.remove("hidden");

    const tabs = document.querySelectorAll(".auth-tabs button");

    tabs[0].classList.remove("active");
    tabs[1].classList.add("active");
}


/* =====================================
   REGISTER
===================================== */

function registerUser(event) {

    event.preventDefault();

    const name =
        document.getElementById("registerName").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const password =
        document.getElementById("registerPassword").value;

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const existingUser =
        users.find(user => user.email === email);

    if (existingUser) {

        alert("An account with this email already exists.");

        return;
    }

    users.push({
        name: name,
        email: email,
        password: password
    });

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Account created successfully! 🎉");

    document.getElementById("registerForm").reset();

    showLogin();
}


/* =====================================
   LOGIN
===================================== */

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const user =
        users.find(
            u =>
                u.email === email &&
                u.password === password
        );

    if (!user) {

        alert("Invalid email or password.");

        return;
    }

    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
    );

    window.location.href = "dashboard.html";
}


/* =====================================
   LOGOUT
===================================== */

function logoutUser() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "index.html";
}


/* =====================================
   CHECK LOGIN
===================================== */

function checkLogin() {

    const user =
        JSON.parse(localStorage.getItem("loggedInUser"));

    const currentPage =
        window.location.pathname;

    if (
        !user &&
        !currentPage.endsWith("index.html") &&
        !currentPage.endsWith("/")
    ) {

        window.location.href = "index.html";
    }

    return user;
}


/* =====================================
   DASHBOARD
===================================== */

function loadDashboard() {

    const user =
        JSON.parse(localStorage.getItem("loggedInUser"));

    const userName =
        document.getElementById("userName");

    if (userName && user) {

        userName.textContent =
            user.name.split(" ")[0];
    }

    const date =
        document.getElementById("travelDate");

    if (date) {

        const today =
            new Date().toISOString().split("T")[0];

        date.min = today;

        date.value = today;
    }
}


/* =====================================
   SWAP CITIES
===================================== */

function swapCities() {

    const from =
        document.getElementById("fromCity");

    const to =
        document.getElementById("toCity");

    const temp = from.value;

    from.value = to.value;

    to.value = temp;
}


/* =====================================
   SEARCH FLIGHTS
===================================== */

function searchFlights() {

    const from =
        document.getElementById("fromCity").value;

    const to =
        document.getElementById("toCity").value;

    const date =
        document.getElementById("travelDate").value;

    const passengers =
        document.getElementById("passengers").value;


    if (from === to) {

        alert("Departure and destination cannot be the same.");

        return;
    }


    if (!date) {

        alert("Please select a travel date.");

        return;
    }


    localStorage.setItem(
        "searchData",
        JSON.stringify({
            from,
            to,
            date,
            passengers
        })
    );


    window.location.href = "results.html";
}


/* =====================================
   LOAD RESULTS
===================================== */

function loadResults() {

    const searchData =
        JSON.parse(
            localStorage.getItem("searchData")
        );


    if (!searchData) {

        window.location.href =
            "dashboard.html";

        return;
    }


    document.getElementById("resultFrom")
        .textContent = searchData.from;

    document.getElementById("resultTo")
        .textContent = searchData.to;


    if (searchData.date) {

        const formatted =
            new Date(
                searchData.date + "T00:00:00"
            ).toLocaleDateString(
                "en-IN",
                {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                }
            );

        document.getElementById("resultDate")
            .textContent =
            `${formatted} • ${searchData.passengers} Passenger(s)`;
    }


    renderFlights();
}


/* =====================================
   FILTER + SORT STATE
===================================== */

let currentFlights = [];


/* =====================================
   RENDER FLIGHTS
===================================== */

function renderFlights() {

    const searchData =
        JSON.parse(
            localStorage.getItem("searchData")
        );


    currentFlights =
        flights.filter(
            flight =>
                flight.from === searchData.from &&
                flight.to === searchData.to
        );


    applyFilters();
}


/* =====================================
   APPLY FILTERS
===================================== */

function applyFilters() {

    const price =
        Number(
            document.getElementById("priceRange")?.value
            || 15000
        );


    const selectedAirlines =
        [...document.querySelectorAll(
            ".airline-filter:checked"
        )]
        .map(
            checkbox => checkbox.value
        );


    const selectedStops =
        [...document.querySelectorAll(
            ".stop-filter:checked"
        )]
        .map(
            checkbox => Number(checkbox.value)
        );


    const filtered =
        currentFlights.filter(flight => {

            const priceMatch =
                flight.price <= price;


            const airlineMatch =
                selectedAirlines.length === 0 ||
                selectedAirlines.includes(
                    flight.airline
                );


            const stopMatch =
                selectedStops.length === 0 ||
                selectedStops.includes(
                    flight.stops
                );


            return (
                priceMatch &&
                airlineMatch &&
                stopMatch
            );
        });


    displayFlights(filtered);
}


/* =====================================
   DISPLAY FLIGHTS
===================================== */

function displayFlights(data) {

    const container =
        document.getElementById("flightList");

    if (!container) return;


    document.getElementById("flightCount")
        .textContent = data.length;


    if (data.length === 0) {

        container.innerHTML = `

            <div class="flight-card"
                 style="text-align:center;padding:50px">

                <div style="font-size:45px">
                    ✈️
                </div>

                <h2>No flights found</h2>

                <p style="color:#777;margin-top:8px">
                    Try changing your filters or search again.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML =
        data.map(flight => `

        <div class="flight-card">

            <div class="flight-main">


                <div class="airline">

                    <div class="airline-logo">
                        ✈
                    </div>

                    <div>

                        <strong>
                            ${flight.airline}
                        </strong>

                        <small>
                            ${flight.number}
                        </small>

                    </div>

                </div>


                <div class="time">

                    <strong>
                        ${flight.departure}
                    </strong>

                    <small>
                        ${flight.from}
                    </small>

                </div>


                <div class="duration">

                    ${flight.duration}

                    <div class="duration-line"></div>

                    ${
                        flight.stops === 0
                        ? "Non-stop"
                        : flight.stops + " Stop"
                    }

                </div>


                <div class="time">

                    <strong>
                        ${flight.arrival}
                    </strong>

                    <small>
                        ${flight.to}
                    </small>

                </div>


                <div class="price">

                    <strong>
                        ₹${flight.price.toLocaleString("en-IN")}
                    </strong>

                    <small>
                        per passenger
                    </small>

                    <button
                        class="book-btn"
                        onclick="selectFlight(${flight.id})"
                    >
                        Book
                    </button>

                </div>

            </div>

        </div>

    `).join("");
}


/* =====================================
   SELECT FLIGHT
===================================== */

function selectFlight(id) {

    const flight =
        flights.find(
            f => f.id === id
        );


    localStorage.setItem(
        "selectedFlight",
        JSON.stringify(flight)
    );


    window.location.href =
        "booking.html";
}


/* =====================================
   LOAD BOOKING PAGE
===================================== */

function loadBooking() {

    const flight =
        JSON.parse(
            localStorage.getItem(
                "selectedFlight"
            )
        );


    if (!flight) {

        window.location.href =
            "dashboard.html";

        return;
    }


    const container =
        document.getElementById(
            "bookingFlight"
        );


    if (!container) return;


    container.innerHTML = `

        <div class="summary-airline">

            <div class="airline-logo">
                ✈
            </div>

            <div>

                <strong>
                    ${flight.airline}
                </strong>

                <small>
                    ${flight.number}
                </small>

            </div>

        </div>


        <div class="summary-route">

            <div>

                <strong>
                    ${flight.departure}
                </strong>

                <small>
                    ${flight.from}
                </small>

            </div>

            <span>→</span>

            <div>

                <strong>
                    ${flight.arrival}
                </strong>

                <small>
                    ${flight.to}
                </small>

            </div>

        </div>


        <p style="
            color:#777;
            font-size:13px;
            margin-bottom:20px;
        ">
            ${flight.duration} • Non-stop
        </p>


        <div class="summary-price">

            <span>
                Total Fare
            </span>

            <strong>
                ₹${flight.price.toLocaleString("en-IN")}
            </strong>

        </div>

    `;
}


/* =====================================
   CONFIRM BOOKING
===================================== */

function confirmBooking(event) {

    event.preventDefault();


    const flight =
        JSON.parse(
            localStorage.getItem(
                "selectedFlight"
            )
        );


    const user =
        JSON.parse(
            localStorage.getItem(
                "loggedInUser"
            )
        );


    const booking = {

        id:
            "FL" +
            Math.random()
                .toString(36)
                .substring(2, 8)
                .toUpperCase(),

        userEmail:
            user.email,

        passenger:
            document.getElementById(
                "firstName"
            ).value
            + " " +
            document.getElementById(
                "lastName"
            ).value,

        email:
            document.getElementById(
                "passengerEmail"
            ).value,

        phone:
            document.getElementById(
                "phone"
            ).value,

        gender:
            document.getElementById(
                "gender"
            ).value,

        age:
            document.getElementById(
                "age"
            ).value,

        flight:
            flight,

        bookingDate:
            new Date().toLocaleString()

    };


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    bookings.push(booking);


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


    alert(
        `Booking confirmed! 🎉\n\nPNR: ${booking.id}`
    );


    window.location.href =
        "dashboard.html";
}


/* =====================================
   PRICE SLIDER
===================================== */

function updatePrice() {

    const value =
        document.getElementById(
            "priceRange"
        ).value;


    document.getElementById(
        "priceValue"
    ).textContent =
        Number(value).toLocaleString("en-IN");


    applyFilters();
}


/* =====================================
   CLEAR FILTERS
===================================== */

function clearFilters() {

    document.querySelectorAll(
        ".airline-filter, .stop-filter"
    )
    .forEach(
        checkbox =>
            checkbox.checked = false
    );


    const range =
        document.getElementById(
            "priceRange"
        );


    range.value = 15000;


    document.getElementById(
        "priceValue"
    ).textContent = "15,000";


    applyFilters();
}


/* =====================================
   SORT FLIGHTS
===================================== */

function sortFlights() {

    const sort =
        document.getElementById(
            "sortFlights"
        ).value;


    let sorted =
        [...currentFlights];


    if (sort === "price") {

        sorted.sort(
            (a,b) =>
                a.price - b.price
        );

    }


    if (sort === "duration") {

        sorted.sort(
            (a,b) =>
                parseInt(a.duration)
                -
                parseInt(b.duration)
        );

    }


    if (sort === "departure") {

        sorted.sort(
            (a,b) =>
                a.departure.localeCompare(
                    b.departure
                )
        );

    }


    displayFlights(sorted);
}


/* =====================================
   BOOKINGS
===================================== */

function showBookings() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "loggedInUser"
            )
        );


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    const userBookings =
        bookings.filter(
            booking =>
                booking.userEmail ===
                user.email
        );


    if (userBookings.length === 0) {

        alert(
            "You don't have any bookings yet."
        );

        return;
    }


    let message =
        "YOUR BOOKINGS\n\n";


    userBookings.forEach(
        booking => {

            message +=
                `PNR: ${booking.id}\n` +
                `${booking.flight.from} → ${booking.flight.to}\n` +
                `${booking.passenger}\n` +
                `₹${booking.flight.price}\n\n`;

        }
    );


    alert(message);
}


/* =====================================
   PAGE INITIALIZATION
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const page =
            window.location.pathname;


        if (
            !page.endsWith("index.html") &&
            !page.endsWith("/")
        ) {

            checkLogin();

        }


        if (
            page.includes(
                "dashboard.html"
            )
        ) {

            loadDashboard();

        }


        if (
            page.includes(
                "results.html"
            )
        ) {

            loadResults();


            document.querySelectorAll(
                ".airline-filter, .stop-filter"
            )
            .forEach(
                checkbox =>
                    checkbox.addEventListener(
                        "change",
                        applyFilters
                    )
            );

        }


        if (
            page.includes(
                "booking.html"
            )
        ) {

            loadBooking();

        }

    }
);