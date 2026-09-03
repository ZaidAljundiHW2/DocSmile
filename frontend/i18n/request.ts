// i18n/request.ts
import { locale as getRootLocale } from "next/root-params";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "../config";

export default getRequestConfig(async () => {
  const locale = await getRootLocale();

  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});