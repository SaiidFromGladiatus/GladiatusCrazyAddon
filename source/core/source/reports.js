/*
 * Addon Reports Script
 * Author: DarkThanos, GreatApo
 */

// Reports
var gca_reports = {
	preinject : function() {
		// Resolve submod
		this.resolveSubmod();

		// Check event timers
		this.eventTimers();
	},
	inject : function(){
		// Check for errors
		if(!document.getElementById("content"))
			return;
		
		// Check getting out from underworld
		if(document.getElementById('content').getElementsByTagName('img')[0] && document.getElementById('content').getElementsByTagName('img')[0].src.match('/ceres.png'))
			return;

		// Combat reports
		if (this.submod == 'showCombatReport' && document.getElementById('reportHeader')) {
			
			// If Combat report
			if (this.combatReport == "reportExpedition") {
				// Log items found for statistics
				(gca_options.bool("reports", "found_items") &&
					this.report_found_items());
			}
			else if (this.combatReport == "reportDungeon") {
				// Dungeon battle analyzer
				(gca_options.bool("reports", "battle_analyzer") &&
					this.battle_analyzer.run());
			}
			else if (this.combatReport == "reportCircusTurma") {
				// Turma battle analyzer
				(gca_options.bool("reports", "battle_analyzer") &&
					this.battle_analyzer.run());
			}

			if (this.combatReport == "reportExpedition" || this.combatReport == "reportDungeon") {
				// Add shadow on items rewards
				(gca_options.bool("global","item_shadow") &&
					this.itemShadow());
			}

			// If arena attacked right now
			if (this.combatReport == "reportArena" && this.referrer.mod == "arena") {
				this.attacked.arena();
			}

			// Fire reports info updated
			gca_tools.event.fireOnce("arena-info-update");

		}
		
		// Report Lists
		else {
			// Save arena timer
			((this.submod == 'showArena' || this.submod == 'showCircusTurma') && gca_options.bool("global", "attacked_timers") &&
				this.save_reports_info());

			// Style changes
			(gca_options.bool("reports", "style_change") &&
				this.reports_style.change());
		}

		// Pagination layout
		(gca_options.bool("global", "pagination_layout") && 
			this.pagination());

		// Setting Link
		gca_tools.create.settingsLink("reports");
	},

	// Get Submod
	resolveSubmod : function(){
		// Get url submod
		this.submod = gca_section.submod;
		this.combatReport = null;
		this.reportId = gca_getPage.parameter('reportId') || false;
		this.referrer = gca_getPage.parameters(document.referrer);

		// If submod is null
		if (this.submod == null) {
			// Wanna be submod parse
			if (gca_getPage.parameter('showExpeditions') != undefined) {
				this.submod = "showExpeditions";
			}
			else {
				// Get type parameter
				let t = gca_getPage.parameter('t');

				// Expeditions type
				if (t === "-1") this.submod = "showExpeditions";
				// Arena type
				else if (t === "2") this.submod = "showArena";
				// CircusTurma type
				else if (t === "3") this.submod = "showCircusTurma";
				// Dungeons type
				else if (t === "1") this.submod = "showDungeons";

				else this.submod = "showExpeditions";
			}
		}

		// Combat Report
		else if (gca_section.submod === "showCombatReport") {
			// Get type parameter
			let t = gca_getPage.parameter('t');

			// Expeditions type
			if (t === "0") this.combatReport = "reportExpedition";
			// Arena type
			else if (t === "2") this.combatReport = "reportArena";
			// CircusTurma type
			else if (t === "3") this.combatReport = "reportCircusTurma";
			// Dungeons type
			else if (t === "1" || t === "4") this.combatReport = "reportDungeon";

			else this.combatReport = "reportExpedition";
		}
	},

	// Log items found for statistics
	report_found_items : function(){
		// Check if this is new report
		var reportDate = document.getElementsByTagName('h2')[1].textContent.match(/(\d+).(\d+).(\d+) (\d+).(\d+).(\d+)/i);
		if (!reportDate) reportDate = document.getElementsByTagName('h2')[0].textContent.match(/(\d+).(\d+).(\d+) (\d+).(\d+).(\d+)/i);
		if (!reportDate) return;
		reportDate = new Date(reportDate[3], reportDate[2] - 1, reportDate[1], reportDate[4], reportDate[5], reportDate[6])
		var timePassed = (gca_tools.time.server() - reportDate.getTime())/1000;//in sec
		
		if (timePassed > 5) return;
			
		// Reward exist?
		var rewards = document.getElementsByClassName('reportReward');
		var data = gca_data.section.get('data', 'enemy_drops', []);//enemy,item
		// Fix wrong data type of previous versions
		if (data.constructor != Array) {
			data = [];
		}
		for(let i = 0; i < rewards.length; i++) {
			if(typeof rewards[i].getElementsByTagName('div')[1]!=='undefined'){
				if(rewards[i].getElementsByTagName('div')[1].className.match(/item-i-18-\d+/)){
					let item = rewards[i].getElementsByTagName('div')[1].className.match(/item-i-(18-\d+)/)[1];
					let enemy = document.getElementById('defenderAvatar11').getElementsByTagName('div')[2].style.backgroundImage.match(/url\("\d+\/img\/npc\/(\d+\/\d+_\d+....")\)/)[1];
					data.push([enemy, item]);
				}
			}
		}
		gca_data.section.set('data', 'enemy_drops', data);
	},
	
	// Report style
	reports_style : {
		// Change report style
		change : function(){
			// Load loot tooltips
			var load_loot = gca_options.bool("reports","load_loot_tooltips");

			// Date variable
			var last_date = null;

			// Report lines
			var row = 1;
			var line = document.getElementById('content').getElementsByTagName('table')[0].getElementsByTagName('tr');

			// Align stuff
			line[0].getElementsByTagName('th')[2].style.textAlign = "right";

			// If no reports
			if (line.length <= 2)
				// Kill it with fire
				return;

			// For every row
			while (line[row]) {
				// If a td exist
				if (line[row].getElementsByTagName('td').length > 0) {
					// Get date
					let date = line[row].getElementsByTagName('td')[0].textContent.match(/(\d+\.\d+\.\d+)/i)[1];
					// If this is a new line
					if (last_date != date) {
						last_date = date;
						// Insert a new line
						let tr = document.createElement("tr");
						tr.className = "reports_day_row";
						let td = document.createElement("td");
						td.textContent = last_date;
						td.setAttribute('colspan', line[row].getElementsByTagName('td').length);
						tr.appendChild(td);
						line[row].parentNode.insertBefore(tr, line[row]);
					}
					else {
						// Remove style
						line[row].getElementsByTagName('td')[0].removeAttribute('style');
						// Leave only time
						line[row].getElementsByTagName('td')[0].textContent = line[row].getElementsByTagName('td')[0].textContent.match(/(\d+:\d+:*\d*)/i)[1];
						// Align Loot
						line[row].getElementsByTagName('td')[2].style.textAlign = "right";

						// If report has a reward
						if (line[row].getElementsByTagName('td')[3].getElementsByTagName('div').length > 0 && line[row].getElementsByTagName('td')[3].getElementsByTagName('div')[0].className == "icon_itemreward") {
							// Get report id
							let report_id = line[row].getElementsByTagName('td')[4].getElementsByTagName('a')[0].href.match(/reportId=(\d+)&/i)[1];
							// Get report t parm
							let report_t = line[row].getElementsByTagName('td')[4].getElementsByTagName('a')[0].href.match(/t=(\d+)&/i)[1];
							// Load Loot
							if (load_loot) {
								// Set a loading tooltip
								let icon = line[row].getElementsByTagName('td')[3].getElementsByTagName('div')[0];
								icon.id = 'report_reward_item_' + report_id;
								let title = icon.getAttribute('title');
								icon.removeAttribute('title');
								icon.style.cursor = "pointer";
								gca_tools.setTooltip(icon, JSON.stringify([[[title+'<span class="loading"></span>',"white"]]]));
								// Load item
								this.getLootItem(report_id, report_t, icon, title);
							}
						}
						
						// Attack again link
						if(gca_reports.submod == 'showArena' || gca_reports.submod == 'showCircusTurma'){
							//let icon = (line[row].getElementsByTagName('div')[0].className=="icon_defense")? "⚔️" : "(↺)";
							let icon = "(↺)";
							
							// Create click icon
							let attack_again = document.createElement("span");
							attack_again.textContent = icon;
							attack_again.setAttribute('style', "float:right;font-weight:normal;cursor:pointer;");
							//attack_again.style.color = line[row].getElementsByTagName('a')[0].style.color; // color same as link
							
							// Get opponent id
							let opponent_id = line[row].getElementsByTagName('td')[1].getElementsByTagName('a')[0].href.match(/&p=(\d+)/i)[1];
							let server = line[row].getElementsByTagName('td')[1].getElementsByTagName('a')[0].href.match(/s(\d+)-(\w+)\./i);
							attack_again.setAttribute('onclick', "gca_reports.reports_style.startProvinciarumFight(this, "+ ((gca_reports.submod == 'showArena')?2:3) +", "+opponent_id+", "+server[1]+", '"+server[2]+"')");
							//gca_tools.setTooltip(attack_again, JSON.stringify([[['Attack back',"white"]]]));
							
							// Tooltip
							let name = line[row].getElementsByTagName('td')[1].getElementsByTagName('a')[0].textContent;
							//attack_again.dataset.tooltip = '[[["'+ gca_locale.get("arena", "attack_player", {name}) +'","#fff;font-size:12px;"]]]';
							gca_tools.setTooltip(attack_again, JSON.stringify([[[ gca_locale.get("arena", "attack_player", {name}), line[row].getElementsByTagName('a')[0].style.color+";font-size:12px;" ]]]));
							
							// Add click icon
							line[row].getElementsByTagName('td')[0].appendChild(attack_again);
						}
					}
				}
				row++;
			}
			
			// Add attack error box
			let error_box = document.createElement("div");
			error_box.id = "errorRow";
			error_box.setAttribute('style', "display:none;margin:10px;border:2px solid #bba86e;background-color: #eddac4;padding:10px");
			document.getElementById("content").insertBefore(error_box, document.getElementById("content").getElementsByTagName('div')[0]);
			let error_text = document.createElement("div");
			error_text.id = "errorText";
			document.getElementById("errorRow").appendChild(error_text);
		},
		
		// Gladiatus Attack code
		startProvinciarumFight :function(d, a, c, b, e) {
			jQuery("#errorRow").css({display: "none"});
			window.sendRequest("get", "ajax.php", "mod=arena&submod=confirmDoCombat&aType=" + a + "&opponentId=" + c + "&serverId=" + b + "&country=" + e, d)
		},

		// Get loot item
		getLootItem : function(id, t, icon, title){
			// Check cache
			let cache = this.getLootItemFromCache(id);
			if (cache) {
				icon.className += ' reward-' + this.getStringFromColorNumber(cache.q);
				gca_tools.setTooltip(icon, cache.t);
				return;
			}
			
			// Get Report
			jQuery.get(gca_getPage.link({"mod":"reports","submod":"showCombatReport","reportId":id,"t":t}), (content) => {
				var tooltips = [];

				// Match Loot
				var match_tooltips = content.match(/<div class="reportReward">[^<]+(?:<br \/>[^<]*|)<div>(<div style="[^"]*" class="item-i-[^>]+>)/img);
				
				// If found tooltip
				if(match_tooltips){
					// For each tooltip
					for (var i = 0; i < match_tooltips.length; i++) {
						// Match loot tooltip
						tooltips.push(match_tooltips[i].match(/data-tooltip="([^"]+)"/im));
					}
				}

				// Check for tokens
				match_tooltips = content.match(/<div class="reportReward" (data-tooltip=[^>]+><img)/img);

				// If found token tooltip
				if(match_tooltips){
					// For each tooltip
					for (let i = 0; i < match_tooltips.length; i++) {
						// Match loot tooltip
						tooltips.push(match_tooltips[i].match(/data-tooltip="([^"]+)"/im));
					}
				}
				
				// Error - not found loot
				if(tooltips.length == 0){
					// Display error message
					gca_tools.setTooltip(icon, JSON.stringify([[[title, "white"], [gca_locale.get("general", "error"), "white"]]]));
				}
				// Tooltip replace
				else {
					// Add title on tooltip
					let reward_tooltip = [[[title, "white"]]];
					// Init quality
					let quality_best = 0;
					// For each tooltip
					for (let i = 0; i < tooltips.length; i++) {
						// Parse tooltip
						let tooltip = JSON.parse(tooltips[i][1].replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>'));
						let quality = gca_tools.item.shadow.getColor(tooltip);
						switch(quality) {
							case 'white':  	if(quality_best < 0) quality_best = 0; break;
							case 'green': 	if(quality_best < 1) quality_best = 1; break;
							case 'blue': 	if(quality_best < 2) quality_best = 2; break;
							case 'purple': 	if(quality_best < 3) quality_best = 3; break;
							case 'orange': 	if(quality_best < 4) quality_best = 4; break;
							case 'red': 	if(quality_best < 5) quality_best = 5; break;
						}
						// Add space
						if(i != 0)
							reward_tooltip[0].push(["&nbsp;", "white"]);
						// Add tooltip rows
						for (let j = 0; j < tooltip[0].length; j++) {
							reward_tooltip[0].push(tooltip[0][j]);
						}
					}
					// Show tooltip
					reward_tooltip = JSON.stringify(reward_tooltip);
					icon.className += ' reward-' + this.getStringFromColorNumber(quality_best);
					gca_tools.setTooltip(icon, reward_tooltip);

					// Save in cache
					this.setLootItemOnCache(id, reward_tooltip, quality_best);
				}
			});
		},

		lootCache : false,
		initLootItemCache : function(){
			if (this.lootCache) return;
			this.lootCache = gca_data.section.get('cache', 'reports-loot', []);
			if (this.lootCache.length > 60) {
				this.lootCache = this.lootCache.slice(0, 50);
				gca_data.section.set('cache', 'reports-loot', this.lootCache);
			}
		},
		getLootItemFromCache : function(reportid){
			this.initLootItemCache();

			for (let i = 0; i < this.lootCache.length; i++) {
				if (this.lootCache[i].i == reportid) {
					return this.lootCache[i];
				}
			}
			return false;
		},
		setLootItemOnCache : function(reportid, tooltip, quality){
			this.initLootItemCache();
			this.lootCache.unshift({i:reportid, t:tooltip, q:quality});
			gca_data.section.set('cache', 'reports-loot', this.lootCache);
		},

		getStringFromColorNumber : function(quality) {
			switch(quality) {
				case 0: return 'white';
				case 1: return 'green';
				case 2: return 'blue';
				case 3: return 'purple';
				case 4: return 'orange';
				case 5: return 'red';
				default: return 'white';
			}
		}
	},

	// Save reports information
	save_reports_info : function(){
		// Check if section exist
		var section = document.getElementById('content').getElementsByTagName('section');
		if(section.length == 0) return;
		section = section[0];
		// Check if table exist
		var table = section.getElementsByTagName('table');
		if(table.length == 0) return;
		table = table[0];

		// Time variable
		var time = [false, false];

		// Reports
		if (table.getElementsByClassName('icon_defense').length > 0) {
			var reports = table.getElementsByTagName('tr');
			for (let i = 1; i < reports.length; i++) {
				// If defense attack
				if(reports[i].getElementsByClassName('icon_defense').length){
					// Cross server
					if (time[1] == false && reports[i].getElementsByTagName('a')[0].textContent.match(/\s+\(\d+\)/i)) {
						// Get time
						time[1] = gca_tools.time.parse(reports[i].getElementsByTagName('td')[0].textContent.trim());
					}
					// Same server
					else if (time[0] == false) {
						// Get time
						time[0] = gca_tools.time.parse(reports[i].getElementsByTagName('td')[0].textContent.trim());
					}
					// Both times found
					else if (time[0] != false && time[1] != false) {
						break;
					}
				}
			}
		}

		// Normal
		if (time[0]) {
			if (this.submod == 'showArena')
				gca_data.section.set("timers", 'arena_attacked', time[0]);
			else
				gca_data.section.set("timers", 'grouparena_attacked', time[0]);
		}

		// Cross
		if (time[1]) {
			if (this.submod == 'showArena')
				gca_data.section.set("timers", 'arena_xs_attacked', time[1]);
			else
				gca_data.section.set("timers", 'grouparena_xs_attacked', time[1]);
		}
		
		// Fire reports info updated
		gca_tools.event.fireOnce("arena-info-update");
	},


	// Pagination
	pagination : function(){
		// Get pagings
		var pagings = document.getElementsByClassName("paging");
		// Parse each
		for(let i = pagings.length - 1; i >= 0; i--){
			gca_tools.pagination.parse(pagings[i]);
		}
	},

	// Add shadow to items
	itemShadow : function(){
		// Get rewards wrapper
		var rewards = document.getElementById("content").getElementsByClassName("reportReward");
		if(rewards.length == 0) return;

		// For each reward
		for (let i = 0; i < rewards.length; i++) {
			// Get divs inside reward
			let divs = rewards[i].getElementsByTagName("div");
			if (divs.length > 1) {
				gca_tools.item.shadow.add(divs[1]);
			}
		}
	},

	// Attack was launched
	attacked : {

		// An arena attack
		arena : function() {
			// Get result
			let result = document.getElementById("reportHeader").className;

			if (result === "reportWin") {
				result = 1;		// Won
			}
			else if (result === "reportLose") {
				result = -1;	// Lost
			}
			else {
				result = 0;		// Draw
			}

			gca_tools.easter_eggs.check(
				gca_tools.easter_eggs.fight,
				[(result == 1)]
			);
		}

	},
	
	// Battle Analyzer (Turma & Dungeons)
	battle_analyzer : {
		run : function() {
			// Error counter
			this.errors = 0;

			// Initialize translations
			this.initTranslations();
			// Get players names
			this.initPlayers();
			
			// Parse each round
			jQuery('.dungeon_report_statistic:eq(1) table th.table_border_bottom').each((index, element) => {
				this.parseRound(element.parentNode, element, index);
			});
		},

		// Parse round by index
		parseRound : function(round_row, round_title, index) {
			// Player life change on this round init
			for (let i = 0; i < this.players.length; i++) {
				this.players[i][3] = 0;
			}
			
			var rows = [round_row];
			var element = round_title.parentNode.nextElementSibling;
			while (element && element.getElementsByClassName('table_border_bottom').length == 0) {
				rows.push(element);
				if (element.getElementsByTagName('font').length > 0) {
					// Get action text
					let text = element.getElementsByTagName('font')[0].innerHTML.replace(/<\/*b>/g,'');
					// If there is a number on the action
					if ((/\d+/).test(text)) {
						// Check if action is a healing (green font)
						let isHealing = element.getElementsByTagName('font')[0].getAttribute('color') == 'green' ? true : false;
						// Get action number value
						let value = parseInt(text.match(/\d+/)[0], 10);
						value = isHealing ? value : -1 * value;
						
						let found = false;
						for (let i = 0; i < this.players.length; i++) {
							if (text.match(this.players[i][0])) {
								found = true;
								this.players[i][1] += value;
								this.players[i][3] += value;
								break;
							}
						}
						if (!found) {
							let error = document.createElement('span');
							error.style.cursor = 'default';
							error.style.color = '#ff0000';
							error.textContent = '⚠';
							error.title = 'Analyzer Error: Player was not found';
							element.getElementsByTagName('font')[0].parentNode.appendChild(document.createTextNode(' '));
							element.getElementsByTagName('font')[0].parentNode.appendChild(error);
							this.errors++;
							console.log('Analyzer Parsing Error:' + '"' + text + '"');
						}
					}
				}
				element = element.nextElementSibling;
			}

			// Create side table info
			let round_report = document.createElement('div');
			//round_report.id = "dungeon_life_report_" + index;
			round_report.className = 'title2_box analyzer_life_report';
			
			// Create side shadow from the main page body
			let sideShadow = document.createElement('div');
			sideShadow.className = 'analyzer_life_shadow';
			round_report.appendChild(sideShadow);

			// Create round report table
			let table = document.createElement('div');
			table.className = "charstats_nomargin analyzer_life_charstats";
			let table_top_border = document.createElement('div');
			table_top_border.className = 'analyzer_life_charstats_border';
			table_top_border.style.backgroundImage = 'url(img/char_status_kopf_b.jpg)';
			table.appendChild(table_top_border);
			let table_title = document.createElement('div');
			table_title.className = "charstats_bg2";
			table_title.style.textAlign = 'center';
			let table_title_span = document.createElement('span');
			table_title_span.textContent = round_title.textContent + ' - ' + this.translation_life_points;
			table_title.appendChild(table_title_span);
			table.appendChild(table_title);
			round_report.appendChild(table);
			
			this.addPlayerInfo(this.attackers, table, 'charstats_balken_misc');
			this.addPlayerInfo(this.defenders, table, 'charstats_balken_leben');
			this.addPlayerInfo(this.ignored, table, 'charstats_balken_xp', '⚠');
			
			let table_bottom_border = document.createElement('div');
			table_bottom_border.className = 'analyzer_life_charstats_border';
			table_bottom_border.style.backgroundImage = 'url(img/char_status_abschluss_b.jpg)';
			table.appendChild(table_bottom_border);
			
			round_row.insertBefore(round_report, this.nextSibling);
			
			// Adds spacer if not enough height to fit info table
			let height = round_report.clientHeight + 10;
			for (let i = 0; i < rows.length; i++) {
				height -= rows[i].clientHeight;
			}
			if (height > 0) {
				let spacer = document.createElement('tr');
				spacer.style.height = height + 'px';
				rows[rows.length - 1].parentNode.insertBefore(spacer, rows[rows.length-1].nextSibling);
			}
		},

		// Add player info on table
		addPlayerInfo : function(players, table, bar_style, custom_text) {
			for (let i = 0; i < players.length; i++) {
				
				let row = document.createElement('div');
				row.className = 'charstats_bg2';

				let name = document.createElement('span');
				name.className = 'charstats_text';
				name.textContent = players[i][0] + (players[i][4] > 1 ? ' ×' + players[i][4]: '');
				if (players[i][3] != 0) {
					let change = document.createElement('span');
					change.style.color = (players[i][3] > 0 ? 'rgb(0, 100, 0)' : 'rgb(100, 0, 0)');
					change.textContent = (players[i][3] > 0 ? '+' : '') + players[i][3];
					name.appendChild(change);
				}
				row.appendChild(name);
				
				let bar_wrapper = document.createElement('div');
				bar_wrapper.className = 'charstats_balken';
				let bar_life = document.createElement('div');
				bar_life.className = bar_style;
				bar_life.style = 'width:' + (((players[i][1] > 0 ? players[i][1] : 0) / players[i][2]) * 100) + '%';
				bar_wrapper.appendChild(bar_life);
				row.appendChild(bar_wrapper);

				let life = document.createElement('span');
				life.className = 'charstats_value3';
				life.textContent = custom_text ? custom_text : players[i][1] + ' / ' + players[i][2];
				row.appendChild(life);

				table.appendChild(row);
			}
		},

		// Initialize translations
		initTranslations : function() {
			// Get translation "Life Points"
			let stats = null;
			for (let i = 1; i <= 5; i++) {
				stats = document.getElementById('attackerCharStats1');
				if (stats) break;
			}
			this.translation_life_points = stats.getElementsByClassName('charstats_text')[0].innerHTML.trim();
		},

		// Get players names
		initPlayers : function() {
			// Get players
			this.attackers = this.getPlayers('attacker');
			this.defenders = this.getPlayers('defender');
			this.ignored = [];

			// Check if there are same names between the players
			for (let i = this.attackers.length - 1; i >= 0; i--) {
				for (let j = this.defenders.length - 1; j >= 0; j--) {
					// If the 2 players have the same name
					if (this.attackers[i][0] == this.defenders[j][0]) {
						//console.log('Analyzer Ignore Warning:' + '"' + this.attackers[i][0] + '"');
						this.ignored.push([
							this.attackers[i][0],
							this.attackers[i][1] + this.defenders[j][1],
							this.attackers[i][2] + this.defenders[j][2],
							0,
							this.attackers[i][4] + this.defenders[j][4]
						]);
						// Remove both
						this.attackers.splice(i, 1);
						this.defenders.splice(j, 1);
						break;
					}
				}
			}

			// Join players arrays
			this.players = this.attackers.concat(this.defenders).concat(this.ignored);
			// Sort by name length
			this.players.sort((a, b) => {
				if (a[0].length < b[0].length) return 1;
				if (a[0].length > b[0].length) return -1;
				return 0;
			});
		},

		// Get players of the battle
		getPlayers : function(type) {
			let players = [];

			// For each player
			for (let i = 1; i <= 5; i++) {
				// Find player, if exists
				let avatar = document.getElementById(type + 'Avatar' + i) || document.getElementById(type + 'Avatar1' + i);
				let stats = document.getElementById(type + 'CharStats' + i) || document.getElementById(type + 'CharStats1'+i);
				if (!avatar || !stats) continue;

				// Get player stats
				let name = avatar.getElementsByClassName('player_name_bg')[0].getElementsByTagName('div')[0].innerHTML.trim();
				let life = stats.getElementsByClassName('charstats_bg2')[1].getElementsByTagName('span')[1].innerHTML.match(/\/\s*([^ ]+)$/i)[1].replace(/\./g,'');
				if (!name || !life) continue;

				// Check if there is an player with the same name
				let found = -1;
				for (let j = 0; j < players.length; j++) {
					if (players[j][0] == name) {
						found = j;
						break;
					}
				}

				// Parse life points
				life = parseInt(life, 10);

				// Unique name
				if (found == -1) {
					// name, life point, max life points, damage taken, number of players
					players.push([name, life, life, 0, 1]);
				}
				// Treat players with the same name as 1 player
				else {
					players[found][4] ++;
					players[found][1] += life;
					players[found][2] += life;
				}
			}

			return players;
		}
	},

	// Update event timers
	eventTimers: function() {
		let event = gca_data.section.get("timers", 'server_quest_attack', false);

		// If this is a report
		if (this.submod == 'showCombatReport' && this.reportId && event) {
			// Check referrer
			if (this.referrer.submod == 'serverQuest') {
				gca_data.section.set("timers", 'server_quest_available', event.available);
				gca_data.section.set("timers", 'server_quest_points', event.points);
				gca_data.section.set("timers", 'server_quest_last_date', event.last_date);
			}
		}

		if (event) gca_data.section.del("timers", 'server_quest_attack');

		// Fire server quest info updated
		gca_tools.event.fireOnce("server_quest-info-update");
	}
};

// Onload Handler
(function(){
	var loaded = false;
	var fireLoad = function() {
		if(loaded) return;
		loaded = true;
		gca_reports.inject();
	};
	gca_reports.preinject();
	if (document.readyState == 'interactive' || document.readyState == 'complete') {
		fireLoad();
	} else {
		window.addEventListener('DOMContentLoaded', fireLoad, true);
		window.addEventListener('load', fireLoad, true);
	}
})();

// ESlint defs
/* global gca_data, gca_getPage, gca_locale, gca_options, gca_section, gca_tools */
/* global jQuery */
