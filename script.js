function initializeApp() {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      document.getElementById("app-content").style.display = "block";
      showHomePage(); // Default to Home Page
    }, 500); // Wait for fadeout
  }, 2000);
}


const menuItems = {
  drinks: [
    { name: "Coca-Cola®", price: 85.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/8512e529-2d14-42a9-0dfc-8f7399139400/f=avif,w=960,q=80" },
    { name: "Diet Dr Pepper®", price: 88.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/16e83fd2-c4b9-4332-f77e-c3be98289e00/f=avif,w=960,q=80" },
    { name: "Sprite®", price: 85.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/b9aceef5-2f42-4253-d359-8435b30e6600/f=avif,w=960,q=80" },
    { name: "Hi-C Flashin' Fruit Punch®", price: 90.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/47d2d95a-83df-4c8c-0365-f3bf9c0d4200/f=avif,w=960,q=80" },
    { name: "Powerade®", price: 90.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/883c1f1b-3e59-4879-8e0b-7cba6cbcbb00/f=avif,w=960,q=80" },
    { name: "Mello Yello®", price: 70.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/0ffccc3f-673d-4638-fd55-af6fc635cf00/f=avif,w=960,q=80" },
    { name: "Fanta® Orange", price: 75.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/9892a464-aa86-4efb-a0f3-ee646b2df500/f=avif,w=960,q=80" },
    { name: "Minute Maid® Zero Sugar", price: 80.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/cbb82867-d1cf-47df-3779-bc193cbd3600/f=avif,w=960,q=80" },
    { name: "Unsweet Tea", price: 60.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/080a60b8-9a7d-453b-cb4d-11a8bc735100/f=avif,w=960,q=80" },

  ],
  desserts: [
  { name: "Andes Mint Chocolate Shake", price: 180.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/bf9f1d98-1053-4291-5dad-6997f45db200/f=avif,w=960,q=80" },
    { name: "Jamocha Shake", price: 180.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/33d7d3a9-b736-4195-8ffa-4e53c7efac00/f=avif,w=960,q=80" },
    { name: "Vanilla Shake", price: 180.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/9d8badff-7dc3-4aae-ffad-133656b9b100/f=avif,w=960,q=80" },
    { name: "Chocolate Shake", price: 175.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/50081b55-3b84-4988-32c0-854709ffae00/f=avif,w=960,q=80" },
    { name: "Apple Turnover", price: 163.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/73ff9253-cf09-41d5-1182-175c4f347900/f=avif,w=960,q=80" },
    { name: "Cherry Turnover", price: 163.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/fb93d263-e3a2-4bca-a76e-8efa106b8f00/f=avif,w=960,q=80" },
    { name: "Salted Caramel & Chocolate Cookie", price: 150.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/999bce34-56c8-4b5a-3b5c-45e4e3b32900/f=avif,w=960,q=80" },
  ],
  meals: [
    { name: "Ham & Swiss Melt Meal", price: 350.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/ae891047-9a95-4f88-ba0a-841f47ece000/f=avif,w=960,q=80" },
    { name: "Crispy Fish Sandwich Meal", price: 298.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/c80d7ea6-0633-48e6-92e3-3605a9fc1800/f=avif,w=960,q=80" },
    { name: "Deluxe Burger Meal", price: 390.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/3d8ed472-5b3d-4ab2-7945-43842d245800/f=avif,w=960,q=80" },
    { name: "BBQ Bacon Burger Meal", price: 310.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/34d4505d-08c8-462a-38aa-cf7d6b2e2100/f=avif,w=960,q=80" },
    { name: "Big Cheesy Bacon Burger Meal", price: 270.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/d14c1a49-0512-4a9c-6516-02fb689f8500/f=avif,w=960,q=80" },
    { name: "Classic Beef 'n Cheddar Meal", price: 270.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/3531d96c-67c4-454a-9aa8-78331300fb00/f=avif,w=960,q=80" },
    { name: "Classic Roast Beef Meal", price: 270.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/046bb04f-79b2-4e84-a077-06beb87d8000/f=avif,w=960,q=80" },
    { name: "Greek Gyro Meal", price: 270.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/a6e8f8c4-f537-4ecd-22bf-9b7bbbead900/f=avif,w=960,q=80" },
    { name: "Chicken Bacon Swiss Sandwich Meal", price: 270.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/1ac3bef8-34d9-41be-4355-9fee414bb300/f=avif,w=960,q=80" },
    { name: "Buffalo Chicken Sandwich Meal", price: 270.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/d14c1a49-0512-4a9c-6516-02fb689f8500/f=avif,w=960,q=80" },
    { name: "Chicken Tenders 3PC Meal", price: 270.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/a5892df4-d8bb-4457-84c0-2be858dbb100/f=avif,w=960,q=80" },
    { name: "Chicken Tenders 5PC Meal", price: 270.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/e7b0c335-eb6c-4dc5-c9c1-f5938babe900/f=avif,w=960,q=80" },

  ],
};

let order = [];

function initializeApp() {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    renderMenu();
  }, 2000);
}

function renderMenu(category = "home") {
  const menuContainer = document.getElementById("menu");
  menuContainer.innerHTML = `
    <div style="text-align: center; margin: 80px;">
      <h1>Welcome to 🔥CURSE🔥!</h1>
      <p style="font-size: 18px; max-width: 600px; margin: 20px auto;">
        Order your favorite Meals, Drinks, and Desserts in just a few taps. 
        Fast, easy, and delicious, always at 🔥CURSE🔥!
      </p>
    </div>
  `;

  for (const cat in menuItems) {
    if (category !== "" && category !== cat) continue;

    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const title = document.createElement("h2");
    title.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    title.style.textAlign = "center";
    title.style.marginBottom = "20px";
    categoryDiv.appendChild(title);

    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("items");

    menuItems[cat].forEach((item) => {
      const btn = document.createElement("button");
      btn.classList.add("item-btn");
      btn.onclick = () => addToOrder(item);

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;

      const name = document.createElement("div");
      name.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;

      btn.appendChild(img);
      btn.appendChild(name);
      itemsDiv.appendChild(btn);
    });

    categoryDiv.appendChild(itemsDiv);
    menuContainer.appendChild(categoryDiv);
  }
}

function filterMenu(category) {
  renderMenu(category);
}

function addToOrder(item) {
  order.push(item);
  updateSummary();
}

function removeFromOrder(index) {
  order.splice(index, 1);
  updateSummary();
}

function updateSummary() {
  const summaryList = document.getElementById("order-summary");
  summaryList.innerHTML = "";
  let total = 0;

  order.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₱${item.price.toFixed(2)}
      <button onclick="removeFromOrder(${index})" style="margin-left: 10px; color: red; border: none; background: transparent; cursor: pointer;">❌</button>
    `;
    summaryList.appendChild(li);
    total += item.price;
  });

  // Happy hour discount (2PM - 4PM)
  const currentHour = new Date().getHours();
  let discount = 0;
  if (currentHour >= 14 && currentHour <= 16) {
    discount = 0.1;
  }
  total -= total * discount;

  document.getElementById("total").textContent = total.toFixed(2);
}

function pay(method) {
  if (order.length === 0) {
    alert("Please select items before paying.");
    return;
  }

  const loadingDiv = document.getElementById("loading");
  loadingDiv.style.display = "block";

  setTimeout(() => {
    loadingDiv.style.display = "none";

    const receiptDiv = document.getElementById("receipt");
    receiptDiv.style.display = "block";

    let total = order.reduce((t, item) => t + item.price, 0);
    const currentHour = new Date().getHours();
    if (currentHour >= 14 && currentHour <= 16) {
      total -= total * 0.1;
    }
    receiptDiv.innerHTML = `
      <div class="receipt-container">
        <h3>🧾 Receipt</h3>
        <h4>Payment Method: <strong>${method}</strong></h4>
        <ul>${order.map(item => `<li>${item.name} - ₱${item.price.toFixed(2)}</li>`).join("")}</ul>
        <h4><strong>Total Paid:</strong> ₱${total.toFixed(2)}</h4>
        <h4>🔥 Thank you for your order!</h4>
      </div>
    `;
  }, 3000);
}

function startNewOrder() {
  order = [];
  updateSummary();
  document.getElementById("receipt").style.display = "none";
  renderMenu();
}