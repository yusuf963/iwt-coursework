# iwt-coursework
visit this url for more  details
https://www.dcs.bbk.ac.uk/~ptw/teaching/IWT/2023/coursework/cw.html

## REquirements 
1. user can choose men or women
1. user can search by such as players' names or years


## Tech requirement
1. You should use JavaScript, jQuery, HTML forms and PHP to implement your solution
2. works with both Firefox and Chrome
3. Create an HTML page which contains an HTML form with various form fields for user input, as well as an area for outputting results below the 
Year	Tournament	Winner	Runner-up
2022	U.S. Open	Iga Swiatek	Ons Jabeur
2022	Wimbledon	Elena Rybakina	Ons Jabeur
4. There should be a button on the page which when clicked results in the table being filled with appropriate rows. When reloading the HTML page, the form fields should be cleared (reset).

## Technical requirements
In addition to the interface and functionality requirements described above, there are a number of requirements to which your code must adhere. Some of these are to help guide you in your solution, and others are to help with automated marking and testing.

Your HTML file should be named iwt-cw.html.

The form in your HTML file should comprise three input boxes, one each for:

the year value entered (with id attribute having value "year"),
the winner value entered (with id attribute having value "winner"),
the runner-up value entered (with id attribute having value "runner-up"),
and three select drop-down lists, one each for:

the file selected (with id attribute having value "file"),
the year comparison operator selected (with id attribute having value "year-op"),
the tournament selected (with id attribute having value "tournament").
The form should also include three buttons to:

send the query (with id attribute having value "send-query"),
clear the input fields and selections (with id attribute having value "clear-input"),
clear the table of output (with id attribute having value "clear-output").
Your HTML file should contain an area where output will be displayed. This should be implemented as follows: