// https://www.codewars.com/kata/51eead3461ccf7db04000017

class UriBuilder {
  constructor(uri) {
    this.uri = uri.split('?')[0];
    if (uri.indexOf('?')) {
      this.params = this.getParamsFromUri(uri);
    }
  }
  
  build() {
    return `${this.uri}?${this.toQs()}`;
  }
  
  getParamsFromUri(uri) {
   return uri.match(/(\w+=\w+)/g)
      .map(kv => kv.split('='))
      .reduce((memo, kv) => (memo[kv[0]] = kv[1]) && memo, {});
  }
  
  toQs() {
    return Object.keys(this.params)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(this.params[k])}`).join('&');
  }
  
}
