// 1. Dữ liệu mẫu
const movies = [
    { 
        id: 1, 
        title: "Phàm Nhân Tu Tiên Truyện", 
        year: 2020, 
        genres: ["Tiên Hiệp", "Hành động"], 
        poster: "images/phamnhan.jpg", 
        desc: "Hành trình của Hàn Lập - một thiếu niên bình thường từng bước tu luyện thành tiên bằng sự cẩn trọng và trí tuệ.", 
        director: "Vạn Duy Kỹ Thuật" 
    },
    { 
        id: 2, 
        title: "Đấu Phá Thương Khung", 
        year: 2017, 
        genres: ["Huyền Huyễn", "Hành động"], 
        poster: "images/daupha.jpg", 
        desc: "Tiêu Viêm từ một thiên tài mất đi sức mạnh, nhờ ý chí kiên cường đã chinh phục dị hỏa và trở thành Đấu Đế.", 
        director: "Khải Duyệt" 
    },
    { 
        id: 3, 
        title: "Tiên Nghịch", 
        year: 2023, 
        genres: ["Tiên Hiệp", "Tu Chân"], 
        poster: "images/tiennghich.jpg", 
        desc: "Vương Lâm - một thiếu niên tư chất tầm thường, nghịch thiên cải mệnh, đi trên con đường tu tiên đầy máu và sát phạt.", 
        director: "Foch Films" 
    },
    { 
        id: 4, 
        title: "Già Thiên", 
        year: 2023, 
        genres: ["Huyền Huyễn", "Viễn Tưởng"], 
        poster: "images/giathien.jpg", 
        desc: "Bắt đầu từ Cửu Long Lôi Quan, Diệp Phàm bước vào hành trình khám phá bí ẩn vũ trụ và tu luyện đỉnh cao.", 
        director: "Original Force" 
    },
    { 
        id: 5, 
        title: "Họa Giang Hồ Chi Bất Lương Nhân", 
        year: 2014, 
        genres: ["Võ Hiệp", "Lịch Sử", "Huyền Huyễn"], 
        poster: "images/hoagiangho.jpg", 
        desc: "Xoay quanh tổ chức Bất Lương Nhân và hành trình của Lý Tinh Vân trong vòng xoáy quyền lực thời hậu Đường.", 
        director: "Nhược Hồng" 
    },
    { 
        id: 6, 
        title: "Tru Tiên", 
        year: 2022, 
        genres: ["Tiên Hiệp", "Tình Cảm"], 
        poster: "images/trutien.jpg", 
        desc: "Trương Tiểu Phàm từ một thiếu niên thôn quê, trải qua biến cố gia tộc, gia nhập Thanh Vân Môn và bị cuốn vào cuộc chiến Chính - Tà.", 
        director: "Tencent Penguin Pictures" 
    },
    { 
        id: 7, 
        title: "Kiếm Lai", 
        year: 2024, 
        genres: ["Tiên Hiệp", "Triết Lý"], 
        poster: "images/kiemlai.jpg", 
        desc: "Trần Bình An, một thiếu niên nghèo khó ở ngõ hẻm, dựa vào nắm đấm và đạo lý để đi ra thế giới rộng lớn.", 
        director: "Tencent Video" 
    },
{ 
        id: 8, 
        title: "Trạch Thiên Ký", 
        year: 2015, 
        genres: ["Tiên Hiệp", "Huyền Huyễn"], 
        poster: "images/trach-thien-ky.jpg", 
        desc: "Trần Trường Sinh rời tông môn, mang theo một tờ hôn ước để tìm cách nghịch thiên cải mệnh.", 
        director: "Tencent Video" 
    },
    { 
        id: 9, 
        title: "Trảm Thần", 
        year: 2024, 
        genres: ["Hành động", "Viễn Tưởng"], 
        poster: "images/tram-than.jpg", 
        desc: "Lâm Thất đêm khuya nhìn thấy thần minh, từ đó bước lên con đường bảo vệ nhân loại trước các vị thần tàn bạo.", 
        director: "Angel Wings Media" 
    },
    { 
        id: 10, 
        title: "Linh Lung", 
        year: 2021, 
        genres: ["Hậu Tận Thế", "Viễn Tưởng"], 
        poster: "images/Linh-Lung.jpg", 
        desc: "Trong một thế giới bị quái vật xâm chiếm, con người phải tìm cách sinh tồn trên những hòn đảo bay.", 
        director: "YHKT Entertainment" 
    },
    { 
        id: 11, 
        title: "Vũ Động Càn Khôn", 
        year: 2019, 
        genres: ["Huyền Huyễn", "Hành động"], 
        poster: "images/vu-dong-can-khon.jpg", 
        desc: "Lâm Động từ một đệ tử gia tộc sa sút, nhờ cơ duyên có được Thạch Phù mà vươn lên đỉnh cao võ học.", 
        director: "Motion Magic" 
    },
    { 
        id: 12, 
        title: "Jujutsu Kaisen", 
        year: 2020, 
        genres: ["Anime", "Hành động", "Kinh dị"], 
        poster: "images/jujustsu.jpg", 
        desc: "Itadori Yuji nuốt phải ngón tay của nguyền hồn đặc cấp Sukuna và bước vào thế giới của các chú thuật sư.", 
        director: "MAPPA" 
    },
   
    { 
        id: 13, 
        title: "Khi Tôi Chuyển Sinh Thành Slime", 
        year: 2018, 
        genres: ["Anime", "Isekai", "Hài hước"], 
        poster: "images/slime.jpg", 
        desc: "Một nhân viên văn phòng bị đâm chết và tái sinh tại thế giới khác dưới hình hài một con Slime đầy quyền năng.", 
        director: "8-Bit" 
    },
    { 
        id: 14, 
        title: "Lookism", 
        year: 2022, 
        genres: ["Webtoon Adapt", "Hành động", "Học đường"], 
        poster: "images/lookism.jpg", 
        desc: "Park Hyung Suk bất ngờ sở hữu khả năng hoán đổi giữa hai cơ thể: một béo mập và một cực kỳ đẹp trai.", 
        director: "Studio Mir" 
    },
    { 
        id: 15, 
        title: "Học Cách Chiến Đấu", 
        year: 2024, 
        genres: ["Webtoon Adapt", "Hành động", "Học đường"], 
        poster: "images/hoccachchiendau.jpg", 
        desc: "Yoo Hobin - một học sinh yếu ớt - đã học cách chiến đấu qua các video bí ẩn trên mạng để thay đổi cuộc đời.", 
        director: "Okuruto Noboru" 
    }
];

