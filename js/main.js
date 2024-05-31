const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});

const commands = {
  help() {
    term.echo(`List of available commands: ${help}`);
  },
  echo(...args) {
    term.echo(args.join(' '));
  },
  frustrated() {
    term.echo(`Here's some motivation. Dherai code garera alxi `)
    term.echo(`lagyo hola hai... Break liu xin xin ma ...`)
    setTimeout(5);
    frustrated();
  },
  github() {
    term.echo(`Redirecting to my github repository.`)
    term.echo(`Don't ask why my github username is lame.`)
    setTimeout(1)
    window.open('https://github.com/Ashdevelopernewbie');
  }
};
const command_list = Object.keys(commands);
const formatted_list = command_list.map(cmd => {
  return `<white class="command">${cmd}</white>`;
});
const help = formatter.format(command_list);
const font = 'Doom'
figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);

const term = $('body').terminal(commands, {
  greetings: false,
  checkArity: false,
});

term.on('click', '.command', function () {
  console.log('Click found');
  const command = $(this).text();
  term.exec(command);
});

function frustrated() {
  console.log('Frustrated command called'); // Debugging line
  const video = document.createElement('video');
  video.src = '../media/video/toughTime.mp4';
  video.autoplay = true;
  video.controls = true;
  video.style.position = 'fixed';
  video.style.bottom = '10px';
  video.style.right = '10px';

  document.body.appendChild(video);
  console.log('Video element added to the DOM'); // Debugging line

  video.addEventListener('ended', () => {
    document.body.removeChild(video);
    console.log('Video ended and removed from the DOM'); // Debugging line
  });
}

function render(text) {
  const cols = term.cols();
  return figlet.textSync(text, {
    font: font,
    width: cols,
    whitespaceBreak: true
  })
}

function ready() {
  term.echo(render('Terminal Portfolio'));
  // term.echo (() => render('Terminal Portfolio'));
}