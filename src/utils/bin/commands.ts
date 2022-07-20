// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const aide = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Bienvenu! Voici toutes les commandes disponibles:
\n${c}\n
[tab]: déclancher la completion.
[ctrl+l]/clear: vider la console.\n
Tapez 'sumfetch' pour afficher le résumé.
`;
};

// Redirection
/*export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};*/

// About
export const apropos = async (args: string[]): Promise<string> => {
  return `Salut, Je suis ${config.name}.
Bienvenue sur mon site web!

Plus à propos de moi:
'sumfetch' - résumé court.
'CV' - mon dernier CV.
'readme' - mon readme github.`;
};

export const CV = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Ouverture du  curriculum vitae...';
};

// Donate
/*export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};*/

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Ouverture du client mail...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Ouverture du github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Ouverture de linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `Work/
Smarter/
Not/
Harder/`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return String.raw`
  __/\\\\\\\\\\\\\_______________________________________________/\\\________________/\\\\\\____        
  _\/\\\/////////\\\____________________________________________\/\\\_______________\////\\\____       
   _\/\\\_______\/\\\____________________________________________\/\\\__________/\\\____\/\\\____      
    _\/\\\\\\\\\\\\\\______/\\\\\\\\___/\\/\\\\\\\______/\\\\\\\\_\/\\\_________\///_____\/\\\____     
     _\/\\\/////////\\\___/\\\/////\\\_\/\\\/////\\\___/\\\//////__\/\\\\\\\\\\___/\\\____\/\\\____    
      _\/\\\_______\/\\\__/\\\\\\\\\\\__\/\\\___\///___/\\\_________\/\\\/////\\\_\/\\\____\/\\\____   
       _\/\\\_______\/\\\_\//\\///////___\/\\\_________\//\\\________\/\\\___\/\\\_\/\\\____\/\\\____  
        _\/\\\\\\\\\\\\\/___\//\\\\\\\\\\_\/\\\__________\///\\\\\\\\_\/\\\___\/\\\_\/\\\__/\\\\\\\\\_ 
         _\/////////////______\//////////__\///_____________\////////__\///____\///__\///__\/////////__

Salut, Je suis ${config.name} 
Bienvenue sur mon site web!
Tapez 'aide' pour voir la liste des commandes disponibles.
Tapez 'sumfetch' pour afficher le résumé.
`;
};
