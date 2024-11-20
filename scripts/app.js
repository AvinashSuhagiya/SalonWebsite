// Register a new client and save to sessionStorage
function registerClient() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const phone = document.getElementById('phone').value;
    const postalCode = document.getElementById('postalCode').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!firstName || !lastName || !phone || !postalCode || !email) {
        alert("Please fill in all required fields.");
        return;
    }

    // Store user data in sessionStorage
    const userData = {
        firstName,
        lastName,
        address,
        city,
        province,
        phone,
        postalCode,
        email,
        password
    };
    sessionStorage.setItem(email, JSON.stringify(userData));
    alert("Registration successful!");

    // Clear the form fields
    document.getElementById("registerForm").reset();

    // Toggle to the login form view
    toggleForms();

}

// Login existing client
function loginClient() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Retrieve user data from sessionStorage
    const storedUserData = sessionStorage.getItem(loginEmail);

    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        // For simplicity, assuming password is a default or adding password field to registration
        if (userData.password === loginPassword) {
            alert(`Welcome back, ${userData.firstName}!`);
            window.location.href = "home.html";

        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("No account found with this email.");
    }
}

// Forgot Password
function forgotPassword() {
    const loginEmail = document.getElementById('loginEmail').value;
    if (!loginEmail) {
        alert("Please enter your email to retrieve your password.");
    } else {
        const storedUserData = sessionStorage.getItem(loginEmail);
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            alert(`Password reset instructions sent to ${userData.email}`);
        } else {
            alert("No account found with this email.");
        }
    }
}

// Define stylists and services
// const stylists = [
//     { name: "Sam", services: ["Cut", "Style"] },
//     { name: "Alex", services: ["Color", "Perm"] }
// ];

// const services = {
//     "Cut": { price: 50, duration: 30 },
//     "Color": { price: 75, duration: 60 },
//     "Style": { price: 100, duration: 45 },
//     "Perm": { price: 120, duration: 90 }
// };

// // Function to display services for each stylist
// function displayServices() {
//     const stylistServicesContainer = document.getElementById('stylistServices');
//     stylistServicesContainer.innerHTML = ''; // Clear previous content

//     stylists.forEach(stylist => {
//         // Create a container for each stylist
//         const stylistContainer = document.createElement('div');
//         stylistContainer.className = 'stylist-container';

//         const stylistTitle = document.createElement('h3');
//         stylistTitle.textContent = stylist.name;
//         stylistContainer.appendChild(stylistTitle);

//         // List services offered by each stylist
//         stylist.services.forEach(serviceName => {
//             const service = services[serviceName];
//             const label = document.createElement('label');
//             const checkbox = document.createElement('input');
//             checkbox.type = 'checkbox';
//             checkbox.name = 'service';
//             checkbox.value = serviceName;
//             checkbox.dataset.price = service.price;
//             checkbox.dataset.duration = service.duration;
//             checkbox.dataset.stylist = stylist.name;

//             label.appendChild(checkbox);
//             label.appendChild(document.createTextNode(`${serviceName} - $${service.price}, ${service.duration} mins`));
//             stylistContainer.appendChild(label);
//         });

//         stylistServicesContainer.appendChild(stylistContainer);
//     });
// }

// // Call displayServices when the page loads
// window.onload = displayServices;

// // Function to calculate total cost and duration for selected services
// function calculateTotal() {
//     const selectedServices = document.querySelectorAll('input[name="service"]:checked');
//     let totalCost = 0;
//     let totalDuration = 0;
//     let stylistName = null;

//     // Ensure all selected services belong to the same stylist
//     selectedServices.forEach(service => {
//         const serviceStylist = service.dataset.stylist;
//         if (stylistName && stylistName !== serviceStylist) {
//             alert("Please select services from only one stylist.");
//             return;
//         }
//         stylistName = serviceStylist;

//         totalCost += parseFloat(service.dataset.price);
//         totalDuration += parseFloat(service.dataset.duration);
//     });

//     // Display the result
//     const totalDisplay = document.getElementById('totalCostDuration');
//     if (selectedServices.length > 0) {
//         totalDisplay.innerHTML = `<p>Total Cost: $${totalCost}</p><p>Total Duration: ${totalDuration} mins</p>`;
//     } else {
//         totalDisplay.innerHTML = `<p>Please select at least one service.</p>`;
//     }
// }

// Show the Admin Login form and hide other forms
function showAdminLogin() {
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('registerForm').style.display = "none";
    document.getElementById('adminLoginForm').style.display = "block";
}

// Toggle between login and register forms
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const adminLoginForm = document.getElementById('adminLoginForm');

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        adminLoginForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        adminLoginForm.style.display = "none";
    }
}

// Admin Login Function with Static Validation
function adminLogin() {
    const empId = document.getElementById('empId').value;
    const empName = document.getElementById('empName').value;

    // Static admin login data for two stylists
    const admins = [
        { empId: "Sam001", empName: "Sam" },
        { empId: "Alex002", empName: "Alex" }
    ];

    // Check if entered details match any of the static admin accounts
    const admin = admins.find(admin => admin.empId === empId && admin.empName.toLowerCase() === empName.toLowerCase());

    if (admin) {
        // Store the stylist's name in sessionStorage
        sessionStorage.setItem("loggedInStylist", admin.empName);

        alert(`Welcome, ${admin.empName}!`);
        window.location.href = "admin_home.html"; // Redirect to admin home page
    } else {
        alert("Invalid Employee ID or Name. Please try again.");
    }
}



// Data for Hairdresser Schedule
const hairdresserSchedule = [
    { name: "Sam", start1: "9:00 am", end1: "2:00 pm", stylistId: "Sam001" },
    { name: "Alex", start1: "10:00 am", end1: "2:00 pm", stylistId: "Alex002" }
];

// Data for Services
const servicesDesc = [
    { service: "Cut", description: "Haircut", price: 50, duration: "30 mins" },
    { service: "Color", description: "Hair Coloring", price: 75, duration: "60 mins" },
    { service: "Style", description: "Hair Style", price: 100, duration: "45 mins" },
    { service: "Perm", description: "Hair Perm", price: 120, duration: "90 mins" }
];

