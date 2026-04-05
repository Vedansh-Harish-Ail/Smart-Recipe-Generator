# 🍳 A² Kitchen - Smart Recipe Generator

A modern, responsive web application that helps combat food waste by instantly generating delicious recipe ideas based strictly on the ingredients you already have in your kitchen!

## 🌟 Features

- **Smart Ingredient Matching**: Enter comma-separated ingredients, and the app will query an intelligent API to find meals you can make *right now*.
- **Offline Reliability System**: Built-in fallback database containing over 60 localized and international recipes. If the external network fails or API limits are reached, you still get recipe suggestions instantly!
- **Community Contributions**: A dedicated "Add Recipe" portal allows home cooks to share their own creations. These are preserved dynamically in the browser's storage.
- **Admin Dashboard**: A hidden administrative view providing tools to monitor, export (to CSV/JSON), and manage user-added community recipes.
- **Fully Responsive UI**: A beautifully crafted, modern aesthetic designed to operate flawlessly on desktops, tablets, and mobile devices.

## 💻 Tech Stack

This project is built purely using core web technologies, ensuring lightweight performance and zero unneeded dependencies:
- **Frontend Layer**: HTML5, Vanilla JavaScript (ES6+), CSS3
- **Data & APIs**: [Spoonacular Recipe API](https://spoonacular.com/food-api)
- **Local Storage**: HTML5 `localStorage` and `sessionStorage`

## 📂 Project Structure

```text
Smart-Recipe-Generator/
├── assets/
│   ├── css/           # Application styling (style.css)
│   ├── images/        # Images, logos, and UI assets
│   └── js/            # Core logic (main1.js) & Offline DB (recipes_details.js)
├── index.html         # Main Application Dashboard
├── add_recipe.html    # Community Contribution Page
├── admin_page.html    # Administrative Management Console
└── README.md
```

## 🚀 Getting Started

Since this is a fully client-side application, there is no need for `npm`, `pip`, or complex server configurations.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Smart-Recipe-Generator.git
   ```
2. **Open the App:**
   Simply double-click on `index.html` to open it in your default web browser, or serve it using a tool like Live Server in VS Code.

3. **Admin Details:**
   - **Page**: Navigate to the `Admin` tab.
   - **Default Credentials**: `admin` / `admin123` 

## 🔮 Future Road Map

- [ ] Transition from Local Storage to a dedicated NoSQL backend (e.g., Firebase / Supabase) for global sharing.
- [ ] Implement secure JWT Authentication for the Admin Dashboard.
- [ ] Introduce User Accounts & "Favorite" recipe bookmarking.

---
*Developed proudly as a Full-Stack student initiative.*
