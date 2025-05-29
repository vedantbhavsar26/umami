'use server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

export async function alertOnTelegram(message: string) {
  const url = new URL(
    `https://api.telegram.org/${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`,
  );

  try {
    await fetch(url);
  } catch (error) {
    //  errors
  }
}
