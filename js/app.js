(function () {
    "use strict";

    // ── State ──
    let selectedIngredients = new Set();
    let searchText = "";
    let filterCategory = "all";
    let filterTime = "all";
    let favorites = JSON.parse(localStorage.getItem("recipe_favorites") || "[]");
    let showFavoritesOnly = false;

    // ── DOM refs ──
    const $ = (s) => document.querySelector(s);
    const $$ = (s) => document.querySelectorAll(s);

    // ── Init ──
    document.addEventListener("DOMContentLoaded", () => {
        renderIngredientTags();
        renderRecipes();
        bindEvents();
    });

    // ── Ingredient Tags ──
    function renderIngredientTags() {
        const container = $("#ingredient-tags");
        container.innerHTML = "";

        Object.entries(INGREDIENT_CATEGORIES).forEach(([cat, items]) => {
            const group = document.createElement("div");
            group.className = "tag-group";
            const label = document.createElement("span");
            label.className = "tag-group-label";
            label.textContent = cat;
            group.appendChild(label);

            items.forEach((item) => {
                const btn = document.createElement("button");
                btn.className = "tag-btn" + (selectedIngredients.has(item) ? " active" : "");
                btn.textContent = item;
                btn.dataset.ingredient = item;
                btn.addEventListener("click", () => toggleIngredient(item));
                group.appendChild(btn);
            });
            container.appendChild(group);
        });
    }

    function toggleIngredient(name) {
        if (selectedIngredients.has(name)) {
            selectedIngredients.delete(name);
        } else {
            selectedIngredients.add(name);
        }
        renderIngredientTags();
        renderRecipes();
        updateSelectionSummary();
    }

    function clearSelection() {
        selectedIngredients.clear();
        searchText = "";
        $("#search-input").value = "";
        renderIngredientTags();
        renderRecipes();
        updateSelectionSummary();
    }

    function updateSelectionSummary() {
        const el = $("#selection-summary");
        if (selectedIngredients.size === 0) {
            el.style.display = "none";
        } else {
            el.style.display = "flex";
            el.querySelector(".summary-text").textContent =
                [...selectedIngredients].join("、") + " を使ったレシピ";
        }
    }

    // ── Filter Recipes ──
    function getFilteredRecipes() {
        let results = RECIPES;

        // Ingredient filter
        if (selectedIngredients.size > 0) {
            results = results.filter((r) =>
                [...selectedIngredients].some(
                    (ing) =>
                        r.mainIngredient === ing ||
                        r.tags.includes(ing)
                )
            );
        }

        // Text search
        if (searchText.trim()) {
            const q = searchText.trim().toLowerCase();
            results = results.filter(
                (r) =>
                    r.name.toLowerCase().includes(q) ||
                    r.tags.some((t) => t.includes(q)) ||
                    r.mainIngredient.includes(q) ||
                    r.ingredients.some((i) => i.name.includes(q))
            );
        }

        // Category filter
        if (filterCategory !== "all") {
            results = results.filter((r) => r.category === filterCategory);
        }

        // Time filter
        if (filterTime !== "all") {
            const max = parseInt(filterTime);
            results = results.filter((r) => r.time <= max);
        }

        // Favorites
        if (showFavoritesOnly) {
            results = results.filter((r) => favorites.includes(r.id));
        }

        return results;
    }

    // ── Render Recipes ──
    function renderRecipes() {
        const grid = $("#recipe-grid");
        const filtered = getFilteredRecipes();
        const countEl = $("#recipe-count");
        countEl.textContent = filtered.length + "品";

        if (filtered.length === 0) {
            grid.innerHTML =
                '<div class="empty-state"><div class="empty-icon">🍽️</div><p>該当するレシピが見つかりません</p><p class="empty-hint">食材を変えるか、フィルタを調整してみてください</p></div>';
            return;
        }

        grid.innerHTML = filtered
            .map(
                (r) => `
      <div class="recipe-card" data-id="${r.id}">
        <div class="card-header">
          <span class="card-emoji">${r.image}</span>
          <button class="fav-btn ${favorites.includes(r.id) ? "active" : ""}" data-id="${r.id}" title="お気に入り">
            ${favorites.includes(r.id) ? "❤️" : "🤍"}
          </button>
        </div>
        <div class="card-body">
          <h3 class="card-title">${r.name}</h3>
          <div class="card-meta">
            <span class="meta-badge time-badge">⏱ ${r.time}分</span>
            <span class="meta-badge diff-badge">${r.difficulty}</span>
            <span class="meta-badge cat-badge">${r.category}</span>
          </div>
          <div class="card-tags">
            ${r.tags.map((t) => '<span class="mini-tag">' + t + "</span>").join("")}
          </div>
        </div>
      </div>`
            )
            .join("");

        // Bind card clicks
        grid.querySelectorAll(".recipe-card").forEach((card) => {
            card.addEventListener("click", (e) => {
                if (e.target.closest(".fav-btn")) return;
                openModal(card.dataset.id);
            });
        });

        // Bind fav buttons
        grid.querySelectorAll(".fav-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                toggleFavorite(btn.dataset.id);
            });
        });
    }

    // ── Modal ──
    function openModal(id) {
        const recipe = RECIPES.find((r) => r.id === id);
        if (!recipe) return;

        const modal = $("#recipe-modal");
        const content = $("#modal-content");

        const ytLinks = buildYoutubeLinks(recipe);

        content.innerHTML = `
      <div class="modal-header-bar">
        <span class="modal-emoji">${recipe.image}</span>
        <div>
          <h2 class="modal-title">${recipe.name}</h2>
          <div class="modal-meta">
            <span class="meta-badge time-badge">⏱ ${recipe.time}分</span>
            <span class="meta-badge diff-badge">${recipe.difficulty}</span>
            <span class="meta-badge cat-badge">${recipe.category}</span>
            <span class="meta-badge serv-badge">👤 ${recipe.servings}人前</span>
          </div>
        </div>
        <button class="modal-fav-btn ${favorites.includes(recipe.id) ? "active" : ""}" data-id="${recipe.id}">
          ${favorites.includes(recipe.id) ? "❤️" : "🤍"}
        </button>
      </div>

      <div class="modal-section">
        <h3>📝 材料</h3>
        <ul class="ingredient-list">
          ${recipe.ingredients.map((i) => `<li><span class="ing-name">${i.name}</span><span class="ing-amount">${i.amount}</span></li>`).join("")}
        </ul>
      </div>

      <div class="modal-section">
        <h3>👨‍🍳 作り方</h3>
        <ol class="steps-list">
          ${recipe.steps.map((s) => `<li>${s}</li>`).join("")}
        </ol>
      </div>

      <div class="modal-section youtube-section">
        <h3>🎬 動画で見る</h3>
        <div class="youtube-links">
          ${ytLinks.map((l) => `<a href="${l.url}" target="_blank" rel="noopener" class="yt-link ${l.primary ? "primary" : ""}">${l.label}</a>`).join("")}
        </div>
      </div>
    `;

        modal.classList.add("open");
        document.body.style.overflow = "hidden";

        // Fav in modal
        content.querySelector(".modal-fav-btn").addEventListener("click", () => {
            toggleFavorite(recipe.id);
            openModal(recipe.id); // re-render
        });
    }

    function closeModal() {
        $("#recipe-modal").classList.remove("open");
        document.body.style.overflow = "";
    }

    // ── Favorites ──
    function toggleFavorite(id) {
        const idx = favorites.indexOf(id);
        if (idx >= 0) {
            favorites.splice(idx, 1);
        } else {
            favorites.push(id);
        }
        localStorage.setItem("recipe_favorites", JSON.stringify(favorites));
        renderRecipes();
    }

    // ── Random ──
    function randomPick() {
        const all = RECIPES;
        const pick = all[Math.floor(Math.random() * all.length)];
        // Clear filters
        selectedIngredients.clear();
        searchText = "";
        filterCategory = "all";
        filterTime = "all";
        showFavoritesOnly = false;
        $("#search-input").value = "";
        $$(".filter-btn").forEach((b) => b.classList.remove("active"));
        $('[data-filter-cat="all"]').classList.add("active");
        $('[data-filter-time="all"]').classList.add("active");
        $("#fav-toggle").classList.remove("active");
        renderIngredientTags();
        updateSelectionSummary();
        renderRecipes();
        // Open the picked recipe
        setTimeout(() => openModal(pick.id), 200);
    }

    // ── Events ──
    function bindEvents() {
        // Search input
        $("#search-input").addEventListener("input", (e) => {
            searchText = e.target.value;
            renderRecipes();
        });

        // Clear button
        $("#clear-btn").addEventListener("click", clearSelection);

        // Random button
        $("#random-btn").addEventListener("click", randomPick);

        // Modal close
        $("#modal-close").addEventListener("click", closeModal);
        $("#recipe-modal").addEventListener("click", (e) => {
            if (e.target === $("#recipe-modal")) closeModal();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeModal();
        });

        // Category filter
        $$("[data-filter-cat]").forEach((btn) => {
            btn.addEventListener("click", () => {
                $$("[data-filter-cat]").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                filterCategory = btn.dataset.filterCat;
                renderRecipes();
            });
        });

        // Time filter
        $$("[data-filter-time]").forEach((btn) => {
            btn.addEventListener("click", () => {
                $$("[data-filter-time]").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                filterTime = btn.dataset.filterTime;
                renderRecipes();
            });
        });

        // Favorite toggle
        $("#fav-toggle").addEventListener("click", () => {
            showFavoritesOnly = !showFavoritesOnly;
            $("#fav-toggle").classList.toggle("active", showFavoritesOnly);
            renderRecipes();
        });
    }
})();
