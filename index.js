'use strict';

const alfy = require('alfy');
const chrono = require('chrono-node');

const [body, datetime] = alfy.input.split(' @ ');

const remindMeDate = chrono.parseDate(datetime);

alfy.output([
	{
		title: `Add Reminder: "${body}"`,
		subtitle: remindMeDate
			? `Due at ${remindMeDate.toLocaleString()}`
			: `No Due Date`,
		arg: `${body}@${remindMeDate ? remindMeDate.toJSON() : ''}`
	}
]);
