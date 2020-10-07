/*jshint worker:true*/
/*
* Copyright (c) Andr3as
* as-is and without warranty under the MIT License.
* See http://opensource.org/licenses/MIT for more information.
* This information must remain intact.
*/
importScripts('lumin.js');

self.addEventListener('message', function(e) {
    var code = e.data.code;
    code = Lumin.highlight(code);
    //Post result
    postMessage({code: code});
}, false);