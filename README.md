# Password Generator

## My Task

This task requires me to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

## How it works

When you load the page you will see the Password Generator webpage (screenshot below). The webpage is essentially 4 divs. One big div as the page/body with the title "Password Generator", a smaller div inside that (the box on screen) with the subtitle "Generate a Password" and 2 smaller divs inside of that box, one with a textarea and the other with a button to generate the password.

<img src=".\Assets\images\001.PNG">

When the button is clicked a fucntion runs that will bring up a prompt asking how many characters would you like the password to be. The prompt also advises that the password must include 8 to 128 characters. If the user's request a password with less than 8 or more than 128 characters, an alert pops up advising of the requeired length and the user is brought about to the oringinal prompt asking for the length.

<img src=".\Assets\images\003.PNG">
(In the example above, the user requested the password length to be 10 characters long.)

Next the user will be met with a series of confirm prompts that asks if the user would like the password to include lower cass letters, upper case letters, number and special characters. The user can click "ok" for yes to include the character in question, or "cancel" to deny to use of said characters.

<img src=".\Assets\images\004.PNG">
<img src=".\Assets\images\005.PNG">
<img src=".\Assets\images\006.PNG">
<img src=".\Assets\images\007.PNG">
(in the examples above, the user selected "ok" to every confirm prompt, requesting the password to include all of the character types.)

Once the finally confirm prompt is answered, a password will be generated that only includes the characters the user said yes to. The password is also guaranteed to include atleast one of the requests character types.

<img src=".\Assets\images\002.PNG">

(In the screenshot above you will see that a password is generated that includes every character type that was requested.)

link to webpage in github: <a href = "https://cjose26.github.io/Password-Generator/"> Password Generator</a> 