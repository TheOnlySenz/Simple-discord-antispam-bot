import discord

TOKEN = "your-bot-token-here"

client = discord.Client()

@client.event

async def on_ready():

    print(f'{client.user} has connected to Discord!')

@client.event

async def on_message(message):

    if message.author.bot:

        return

    if "discord.gg" in message.content.lower():

        await message.delete()

        await message.channel.send("Sorry, but the promotion of other Discord servers is not allowed.")

client.run(TOKEN)

