const { exec } = require('child_process');

const [name, remindMeDate] = process.argv[2].split('@');

const script = `
  const Reminders = Application("Reminders");
  const args = { name: "${name}"};

  if ("${remindMeDate}") { args.remindMeDate = new Date("${remindMeDate}") }

  const newReminder = Reminders.Reminder(args);
  Reminders.defaultList().reminders.push(newReminder);

  newReminder.name();
`;

exec(`osascript -l JavaScript -e '${script}'`, (err, stdout) => {
	if (err) {
		console.log(`Error adding reminder: ${err}`, stdout);
	} else {
		console.log('Successfully added: ', stdout);
	}
});
