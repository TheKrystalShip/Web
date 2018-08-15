+++
draft = false
date = 2018-08-14T12:40:27+02:00
title = "Discord"
banner = "images/logo.png"
author = "heisenberg"
slug = "discord-api-wrapper-library"
tags = ["discord", "api", "wrapper"]
categories = ["discord", "library", "wrapper", "api", ".net standard 2.0"]
+++

[TheKrystalShip.Discord](https://github.com/TheKrystalShip/Discord) is an API wrapper library written in C# targetting .Net Standard 2.0 for Discord, with the purpose of making Discord bots.

There are a couple of libraries out there already, like [RogueException](https://github.com/RogueException)'s [Discord.Net](https://github.com/RogueException/Discord.Net) library, or [DSharpPlus](https://github.com/DSharpPlus/DSharpPlus) which are both great libraries (personally used [Discord.Net](https://github.com/RogueException/Discord.Net) in more than a couple of projects, one of which is [Inquisition](/projects/inquisition)), and the main inspiration for the creation of this one.

The purpose when starting working on this library was to make a complete package for bot creators, have all the *most used* bot features ready out of the box without the creators having to do boilerplate code just for some audio playback for example, since this library would come with all the audio search, download & playback required to get up and running just by plugging in a few simple commands.

Of course this means losing a bit of abstraction since the audio implementation would be done by the library instead of the creator, but it doesn't mean a bot developer cannot make their own implementation either, this is just for developers who want funcitionality out of the box, like myself.
