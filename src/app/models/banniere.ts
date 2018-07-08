export class Banniere {
  url: string;
  format: string;
  image: string;
  constructor(
    format,
    url = '',
    image = ''
  ) {
    this.format = format;
    this.url = url;
    this.image =  image;
  }
}
