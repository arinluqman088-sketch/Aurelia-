const LS = "AURELIA_BOOK_LIBRARY_PRO_V2";
const ADMIN_PASS = "1234";

function uid(){
  return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2,9);
}

const sampleBooks = [
  {id:uid(),title:"هەورامییەکانی دڵ",author:"نووسەری کورد",category:"ڕۆمان",year:"2024",desc:"ڕۆمانێکی کوردی لەسەر خەون، ژیان و گەڕان بەدوای خۆناسین.",text:"ئەمە نموونەی ناوەڕۆکی کتێبە. لێرە دەتوانیت پوختە، بەشێک لە کتێب، یان لینکی PDF دابنێیت.",link:"",reads:0},
  {id:uid(),title:"مێژووی کورد بە کورتی",author:"توێژەر",category:"مێژوو",year:"2023",desc:"زانیاری گرنگ لەسەر مێژوو، کلتوور و قۆناغەکانی گەلی کورد.",text:"مێژووی کورد پڕە لە قۆناغی گرنگ. ئەم کتێبە بە شێوەیەکی سادە بابەتەکان ڕوون دەکاتەوە.",link:"",reads:0},
  {id:uid(),title:"دەروونناسیی ژیان",author:"نووسەر",category:"دەروونناسی",year:"2022",desc:"کتێبێک بۆ باشتر تێگەیشتن لە هەست، بیرکردنەوە و بڕیارەکان.",text:"دەروونناسی یارمەتیمان دەدات خۆمان و ئەوانی تر باشتر بناسین.",link:"",reads:0},
  {id:uid(),title:"دیوانی هەست",author:"شاعیر",category:"شیعر",year:"2021",desc:"کۆمەڵە شیعرێکی هەستیار بۆ خۆشەویستانی ئەدەب و وشە.",text:"شیعر زمانی دڵە؛ لێرە وشەکان دەبنە پردی نێوان هەست و ژیان.",link:"",reads:0},
  {id:uid(),title:"ڕێگای ئارامی",author:"مامۆستا",category:"ئاینی",year:"2020",desc:"بابەتە ئاینییەکان بە شێوەیەکی سادە و ڕوون.",text:"ئارامی دڵ لە تێگەیشتن و کرداری باشدا دەبینرێت.",link:"",reads:0},
  {id:uid(),title:"فەلسەفە بۆ هەمووان",author:"نووسەر",category:"فەلسەفە",year:"2024",desc:"فەلسەفە بە زمانێکی سادە بۆ خوێنەری کورد.",text:"فەلسەفە پرسیارکردنە لەسەر مانای ژیان، ڕاستی و مرۆڤ.",link:"",reads:0},

  {id:uid(),title:"خۆشەویستی و ژیان",author:"نووسەری کورد",category:"ڕۆمان",year:"2021",desc:"چیرۆکێکی هەستیار لەسەر خۆشەویستی، هیوا و هەڵبژاردن.",text:"ژیان زۆرجار بە هەڵبژاردنێکی بچووک ڕێگایەکی نوێ دەگرێتەبەر.",link:"",reads:0},
  {id:uid(),title:"شارەکەی بێدەنگی",author:"نووسەر",category:"ڕۆمان",year:"2020",desc:"ڕۆمانێکی کۆمەڵایەتی لەسەر شار، مرۆڤ و نهێنییەکان.",text:"لە شارێکی بێدەنگدا، هەر دڵێک چیرۆکێکی تایبەتی خۆی هەیە.",link:"",reads:0},
  {id:uid(),title:"دوایین نامە",author:"نووسەر",category:"ڕۆمان",year:"2022",desc:"چیرۆکی نامەیەک کە ژیانی کەسانێک دەگۆڕێت.",text:"نامەکان جارێک دەگات، بەڵام کاریگەرییان هەتا هەتایە دەمێنێتەوە.",link:"",reads:0},
  {id:uid(),title:"ڕێگای گەڕانەوە",author:"نووسەری کورد",category:"ڕۆمان",year:"2023",desc:"ڕۆمانێک لەسەر گەڕانەوە بۆ شوێنی منداڵی و بیرەوەری.",text:"مرۆڤ هەرچەندە دوور بکەوێتەوە، بیرەوەری ڕێگای گەڕانەوەی دەدۆزێتەوە.",link:"",reads:0},

  {id:uid(),title:"کورد و کلتوور",author:"توێژەر",category:"مێژوو",year:"2024",desc:"کتێبێک لەسەر کلتوور، نەریت و ناسنامەی کورد.",text:"کلتوور هێزی مانەوەی گەلە، و زمانیش بنچینەی ئەو هێزەیە.",link:"",reads:0},
  {id:uid(),title:"قۆناغەکانی مێژووی کورد",author:"مێژوونووس",category:"مێژوو",year:"2022",desc:"پوختەی قۆناغە گرنگەکانی مێژووی کورد.",text:"لە هەر قۆناغێکدا گەلی کورد هەوڵی پاراستنی ناسنامەی خۆی داوە.",link:"",reads:0},
  {id:uid(),title:"شارە کۆنەکانی کوردستان",author:"توێژەر",category:"مێژوو",year:"2021",desc:"زانیاری لەسەر شوێنە مێژووییەکان و شارە کۆنەکان.",text:"شارە کۆنەکان کتێبی کراوەن کە بەردەکانیشی چیرۆک دەگێڕنەوە.",link:"",reads:0},

  {id:uid(),title:"هێزی بیرکردنەوە",author:"نووسەر",category:"دەروونناسی",year:"2024",desc:"چۆن بیرکردنەوە کاریگەری لەسەر ژیانمان دەکات.",text:"ئەو شتەی هەموو ڕۆژ بیر لێ دەکەینەوە، کەم کەم دەبێتە شێوازی ژیانمان.",link:"",reads:0},
  {id:uid(),title:"خۆناسین",author:"نووسەر",category:"دەروونناسی",year:"2023",desc:"کتێبێکی سادە لەسەر ناسینی خود و گەشەی کەسی.",text:"خۆناسین یەکەم هەنگاوە بۆ گۆڕینی ژیان.",link:"",reads:0},
  {id:uid(),title:"ئارامی دڵ",author:"نووسەر",category:"دەروونناسی",year:"2022",desc:"ڕێنماییەکان بۆ هێوربوونەوە، ئارامی و ڕێکخستنی هەست.",text:"ئارامی دڵ بە خاوکردنەوەی بیر و ڕێکخستنی هەستەکان دەست پێ دەکات.",link:"",reads:0},
  {id:uid(),title:"هەست و بڕیار",author:"نووسەر",category:"دەروونناسی",year:"2021",desc:"پەیوەندی نێوان هەست، بیرکردنەوە و بڕیارەکان.",text:"زۆربەی بڕیارەکانمان لە نێوان هەست و ژیریدا دروست دەبن.",link:"",reads:0},

  {id:uid(),title:"وشەکانی باران",author:"شاعیر",category:"شیعر",year:"2024",desc:"کۆمەڵە شیعرێک لەسەر باران، بیرەوەری و خۆشەویستی.",text:"باران کاتێک دادەبارێت، زۆر دڵ بە بێدەنگی دەدوێت.",link:"",reads:0},
  {id:uid(),title:"پەنجەرەی ڕووناکی",author:"شاعیر",category:"شیعر",year:"2023",desc:"شیعرەکانی هیوا، ژیان و ڕووناکی.",text:"لە هەر تاریکییەکدا پەنجەرەیەک هەیە بۆ ڕووناکی.",link:"",reads:0},
  {id:uid(),title:"هەناسەی دڵ",author:"شاعیر",category:"شیعر",year:"2022",desc:"کۆمەڵە شیعری هەستیار و خەیاڵی.",text:"دڵ کاتێک قسە ناکات، شیعر دەبێتە زمانی.",link:"",reads:0},

  {id:uid(),title:"ڕێنمایی ژیان",author:"مامۆستا",category:"ئاینی",year:"2024",desc:"بابەتە ئاینی و ڕەوشتییەکان بە زمانی سادە.",text:"کرداری باش و دڵی پاک بنچینەی ژیانێکی ئارامن.",link:"",reads:0},
  {id:uid(),title:"ڕووناکی باوەڕ",author:"مامۆستا",category:"ئاینی",year:"2023",desc:"باسێکی سادە لەسەر باوەڕ، ڕەوشتی باش و ئاشتی.",text:"باوەڕ ڕووناکییەکە کە مرۆڤ لەناو تاریکیدا ڕێگای پێ دەدۆزێتەوە.",link:"",reads:0},

  {id:uid(),title:"پرسیارە گەورەکان",author:"نووسەر",category:"فەلسەفە",year:"2024",desc:"فەلسەفە لە ڕێگەی پرسیارە گرنگەکانی ژیان.",text:"فەلسەفە وەڵامی ئاسان نادات، بەڵام پرسیاری باش فێرمان دەکات.",link:"",reads:0},
  {id:uid(),title:"مانای ژیان",author:"نووسەر",category:"فەلسەفە",year:"2022",desc:"هەوڵێک بۆ تێگەیشتن لە مانای ژیان و مرۆڤ.",text:"مانای ژیان لە هەر کەسێکدا جیاوازە، بەڵام گەڕانەکە هاوبەشە.",link:"",reads:0},

  {id:uid(),title:"زانستی سادە",author:"مامۆستای زانست",category:"زانست",year:"2024",desc:"زانست بە زمانی سادە بۆ هەموو خوێنەرێک.",text:"زانست پرسیارکردنە لەسەر جیهان و دۆزینەوەی وەڵامەکان.",link:"",reads:0},
  {id:uid(),title:"کۆمپیووتەر بۆ دەستپێک",author:"مامۆستا",category:"تەکنەلۆجیا",year:"2024",desc:"فێربوونی بنەماکانی کۆمپیووتەر و ئینتەرنێت.",text:"تەکنەلۆجیا ئامرازێکە، گرنگ ئەوەیە چۆن بەکاری دەهێنین.",link:"",reads:0},
  {id:uid(),title:"بازاڕ و کار",author:"نووسەر",category:"کاروبار",year:"2023",desc:"ڕێنمایی بۆ دوکان، بازاڕ و بەڕێوەبردنی کار.",text:"کاروبار بە پلاندانان، متمانە و خزمەتگوزاری باش گەشە دەکات.",link:"",reads:0},
  {id:uid(),title:"فێربوونی زمانی ئینگلیزی",author:"مامۆستا",category:"فێربوون",year:"2024",desc:"کتێبێکی سادە بۆ دەستپێکردنی فێربوونی ئینگلیزی.",text:"هەر ڕۆژ وشەیەکی نوێ فێربوون دەتوانێت دوای ماوەیەک جیاوازی دروست بکات.",link:"",reads:0},
  {id:uid(),title:"ڕێکخستنی کات",author:"نووسەر",category:"گەشەی کەسی",year:"2023",desc:"چۆن کاتت باشتر بەڕێوە ببەیت و بەرهەمدارتر بیت.",text:"کات ئەو سەرمایەیەیە کە نابێت بەهەدەر بدرێت.",link:"",reads:0}
];

