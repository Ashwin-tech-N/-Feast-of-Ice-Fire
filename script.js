
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'gourmet-dark': '#121212',
                'gourmet-card': '#1e1e1e',
                'gourmet-gold': '#d4af37',
                'gourmet-cream': '#f5f5f0',
                'gourmet-gray': '#2a2a2a'
            },
            fontFamily: {
                serif: ['Times New Roman', 'Times', 'serif'],
                sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
            }
        }
    }
}

const icons = {
    'temperature': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>',
    'blender': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12h6"></path><path d="M11 3v4"></path><path d="M15.17 6H8.83l-1.38 8.8c-.14.9.55 1.7 1.45 1.7h6.19c.9 0 1.6-.8 1.45-1.7L15.17 6z"></path><path d="M12 22a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4z"></path></svg>',
    'egg': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c4.97 0 9-4.03 9-9 0-4.97-9-13-9-13S3 8.03 3 13c0 4.97 4.03 9 9 9z"></path></svg>',
    'spoon': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-7.5-7.5"></path><circle cx="9" cy="9" r="6"></circle></svg>',
    'fire': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
    'coffee': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>',
    'layer': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    'clone': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
    'cold': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20"></path><path d="M12 2v20"></path><path d="M20 16l-4-4 4-4"></path><path d="M4 8l4 4-4 4"></path><path d="M16 4l-4 4-4-4"></path><path d="M8 20l4-4 4 4"></path></svg>',
    'filter': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>',
    'wind': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>',
    'watch': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>',
    'bread': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6z"></path><path d="M6 14H5a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2h-1"></path></svg>',
    'lemon': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.5 15.5 20 20"></path><path d="M18.5 20a4.5 4.5 0 0 0 1.5-6.5L6.5 2 2 6.5 13.5 18A4.5 4.5 0 0 0 20 18.5Z"></path></svg>',
    'icecream': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7 11 4.37-4.37a2.12 2.12 0 0 1 3 3L10 14"></path><path d="M12 16a6 6 0 1 0-5.66-9 6 6 0 1 0 10.3 8.48A6 6 0 0 0 12 16z"></path><path d="M12 16v3"></path></svg>',
    'cloud': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
    'leaf': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>',
    'scroll': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>',
    'circle': '<svg class="icon w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>'
};

