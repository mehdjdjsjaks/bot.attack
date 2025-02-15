let step = 1; // متغیر برای کنترل مراحل چت

function processInput() {
    let input = document.getElementById("user-input").value.trim();
    let response = document.getElementById("response");

    if (step === 1) { // مرحله اول: انتخاب گزینه
        if (input === "1" || input === "2") {
            response.innerText = "برای دریافت آموزش فیلتر کردن باید برنامه میلی رو داخل بازار یا مایکت نصب کنید و با این کد دعوت milli-8dock ثبت نام کنید بعد ساعتی که ثبت نام کردید رو بنویسید که چک کنیم اگر درست باشه آموزش داخل همین صفحه ارسال میشه";
            step = 2; // تغییر مرحله به بعدی
        } else {
            response.innerText = "لطفاً یکی از این دو گزینه را انتخاب کنید.";
        }
    } else if (step === 2) { // مرحله دوم: بررسی ثبت‌نام
        response.innerText = "در حال بررسی...";
        setTimeout(() => {
            response.innerText = "کاربر عزیز شما هنوز ثبت نام نکردید.";
        }, 1000); // مکث 1 ثانیه
    }
}
