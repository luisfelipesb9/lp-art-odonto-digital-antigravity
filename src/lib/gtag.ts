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

/**
 * Fires a custom GA4 event when the "Traçar Rota" button is clicked.
 * This is NOT a Google Ads conversion — it's a monitoring event
 * to track user intent without affecting campaign optimization.
 */
export function trackTracarRota() {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "tracar_rota", {
            event_category: "engagement",
            event_label: "google_maps_directions",
        });
    }
}
