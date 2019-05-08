import YandexTranslate from './lib/YandexTranslate';

export default function app() {
  return { YandexTranslate };
}

if (require.main === module) {
  app();
}
