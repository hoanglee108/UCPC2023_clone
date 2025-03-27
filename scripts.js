function startCountdown(targetDate) {
    function updateCountdown() {
        let now = new Date().getTime();
        let timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            document.querySelector(".countdown_clock-date").textContent = "00";
            document.querySelector(".countdown_clock-hour").textContent = "00";
            document.querySelector(".countdown_clock-minute").textContent = "00";
            document.querySelector(".countdown_clock-second").textContent = "00";
            alert("Đã hết thời gian!");
            return;
        }

        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.querySelector(".countdown_clock-date").textContent = days.toString().padStart(2, "0");
        document.querySelector(".countdown_clock-hour").textContent = hours.toString().padStart(2, "0");
        document.querySelector(".countdown_clock-minute").textContent = minutes.toString().padStart(2, "0");
        document.querySelector(".countdown_clock-second").textContent = seconds.toString().padStart(2, "0");
    }

    updateCountdown();
    let interval = setInterval(updateCountdown, 1000);
}

// Chờ DOM tải xong trước khi chạy script
document.addEventListener("DOMContentLoaded", function () {
    let countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 7); // Đếm ngược 7 ngày
    startCountdown(countdownDate.getTime());
});


// // Danh sách ảnh cần thay đổi
// const images = [
//     "assets/img/BG1.png",
//     "assets/img/BG2.jpg",
//     "assets/img/BG3.jpg",
//     "assets/img/BG4.jpg",
// ];

// let currentIndex = 0;
// const backgroundImg = document.querySelector(".background");

// function changeBackgroundImage() {
//     // Chuyển sang ảnh tiếp theo
//     currentIndex = (currentIndex + 1) % images.length;
    
//     // Thay đổi ảnh
//     backgroundImg.src = images[currentIndex];

//     // Gọi lại hàm sau 3 giây
//     setTimeout(changeBackgroundImage, 10000);
// }

// // Gọi lần đầu tiên
// setTimeout(changeBackgroundImage, 10000);