const recipes = [
    {
        id: 0,
        title: "Molten Chocolate Lava Cake",
        subtitle: "Signature Dessert",
        desc: "A decadent, restaurant-quality dessert with a liquid chocolate center. Prepared in under 30 minutes.",
        time: "27 Mins",
        difficulty: "Easy",
        image: "images/Lava-Cake-5.png",
        downloadUrl: "images/molten chocolate cake.PNG",
        chefNote: "The secret to a perfect lava cake is timing. Even one minute too long will turn the molten center into a sponge cake. Use high-quality chocolate with at least 60% cocoa for depth.",
        baseServings: 4,
        ingredients: [
            { name: "Unsalted Butter", amount: 115, unit: "g" },
            { name: "Bitter Chocolate (60%+)", amount: 170, unit: "g" },
            { name: "Large Eggs", amount: 2, unit: "pc" },
            { name: "Egg Yolks", amount: 2, unit: "pc" },
            { name: "Granulated Sugar", amount: 0.25, unit: "cup" },
            { name: "All-Purpose Flour", amount: 2, unit: "tbsp" }
        ],
        steps: [
            { title: "Prep Ramekins", desc: "Preheat oven to 425°F. Grease 4 ramekins with butter and dust with flour.", icon: "temperature", hasTimer: false },
            { title: "Melt Chocolate", desc: "Combine butter and chocolate. Microwave in 20s bursts until smooth.", icon: "blender", hasTimer: false },
            { title: "Whisk Eggs", desc: "Beat eggs, yolks, and sugar until pale and thick ribbons form.", icon: "egg", hasTimer: false },
            { title: "Fold Batter", desc: "Fold chocolate into eggs. Sift in flour and fold gently.", icon: "spoon", hasTimer: false },
            { title: "Bake", desc: "Bake for exactly 12-14 mins. Edges firm, center soft.", icon: "fire", hasTimer: true, timerDuration: 12 * 60 }
        ]
    },
    {
        id: 1,
        title: "Classic Italian Tiramisu",
        subtitle: "Traditional Recipe",
        desc: "Layers of coffee-soaked ladyfingers and creamy mascarpone filling, dusted with rich cocoa powder.",
        time: "45 Mins + Chill",
        difficulty: "Medium",
        image: "images/Tiramisu.png",
        downloadUrl: "images/classic italian tiramisu.PNG",
        chefNote: "Do not over-soak the ladyfingers; a quick dip is all they need. Allow the dessert to set in the fridge for at least 6 hours for the flavors to meld perfectly.",
        baseServings: 6,
        ingredients: [
            { name: "Espresso Coffee", amount: 1.5, unit: "cups" },
            { name: "Ladyfingers", amount: 24, unit: "pc" },
            { name: "Mascarpone Cheese", amount: 500, unit: "g" },
            { name: "Large Eggs", amount: 4, unit: "pc" },
            { name: "Sugar", amount: 100, unit: "g" },
            { name: "Cocoa Powder", amount: 2, unit: "tbsp" }
        ],
        steps: [
            { title: "Brew Coffee", desc: "Brew strong espresso and let it cool completely.", icon: "coffee", hasTimer: false },
            { title: "Make Cream", desc: "Whisk yolks and sugar. Beat in mascarpone. Whip egg whites stiff and fold in.", icon: "blender", hasTimer: false },
            { title: "Dip & Layer", desc: "Quickly dip ladyfingers in coffee. Arrange in dish. Spread cream on top.", icon: "layer", hasTimer: false },
            { title: "Repeat", desc: "Add another layer of dipped cookies and remaining cream.", icon: "clone", hasTimer: false },
            { title: "Chill", desc: "Refrigerate for at least 4 hours. Dust with cocoa before serving.", icon: "cold", hasTimer: true, timerDuration: 4 * 60 * 60 }
        ]
    },
    {
        id: 2,
        title: "Raspberry French Macarons",
        subtitle: "Patisserie Style",
        desc: "Delicate almond meringue cookies sandwiched with fresh raspberry buttercream.",
        time: "1 Hr 20 Mins",
        difficulty: "Hard",
        image: "images/raspberry french.png",
        downloadUrl: "images/raspberry french macarons.PNG",
        chefNote: "Precision is key. Weigh ingredients to the gram. The 'macaronage' (folding) process is done when batter flows like molten lava.",
        baseServings: 12,
        ingredients: [
            { name: "Almond Flour", amount: 100, unit: "g" },
            { name: "Powdered Sugar", amount: 100, unit: "g" },
            { name: "Egg Whites", amount: 70, unit: "g" },
            { name: "Granulated Sugar", amount: 90, unit: "g" },
            { name: "Raspberries", amount: 100, unit: "g" },
            { name: "Butter", amount: 50, unit: "g" }
        ],
        steps: [
            { title: "Sift Dry", desc: "Sift almond flour and powdered sugar three times to ensure smoothness.", icon: "filter", hasTimer: false },
            { title: "Whip Meringue", desc: "Whip egg whites and sugar to stiff glossy peaks.", icon: "wind", hasTimer: false },
            { title: "Macaronage", desc: "Fold dry ingredients into meringue until batter ribbons.", icon: "spoon", hasTimer: false },
            { title: "Pipe & Rest", desc: "Pipe circles on mat. Slam tray. Let rest until skin forms (30m).", icon: "watch", hasTimer: true, timerDuration: 30 * 60 },
            { title: "Bake", desc: "Bake at 300°F for 14-16 mins. Cool completely before filling.", icon: "fire", hasTimer: true, timerDuration: 15 * 60 }
        ]
    },
    {
        id: 3,
        title: "Lemon Meringue Tart",
        subtitle: "Zesty & Sweet",
        desc: "Buttery shortcrust pastry filled with sharp lemon curd and topped with toasted Italian meringue.",
        time: "1 Hr",
        difficulty: "Medium",
        image: "images/Lemon-Meringue-Tart-2.png",
        downloadUrl: "images/lemon meringue tart.PNG",
        chefNote: "For the silkiest curd, strain it through a fine mesh sieve. Toast the meringue just before serving for the best texture.",
        baseServings: 8,
        ingredients: [
            { name: "Pie Crust", amount: 1, unit: "sheet" },
            { name: "Lemon Juice", amount: 1, unit: "cup" },
            { name: "Eggs", amount: 4, unit: "pc" },
            { name: "Sugar", amount: 1.5, unit: "cup" },
            { name: "Butter", amount: 100, unit: "g" },
            { name: "Cornstarch", amount: 2, unit: "tbsp" }
        ],
        steps: [
            { title: "Blind Bake", desc: "Bake crust with weights at 375°F for 15 mins. Cool.", icon: "bread", hasTimer: true, timerDuration: 15 * 60 },
            { title: "Make Curd", desc: "Cook lemon juice, sugar, cornstarch, eggs over low heat until thick.", icon: "lemon", hasTimer: false },
            { title: "Fill Tart", desc: "Whisk butter into hot curd. Pour into crust. Chill.", icon: "icecream", hasTimer: false },
            { title: "Meringue", desc: "Whip whites and sugar over steam (Swiss style) then beat to stiff peaks.", icon: "cloud", hasTimer: false },
            { title: "Torch", desc: "Pile meringue on tart. Use blowtorch to brown edges.", icon: "fire", hasTimer: false }
        ]
    },
    {
        id: 4,
        title: "Matcha Swiss Roll",
        subtitle: "Asian Fusion",
        desc: "A light, airy green tea sponge cake rolled with fresh whipped cream.",
        time: "45 Mins",
        difficulty: "Medium",
        image: "images/Strawberry-Matcha-Cake.png",
        downloadUrl: "images/matcha swiss roll.PNG",
        chefNote: "Whip the egg whites only to soft peaks for a flexible cake that won't crack when rolled. Roll while warm.",
        baseServings: 8,
        ingredients: [
            { name: "Cake Flour", amount: 60, unit: "g" },
            { name: "Matcha Powder", amount: 10, unit: "g" },
            { name: "Eggs", amount: 4, unit: "pc" },
            { name: "Sugar", amount: 80, unit: "g" },
            { name: "Milk", amount: 40, unit: "ml" },
            { name: "Heavy Cream", amount: 200, unit: "ml" }
        ],
        steps: [
            { title: "Whisk Yolks", desc: "Whisk yolks, half sugar, milk, oil. Sift in flour/matcha.", icon: "leaf", hasTimer: false },
            { title: "Meringue", desc: "Whip whites and remaining sugar to soft peaks.", icon: "wind", hasTimer: false },
            { title: "Fold", desc: "Gently fold meringue into green batter. Pour into lined pan.", icon: "scroll", hasTimer: false },
            { title: "Bake", desc: "Bake at 375°F for 12 mins. Flip onto towel.", icon: "fire", hasTimer: true, timerDuration: 12 * 60 },
            { title: "Roll", desc: "Spread cream on cooled cake. Roll tightly. Chill.", icon: "circle", hasTimer: false }
        ]
    }
];

