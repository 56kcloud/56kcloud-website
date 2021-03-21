const isProd = process.env.NODE_ENV === "production";

export const assetPrefix = isProd ? "https://www.edeltech.ch/" : "";
