# ✈️ FlyEase — Flight Booking System

FlyEase is a responsive, frontend-based flight booking web application developed using **HTML, CSS, and JavaScript**. It provides a simple and user-friendly interface for searching flights, comparing fares, applying filters, and managing flight bookings.

## 📌 Features

- **User Authentication:** Login and registration interface.
- **User Dashboard:** A central place to start searching for flights.
- **Flight Search:** Search flights by departure city, destination, date, and number of passengers.
- **Flight Filters:** Filter flights by airline, stops, and maximum price.
- **Flight Sorting:** Sort results by price, duration, and departure time.
- **Flight Booking:** Enter passenger details and confirm a sample booking.
- **Booking Management:** Store and view bookings associated with the logged-in user.
- **Responsive Design:** Interface adapted for desktop and mobile screens.
- **Local Storage:** Store demo user accounts, search preferences, and booking data in the browser.

## 🛠️ Tech Stack

- **HTML5** — Application structure
- **CSS3** — Styling and responsive layout
- **JavaScript** — Flight search, filtering, sorting, and booking logic
- **Browser localStorage** — Client-side data persistence

## 📂 Project Structure

```text
Flight-booking-system/
│
├── index.html
├── dashboard.html
├── results.html
├── booking.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser such as Google Chrome.
- A code editor such as Visual Studio Code (optional).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shrutika24hudkar-jpg/Flight-booking-system.git
   ```

2. Open the project folder:

   ```bash
   cd Flight-booking-system
   ```

3. Open `index.html` in your browser.

   Alternatively, open the folder in VS Code and run `index.html` using the Live Server extension.

## 💻 How to Use

1. Register a demo account.
2. Log in with your registered credentials.
3. Select the departure city, destination, travel date, and passenger count.
4. Search for available sample flights.
5. Apply filters or sort the results to find a suitable flight.
6. Select a flight and enter passenger details.
7. Confirm the booking and view the generated booking reference.
8. Access your saved bookings through the My Bookings option.

## 🧪 Sample Data

The application includes predefined sample flight data in `script.js`. The available routes, fares, and schedules are for demonstration purposes and do not represent live airline availability or current market prices.

## ⚠️ Limitations

- This is a frontend-only project; no backend or database is connected.
- Login and registration are simulated using browser localStorage.
- Passwords and booking details are stored locally and are not suitable for production use.
- Booking confirmation is simulated. No real airline reservation, ticket issuance, or payment processing takes place.
- Data is browser-specific and may be lost if browser storage is cleared.

## 🔮 Future Enhancements

- Backend integration with a database.
- Secure authentication and password hashing.
- Live flight search through an authorized flight API.
- Real booking confirmation and downloadable e-ticket.
- Payment gateway integration.
- Improved booking history and cancellation features.

## 🎯 Project Objective

The objective of FlyEase is to demonstrate the fundamentals of frontend web development by building an interactive flight-booking simulation with a responsive user interface, dynamic search functionality, and client-side data management.

## 👨‍💻 Author

**Shrutika Hudkar**

GitHub: [@shrutika24hudkar-jpg](https://github.com/shrutika24hudkar-jpg)

---

*FlyEase — Find flights. Compare fares. Book with ease.*
