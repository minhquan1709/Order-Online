/* ===== MENU (có ảnh) ===== */
const MENU = [
    {
        id: 1,
        name: "Sinh Tố Táo",
        price: 25000,
        image: "https://i.pinimg.com/1200x/ff/70/d7/ff70d7b5830e26127385c9960708a652.jpg"
    },
    {
        id: 2,
        name: "Sinh Tố Xoài",
        price: 30000,
        image: "https://i.pinimg.com/1200x/6c/0e/d6/6c0ed6b81e560ed770d060fd33176fdb.jpg"
    },
    {
        id: 3,
        name: "Sinh Tố Bơ",
        price: 35000,
        image: "https://i.pinimg.com/1200x/33/d5/06/33d5064e639617fc5b6c55799591142f.jpg"
    },
    {
        id: 4,
        name: "Sinh Tố Dâu",
        price: 25000,
        image: "https://i.pinimg.com/1200x/e6/44/1b/e6441b48a7d9250670ad7146628a9fd9.jpg"
    },
    {
        id: 5,
        name: "Sinh Tố Chuối",
        price: 20000,
        image: "https://i.pinimg.com/1200x/07/4c/ae/074cae0c13bff940dd1e164d21da28b5.jpg"
    },
    {
        id: 6,
        name: "Sinh Tố Sầu Riêng",
        price: 45000,
        image: "https://i.pinimg.com/736x/61/77/cb/6177cbcf4b84bbe64f986bff1b140ee6.jpg"
    },
    {
        id: 7,
        name: "Cappuccino",
        price: 35000,
        image: "https://i.pinimg.com/736x/ed/ac/20/edac20a52abfab5add086cbd2a9defb9.jpg"
    },
    {
        id: 8,
        name: "Cà phê Đen",
        price: 30000,
        image: "https://i.pinimg.com/736x/21/96/00/219600f93f8a512359cffecaea609bd9.jpg"
    },
    {
        id: 9,
        name: "Cà phê Nâu",
        price: 30000,
        image: "https://i.pinimg.com/736x/ea/7e/b9/ea7eb93cc58e4fcca74724dde5764b81.jpg"
    },
    {
        id: 10,
        name: "Cà phê Chocolate",
        price: 45000,
        image: "https://i.pinimg.com/1200x/16/63/77/1663771184d36a340a0cfce65f0f7b39.jpg"
    },
    {
        id: 11,
        name: "Cà phê Muối",
        price: 55000,
        image: "https://i.pinimg.com/736x/cc/9d/41/cc9d41202afe34f486473c407c3ba05f.jpg"
    },
    {
        id: 12,
        name: "Cà phê Trứng",
        price: 55000,
        image: "https://i.pinimg.com/1200x/1b/23/75/1b237547d5eb33011da963e7859b2e62.jpg"
    },
    {
        id: 13,
        name: "Bạc Xỉu",
        price: 45000,
        image: "https://i.pinimg.com/1200x/6b/d9/8f/6bd98fdfee237e5f4ce714cbb26aa41f.jpg"
    },
    {
        id: 14,
        name: "Hamburger",
        price: 65000,
        image: "https://i.pinimg.com/1200x/2d/5c/ee/2d5ceebac62f51a512de770fe37bbaa2.jpg"
    },
    {
        id: 15,
        name: "Hotdog ",
        price: 25000,
        image: "https://i.pinimg.com/1200x/02/30/3b/02303b33085f5453c10032601721bc8e.jpg"
    },
    {
        id: 16,
        name: "Gà rán",
        price: 45000,
        image: "https://i.pinimg.com/1200x/af/51/13/af51137ee90fc7f135c40a19c5c6b580.jpg"
    },
    {
        id: 17,
        name: "Pizza",
        price: 95000,
        image: "https://i.pinimg.com/736x/7c/d8/f8/7cd8f8d413ea5670eb3ddf6e24dfe572.jpg"
    },
    {
        id: 18,
        name: "Mỳ Ý",
        price: 65000,
        image: "https://i.pinimg.com/736x/f6/46/fb/f646fb931e8a7a927bd19309f9cb04b4.jpg"
    },
    {
        id: 19,
        name: "Tokbokki",
        price: 75000,
        image: "https://i.pinimg.com/736x/14/02/d5/1402d556838a16911f815a6dc7cef490.jpg"
    },
    {
        id: 20,
        name: "Bánh Bao",
        price: 15000,
        image: "https://i.pinimg.com/736x/8a/c0/0d/8ac00dfdc4be9786dd3ca8eef6b3bd48.jpg"
    },
    {
        id: 21,
        name: "Xúc Xích",
        price: 10000,
        image: "https://i.pinimg.com/736x/a2/3a/5b/a23a5b8c660dcc313e31d02283aadfb2.jpg"
    },
    {
        id: 22,
        name: "Mỳ Cay",
        price: 90000,
        image: "https://i.pinimg.com/736x/e4/54/53/e454531f88c13439459bd605c072ac08.jpg"
    }
];

