const API_URL = 'api/recipes.php';
const SPOONACULAR_API_KEY = '1ce26b42c9434492b73ab1aaedf70860';

async function generateRecipe() {
  const rawInput = document.getElementById('ingredient-input').value.trim();
  const output = document.getElementById('recipe-output');

  if (!rawInput) {
    output.innerHTML = "<p class='no-input-message'>Please enter at least one ingredient.</p>";
    return;
  }

  const input = rawInput.toLowerCase().split(",").map(i => i.trim()).join(',');
  output.innerHTML = "<div class='loading-spinner'></div><p>Scouring the kitchen for recipes...</p>";

  try {
    // 1. Fetch from Local Database (PHP/SQLite)
    const dbPromise = fetch(`${API_URL}`).then(res => res.json()).catch(() => []);

    // 2. Fetch from Spoonacular API
    const spoonacularURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=5&apiKey=${SPOONACULAR_API_KEY}`;
    const spoonPromise = fetch(spoonacularURL).then(res => res.json()).catch(() => []);

    // Wait for both
    const [dbRecipes, spoonData] = await Promise.all([dbPromise, spoonPromise]);

    // 3. Filter Static Recipes (from recipes.js)
    const staticResults = recipes.filter(r =>
      r.ingredients.some(ing => input.split(',').includes(ing.toLowerCase()))
    );

    // Process Database Recipes to match UI format
    const processedDbRecipes = dbRecipes.filter(r =>
      r.ingredients.toLowerCase().includes(input.split(',')[0]) // Simple matching for now
    ).map(r => ({
      id: 'db-' + r.id,
      title: r.name,
      image: r.image_path,
      usedIngredients: r.ingredients.split(',').map(name => ({ name })),
      missedIngredients: [],
      instructions: r.instructions,
      source: 'User Contributed'
    }));

    // Get detailed info for Spoonacular recipes
    const detailedSpoonRecipes = await Promise.all(
      spoonData.map(async (recipe) => {
        let instructions = "No instructions available.";
        try {
          const infoRes = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${SPOONACULAR_API_KEY}`);
          const info = await infoRes.json();
          instructions = info.instructions || (info.analyzedInstructions?.[0]?.steps?.map((s, i) => `${i + 1}. ${s.step}`).join("<br>") || instructions);
        } catch (err) { console.warn(err); }
        return { ...recipe, instructions, source: 'Spoonacular' };
      })
    );

    // Merge all results
    const allResults = [
      ...staticResults.map(r => ({ ...r, title: r.name, source: 'Local' })),
      ...processedDbRecipes,
      ...detailedSpoonRecipes
    ];

    if (allResults.length === 0) {
      output.innerHTML = "<p>No matching recipes found. Try different ingredients!</p>";
      return;
    }

    output.innerHTML = allResults.map(recipe => `
            <div class="recipe-card" onclick="expandCard(this)">
                <div class="recipe-badge">${recipe.source}</div>
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />
                <h3>${recipe.title}</h3>
                <div class="recipe-details" style="display:none;">
                    <p><strong>Ingredients:</strong> ${recipe.ingredients ? (Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients) : (recipe.usedIngredients?.map(i => i.name).join(", "))}</p>
                    <p><strong>Instructions:</strong><br>${recipe.instructions}</p>
                </div>
            </div>
        `).join("");

  } catch (error) {
    console.error("Error generating recipes:", error);
    output.innerHTML = "<p>⚠️ Failed to fetch recipes. Please try again later.</p>";
  }
}

// Add Recipe Logic
async function handleAddRecipe(event) {
  event.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.innerText = "Publishing...";

  const formData = new FormData();
  formData.append('name', document.getElementById('new-name').value);
  formData.append('ingredients', document.getElementById('new-ingredients').value);
  formData.append('instructions', document.getElementById('new-instructions').value);
  formData.append('image', document.getElementById('new-image').files[0]);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData
    });
    const result = await response.json();

    if (result.status === 'success') {
      alert('✅ Recipe added to the community database!');
      window.location.href = 'index.html';
    } else {
      alert('❌ Error: ' + result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('❌ Network error. Is the PHP server running?');
  } finally {
    btn.disabled = false;
    btn.innerText = "Publish Recipe";
  }
}

// Admin Logic
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

function adminLogin() {
  const user = document.getElementById('login-username').value;
  const pass = document.getElementById('login-password').value;

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    document.getElementById('admin-login-container').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'flex';
    loadAdminDashboard();
  } else {
    document.getElementById('login-status').innerText = "Incorrect credentials.";
  }
}

async function loadAdminDashboard() {
  try {
    const response = await fetch(API_URL);
    const recipes = await response.json();

    const list = document.getElementById('admin-recipe-list');
    document.getElementById('stats-total-recipes').innerText = recipes.length;

    list.innerHTML = recipes.map(r => `
            <tr>
                <td><img src="${r.image_path}" style="width: 50px; height: 50px; border-radius: 5px; object-fit: cover;"></td>
                <td style="font-weight: 600;">${r.name}</td>
                <td style="color: #666; font-size: 0.9rem;">${r.ingredients}</td>
                <td>
                    <button class="delete-btn" onclick="deleteRecipe(${r.id})">Delete</button>
                </td>
            </tr>
        `).join("");
  } catch (err) {
    console.error(err);
  }
}

async function deleteRecipe(id) {
  if (!confirm('Are you sure you want to delete this recipe?')) return;

  try {
    const response = await fetch(`${API_URL}?id=${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    if (result.status === 'success') {
      loadAdminDashboard();
    } else {
      alert('Error deleting recipe');
    }
  } catch (err) {
    console.error(err);
  }
}

// Common Utilities
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

function goBack() {
  window.history.back();
}

function expandCard(card) {
  const isExpanded = card.classList.contains("expanded");
  const allCards = document.querySelectorAll(".recipe-card");

  if (!isExpanded) {
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
    allCards.forEach(c => {
      c.classList.remove("expanded");
      c.style.display = "block";
      const details = c.querySelector(".recipe-details");
      if (details) details.style.display = "none";
    });
  }
}
