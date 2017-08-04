var stringSearcher = require('string-search');
let regex = /\tIF\s+[\w.$]*\s*=\s*@([\w.]*)[\n\s\w\!\s가-힣\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]*?\n\t\tEND/g;

let regex2 = '\tIF\s+[\w.$]*\s*=\s*@([\w.]*)[\n\s\w\!\s가-힣\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]*?\n\t\tEND';
let regex3 = /\tIF\s+/;
let a = "\tIF N.DIALOG = @N_DIALOG_NAVI_ADDRESS_LIST THEN\n" +
    "\t\tBEGIN\n" +
    "\t\t\t$S.CONTEXT.KEYWORDS := \"\\@N_TAG_BACK_ID \\@N_TAG_EXIT_ID \\@N_TAG_HELP_ID \\@N_TAG_PREVIOUS_PAGE_ID \\@N_TAG_NEXT_PAGE_ID \\@N_TAG_NAVI_LINE_NUMBER_ID\" ;\n" +
    "\t\tEND\n" +
    "\n" +
    "\t IF N.DIALOG = @N_DIALOG_NAVI_NBEST_LIST THEN\n" +
    "\t\tBEGIN\n" +
    "\t\t\t$S.CONTEXT.KEYWORDS := \"\\@N_TAG_BACK_ID \\@N_TAG_EXIT_ID \\@N_TAG_HELP_ID \\@N_TAG_NAVI_LINE_NUMBER_ID \\@N_TAG_NONE_OF_THEM_ID \\@N_TAG_ADDRESS_STEP_EDIT_ID\" ;\n" +
    "\t\tEND\n" +
    "\n" +
    "\tIF N.DIALOG = @N_DIALOG_NAVI_LIST | N.DIALOG = @N_DIALOG_NAVI_FULL_ADDRESS_LIST | N.DIALOG = @N_DIALOG_NAVI_PREVIOUS_POINT |\n" +
    "\t\tN.DIALOG = @N_DIALOG_NAVI_PREVIOUS_DESTINATION | N.DIALOG = @N_DIALOG_NAVI_PREVIOUS_SEARCH | N.DIALOG = @N_DIALOG_NAVI_PREVIOUS_START THEN\n" +
    "\t\tBEGIN\n" +
    "\t\t $S.CONTEXT.KEYWORDS := \"\\@N_TAG_BACK_ID \\@N_TAG_EXIT_ID \\@N_TAG_PREVIOUS_PAGE_ID \\@N_TAG_NEXT_PAGE_ID \\@N_TAG_HELP_ID \\@N_TAG_NAVI_LINE_NUMBER_ID\" ;\n" +
    "\t\tEND";
// stringSearcher.find(a, regex3)
//     .then(function(resultArr) {
//         console.log(resultArr)
//     });

console.log(a.match(regex));