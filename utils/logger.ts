export class Logger {

  static info(message: string) {
    console.log(`[INFO] ${message}`);
  }

  static error(message: string) {
    console.error(`[ERROR] ${message}`);
  }

  static request(method: string, url: string) {
    console.log(`[REQUEST] ${method} ${url}`);
  }

  static response(status: number) {
    console.log(`[RESPONSE] Status: ${status}`);
  }
}