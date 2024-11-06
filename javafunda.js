// Defining different data types
let name = "Muhammad Azmi Muwaffaq"; // String
let age = 20; // Number
let isStudent = true; // Boolean
let skills = ["UI Designer", "Microsoft Office", "Digital Design"]; // Array
let address = { city: "Tangsel", province: "Banten" }; // Object
let job; // Undefined

// Function to display data types in console and alert
function displayDataTypes() {
    console.log("Name (String):", name);
    console.log("Age (Number):", age);
    console.log("Is Student (Boolean):", isStudent);
    console.log("Skills (Array):", skills);
    console.log("Address (Object):", address);
    console.log("Job (Undefined):", job);

    alert(
        `Name: ${name}\nAge: ${age}\nIs Student: ${isStudent}\nSkills: ${skills.join(", ")}\nAddress: ${address.city}, ${address.province}\nJob: ${job}`
    );
}