let cart = [];

/* ===== LẤY SỐ BÀN ===== */
const params = new URLSearchParams(window.location.search);
const table = params.get("table") || "N/A";
document.getElementById("tableInfo").innerText = "🪑 Bàn số: " + table;

/* ===== HIỂN THỊ MENU ===== */
const menuDiv = document.getElementById("menu");

MENU.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>${item.price.toLocaleString()} VNĐ</p>
        <button onclick="addItem(${item.id})">➕ Thêm</button>
    `;
    menuDiv.appendChild(div);
});

/* ===== THÊM MÓN ===== */
function addItem(id) {
    const item = MENU.find(m => m.id === id);
    const exist = cart.find(i => i.id === id);

    if (exist) exist.qty++;
    else cart.push({ ...item, qty: 1, note: "" });

    renderOrder();
}

/* ===== TĂNG / GIẢM ===== */
function increase(id) {
    cart.find(i => i.id === id).qty++;
    renderOrder();
}

function decrease(id) {
    const item = cart.find(i => i.id === id);
    item.qty--;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    renderOrder();
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    renderOrder();
}

/* ===== GHI CHÚ ===== */
function updateNote(id, value) {
    const item = cart.find(i => i.id === id);
    item.note = value;
}

/* ===== HIỂN THỊ ĐƠN ===== */
function renderOrder() {
    const list = document.getElementById("orderList");
    list.innerHTML = "";

    cart.forEach(i => {
        const div = document.createElement("div");
        div.className = "order-item";
        div.innerHTML = `
            <div>
                <b>${i.name}</b>
                <input 
                    type="text"
                    placeholder="Ghi chú (ít đá, ít đường...)"
                    value="${i.note}"
                    oninput="updateNote(${i.id}, this.value)"
                >
            </div>

            <div class="qty">
                <button onclick="decrease(${i.id})">➖</button>
                <span>${i.qty}</span>
                <button onclick="increase(${i.id})">➕</button>
                <button class="remove" onclick="removeItem(${i.id})">❌</button>
            </div>
        `;
        list.appendChild(div);
    });

    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    document.getElementById("total").innerText = total.toLocaleString();
}

/* ===== GỬI ORDER ===== */
function sendOrder() {
    if (cart.length === 0) {
        alert("❌ Chưa chọn món");
        return;
    }

    const orderData = {
        table: table,
        items: cart.map(i => ({
            id: i.id,
            name: i.name,
            qty: i.qty,
            price: i.price,
            note: i.note
        })),
        total: cart.reduce((s, i) => s + i.price * i.qty, 0),
        status: "new",
        time: Date.now()
    };

    db.ref("orders").push(orderData)
        .then(() => {
            alert("✅ Order đã gửi tới quầy!");
            cart = [];
            renderOrder();
        })
        .catch(err => {
            console.error(err);
            alert("❌ Lỗi gửi order");
        });
}

function testSendOrder() {
  db.ref("orders").push({
    table: 1,
    items: [{ name: "Cafe sữa", qty: 1 }],
    status: "new",
    time: Date.now()
  }).then(() => {
    alert("Gửi đơn thành công!");
  });
}
