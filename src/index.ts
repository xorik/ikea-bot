import { Ikea } from './ikea'
import shops from './shops'
import { Bot } from './bot'

const ITEM_ID = parseInt(process.env.ITEM_ID ?? '0', 10)
const BOT_TOKEN = process.env.BOT_TOKEN ?? ''
const BOT_CHAT_ID = parseInt(process.env.BOT_CHAT_ID ?? '0', 10)
const INTERVAL = parseInt(process.env.INTERVAL ?? '30', 10)

const ikea = new Ikea()
const bot = new Bot(BOT_TOKEN, BOT_CHAT_ID)

async function runOnce() {
  const found = []

  for (const [shopId, shopTitle] of Object.entries(shops)) {
    const result = await ikea.checkAviability(ITEM_ID, shopId)

    if (result) {
      found.push(shopTitle)
    }
  }

  if (found.length == 0) {
    console.log(new Date(), 'Nothing found')
    return
  }

  const msg = 'Available in shops: ' + found.join(', ')

  console.log(new Date(), `Found ${found.length} item(s), sending message`)
  bot.sendMessage(msg)
}

runOnce()
setInterval(runOnce, INTERVAL * 60 * 1000)