let currentRecipeIdx = 0;
let currentServings = 4;
let currentStepIdx = 0;
let timerInterval = null;
let isTimerRunning = false;
let timerSecondsLeft = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadRecipe(0);
    setupIntersectionObserver();

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / height) * 100;
        document.getElementById('scroll-progress').style.width = scrolled + '%';
    });
});

function toggleMenu() {
    const drawer = document.querySelector('body');
    const overlay = document.getElementById('menu-overlay');

    if (drawer.classList.contains('menu-open')) {
        drawer.classList.remove('menu-open');
        overlay.classList.add('hidden');
        overlay.classList.remove('opacity-100');
        document.body.style.overflow = '';
    } else {
        drawer.classList.add('menu-open');
        overlay.classList.remove('hidden');
        void overlay.offsetWidth;
        overlay.classList.add('opacity-100');
        document.body.style.overflow = 'hidden';
    }
}

function selectRecipe(index) {
    toggleMenu();
    if (index === currentRecipeIdx) return;

    const elements = document.querySelectorAll('.fade-content');
    elements.forEach(el => el.classList.add('fade-out'));

    setTimeout(() => {
        loadRecipe(index);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        elements.forEach(el => el.classList.remove('fade-out'));
    }, 400);
}

function loadRecipe(index) {
    currentRecipeIdx = index;
    const r = recipes[index];
    currentServings = r.baseServings;

    document.querySelectorAll('.menu-item').forEach((btn, idx) => {
        if (idx === index) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    document.getElementById('hero-img').style.backgroundImage = `url('${r.image}')`;
    
    document.getElementById('hero-subtitle').innerText = r.subtitle;
    document.getElementById('hero-title').innerHTML = r.title.replace(' ', '<br><span class="font-normal text-white">') + '</span>';
    document.getElementById('hero-desc').innerText = r.desc;
    document.getElementById('hero-time').innerText = r.time;
    document.getElementById('hero-difficulty').innerText = r.difficulty;
    document.getElementById('servings-display-hero').innerText = `${currentServings} Servings`;

    document.getElementById('chef-note').innerText = r.chefNote;
    document.getElementById('servings-display').innerText = currentServings;

    renderIngredients();
    renderInstructions();
}

function updateServings(change) {
    const newServings = currentServings + change;
    if (newServings < 1 || newServings > 50) return;
    currentServings = newServings;

    document.getElementById('servings-display').innerText = currentServings;
    document.getElementById('servings-display-hero').innerText = `${currentServings} Servings`;

    const container = document.getElementById('ingredients-container');
    container.style.opacity = '0';
    setTimeout(() => {
        renderIngredients();
        container.style.opacity = '1';
    }, 200);
}

function renderIngredients() {
    const r = recipes[currentRecipeIdx];
    const container = document.getElementById('ingredients-container');
    container.innerHTML = '';

    const ratio = currentServings / r.baseServings;

    r.ingredients.forEach((ing) => {
        const amount = (ing.amount * ratio).toLocaleString(undefined, { maximumFractionDigits: 1 });
        const el = document.createElement('div');
        el.className = 'ingredient-card flex items-center gap-4 p-4 rounded-lg cursor-pointer group';
        el.onclick = () => toggleIngredient(el);

        el.innerHTML = `
            <div class="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center check-circle group-hover:border-gourmet-gold">
                <svg class="icon text-black text-xs opacity-0 transition-opacity w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="flex-1 font-sans font-light text-gray-300 transition-colors">
                <strong class="text-white font-medium">${amount} ${ing.unit}</strong> ${ing.name}
            </div>
        `;
        container.appendChild(el);
    });
}

function toggleIngredient(el) {
    el.classList.toggle('ingredient-checked');
    const icon = el.querySelector('svg');
    icon.style.opacity = el.classList.contains('ingredient-checked') ? '1' : '0';
}

function renderInstructions() {
    const r = recipes[currentRecipeIdx];
    const container = document.getElementById('instructions-container');
    container.innerHTML = '';

    r.steps.forEach((step, idx) => {
        const el = document.createElement('div');
        el.className = 'relative reveal group';
        el.innerHTML = `
            <div class="absolute -left-[41px] top-0 w-5 h-5 bg-gourmet-dark border-2 border-gourmet-gold rounded-full z-10 group-hover:bg-gourmet-gold transition-colors duration-300"></div>
            <span class="text-gourmet-gold text-xs tracking-widest uppercase mb-2 block font-bold">Step 0${idx + 1}</span>
            <h3 class="text-2xl font-serif text-white mb-3 group-hover:text-gourmet-gold transition-colors">${step.title}</h3>
            <p class="text-gray-400 font-sans font-light leading-relaxed max-w-xl">${step.desc}</p>
        `;
        container.appendChild(el);
    });
    setupIntersectionObserver();
}

function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function enterFocusMode() {
    const modal = document.getElementById('focus-mode');
    modal.classList.remove('hidden');
    void modal.offsetWidth;
    modal.classList.remove('opacity-0');
    modal.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';

    currentStepIdx = 0;
    updateFocusStep();
}

function exitFocusMode() {
    const modal = document.getElementById('focus-mode');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 500);

    if (timerInterval) clearInterval(timerInterval);
}

function updateFocusStep() {
    const r = recipes[currentRecipeIdx];
    const step = r.steps[currentStepIdx];

    document.getElementById('focus-step-num').innerText = currentStepIdx + 1;
    document.getElementById('focus-title').innerText = step.title;
    document.getElementById('focus-desc').innerText = step.desc;
    document.getElementById('focus-icon-container').innerHTML = icons[step.icon] || icons['fire'];

    const progress = ((currentStepIdx + 1) / r.steps.length) * 100;
    document.getElementById('focus-progress').style.width = `${progress}%`;

    const nextBtn = document.getElementById('btn-next-step');
    if (currentStepIdx === r.steps.length - 1) {
        nextBtn.innerHTML = 'Finish <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else {
        nextBtn.innerHTML = 'Next <span class="hidden md:inline">Step</span> <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
    }

    const timerContainer = document.getElementById('focus-timer-container');
    if (step.hasTimer) {
        timerContainer.classList.remove('hidden');
        timerSecondsLeft = step.timerDuration;
        isTimerRunning = false;
        if (timerInterval) clearInterval(timerInterval);

        const m = Math.floor(timerSecondsLeft / 60);
        document.getElementById('focus-timer-text').innerText = `Start ${m}m Timer`;
    } else {
        timerContainer.classList.add('hidden');
    }
}

function nextStep() {
    const r = recipes[currentRecipeIdx];
    if (currentStepIdx < r.steps.length - 1) {
        currentStepIdx++;
        const content = document.querySelector('#focus-mode .max-w-3xl');
        content.style.opacity = '0';
        content.style.transform = 'translateY(10px)';

        setTimeout(() => {
            updateFocusStep();
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 300);
    } else {
        exitFocusMode();
        setTimeout(() => {
            const msg = document.createElement('div');
            msg.className = 'fixed top-10 left-1/2 transform -translate-x-1/2 bg-gourmet-gold text-black px-6 py-3 rounded shadow-xl z-50 font-bold tracking-widest uppercase text-sm animate-bounce';
            msg.innerText = `Enjoy your ${r.title}!`;
            document.body.appendChild(msg);
            setTimeout(() => msg.remove(), 3000);
        }, 500);
    }
}

function prevStep() {
    if (currentStepIdx > 0) {
        currentStepIdx--;
        updateFocusStep();
    }
}

function toggleFocusTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        document.getElementById('focus-timer-text').innerText = "Paused";
    } else {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            timerSecondsLeft--;
            updateTimerText(timerSecondsLeft);

            if (timerSecondsLeft <= 0) {
                clearInterval(timerInterval);
                isTimerRunning = false;
                document.getElementById('focus-timer-text').innerText = "Finished";
            }
        }, 1000);
    }
}

function updateTimerText(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    const text = `${m}:${s < 10 ? '0' : ''}${s}`;
    document.getElementById('focus-timer-text').innerText = isTimerRunning ? text : `Start ${text} Timer`;
}


async function downloadRecipeImage() {
    const r = recipes[currentRecipeIdx];
    const btnText = document.getElementById('download-text');
    const originalText = btnText.innerText;
    const btn = document.getElementById('download-btn');
    
    try {
        btnText.innerText = "Downloading...";
        btn.classList.add('opacity-50', 'cursor-not-allowed');

        const response = await fetch(r.downloadUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const blob = await response.blob();
        
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        
        const extension = 'jpg';
        link.download = `${r.title.replace(/\s+/g, '_')}_Print.${extension}`;
        
        document.body.appendChild(link);
        link.click();
        
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
    } catch (error) {
        console.error('Download failed:', error);
        alert('Could not download the image. It might be blocked by the browser or the connection is unstable.');
    } finally {
        btnText.innerText = originalText;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
    }

}
