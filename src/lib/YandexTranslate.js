import axios from 'axios';

class YandexTranslate {
  constructor({ apiKey }) {
    this.apiKey = apiKey;
  }

  async translate(text = '', opts = { langIn: 'en', langOut: 'zh' }) {
    try {
      const { langIn, langOut } = opts;

      const res = await axios({
        method: 'post',
        url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
        params: {
          key: this.apiKey,
          lang: `${langIn}-${langOut}`,
          text,
          format: 'plain'
        }
      });

      const { text: outputText } = res.data;
      return outputText[0];
    } catch (e) {
      console.error('An error occured while translating.');
      console.error(e);
    }
    return null;
  }
}

export default YandexTranslate;
