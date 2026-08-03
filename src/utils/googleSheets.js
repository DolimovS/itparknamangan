// src/utils/googleSheets.js
//
// Google Apps Script orqali Web App (Webhook) sifatida deploy qilingan
// Google Sheets ga ma'lumot yuborish uchun yordamchi funksiya.

import { SCRIPT_URL } from "../data/config.js";

const GOOGLE_SHEET_WEBHOOK_URL = SCRIPT_URL;

/**
 * Formadan kelgan ma'lumotlarni Google Sheets webhookiga yuboradi.
 * @param {Object} formData - So'rovnoma ma'lumotlari
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function submitToGoogleSheets(formData) {
  try {
    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json().catch(() => ({ result: "success" }));
      return { success: true, data: result };
    }

    return { success: false, error: `Server xatosi: ${response.status}` };
  } catch (error) {
    console.error("Google Sheets yuborishda xatolik:", error);
    return { success: false, error: error.message };
  }
}
