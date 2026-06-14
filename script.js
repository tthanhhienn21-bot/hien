document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (fullname === "" || email === "" || message === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Email không hợp lệ!");
            return;
        }

        alert(
            `Gửi thông tin thành công!\nChúng tôi sẽ phản hồi qua email ${email}.`
        );

        form.reset();
    });
});