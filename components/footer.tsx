import { TwitchIcon } from "./icons/twitchIcon";
import { InstagramIcon } from "./icons/instagramIcon";
import { TiktokIcon } from "./icons/tiktokIcon";
import { XIcon } from "./icons/xIcon";
import { DiscordIcon } from "./icons/discordIcon";
import Accessibility from "./accessibility";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 md:gap-14 lg:gap-20 bg-bg-reverse text-text-reverse font-custom-paragraph text-sm w-full py-11 px-[5vw] h-fit">
        <ul className="flex flex-col gap-3">
          <li className="font-bold text-xl pb-3 uppercase">Service client</li>
          <li>
            <a href="/contact" className="hover:underline">
              <span>Nous contacter</span>
            </a>
          </li>
          <li>
            <a href="/telechargement" className="hover:underline">
              <span>Téléchargement</span>
            </a>
          </li>
        </ul>
        <div className=" w-1/3 md:w-[1px] h-[1px] md:h-20 bg-text-reverse"></div>
        <ul className="flex flex-col gap-3">
          <li className="font-bold text-xl pb-3 uppercase">Informations pratiques</li>
          <li>
            <a href="/cgu" className="hover:underline">
              <span>Conditions générales</span>
            </a>
          </li>
          <li>
            <a href="/cgu#mentionsLegales" className="hover:underline">
              <span>Mentions légales</span>
            </a>
          </li>
          <li>
            <a href="/cgu#rgpd" className="hover:underline">
              <span>Protection des données</span>
            </a>
          </li>
        </ul>
        <div className=" w-1/3 md:w-[1px] h-[1px] md:h-20 bg-text-reverse"></div>
        <ul className="flex flex-col gap-3">
          <li className="font-bold text-xl pb-3 uppercase">Nous suivre</li>
          <li className="flex gap-3">
            <a href="https://www.instagram.com/activegamingfr/" target="_blank" title="Notre compte Instagram">
              <InstagramIcon size={40} className="fill-text-reverse" />
            </a>
            <a href="https://www.tiktok.com/@activegamingfr" target="_blank" title="Notre compte TikTok">
              <TiktokIcon size={40} className="fill-text-reverse" />
            </a>
            <a href="https://x.com/activegamingfr" target="_blank" title="Notre compte X">
              <XIcon size={40} className="fill-text-reverse" />
            </a>
            <a href="https://discord.gg/aqzuAKC8" target="_blank" title="Notre serveur Discord">
              <DiscordIcon size={40} className="fill-text-reverse" />
            </a>
            <a href="https://www.twitch.tv/activegamingfr" target="_blank" title="Notre chaine Twitch">
              <TwitchIcon size={40} className="fill-text-reverse" />
            </a>
          </li>
        </ul>
      </footer>
      <Accessibility />
    </>
  );
}
