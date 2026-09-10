export default {
  async fetch(request) {
    // مسیر کامل مقصد در هاگینگ‌فیس
    const targetUrl = "https://api-inference.huggingface.co/models/philschmid/stable-diffusion-2-inpainting-endpoint";

    // کپی هدرها و بازنویسی هدر Host
    const headers = new Headers(request.headers);
    headers.set("Host", "api-inference.huggingface.co");

    // ساخت درخواست جدید برای ارسال به هاگینگ‌فیس
    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: headers,
      body: request.body,
      redirect: "follow"
    });

    return fetch(modifiedRequest);
  }
};
