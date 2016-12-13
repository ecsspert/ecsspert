<?php 
$GLOBALS['css'] = $GLOBALS['css'] . '
/*---------------------------------------------------------
-* The eCSSpert logo drawn wih CSS3
-*-------------------------------------------------------*/
.ecsspert {
	display: block;
	height: 15em;
	margin-top: 20px;
	overflow: hidden;
	position: relative;
	text-indent: 999px;
	white-space: nowrap;
	width: 58em;
}
.ecsspert:before,
.ecsspert:after {
    content: "";
    display: block;
    height: 1em;
    left: 0;
    position: absolute;
    top: 0;
    width: 1em;
}
.ecsspert:before {
    color: #fff;
    font-size: 2em;
    box-shadow: 3.5em 0 #48CFAD, 4.5em 0 #48CFAD, 5.5em 0 #48CFAD, 6.5em 0 #48CFAD, 7.5em 0 #48CFAD, 8.5em 0 #48CFAD, 9.5em 0 #48CFAD, 10.5em 0 #48CFAD, 11.5em 0 #48CFAD, 12.5em 0 #48CFAD, 13.5em 0 #48CFAD, 14.5em 0 #48CFAD, 0.5em 1em, 1.5em 1em, 3.5em 1em #48CFAD, 14.5em 1em #48CFAD, 16.5em 1em, 17.5em 1em, 20em 1em, 21em 1em, 23.5em 1em, 24.5em 1em, 26.5em 1em, 0em 2em, 2em 2em, 3.5em 2em #48CFAD, 9em 2em #48CFAD, 10em 2em #48CFAD, 12.5em 2em #48CFAD, 13.5em 2em #48CFAD, 14.5em 2em #48CFAD, 16em 2em, 18em 2em, 19.5em 2em, 21.5em 2em, 23em 2em, 25em 2em, 26.5em 2em, 27.5em 2em, 0em 3em, 1em 3em, 2em 3em, 3.5em 3em #48CFAD, 14.5em 3em #48CFAD, 16em 3em, 17em 3em, 19.5em 3em, 20.5em 3em, 21.5em 3em, 23em 3em, 24em 3em, 26.5em 3em, 0em 4em, 3.5em 4em #48CFAD, 5.5em 4em #48CFAD, 6.5em 4em #48CFAD, 8em 4em #48CFAD, 9em 4em #48CFAD, 11.5em 4em #48CFAD, 12.5em 4em #48CFAD, 14.5em 4em #48CFAD, 16em 4em, 19.5em 4em, 23em 4em, 25em 4em, 26.5em 4em, 2em 4.5em, 21.5em 4.5em, 0.5em 5em, 1.5em 5em, 3.5em 5em #48CFAD, 14.5em 5em #48CFAD, 16em 5em, 20em 5em, 21em 5em, 23em 5em, 25em 5em, 27.5em 5em, 3.5em 6em #48CFAD, 4.5em 6em #48CFAD, 5.5em 6em #48CFAD, 6.5em 6em #48CFAD, 7.5em 6em #48CFAD, 8.5em 6em #48CFAD, 9.5em 6em #48CFAD, 10.5em 6em #48CFAD, 11.5em 6em #48CFAD, 12.5em 6em #48CFAD, 13.5em 6em #48CFAD, 14.5em 6em #48CFAD, 6.5em 3em 0 1em #48CFAD, 0 1.5em, 2em 1.5em, 16em 1.5em, 18em 3em, 19.5em 1.5em, 21.5em 1.5em, 23em 1.5em, 26em 1.5em, 25em 3em, 0em 4.5em, 19.5em 4.5em, 26.5em 4.5em, 27em 5em;
}
.ecsspert:after {
    color: #000;
    font-size: 1em;
    box-shadow: 31em 1em, 9em 2em, 10em 2em, 11em 2em, 12em 2em, 13em 2em, 14em 2em, 16em 2em, 17em 2em, 18em 2em, 19em 2em, 20em 2em, 21em 2em, 23em 2em, 24em 2em, 25em 2em, 26em 2em, 27em 2em, 28em 2em, 31em 2em, 9em 3em, 16em 3em, 23em 3em, 31em 3em, 55em 3em, 2em 4em, 3em 4em, 6em 4em, 9em 4em, 16em 4em, 23em 4em, 31em 4em, 34em 4em, 35em 4em, 38em 4em, 41em 4em, 42em 4em, 45em 4em, 48em 4em, 49em 4em, 52em 4em, 2em 5em, 6em 5em, 9em 5em, 16em 5em, 23em 5em, 31em 5em, 34em 5em, 38em 5em, 41em 5em, 45em 5em, 48em 5em, 52em 5em, 57em 5em, 6em 6em, 9em 6em, 16em 6em, 19em 6em, 20em 6em, 21em 6em, 23em 6em, 26em 6em, 27em 6em, 28em 6em, 31em 6em, 38em 6em, 45em 6em, 52em 6em, 55em 6em, 56em 6em, 57em 6em, 6em 7em, 9em 7em, 16em 7em, 23em 7em, 31em 7em, 37em 7em, 38em 7em, 45em 7em, 51em 7em, 52em 7em, 55em 7em, 2em 8em, 3em 8em, 4em 8em, 5em 8em, 6em 8em, 9em 8em, 31em 8em, 34em 8em, 35em 8em, 36em 8em, 37em 8em, 41em 8em, 42em 8em, 43em 8em, 44em 8em, 45em 8em, 48em 8em, 49em 8em, 55em 8em, 2em 9em, 9em 9em, 20em 9em, 27em 9em, 31em 9em, 34em 9em, 41em 9em, 48em 9em, 52em 9em, 55em 9em, 6em 10em, 9em 10em, 12em 10em, 13em 10em, 14em 10em, 16em 10em, 17em 10em, 18em 10em, 19em 10em, 20em 10em, 23em 10em, 24em 10em, 25em 10em, 26em 10em, 27em 10em, 31em 10em, 34em 10em, 45em 10em, 48em 10em, 52em 10em, 5em 11em, 6em 11em, 9em 11em, 16em 11em, 23em 11em, 31em 11em, 34em 11em, 44em 11em, 45em 11em, 48em 11em, 52em 11em, 57em 11em, 2em 12em, 3em 12em, 4em 12em, 5em 12em, 31em 12em, 33em 12em, 34em 12em, 41em 12em, 42em 12em, 43em 12em, 44em 12em, 47em 12em, 48em 12em, 51em 12em, 52em 12em, 55em 12em, 56em 12em, 57em 12em, 31em 13em, 19em 25em 0 11em, 31em 14em, 15em 2em #48CFAD, 22em 2em #48CFAD, 15em 3em #48CFAD, 22em 3em #48CFAD, 15em 4em #48CFAD, 22em 4em #48CFAD, 15em 5em #48CFAD, 22em 5em #48CFAD, 15em 6em #48CFAD, 22em 6em #48CFAD, 15em 7em #48CFAD, 22em 7em #48CFAD, 15em 8em #48CFAD, 22em 8em #48CFAD, 15em 9em #48CFAD, 22em 9em #48CFAD, 15em 10em #48CFAD, 22em 10em #48CFAD, 15em 11em #48CFAD, 22em 11em #48CFAD;
}';
?>