// Function to create a dynamic table
function createTable(containerId, headers, data, dataKeys) {
    const container = document.getElementById(containerId);
    const table = document.createElement("table");
    table.className = `${containerId}-table`;

    // Create header row
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.className = `${containerId}-header`;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create data rows
    const tbody = document.createElement("tbody");
    data.forEach(rowData => {
        const row = document.createElement("tr");
        dataKeys.forEach(key => {
            const td = document.createElement("td");
            td.textContent = rowData[key];
            td.className = `${containerId}-data`;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Append table to container
    container.appendChild(table);
}

// Call the function to create the tables on page load
window.onload = function () {
    createTable(
        "scheduleContainer",
        ["Name", "Start Time", "End Time", "Stylist ID"],
        hairdresserSchedule,
        ["name", "start1", "end1", "stylistId"]
    );

    createTable(
        "servicesContainer",
        ["Service/Details", "Description", "Price", "Duration"],
        servicesDesc,
        ["service", "description", "price", "duration"]
    );
};

// Sample data for services and stylists
const services = [
    { id: "Cut", description: "Haircut", price: 50, duration: 30 },
    { id: "Color", description: "Hair Coloring", price: 75, duration: 60 },
    { id: "Style", description: "Hair Style", price: 100, duration: 45 },
    { id: "Perm", description: "Hair Perm", price: 120, duration: 90 }
];

const stylists = [
    { id: "Sam001", name: "Sam", startTime: 9, endTime: 14 },
    { id: "Alex002", name: "Alex", startTime: 10, endTime: 15 }
];

// Open the Add Service Form
function openAddServiceForm() {
    document.getElementById("addServiceForm").style.display = "block";
    populateServiceOptions();
    populateStylistOptions();
}

// Close the Add Service Form
function closeAddServiceForm() {
    document.getElementById("addServiceForm").style.display = "none";
}

// Populate services as checkboxes
function populateServiceOptions() {
    const serviceCheckboxes = document.getElementById("serviceCheckboxes");
    serviceCheckboxes.innerHTML = ""; // Clear existing checkboxes
    services.forEach(service => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = service.id;
        checkbox.className = "serviceCheckbox"; // Class for easy access
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(`${service.description} - $${service.price}`));
        serviceCheckboxes.appendChild(label);
        serviceCheckboxes.appendChild(document.createElement("br"));
    });
}

// Populate stylists in the dropdown and update time options based on selected stylist
function populateStylistOptions() {
    const stylistSelect = document.getElementById("stylistSelect");
    stylistSelect.innerHTML = ""; // Clear existing options
    stylists.forEach(stylist => {
        const option = document.createElement("option");
        option.value = stylist.id;
        option.textContent = stylist.name;
        stylistSelect.appendChild(option);
    });

    // Update available start times when stylist changes
    stylistSelect.addEventListener("change", updateStartTimeOptions);
}

// Update start time options based on the selected stylist's schedule
function updateStartTimeOptions() {
    const stylistId = document.getElementById("stylistSelect").value;
    const stylist = stylists.find(stylist => stylist.id === stylistId);

    const startTimeSelect = document.getElementById("startTimeSelect");
    startTimeSelect.innerHTML = ""; // Clear existing options

    for (let hour = stylist.startTime; hour < stylist.endTime; hour++) {
        const option = document.createElement("option");
        option.value = hour;
        option.textContent = `${hour}:00`;
        startTimeSelect.appendChild(option);
    }

    // Update end time when start time changes
    startTimeSelect.addEventListener("change", updateEndTimeDisplay);
}

// Update the end time display based on the selected start time
function updateEndTimeDisplay() {
    const startTime = parseInt(document.getElementById("startTimeSelect").value);
    document.getElementById("endTimeDisplay").value = `${startTime + 1}:00`;
}

// Calculate the total cost of selected services
function calculateServiceCost(selectedServices) {
    let totalCost = 0;
    selectedServices.forEach(serviceId => {
        const service = services.find(s => s.id === serviceId);
        if (service) {
            totalCost += service.price;
        }
    });
    return totalCost;
}

// Calculate the total duration of selected services
function calculateDuration(selectedServices) {
    let totalDuration = 0;
    selectedServices.forEach(serviceId => {
        const service = services.find(s => s.id === serviceId);
        if (service) {
            totalDuration += service.duration;
        }
    });
    return totalDuration;
}

// Validate the form before booking
function validateForm() {
    const selectedServices = document.querySelectorAll(".serviceCheckbox:checked");
    const stylistId = document.getElementById("stylistSelect").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const startTime = document.getElementById("startTimeSelect").value;

    if (selectedServices.length === 0) {
        alert("Please select at least one service.");
        return false;
    }
    if (!stylistId) {
        alert("Please select a stylist.");
        return false;
    }
    if (!appointmentDate) {
        alert("Please select a date for the appointment.");
        return false;
    }
    if (!startTime) {
        alert("Please select a start time.");
        return false;
    }
    return true;
}

// Function to save each booking in session storage
function saveBookingToSession(stylist, services, date, startTime, endTime, totalCost, totalDuration) {
    // Retrieve the existing bookings array from sessionStorage, or initialize an empty array
    const bookingsArray = JSON.parse(sessionStorage.getItem("bookings")) || [];

    // Create a new booking object
    const newBooking = {
        stylist: stylist,
        services: services,
        date: date,
        startTime: startTime,
        endTime: endTime,
        totalCost: totalCost,
        totalDuration: totalDuration
    };

    // Add the new booking to the array
    bookingsArray.push(newBooking);

    // Save the updated array back to sessionStorage
    sessionStorage.setItem("bookings", JSON.stringify(bookingsArray));
}

// Updated bookAppointment function to save data in sessionStorage and display it in the table
function bookAppointment() {
    if (!validateForm()) return; // Validate the form first

    // Get selected services from checkboxes
    const selectedServices = Array.from(document.querySelectorAll(".serviceCheckbox:checked")).map(checkbox => checkbox.value);
    const stylistId = document.getElementById("stylistSelect").value;
    const stylistName = stylists.find(stylist => stylist.id === stylistId).name;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const startTime = document.getElementById("startTimeSelect").value;
    const endTime = document.getElementById("endTimeDisplay").value;

    // Calculate total cost and duration using the specific functions
    const totalCost = calculateServiceCost(selectedServices);
    const totalDuration = calculateDuration(selectedServices);

    // Save the booking data to session storage
    saveBookingToSession(stylistName, selectedServices.join(", "), appointmentDate, `${startTime}:00`, endTime, `$${totalCost}`, `${totalDuration} mins`);

    // Display booking in the booking table
    const bookingTableBody = document.getElementById("bookingTable").querySelector("tbody");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${stylistName}</td>
        <td>${selectedServices.join(", ")}</td>
        <td>${appointmentDate}</td>
        <td>${startTime}:00</td>
        <td>${endTime}</td>
        <td>$${totalCost}</td>
        <td>${totalDuration} mins</td>
    `;
    bookingTableBody.appendChild(row);

    closeAddServiceForm(); // Close the form after booking
}

// Function to display the stylist's name and fetch their appointments
document.addEventListener("DOMContentLoaded", function () {
    const stylistName = sessionStorage.getItem("loggedInStylist") || "Admin";
    document.getElementById("adminName").textContent = stylistName;

    // Fetch and display the appointments for the logged-in stylist
    displayAppointments(stylistName);
});

// Function to display appointments for a specific stylist
function displayAppointments(stylistName) {
    // Retrieve all bookings from session storage
    const bookings = JSON.parse(sessionStorage.getItem("bookings")) || [];
    console.log("All Bookings in sessionStorage:", bookings); // Debugging: Check all bookings

    // Filter bookings for the logged-in stylist
    const stylistBookings = bookings.filter(booking => booking.stylist === stylistName);
    console.log("Filtered Bookings for stylist", stylistName, ":", stylistBookings); // Debugging: Check filtered bookings

    // Get the table body element
    const tableBody = document.getElementById("appointmentsTable").querySelector("tbody");
    tableBody.innerHTML = ""; // Clear any existing rows

    // Populate the table with the filtered appointments
    if (stylistBookings.length === 0) {
        console.log("No appointments found for stylist:", stylistName);
    }

    stylistBookings.forEach(booking => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${booking.services}</td>
            <td>${booking.date}</td>
            <td>${booking.startTime}</td>
            <td>${booking.endTime}</td>
            <td>${booking.totalCost}</td>
            <td>${booking.totalDuration}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Logout function to clear session and redirect
function logoutAdmin() {
    // sessionStorage.clear(); // Clear sessionStorage
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect to login page
}
