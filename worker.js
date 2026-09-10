export default {
  async fetch(request) {
    const url = new URL(request.url);
    // تغییر hostname به آدرس اصلی گوگل
    url.hostname = "https://api-inference.huggingface.co/models/philschmid/stable-diffusion-2-inpainting-endpoint";
    
    // ساخت درخواست جدید با همان متد، هدرها و بدنه
    const newRequest = new Request(url, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      // مهم: Cloudflare با IP خودش به گوگل متصل می‌شود
      cf: { resolveOverride: "https://api-inference.huggingface.co/models/philschmid/stable-diffusion-2-inpainting-endpoint" }
    });
    
    return fetch(newRequest);
  }
};
