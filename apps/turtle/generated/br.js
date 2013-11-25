// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">un endro programmiñ da welet</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Gwelet ar c\'hod JavaScript krouet.</span><span id="linkTooltip">Enrollañ ha liammañ d\'ar bloc\'hadoù.</span><span id="runTooltip">Lañsañ ar programm termenet gant ar bloc\'hadoù \\nen takad labour. </span><span id="runProgram">Lañsañ ar programm</span><span id="resetProgram">Adderaouekaat</span><span id="dialogOk">Mat eo</span><span id="dialogCancel">Nullañ</span><span id="catLogic">Poell</span><span id="catLoops">Boukloù</span><span id="catMath">Matematik</span><span id="catText">Testenn</span><span id="catLists">Rolloù</span><span id="catColour">Liv</span><span id="catVariables">Argemmennoù</span><span id="catProcedures">Argerzhadurioù</span><span id="httpRequestError">Ur gudenn zo gant ar reked.</span><span id="linkAlert">Rannañ ho ploc\'hoù gant al liamm-mañ :\n\n%1</span><span id="hashError">Digarezit. "%1" ne glot gant programm enrollet ebet.</span><span id="xmlError">Ne c\'haller ket kargañ ho restr enrollet. Marteze e oa bet krouet gant ur stumm disheñvel eus Blockly ?</span><span id="listVariable">roll</span><span id="textVariable">testenn</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">Mat eo</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Lakaat ar vaot da vont war-raok pe da vont \\nwar-gil hervez ar c\'hementad merket. </span><span id="Turtle_moveForward">Mont war-raok eus</span><span id="Turtle_moveBackward">Mont war-gil eus</span><span id="Turtle_turnTooltip">Lakaat ar vaot da dreiñ a-gleiz pe a-zehoù \\nhervez an niver a zerezioù merket. </span><span id="Turtle_turnRight">treiñ a-zehou da</span><span id="Turtle_turnLeft">Treiñ a-gleiz da</span><span id="Turtle_widthTooltip">Cheñch ledander ar stilo.</span><span id="Turtle_setWidth">lakaat al ledander da</span><span id="Turtle_colourTooltip">Cheñch liv ar stilo.</span><span id="Turtle_setColour">lakaat al liv da</span><span id="Turtle_penTooltip">Sevel pe diskenn ar stilo, evit paouez pe kregiñ \\nda dresañ. </span><span id="Turtle_penUp">sevel ar stilo</span><span id="Turtle_penDown">lakaat ar stilo d\'an traoñ</span><span id="Turtle_turtleVisibilityTooltip">Lakaat a ra ar vaot (kelc\'h ha biroù) war pe \\ndiwar wel. </span><span id="Turtle_hideTurtle">kuzhat ar vaot</span><span id="Turtle_showTurtle">diskouez ar vaot</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Tresañ an destenn war-zu ar vaot el lec\'h m\'emañ.</span><span id="Turtle_print">moullañ</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Termeniñ a ra ar font implijet gant ar bloc\'h \\nskrivañ. </span><span id="Turtle_font">font</span><span id="Turtle_fontSize">ment ar font</span><span id="Turtle_fontNormal">reizh</span><span id="Turtle_fontBold">tev</span><span id="Turtle_fontItalic">italek</span><span id="Turtle_unloadWarning">Mar kuitait ar bajenn-mañ e kollot ho labour.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Baot tresañ</span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><script type="text/javascript" src="../slider.js"><\/script><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Lakaat ar vaot d\'ober ar pezh a lavar ar bloc\'hoù."><img src="../../media/1x1.gif" class="run icon21">Lañsañ ar programm</button><button id="resetButton" class="primary" style="display: none"><img src="../../media/1x1.gif" class="stop icon21"> Adderaouekaat</button></td></tr></table><div id="toolbarDiv"><button id="codeButton" class="notext" title="Gwelet ar c\'hod JavaScript krouet."><img src=\'../../media/1x1.gif\' class="code icon21"></button><button id="linkButton" class="notext" title="Enrollañ ha liammañ d\'ar bloc\'hadoù."><img src=\'../../media/1x1.gif\' class="link icon21"></button><button class="notext" id="captureButton" title="Enrollañ an dresadenn."><img src=\'../../media/1x1.gif\' class="img icon21"></button><a id="downloadImageLink" download="tresadenn.png"></a></div><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Baot"><block type="draw_move"><value name="VALUE"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value></block><block type="draw_width"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="draw_pen"></block><block type="turtle_visibility"></block><block type="draw_print"><value name="TEXT"><block type="text"></block></value></block><block type="draw_font"></block></category><category name="Liv"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Poell"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Boukloù"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Matematik"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Rolloù"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">roll</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">roll</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">roll</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">roll</title></block></value></block></category><category name="Argemmennoù" custom="VARIABLE"></category><category name="Argerzhadurioù" custom="PROCEDURE"></category></xml>';
};