// 2. Các biến trạng thái
let selectedGenres = [];
let searchQuery = "";

// 3. Khởi tạo ứng dụng
document.addEventListener("DOMContentLoaded", () => {
    renderGenres();
    renderMovies(movies);
    setupTheme();
});

// 4. Hàm Render
function renderMovies(data) {
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = data.map(movie => `
        <div class="movie-card" onclick="openModal(${movie.id})">
            <img src="${movie.poster}" alt="${movie.title}">
            <div style="padding:10px">
                <h4>${movie.title}</h4>
                <p>${movie.year}</p>
            </div>
        </div>
    `).join('');
}

function renderGenres() {
    const genres = [...new Set(movies.flatMap(m => m.genres))];
    const container = document.getElementById('genre-container');
    container.innerHTML = genres.map(g => `
        <label>
            <input type="checkbox" value="${g}" onchange="handleGenreChange(this)"> ${g}
        </label><br>
    `).join('');
}

// 5. Logic Lọc & Debounce
const handleSearch = debounce((e) => {
    searchQuery = e.target.value.toLowerCase();
    applyFilters();
}, 400);

document.getElementById('search-input').addEventListener('input', handleSearch);

function handleGenreChange(checkbox) {
    if (checkbox.checked) selectedGenres.push(checkbox.value);
    else selectedGenres = selectedGenres.filter(g => g !== checkbox.value);
    applyFilters();
}

function applyFilters() {
    const filtered = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchQuery);
        const matchesGenre = selectedGenres.length === 0 || 
                             selectedGenres.every(g => movie.genres.includes(g));
        return matchesSearch && matchesGenre;
    });
    renderMovies(filtered);
}

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

// 6. Chế độ Sáng/Tối
const themeToggle = document.getElementById('theme-toggle');
function setupTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerText = "Chế độ sáng";
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerText = isDark ? "Chế độ sáng" : "Chế độ tối";
});

// 7. Modal logic
const modal = document.getElementById('movie-modal');
function openModal(id) {
    const movie = movies.find(m => m.id === id);
    document.getElementById('modal-body').innerHTML = `
        <div style="display:flex; gap:20px">
            <img src="${movie.poster}" style="width:250px">
            <div>
                <h2>${movie.title} (${movie.year})</h2>
                <p><strong>Đạo diễn:</strong> ${movie.director}</p>
                <p><strong>Thể loại:</strong> ${movie.genres.join(', ')}</p>
                <p>${movie.desc}</p>
            </div>
        </div>
    `;
    modal.style.display = "block";
}

document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };