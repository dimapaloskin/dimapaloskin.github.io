window.addEventListener('load', load);

function load() {

  console.log('%c Fetching my data via api...', 'background: #222; color: #bada55');
  fetch('/api/info.json')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      printInfo(json);
    })
    .catch((err) => {
      console.log(err);
      console.log('Something went wrong...');
    });
}

function printInfo(info) {
  console.log(`%c ${info.first_name} ${info.second_name} `, 'background: #333; color: #fff; font-size: 20px;');

  console.log(`%c Write me email: `, 'background: #333; color: #fff;');
  info.contacts.emails.forEach((email) => {
    console.log(email);
  });

  console.log(`%c or skype: `, 'background: #333; color: #fff;');
  console.log(info.contacts.skype);

  console.log(`%c or look me online: `, 'background: #333; color: #fff;');
  info.links.forEach((link) => {
    console.log(`%c${link.name}: %c ${link.url}`, 'font-weight: bold;', '');
  });

  console.log(`%c My current work: `, 'background: #333; color: #fff;');
  console.log(info.current_work);

  console.log(`%c And some of my skills: `, 'background: #333; color: #fff;');
  info.skills.forEach((skill) => {
    console.log(skill);
  });

  console.log('\n%c Bye ;)', 'background: #222; color: #bada55');
}
