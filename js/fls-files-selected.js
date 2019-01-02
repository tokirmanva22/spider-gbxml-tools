// Copyright 2019 Ladybug Tools authors. MIT License
/* global THREE * /
/* jshint esversion: 6 */



const FLS = { "release": "R11.0", "date": "2018-12-31" };

 FLS.description = FLS.description || document.head.querySelector( "[ name=description ]" ).content;
 FLS.currentStatus =
	`
		<h3 FLS ${ FLS.release} status ${ FLS.date }</h3>

		<p>Selected Files.</p>

	`;



FLS.getMenuSelectedFiles = function() {


	const htm =
	`
		<details open >

			<summary>Selected Files
				<a id=FLSSum class=helpItem href="JavaScript:MNU.setPopupShowHide(FLSSum,FLS.currentStatus);" >&nbsp; ? &nbsp;</a>
			</summary>

			<p>Current development activity is here:</p>

			<h4><a href="https://www.ladybug.tools/spider-gbxml-tools/sandbox/spider-gbxml-text-parser/index.html" target="_blank">Spider gbXML Text Parser</a></h4>

			<p>The objective is to open and view huge files very quickly. See also its <a href="#sandbox/spider-gbxml-text-parser/README.md" target="_blank">Read Me</a> file.</p>

			<p>Scripts of interest include <a href="https://www.ladybug.tools/spider-gbxml-tools/master/gbxml-viewer-basic/index.html" target="_blank">Spider gbXML Viewer Basic</a></p>


		</details>
	`;

	return htm;


};