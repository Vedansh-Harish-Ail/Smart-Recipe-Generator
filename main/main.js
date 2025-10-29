function generateRecipe() {
  const rawInput = document.getElementById('ingredient-input').value.trim();
  const output = document.getElementById('recipe-output');

  if (!rawInput) {
    output.innerHTML = "<p class='no-input-message'>Please enter at least one ingredient.</p>";
    return;
  }

  const input = rawInput.toLowerCase().split(",").map(i => i.trim());
  const saved = JSON.parse(localStorage.getItem("myAddedRecipes") || "[]");
  const allRecipes = [...recipes, ...saved];

  const matched = allRecipes.filter(recipe =>
    recipe.ingredients.some(ing => input.includes(ing.toLowerCase()))
  );

  output.innerHTML = matched.length
    ? matched.map((recipe) => `
        <div class="recipe-card" onclick="expandCard(this)">
          <img src="${recipe.image}" alt="${recipe.name}" />
          <h3>${recipe.name}</h3>
          <div class="recipe-details" style="display:none;">
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> ${Array.isArray(recipe.steps) ? recipe.steps.join("<br>") : recipe.steps}</p>
          </div>
        </div>
      `).join("")
    : "<p>No matching recipes found.</p>";
}
function scrollToIngredients(){
  window.scrollTo({ reload: 0, behavior: 'smooth' }); // Scroll to top (optional)
  setTimeout(() => {
    location.reload(); // Refresh the page
  }, 500); // Delay so it feels smooth
}


function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

function handleAddRecipe(event) {
  event.preventDefault();
  const name = document.getElementById("new-name").value.trim();
  const ingredients = document.getElementById("new-ingredients").value.trim().toLowerCase().split(",");
  const instructions = document.getElementById("new-instructions").value.trim();
  const image = document.getElementById("new-image").value.trim() || "https://source.unsplash.com/400x300/?food";

  const newRecipe = {
    name,
    ingredients: ingredients.map(i => i.trim()),
    instructions,
    image
  };

  recipes.push(newRecipe);
  saveRecipeToLocal(name, newRecipe.ingredients, instructions, image);
  alert("✅ Recipe added!");
  document.getElementById("new-recipe-form").reset();
}

function saveRecipeToLocal(name, ingredients, instructions, image) {
  const existing = JSON.parse(localStorage.getItem("myAddedRecipes") || "[]");
  existing.push({ name, ingredients, instructions, image });
  localStorage.setItem("myAddedRecipes", JSON.stringify(existing));
}
const adminUsername = "admin";
const adminPassword = "admin123";

function adminLogin() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username === adminUsername && password === adminPassword) {
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
          <h3>${r.name}</h3>
          <p><strong>Ingredients:</strong> ${r.ingredients.join(", ")}</p>
          <p><strong>Instructions:</strong> ${r.instructions}</p>
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


