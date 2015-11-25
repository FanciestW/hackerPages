Template.hackerProfile.events({
	'click #submit': function(event, template){
		let legalName = template.find('#legalName').value;
		let pseudonym = template.find('#pseudonym').value;
		let email = template.find('#email').value;
		let bestHack = template.find('#bestHack').value;

		let hackerProfile = {
			legalName: legalName,
			pseudonym: pseudonym,
			email: email,
			bestHack: bestHack
		}

		Hackers.insert(hackerProfile);
		alert("Added: " + hackerProfile.legalName);
	}
});