let state = {
  category:"هەموو",
  query:"",
  admin:false,
  favoritesOnly:false,
  editingId:null,
  selectedBook:null
};

let data = loadData();

function loadData(){
  const raw = localStorage.getItem(LS);
  if(!raw){
    const fresh = {books:sampleBooks, favorites:[], dark:true};
    localStorage.setItem(LS, JSON.stringify(fresh));
    return fresh;
  }

  try{
    const p = JSON.parse(raw);
    p.books = p.books || [];
    p.favorites = p.favorites || [];
    p.dark = p.dark !== false;

    // ئەگەر پێشتر کۆدی کۆن هەبووبێت و کتێبەکان کەم بن، کتێبە نوێکان زیاد دەکات
    if(p.books.length < sampleBooks.length){
      const oldTitles = new Set(p.books.map(b => b.title));
      sampleBooks.forEach(b => {
        if(!oldTitles.has(b.title)){
          p.books.push(b);
        }
      });
      localStorage.setItem(LS, JSON.stringify(p));
    }

    return p;
  }catch{
    return {books:sampleBooks, favorites:[], dark:true};
  }
}

function save(){
  localStorage.setItem(LS, JSON.stringify(data));
}

function byId(id){
  return document.getElementById(id);
}

function categories(){
  return ["هەموو", ...Array.from(new Set(data.books.map(b => b.category).filter(Boolean)))];
}

