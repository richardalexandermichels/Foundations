var ejs = require('ejs');
var fs = require('fs');
var tumblr = require('tumblr.js');
var mandrill = require('mandrill-api/mandrill');
var csvFile = fs.readFileSync("friend_list.csv","utf8");
var csvFile = csvFile.split(/[\n,]+/);
var email_template = fs.readFileSync("email_template.html","utf8");
var mandrill_client = new mandrill.Mandrill('kBoTPBJKJAha8mSgPHx3lg');


// Authenticate via OAuth
var client = tumblr.createClient({
  consumer_key: 'Z3k4MDTB8ONJ71FLoUqHo0cBQ8dpstmYHwNgEeqxOOuEiEvcFL',
  consumer_secret: 'ujHf6rebQ9BFL6nI2a5YEdVtaJkgFio0fVRnx4Uv9n1DIruqgt',
  token: 'vYiByIhcrxW1q62fqqhXHnrwcYyvK1cOV4BSPUvKAz3GjdRqEJ',
  token_secret: 'i0JGNVqcwSMEfM6tgs2XYYuEXKofrkIus36J8jeBms4OjDamXG'
});


function csvParse(file,data,arr){
	var data = {};
	var arr = arr || []
	if(file.length<=4){
		return arr
	}
	for(var i = 4;i<8;i++){
		data[file[i%4]] = file[i];
	}
	arr.push(data);
	file.splice(4,4);
	return csvParse(file,data,arr);
}
//console.log(csvParse(csvFile));
parsedCsv = csvParse(csvFile);
/*
//.replace method template solution
function strMod(template,parsedData){
    var newStr = "";
    for(var i of arr){
        newStr = str.replace(/FIRST_NAME/,i.firstName);
        newStr = newStr.replace(/NUM_MONTHS_SINCE_CONTACT/,i.numMonthsSinceContact);
        console.log(newStr);
        //console.log(i.numMonthsSinceContact);
    }   
}
*/
/*ejs template solution
function strMod(template,parsedData){
    var newStr = "";
    for(var i in parsedData){
        newStr = ejs.render(email_template, 
	                { firstName: parsedData[i].firstName,  
	                  numMonthsSinceContact: parsedData[i].numMonthsSinceContact
	                });
        console.log(newStr);
        //console.log(i.numMonthsSinceContact);
    }   
}
*/
//strMod(email_template,parsedCsv)

function sendEmail(to_name, to_email, from_name, from_email, subject, message_html){
    var message = {
        "html": message_html,
        "subject": subject,
        "from_email": from_email,
        "from_name": from_name,
        "to": [{
                "email": to_email,
                "name": to_name
            }],
        "important": false,
        "track_opens": true,    
        "auto_html": false,
        "preserve_recipients": true,
        "merge": false,
        "tags": [
            "Fullstack_Tumblrmailer_Workshop"
        ]    
    };
    var async = false;
    var ip_pool = "Main Pool";
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
        // console.log(message);
        // console.log(result);   
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });
 }

client.posts('richardmichels.tumblr.com', function(err, blog){
  function strMod(template,parsedData){
    var newStr = "";
    var latest = [];
    for(var post of blog.posts){
    	if(+Date.parse(Date()) - +Date.parse(post.date) < 604800000){
    		latest.push(post)
    	}
    	
    }
    for(obj of parsedData){
    	obj['latestPosts'] = latest;
    }
    for(var i in parsedData){
        newStr = ejs.render(email_template, 
	                { firstName: parsedData[i].firstName,  
	                  numMonthsSinceContact: parsedData[i].numMonthsSinceContact,
	                  latestPosts: parsedData[i].latestPosts
	                });

        console.log(newStr);
        sendEmail(parsedCsv[i].firstName, parsedCsv[i].emailAddress, 'Richard', 'richard.alexandermichels@gmail.com', 'new posts', newStr)
        //console.log(parsedData[i].latestPosts);
        //console.log(parsedCsv[i].firstName, parsedCsv[i].emailAddress)

    }   
}
	strMod(email_template,parsedCsv);
	//console.log(parsedCsv);
	
})
