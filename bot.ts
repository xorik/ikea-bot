// @ts-ignore
import * as Telegram from 'telegraf/telegram'

class Bot {
  private telegram: Telegram

  constructor(token: string, private chatId: number) {
    this.telegram = new Telegram(token)
  }

  public async sendMessage(msg: string, quite: boolean = false): Promise<void> {
    const extra = quite ? {disable_notification: 'true'} : {}
    await this.telegram.sendMessage(this.chatId, msg, extra)
  }
}

export {
  Bot
}
