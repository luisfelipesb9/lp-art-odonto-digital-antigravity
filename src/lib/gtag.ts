// Google Ads conversion tracking utility
// Conversion ID: AW-17942246022
// Conversion Label: GLZ7CMW-x_UbEIblw-tC

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

/**
 * Fires a Google Ads conversion event when a WhatsApp CTA is clicked.
 * The link opens in a new tab (target="_blank"), so we don't need to
 * delay navigation — just fire the event.
 */
export function trackWhatsAppConversion() {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
            send_to: "AW-17942246022/GLZ7CMW-x_UbEIblw-tC",
            value: 1.0,
            currency: "BRL",
        });
    }
}
