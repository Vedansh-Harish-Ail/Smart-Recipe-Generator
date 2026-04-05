// ===== Security Utility: XSS Prevention =====
// Encodes special HTML characters so user input cannot inject scripts.
function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function generateRecipe() {
  const rawInput = document.getElementById('ingredient-input').value.trim();
  const output = document.getElementById('recipe-output');

  if (!rawInput) {
    output.innerHTML = "<p class='no-input-message'>Please enter at least one ingredient.</p>";
    return;
  }

  const input = rawInput.toLowerCase().split(",").map(i => i.trim()).join(',');
  const apiKey = '1ce26b42c9434492b73ab1aaedf70860';
  const spoonacularURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=5&apiKey=${apiKey}`;

  output.innerHTML = "<p>Loading recipes...</p>";

  try {
    const response = await fetch(spoonacularURL);
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("No recipes found from API");
    }

    const detailedRecipes = await Promise.all(
      data.map(async (recipe) => {
        let instructions = "No instructions available.";

        try {
          const infoRes = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`);
          const info = await infoRes.json();

          if (
            info.analyzedInstructions &&
            info.analyzedInstructions.length > 0 &&
            info.analyzedInstructions[0].steps &&
            info.analyzedInstructions[0].steps.length > 0
          ) {
            instructions = info.analyzedInstructions[0].steps.map(
              (step, i) => `${i + 1}. ${step.step}`
            ).join("<br>");
          } else if (info.instructions) {
            instructions = info.instructions;
          }
        } catch (err) {
          console.warn(`Could not load instructions for recipe ID ${recipe.id}:`, err);
          instructions = "Failed to load instructions.";
        }

        return {
          ...recipe,
          instructions
        };
      })
    );

    output.innerHTML = detailedRecipes.map(recipe => `
      <div class="recipe-card" onclick="expandCard(this)">
        <img src="${escapeHTML(recipe.image)}" alt="${escapeHTML(recipe.title)}" />
        <h3>${escapeHTML(recipe.title)}</h3>
        <div class="recipe-details" style="display:none;">
          <p><strong>Used Ingredients:</strong> ${recipe.usedIngredients.map(i => escapeHTML(i.name)).join(", ")}</p>
          <p><strong>Missed Ingredients:</strong> ${recipe.missedIngredients.map(i => escapeHTML(i.name)).join(", ")}</p>
          <p><strong>Instructions:</strong><br>${recipe.instructions}</p>
        </div>
      </div>
    `).join("");

  } catch (error) {
    console.warn("Spoonacular API failed or returned 0 results. Falling back to local offline recipes...", error);
    displayLocalRecipes(input, output);
  }
}

// ===== Offline Fallback Logic =====
function displayLocalRecipes(input, output) {
  if (typeof recipes === 'undefined') {
      output.innerHTML = "<p>⚠️ Failed to fetch recipes and offline database is unavailable.</p>";
      return;
  }
  
  const searchTerms = input.split(",").map(i => i.trim().toLowerCase());
  
  const matchedRecipes = recipes.filter(recipe => {
      // Basic match logic: search for any term in the recipe's ingredients array
      return searchTerms.some(term => 
          recipe.ingredients.some(ing => ing.toLowerCase().includes(term))
      );
  });

  if (matchedRecipes.length === 0) {
      output.innerHTML = "<p>No matching recipes found, even in our offline database.</p>";
      return;
  }

  output.innerHTML = matchedRecipes.map(recipe => `
      <div class="recipe-card" onclick="expandCard(this)">
        <img src="${escapeHTML(recipe.image) || 'assets/images/us.jpeg'}" alt="${escapeHTML(recipe.name)}" />
        <h3>${escapeHTML(recipe.name)}</h3>
        <div class="recipe-details" style="display:none;">
          <p><strong>Ingredients:</strong> ${recipe.ingredients.map(escapeHTML).join(", ")}</p>
          <p><strong>Instructions:</strong><br>${recipe.steps ? recipe.steps.map((s,i) => `${i+1}. ${escapeHTML(s)}`).join("<br>") : "No instructions available"}</p>
        </div>
      </div>
    `).join("");
}

function clearInputAndCollapse() {
  // Clear input field
  document.getElementById("ingredient-input").value = "";

  // Collapse any expanded recipe card
  const allCards = document.querySelectorAll(".recipe-card");
  allCards.forEach(card => {
    card.classList.remove("expanded");
    card.style.display = "block";
    const details = card.querySelector(".recipe-details");
    if (details) details.style.display = "none";
  });

  // Optional: clear the recipe output
  document.getElementById("recipe-output").innerHTML = "";
}

function scrollToIngredients() {
  const allCards = document.querySelectorAll(".recipe-card");

  allCards.forEach(card => {
    card.classList.remove("expanded");
    card.style.display = "block";
    const details = card.querySelector(".recipe-details");
    if (details) details.style.display = "none";
  });

  // Optional: Scroll smoothly to the top of the recipe list
  const recipeOutput = document.getElementById("recipe-output");
  if (recipeOutput) {
    recipeOutput.scrollIntoView({ behavior: "smooth" });
  }
}


