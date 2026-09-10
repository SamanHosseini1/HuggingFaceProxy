export default {
  async fetch(request) {
    const targetBase = "https://api-inference.huggingface.co/models/philschmid/stable-diffusion-2-inpainting-endpoint";

    // ساخت یک آبجکت هدر جدید بدون دستکاری Host
    const newHeaders = new Headers();
    for (const [key, value] of request.headers.entries()) {
      // حذف هدرهایی که باعث اختلال در پراکسی داخلی کلودفلر می‌شوند
      if (!["host", "cf-connecting-ip", "cf-ray", "cf-visitor"].includes(key.toLowerCase())) {
        newHeaders.set(key, value);
      }
    }

    const modifiedRequest = new Request(targetBase, {
      method: request.method,
      headers: newHeaders,
      body: request.body,
      redirect: "follow"
    });

    return fetch(modifiedRequest);
  }
};
