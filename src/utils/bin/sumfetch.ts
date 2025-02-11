import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         
        @@@                  @@@ @@         
         @|  @@@@@@@@@@@@@@@@   @@          
         @|                      @@         

`;
  } else {
    return `
    ⠀⠀⠀⠀⢀⣤⡄⢠⣤⣤⠀⣠⣤⠄⠀⠀⠀⠀⠀⠀⢄⣀⣀⠀⠀⠀⠀⠀⠀⠤⡤⢄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⣠⡴⢚⡿⠿⡿⠛⢁⣼⣼⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣅⣠⣴⣶⡖⠛⠲⠄⠀⠘⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀		   sumfetch
    ⢰⠛⢀⡼⠀⠀⠀⠀⣼⢏⣿⢁⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⠈⢿⣳⠂⠀⠈⠓⠄⠀⠀⠀⠈⢺⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⢸⠀⢸⣇⠀⠀⢀⢴⣿⣼⠃⠊⠀⠀⢀⣤⡶⣫⣥⣄⡀⠀⠀⢀⠛⢯⣁⣒⡢⢄⠀⢀⠀⠀⠘⣏⡇⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀	   ABOUT
    ⠘⢇⡄⠙⢲⡖⢁⣾⣿⠋⠀⠀⢠⠀⠋⠁⣾⡞⣩⣭⡽⠀⠀⠀⣰⠋⠀⢀⣹⣼⠀⠀⢣⠀⠀⢻⢳⣾⣩⡌⠉⠲⡀⠀⠀⠀⠀	  -----------
    ⠀⠀⠻⣶⠧⣶⣿⡟⠁⣀⡤⢄⡀⠀⠀⠀⠘⠃⠽⢿⡇⠀⠀⢠⣿⡆⠀⣾⣿⣏⠀⠀⢸⠀⠀⠀⠁⢀⢿⡿⠀⠀⠹⡦⣄⡀        ${config.name}
    ⠀⠀⠀⠀⠉⠉⠻⡇⣼⢋⣀⣀⠻⡆⠀⠀⠀⠀⠀⠈⠀⠀⠀⠈⢻⣿⣆⠀⠀⠉⠀⣠⠎⠀⣠⣀⠤⠚⠀⠁⠀⠀⣰⣿⣿⠳⣄	  ☏ 0671133780
    ⠀⠀⠀⠀⠀⠀⠀⠹⣏⣿⠷⣿⣓⣻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣻⣶⡶⢖⣚⡋⠀⠀⠈⠉⠀⠀⠀⣠⣤⣴⣭⣛⠇⠀⠈		   <u><a href="${config.resume_url}" target="_blank">Curriculum vitae</a></u>
    ⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡁⠿⠏⢸⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣷⣄⣀⣈⡀⠐⠒⢾⣦⣀⠾⠟⠀⠀⢹⣿⢧⢶⣾
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⡀⠀⠈⡷⢤⠀⠀⠀⠀⣀⡀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣽⣿⣿⣄⠀⠀⠀⠁⠨⠊⠈⢩	   CONTACT 
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣧⠀⠀⠁⠀⠀⢀⠴⢋⡠⠭⣶⣤⣀⠹⢿⣿⡿⠛⠟⠋⠉⠻⣿⣿⣿⣿⣿⣷⣦⣤⣤⣤⢤⣶⠋	  -----------
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⡄⠀⠀⢰⡁⣔⣡⣴⣿⣿⠟⣿⠀⡰⠋⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀		   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣶⣄⠀⠙⢿⣿⠛⢛⣡⡾⣻⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⠿⠿⠛⠉⠀⠀⠀		   <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
    ⠀⠀⠀⢀⣠⣶⠒⢶⣄⠀⣸⢻⡽⠒⢻⣿⢿⣦⣄⠙⣿⣛⣩⡼⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀		   <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ⠀⠀⢀⡞⠋⠹⣧⣄⡼⠞⢱⠋⠀⢠⢿⡟⠃⠙⣿⣿⣾⣍⠉⢰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⢸⣧⡀⠀⠐⠢⡆⠀⡇⠀⡀⠸⣮⡳⠄⠀⠙⢻⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠛⠛⠒⠒⠂⠒⠊⠙⠒⠚⠂⠉⠁⠀⠀⠀⠀⠉⠛⠛
`;
  }
};

export default sumfetch;