function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}
function handleContactSubmit(event) {
  event.preventDefault(); // prevent the default form submission
  alert("Thank you! Your message has been sent.");
  document.getElementById("contact-form").reset(); // optional: clear form fields
}    // ✅ Declare recipes array (renamed to prevent conflict with recipes_details.js)
    const addedRecipesList = [];

    function handleAddRecipe(event) {
      event.preventDefault();

      const name = document.getElementById("new-name").value.trim();
      const ingredients = document.getElementById("new-ingredients").value.trim().toLowerCase().split(",");
      const instructions = document.getElementById("new-instructions").value.trim();
      const image = document.getElementById("new-image").value.trim();

      const newRecipe = {
        name,
        ingredients: ingredients.map(i => i.trim()),
        instructions,
        image
      };

      addedRecipesList.push(newRecipe); // ✅ Now works
      saveRecipeToLocal(name, newRecipe.ingredients, instructions, image);
      alert("✅ Recipe added successfully!");
      document.getElementById("new-recipe-form").reset();
    }

    function saveRecipeToLocal(name, ingredients, instructions, image) {
      const existing = JSON.parse(localStorage.getItem("myAddedRecipes") || "[]");
      existing.push({ name, ingredients, instructions, image });
      localStorage.setItem("myAddedRecipes", JSON.stringify(existing));
    }

    // 🔙 Go back to previous page
    function goBack() {
      window.history.back();
    }
// ===== Admin Credential Obfuscation =====
// Password is Base64-encoded. Plain text 'admin123' is NOT stored here.
// To change password: run btoa('your_new_password') in the browser console and update the hash below.
const adminUsername = "admin";
const _adminHash = "YWRtaW4xMjM="; // Base64 of 'admin123'

// Persist login state
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("isAdminLoggedIn") === "true") {
        const loginSection = document.getElementById("admin-login");
        const recipesSection = document.getElementById("my-recipes-section");
        if(loginSection && recipesSection) {
            loginSection.style.display = "none";
            recipesSection.style.display = "block";
            showAllMyRecipes();
        }
    }
});

function adminLogin() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username === adminUsername && btoa(password) === _adminHash) {
    sessionStorage.setItem("isAdminLoggedIn", "true");
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("my-recipes-section").style.display = "block";
    showAllMyRecipes();
  } else {
    document.getElementById("login-status").innerText = "Invalid credentials.";
  }
}

function showAllMyRecipes() {
  const container = document.getElementById("added-recipes-output");
  const saved = JSON.parse(localStorage.getItem("myAddedRecipes") || "[]");

  container.innerHTML = saved.length
    ? saved.map(r => `
        <div class="recipe-card">
          <h3>${escapeHTML(r.name)}</h3>
          <p><strong>Ingredients:</strong> ${r.ingredients.map(escapeHTML).join(", ")}</p>
          <p><strong>Instructions:</strong> ${escapeHTML(r.instructions)}</p>
        </div>
      `).join("")
    : "<p>No recipes added yet.</p>";
}

function exportAsJSON() {
  const data = localStorage.getItem("myAddedRecipes") || "[]";
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  triggerDownload(url, "my_recipes.json");
}

function exportAsCSV() {
  const data = JSON.parse(localStorage.getItem("myAddedRecipes") || "[]");
  if (data.length === 0) return;

  const headers = Object.keys(data[0]);
  const csv = [
    headers.join(","),
    ...data.map(r => headers.map(h => `"${Array.isArray(r[h]) ? r[h].join(";") : r[h]}"`).join(","))
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  triggerDownload(url, "my_recipes.csv");
}

function triggerDownload(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function clearAllRecipes() {
  const confirmClear = confirm("Are you sure you want to delete all added recipes?");
  if (confirmClear) {
    localStorage.removeItem("myAddedRecipes");
    document.getElementById("added-recipes-output").innerHTML = "<p>No recipes added yet.</p>";
    alert("All saved recipes cleared.");
  }
}

// ===== Expand-on-Click for Recipe Cards =====

function expandCard(card) {
  const isExpanded = card.classList.contains("expanded");
  const allCards = document.querySelectorAll(".recipe-card");

  if (!isExpanded) {
    // Hide all other cards
    allCards.forEach(c => {
      if (c !== card) {
        c.style.display = "none";
      } else {
        c.classList.add("expanded");
        const details = c.querySelector(".recipe-details");
        if (details) details.style.display = "block";
      }
    });
  } else {
    // Collapse and show all again
    allCards.forEach(c => {
      c.classList.remove("expanded");
      c.style.display = "block";
      const details = c.querySelector(".recipe-details");
      if (details) details.style.display = "none";
    });
  }
}