function escapeHtml(str){
  return String(str ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  }[m]));
}

function escapeAttr(str){
  return escapeHtml(str).replace(/`/g,"&#096;");
}

function render(){
  document.body.classList.toggle("light", !data.dark);

  byId("app").innerHTML = `
    <main class="app">
      <section class="topbar">
        <div class="brand">
          <div class="logo">📚</div>
          <div>
            <h1>Aurelia</h1>
            <p>جیهانی کتێب بۆ خوێنەری کورد</p>
          </div>
        </div>

        <div class="actions">
          <button class="secondary" onclick="toggleFavOnly()">
            ${state.favoritesOnly ? "هەموو کتێبەکان" : "دڵخوازەکان ❤️"}
          </button>
          <button class="secondary" onclick="toggleTheme()">
            ${data.dark ? "Light" : "Dark"}
          </button>
          <button onclick="openAdmin()">
            ${state.admin ? "Admin ✅" : "Admin"}
          </button>
        </div>
      </section>

      <section class="hero">
        <div class="card">
          <h2 class="hero-title">Aurelia — جیهانی کتێب بۆ خوێنەری کورد</h2>
          <p class="hero-text">
            لێرە دەتوانیت هەموو جۆرە کتێبێکی کوردی زیاد بکەیت، بگەڕێیت،
            بە پۆلێن هەڵبژێریت، دڵخواز بکەیت و ناوەڕۆکی کتێبەکان بخوێنیتەوە.
          </p>

          <div class="stats">
            <div class="stat">
              <b>${data.books.length}</b>
              <span>کتێب</span>
            </div>
            <div class="stat">
              <b>${categories().length - 1}</b>
              <span>جۆر</span>
            </div>
            <div class="stat">
              <b>${data.favorites.length}</b>
              <span>دڵخواز</span>
            </div>
          </div>
        </div>

        <div class="card">
          <h2>پەیامی Aurelia</h2>
          <p class="hero-text">
            ئامانجمان بڵاوکردنەوەی خوێندنەوە و ئاسانکردنی گەیشتنە بە کتێبی کوردی.
          </p>
          <button class="green" onclick="scrollToBooks()">دەستپێکردنی خوێندنەوە</button>
        </div>
      </section>

      <section class="layout">
        <div>
          <div class="search-panel">
            <input
              id="search"
              placeholder="گەڕان بە ناوی کتێب، نووسەر، جۆر..."
              value="${escapeAttr(state.query)}"
              oninput="state.query=this.value; renderBooksOnly()"
            >

            <select id="sort" onchange="renderBooksOnly()">
              <option value="new">نوێترین</option>
              <option value="az">A-Z</option>
              <option value="reads">زۆرترین خوێندنەوە</option>
            </select>
          </div>

          <div class="categories">
            ${categories().map(c => `
              <button class="${state.category === c ? 'active' : ''}" onclick="setCategory('${escapeAttr(c)}')">
                ${c}
              </button>
            `).join("")}
          </div>

          <div id="books" class="books"></div>
        </div>

        <aside class="card">
          <h2>بەشی بەڕێوەبردن</h2>
          <p style="color:var(--muted);line-height:1.7">
            لێرە دەتوانیت کتێب زیاد بکەیت، دەستکاری بکەیت یان بسڕیتەوە.
            پاسۆردی Admin: <b>1234</b>
          </p>
          ${state.admin ? adminHtml() : `<button onclick="openAdmin()">چوونە ژوورەوەی Admin</button>`}
        </aside>
      </section>

      <footer class="footer">© 2026 Aurelia — بۆ خوێنەری کتێب</footer>
    </main>

    ${state.selectedBook ? bookModalHtml(state.selectedBook) : ""}
  `;

  renderBooksOnly();
}

function adminHtml(){
  const edit = state.editingId ? data.books.find(b => b.id === state.editingId) : null;

  return `
    <div>
      <label>ناوی کتێب</label>
      <input id="bTitle" value="${escapeAttr(edit?.title || "")}" placeholder="ناوی کتێب">

      <label>نووسەر</label>
      <input id="bAuthor" value="${escapeAttr(edit?.author || "")}" placeholder="ناوی نووسەر">

      <div class="admin-grid">
        <div>
          <label>جۆر</label>
          <input id="bCategory" value="${escapeAttr(edit?.category || "")}" placeholder="ڕۆمان، مێژوو...">
        </div>

        <div>
          <label>ساڵ</label>
          <input id="bYear" value="${escapeAttr(edit?.year || "")}" placeholder="2026">
        </div>
      </div>

      <label>پوختە</label>
      <textarea id="bDesc" placeholder="پوختەی کتێب">${escapeHtml(edit?.desc || "")}</textarea>

      <label>ناوەڕۆک / بەشێک لە کتێب</label>
      <textarea id="bText" placeholder="دەقی کتێب یان پوختەی درێژ">${escapeHtml(edit?.text || "")}</textarea>

      <label>لینکی PDF یان خوێندنەوە</label>
      <input id="bLink" value="${escapeAttr(edit?.link || "")}" placeholder="https://...">

      <div class="actions" style="margin-top:12px">
        <button class="green" onclick="saveBook()">
          ${edit ? "نوێکردنەوە" : "زیادکردنی کتێب"}
        </button>
        ${edit ? `<button class="secondary" onclick="cancelEdit()">هەڵوەشاندنەوە</button>` : ""}
      </div>

      <hr style="border-color:var(--border);margin:18px 0">

      <h3>کتێبەکان</h3>
      <div class="list">
        ${data.books.slice(0,12).map(b => `
          <div class="list-item">
            <b>${escapeHtml(b.title)}</b>
            <div style="color:var(--muted);font-size:14px">
              ${escapeHtml(b.category)} — ${escapeHtml(b.author)}
            </div>
            <div class="actions" style="margin-top:8px">
              <button class="secondary" onclick="editBook('${b.id}')">Edit</button>
              <button class="red" onclick="deleteBook('${b.id}')">Delete</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderBooksOnly(){
  const box = byId("books");
  if(!box) return;

  const q = (state.query || "").trim().toLowerCase();
  const sort = byId("sort")?.value || "new";

  let list = data.books.filter(b => {
    const text = `${b.title} ${b.author} ${b.category} ${b.desc}`.toLowerCase();
    return (
      (!q || text.includes(q)) &&
      (state.category === "هەموو" || b.category === state.category) &&
      (!state.favoritesOnly || data.favorites.includes(b.id))
    );
  });

  if(sort === "az"){
    list.sort((a,b) => a.title.localeCompare(b.title));
  }

  if(sort === "reads"){
    list.sort((a,b) => Number(b.reads || 0) - Number(a.reads || 0));
  }

  box.innerHTML = list.map(bookCard).join("") || `
    <div class="empty card">هیچ کتێبێک نەدۆزرایەوە</div>
  `;
}

function bookCard(b){
  const fav = data.favorites.includes(b.id);

  return `
    <article class="book card">
      <div class="cover">
        <div>
          <span class="emoji">${iconFor(b.category)}</span>
          <div class="cover-title">${escapeHtml(b.title)}</div>
        </div>
      </div>

      <span class="badge">${escapeHtml(b.category)}</span>

      <h3>${escapeHtml(b.title)}</h3>

      <p>
        نووسەر: ${escapeHtml(b.author)}
        ${b.year ? "— " + escapeHtml(b.year) : ""}
      </p>

      <p>${escapeHtml(b.desc)}</p>
      <p>👁️ ${Number(b.reads || 0)} خوێندنەوە</p>

      <div class="book-actions">
        <button onclick="openBook('${b.id}')">خوێندنەوە</button>
        <button class="heart" onclick="toggleFav('${b.id}')">
          ${fav ? "❤️" : "🤍"}
        </button>
      </div>
    </article>
  `;
}

function bookModalHtml(b){
  return `
    <div class="modal" onclick="closeBook(event)">
      <div class="modal-box card" onclick="event.stopPropagation()">
        <div class="actions" style="justify-content:space-between;margin-bottom:12px">
          <button class="secondary" onclick="state.selectedBook=null; render()">داخستن</button>
          ${b.link ? `<a href="${escapeAttr(b.link)}" target="_blank"><button class="green">کردنەوەی لینک / PDF</button></a>` : ""}
        </div>

        <div class="reader">
          <h2>${escapeHtml(b.title)}</h2>
          <p>
            <b>نووسەر:</b> ${escapeHtml(b.author)}
            |
            <b>جۆر:</b> ${escapeHtml(b.category)}
          </p>
          <p>${escapeHtml(b.desc)}</p>
          <hr>
          <p>${escapeHtml(b.text || "ناوەڕۆک بۆ ئەم کتێبە دانەنراوە.")}</p>
        </div>
      </div>
    </div>
  `;
}

function setCategory(c){
  state.category = c;
  render();
}

function toggleTheme(){
  data.dark = !data.dark;
  save();
  render();
}

function toggleFavOnly(){
  state.favoritesOnly = !state.favoritesOnly;
  render();
}

function toggleFav(id){
  if(data.favorites.includes(id)){
    data.favorites = data.favorites.filter(x => x !== id);
  }else{
    data.favorites.push(id);
  }

  save();
  renderBooksOnly();
}

function openBook(id){
  const b = data.books.find(x => x.id === id);
  if(!b) return;

  b.reads = Number(b.reads || 0) + 1;
  state.selectedBook = b;

  save();
  render();
}

function closeBook(e){
  if(e.target.classList.contains("modal")){
    state.selectedBook = null;
    render();
  }
}

function openAdmin(){
  if(state.admin){
    state.admin = false;
    render();
    return;
  }

  const p = prompt("Password ـی Admin بنووسە:");

  if(p === ADMIN_PASS){
    state.admin = true;
    render();
  }else if(p !== null){
    alert("Password هەڵەیە");
  }
}

function saveBook(){
  const book = {
    id: state.editingId || uid(),
    title: byId("bTitle").value.trim(),
    author: byId("bAuthor").value.trim(),
    category: byId("bCategory").value.trim(),
    year: byId("bYear").value.trim(),
    desc: byId("bDesc").value.trim(),
    text: byId("bText").value.trim(),
    link: byId("bLink").value.trim(),
    reads: state.editingId ? (data.books.find(b => b.id === state.editingId)?.reads || 0) : 0
  };

  if(!book.title || !book.author || !book.category){
    alert("ناوی کتێب، نووسەر و جۆر پێویستن");
    return;
  }

  const idx = data.books.findIndex(b => b.id === book.id);

  if(idx >= 0){
    data.books[idx] = book;
  }else{
    data.books.unshift(book);
  }

  state.editingId = null;

  save();
  render();
}

function editBook(id){
  state.editingId = id;
  render();
}

function cancelEdit(){
  state.editingId = null;
  render();
}

function deleteBook(id){
  if(!confirm("دڵنیایت ئەم کتێبە بسڕیتەوە؟")) return;

  data.books = data.books.filter(b => b.id !== id);
  data.favorites = data.favorites.filter(x => x !== id);

  save();
  render();
}

function scrollToBooks(){
  document.getElementById("books")?.scrollIntoView({behavior:"smooth"});
}

function iconFor(cat){
  if(cat.includes("ڕۆمان")) return "📖";
  if(cat.includes("مێژوو")) return "🏛️";
  if(cat.includes("دەروون")) return "🧠";
  if(cat.includes("شیعر")) return "✒️";
  if(cat.includes("ئاینی")) return "🕌";
  if(cat.includes("فەلسەفە")) return "💭";
  if(cat.includes("زانست")) return "🔬";
  if(cat.includes("تەکنەلۆجیا")) return "💻";
  if(cat.includes("کاروبار")) return "💼";
  if(cat.includes("فێربوون")) return "🎓";
  if(cat.includes("گەشە")) return "🌱";
  return "📚";
}

render();