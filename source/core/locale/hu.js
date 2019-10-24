/*
 * Gladiatus Crazy Addon Translation
 * Name : Hungarian
 * Code : [none]
 * Tag  : hu
 * Translator: Adamus23, Saiid
 */

// Languages Object
var gca_languages = gca_languages || {};

// Set Language
gca_languages["en"] = {

	// Language name
	name : "Magyar (Hungarian)",
	// Translators (authors of this script)
	translators : ["Adamus23", "Saiid"],

	// Translations object
	locale : {
		// Addon info
		info : {
			description : "A legőrültebb add-on Gladiatusra!"
		},

		// General
		general : {
			// Days
			days : "napok",
			// Minutes
			minutes : "perc",
			// Hours
			hours : "órák",
			// No data
			no_data : "Nincs adat",

			// Buttons
			confirm : "Megerősít,
			cancel : "Visszavon",
			close : "Bezár",
			error : "Hiba",
			yes : "Igen",
			no : "Nem",
			ok : "OKÉ"
		},

		// Global
		global : {
			// Use a life potion
			life_potion_use : "Életerő italt használni",
			life_potion_used : "Egy életerő italt elhasználtál",
			life_potion_left : "Már csak {{number}} életerő italod van",
			
			// Life/Expedition/Dungeon points recovery
			life_recover_full : "A teljes élet feltöltődik",
			expedition_recover_full : "Expedíciós pontok teljesen feltöltődnek",
			dungeon_recover_full : "Kazamata pontok teljesen feltöltődnek",

			// Button bar - Message
			message_private_write : "Privát üzenet írása",
			message_guild_write : "Egyesületi üzenet írása",
			message_send : "Küldés",
			message_sent_success : "Üzenet sikeresen elküldve",
			message_sent_failed : "Nem sikerült elküldeni az üzenetet",
			message_empty : "Az üzenet tartalma üres",
			message_exclude_me : "Számomra ne",

			// Button bar buttons
			guild_market_goto : "Ugrás az egyesület piacához",
			guild_storage_goto : "Ugrás az egyesület raktárához",
			guild_bank_goto : "Ugrás az egyesület bankjához",
			guild_warcamp_goto : "Ugrás a Harcmesterek Csarnokához",
			guild_arenareports_goto : "Ugrás az egyesület csatajelentéseihez,
			guild_jail_goto : "Ugrás a Negotium X-hez",
			guild_library_goto : "Ugrás az egyesület könyvtárához",
			guild_templum_goto : "Ugrás az egyesület templomához",
			guild_medic_goto : "Ugrás a Villa Medici-hez",
			simulator_goto : "Ugrás a szimulátorhoz",
			stats_display : "Statisztikám mutatása",
			online_display : "Online játékosok mutatása",

			// Online friends
			online_friends : "Online barátok",
			guild_friends : "Egyesületi barátok",
			family_friends : "Felvett barátok",

			// Guild donate
			donate_gold_confirm : "Biztos vagy benne, hogy {{number}} aranyat adományozol?",
			donate_gold_success : "Arany sikeres adományozása",
			donate_gold_failed : "Arany sikertelen adományozása",
			donate_gold_no_gold : "Nincs elég arany az adományozáshoz",
			donate_gold_all_gold : "Összes arany adományozása",

			// Quest timer
			quest_full : "Max",
			quest_new : "Új",

			// Pray icon
			pray_start : "Nyomd meg az ima elkezdéséhez",
			pray_stop : "Nyomd meg az ima befejezéséhez",
			heal : "gyógyít",

			// Notifications
			notification_guild_application : "Van egy függőben lévő egyesületi felkérésed!",
			low_durability_items : "{{number}} felszerelésed van, melynek minősége {{percent}}% alatt van",
			item_worth_rubies : "Ez a tárgy rubinba kerül!",

			// Gold - Exp data
			gold_exp_data : "Arany és Tapasztalat adatok",
			gold_exp_data_today : "Elmúlt 24 óra",
			gold_exp_data_week : "Elmúlt 7 nap",
			gold_exp_data_avg_day : "Átlagos napi érték",
			gold_exp_data_to_level_up : "Nap maradt a szintlépésig",
			gold_exp_data_package_tax : "Heti arany csomagolásának díja",
			gold_exp_data_measurements : "Mérések",
			gold_exp_data_total_exp : "Teljes tapasztalat",
			gold_exp_data_total_gold : "Teljes arany",
		},

		// Overview
		overview : {
			// Stats Difference
			stats_difference : "Különbség",
			// Drop items to see materials to repair feature
			drop_item_see_materials_repair : "Rakj ide egy tárgyat, hogy lásd a javításához szükséges anyagokat",
			workbench_6th_slot_empty : "A Munkaasztal 6. helyének üresnek kell lennie",

			// More player info
			more_player_info : "További információ a játékosról",
			can_use_max_item_level : "Maximum {{max}} szintű tárgyakat használhat.",
			can_see_market_max_item_level : "Maximum {{max}} szintű tárgyakat láthat a piacon.",
			can_see_auction_item_levels : "Minimum {{min}} és maximum {{max}} szintű tárgyakat láthat az Aukciós Házban."
		},

		// Pantheon section
		pantheon : {
			// Mystery box
			mysterybox_open_all : "Összes kinyitása",
			mysterybox_open_stop : "Állj",
			mysterybox_open_done : "Kész!"
		},

		// Guild section
		guild : {
			// Guild Bank
			bank_all_gold : "Összes arany adományozása",

			// Library
			library_per_point_cost : "Egy pont ára",
			library_gold_left : "Egyesület aranya az aktiválás után",

			// Medic
			medic_lost_points : "Elvesztett életerőpontok",
			medic_points_to_heal : "Gyógyítható életerőpontok",
			medic_life_after_heal : "Gyógyítás utáni életerőpontok"
		},

		// Expedition
		expedition : {
			material_drop_chance : "{{number}}% esély, hogy ezt az anyagot kapod"
		},

		// Arena section
		arena : {
			global_arena_title : "Globális Aréna",
			global_arena_description : "Ez a végső aréna, ahol a gladiátorok a világ összes tájáról összegyűlnek. Ebben az arénában a gladiátorok nem aranyért vagy tapasztalati pontokért harcolnak, hanem a világ toplistájának első helyéért!",
			global_arena_load : "Ellenfelek listájának betöltése",
			global_highscore : "Globális Toplista",
			country : "Ország",
			server : "Szerver",
			target_list : "Célpont lista",
			target_list_add : "Felvenni a célpontok listájára",
			target_list_remove : "Eltávolítani a célpontok listájáról",
			error_sth_went_wrong : "Valami nem működik",
			error_response : "A szerver hibával válaszolt",
			error_blocked_access : "Valami letiltja a GCA szervert ({{url}})",
			error_connection : "Kapcsolati hiba",
			attack_player : "Kattints a támadásért “{{name}}” ellen",
			fight_won : "Megnyerted a harcot!",
			fight_lost : "Elveszítetted a harcot...",
			player_tired : "Fáradt vagy. Muszáj pihenned kell."
		},

		// Training section
		training : {
			// Points analysis
			stats_points : "Képesség pontok",
			points_breakdown : "Pontok feloszlása",
			stats_calculated_with_yourself_as_an_opponent : "* A pontokat egy saját magad ellen lefolytatott harc alapján számolja",
			// Cost calculator
			total_cost : "Összköltség",
			// Discount show
			costs_discount : "A gyakorlás ennyivel olcsóbb: {{number}}%"
		},

		// Auction section
		auction : {
			// Info
			items_info : "Tárgy információ",
			// Number of items in the page
			number_of_items : "Tárgyak száma : {{number}}",
			// Number of items that have been bidden in the page
			number_of_bided_items : "Licitált tárgyak száma : {{number}}",
			// Message on items that you can buy and sell at the same price
			hide_your_gold_here : "Arany elrejtése",
			// Price of item equals to its value
			price_value_function : "Ár = Érték + {{number}}",
			// Levels you can see
			levels_you_can_see : "Minimum {{min}} és maximum {{max}} szintű tárgyakat láthatsz.",
		},

		// Markets section
		markets : {
			// Warnings
			item_cost_only_x_gold : "Ez a tárgy csak {{number}} arany.",
			item_is_soulbound : "Ez a tárgy egy összetartozó lélek.",
			item_cant_buy_back : "Ezt a tárgyat nem fogod tudni visszavásárolni.",
			// Are you sure
			are_you_sure_you_want_to_buy : "Biztosan meg akarod venni ezt a tárgyat?"
		},
		
		// Forge
		forge : {
			forge_ended : "A kohó befejeződött!",
			recraft_item : "Tárgy újrakovácsolása",
			show_hide_doll : "Mutasd/Rejtsd el a felszereléseim"
		},
		
		// Packages
		packages : {
			event_items : "Rendezvény tárgyak",
			known_scroll : "Már megtanultad ezt a tekercset",
			unknown_scroll : "Még nem tanultad meg ezt a tekercset",
			advance_filters : "Speciális szűrők",
			advance_filters_apply : "Szűrők elfogadása",
			advance_filters_clear : "Szűrők törlése",
			advance_filters_found : "({{items}} keresése)"
		},

		// Cross-Browser Sync
		sync : {
			are_you_sure : "Biztos vagy benne, hogy be akarsz jelentkezni, mint {{name}}?",
			gladiatus_crazy_addon_dependency : "Telepítened kell a Gladiatus Crazy Addon-t a másik böngészőben is.",
			how_to_sync_info : "Másold ki a webcímet, majd illeszd be a másik böngészőnél, vagy szkenneld be a qr kódot.
			"
		},

		// Settings
		settings : {
			// Settings
			settings : "Beállítások",
			// Description
			description : "Engedélyezése vagy tiltása bármely addon kiegészítőnek.",
			description_click_button : "Kattints az alábbi gombra, hogy az addon beállításaihoz ugorj...",
			
			// Categories
			category_global : "Általános beállítások",
			category_overview : "Áttekintések beállítása",
			category_messages : "Üzenetek beállításai",
			category_packages : "Csomagok beállításai",
			category_pantheon : "Templom beállításai",
			category_reports : "Jelentések beállításai",
			category_training : "Gyakorlás beálíltásai",
			category_merchants : "Kereskedők beállítása",
			category_forge : "Kovács beállításai",
			category_arena : "Aréna beállításai",
			category_magus : "Mágus beállításai",
			category_market : "Piac beállításai",
			category_expedition : "Expedíció beállításai",
			category_guild : "Egyesület beállításai",
			category_auction : "Aukció beállításai",
			category_events : "Rendezvény beállításai",
			category_sound : "Hangok beállításai",
			category_data : "Adatok beállításai",

			// Settings - Global
			category_global$language_select : "Nyelv megváltoztatása",
			category_global$sound_notifications : "Hangok értesítéseinek engedélyezése",
			category_global$browser_notifications : "Böngésző értesítéseinek engedélyezése",
			category_global$extended_hp_xp_info : "Életerő és tapasztalati pontok megjelenítése",
			category_global$extended_hp_xp_info_potion : "Életerő ital ikonjának kijelzése",
			category_global$hp_timer_for_full_life : "Életerő maximális feltöltődésének idejének kijelzése",
			category_global$expedition_dungeon_points_recover_timer : "A teljes expedíció/kazamata feltöltődéséhez szükséges idő kijelzése",
			category_global$shortcuts_bar : "Engedélyezze a parancsikonokat",
			category_global$shortcuts_bar_buttons : "Válasszon parancsikont a parancsikonok sávjához",
			category_global$auction_status_bar : "Az aukció állapotsorának megjelenítése",
			category_global$auction_status_notification : "Riasztás, ha az aukció állapota megváltozik",
			category_global$top_fixed_bar : "A felső rögzített sáv engedélyezése",
			category_global$advance_main_menu : "Főmenü javítása",
			category_global$submenu_click_to_change : "Az almenü módosítása kattintással",
			category_global$remember_tabs : "Emlékezz a kereskedők lapjaira",
			category_global$attacked_timers : "Mutassa megtámadott időzítőket",
			category_global$quest_timer : "A küldetések állapota vagy az időzítő megjelenítése",
			category_global$merchants_timer : "A kereskedők időzítőjének megjelenítése",
			category_global$forge_timers : "Mutassa a kovácsolás/olvasztás idejének mutatóját",
			category_global$cooldown_sound_notifications : "Hangjelzések engedélyezése (expedíció, kazamata, aréna)",
			category_global$notify_new_guild_application : "Értesítés, ha új egyesületi meghívót kaptam",
			category_global$notify_new_guild_application_interval : "Ellenőrizze az applikációkat minden (minutes) percben",
			category_global$x_scroll : "Engedélyezze a Gladiatus vízszintes görgetését",
			category_global$item_shadow : "Tárgyak árnyékának engedélyezése",
			category_global$inventory_options_group : "Felszerelés csoportos beállításai",
			category_global$inventory_gold_info : "Mutassa a tárgyak darabárát",
			category_global$pagination_layout : "Az oldalak dobozának elrendezésének megváltoztatása",
			category_global$gold_exp_data : "Mutasd az arany és tapasztalati pont adatokat",
			category_global$pray_shorcut : "Mutasson imádkozási parancsikont az alvilágban",
			category_global$centurio_powerups_timers : "Jelenítse meg a Centurio és a PowerUps időzítőit a Prémium gombnál",
			category_global$show_durability : "Tartósság megjelenítése az elem bal alsó sarkában",
			category_global$min_durability : "Értesítés akkor, ha egy tárgy állapota _% alá esik (állítsd 0-ra, hogy kikapcsold)",
			category_global$show_forge_info : "Jelenítse meg az tárgy kovácsolási anyagát az eszköztippben",
			// Settings - Overview
			category_overview$analyze_items : "Elemek statisztikájának elemzése (az edzéshez szükséges)",
			category_overview$food_life_gain : "Mutassa az ételekből nyert életerőt",
			category_overview$block_avoid_caps : "Mutassa a blokkoltakat",
			category_overview$best_food : "Jelölje ki a legideálisabb ételt",
			category_overview$overfeed_food : "Elhalványulnak azon ételek, melyek túlgyógyítanak",
			category_overview$double_click_consume : "Dupla kattintás egy tárgyra, hogy felhasználd azt",
			category_overview$daily_bonus_log : "Napi bónusz megjelenítése",
			category_overview$buffs_detailed_time : "Részletesebb idő az egyesületi bónuszoknál",
			category_overview$mercenaries_manager : "Mutasd a zsoldosokat",
			category_overview$mercenary_tooltip_show : "Mutasd a zsoldosok eszköztippjét",
			category_overview$more_statistics : "Mutass több mindent a statisztikák fül alatt",
			category_overview$achivements_layout : "Javítsa az eredmények elrendezését",
			category_overview$costumes_layout : "Javítsa a jelmezek elrendezését",
			category_overview$items_repair_overview : "Mutassa meg a javításhoz szükséges anyagokat",
			// Settings - Messages
			category_messages$messages_layout : "Javítsa az üzenetek elrendezését",
			category_messages$show_unread : "Jelölje ki az olvasatlan üzeneteket",
			category_messages$separate_days : "Külön üzenetek a különböző napoknál",
			category_messages$send_message_box : "Az üzenetküldés engedélyezése",
			category_messages$more_guild_mate_info : "Mutasson több információt a céhtársakról",
			category_messages$show_message_links : "Az üzenetekben szereplő linkek külön megjelenítése",
			category_messages$get_guild_battle_info : "Céhcsata eredményének automatikus betöltése",
			category_messages$show_sidebar : "Az üzenetek oldalsávjának megjelenítése",
			category_messages$fix_header_links : "Javítsa ki az üzenetek címsora kattintási hibát",
			category_messages$new_message_focus : "Összpontosítson az üzenet törzsére",
			category_messages$new_message_friend_list : "Engedélyezze a barát kiválasztását a listából gombot",
			// Settings - Packages
			category_packages$filters_layout : "Javítsa a szűrők elrendezését",
			category_packages$compact_info_layout : "Az információ elrendezése kompakt legyen",
			category_packages$items_layout : "Javítsa az elemek elrendezését",
			category_packages$small_items_layout : "Csökkentse a tárgyak méretét",
			category_packages$load_more_pages : "Több oldal betöltése",
			category_packages$pages_to_load : "Oldal betöltése",
			category_packages$item_price : "Mutassa a tárgyak értékét",
			category_packages$special_category_features : "A speciális szolgáltatások engedélyezése kategóriánként",
			category_packages$double_click_open : "Kattintson duplán a csomagokra a megnyitásukhoz",
			category_packages$advance_filter : "További beállítások a csomagoknál",
			// Settings - Pantheon
			category_pantheon$quests_reorder : "Engedélyezze a küldetések csoportosítását",
			category_pantheon$quests_detailed_rewards : "Mutassa meg a küldetése részletes jutalmait",
			category_pantheon$missions_show_completed : "Mutassa a befejezett küldetéseket",
			category_pantheon$gods_show_points_percent : "Mutassa az istenek pontjait százalékosan",
			category_pantheon$open_many_mysteryboxes : "Több Isteni Végzet Ládája kinyitás",
			category_pantheon$show_mysterybox_rewards_rubies : "Mutassa az Isteni Végzet Ládából kapott tárgy értékét rubinban",
			category_pantheon$show_mysterybox_rewards_owned : "Mutassa az Isteni Végzet Ládájából kapott tárgy mennyiségét a raktáramban",
			// Settings - Reports
			category_reports$style_change : "Javítsa a jelentések listájának elrendezését",
			category_reports$load_loot_tooltips : "Töltse be az egyes jelentések jutalmát",
			category_reports$found_items : "Gyűjtsön adatokat a talált elemekről",
			category_reports$battle_analyzer : "Elemezze a jelentést, és mutassa meg az életerőstatisztikát",
			// Settings - Training
			category_training$show_discount : "Mutassa a gyakorlás kedvezményeit",
			category_training$show_basics_in_bars : "Mutassa meg az alapokat oszlopokban",
			category_training$multiple_train : "Több edzés engedélyezése egyszerre",
			category_training$calculator_train : "A költségkalkulátor engedélyezése",
			category_training$show_analyze_items_data : "Az elemzett elemek adatainak megjelenítése az eszköztippben",
			category_training$show_points_after_upgrade : "Mutassa a képességek pontjait a gyakorlás után",
			// Settings - Merchants
			category_merchants$fade_unaffordable_items : "Hagyja el azokat az elemeket, amelyeket nem engedhet meg magának",
			category_merchants$show_shop_info : "Bolt információ megjelenítése (összes arany és rubin)",
			category_merchants$double_click_actions : "Kattintson duplán az eladni/vásárolni kívánt elemekre",
			// Settings - Forge
			category_forge$material_links : "[Kovács/Munkaasztal] Mutassa meg az egyes anyagszükségletekhez tartozó csomagokat és piaci hivatkozásokat",
			category_forge$show_levels : "[Kovács] Az előtag/utótag/alapelem szintjeinek megjelenítése a nevek mellett",
			category_forge$horreum_materials_names : "[Csűr] Mutassa az anyag nevét",
			category_forge$horreum_remember_options : "[Csűr] Emlékezzen a legutóbbi beállításra",
			category_forge$horreum_select_meterials : "[Csűr] Válasszon anyagot kattintással",
			// Settings - Arena
			category_arena$ignore_attack_confirmations : "Figyelmen kívül hagyja a támadások megerősítését (több mint 5 támadás üzenet stb.)",
			category_arena$show_simulator_imagelink : "Kép-link mutatása a szimulátorhoz (gladiatussimulator.tk)",
			category_arena$sort_by_lvl : "Az arénában szereplő játékosok osztályozása szint szerint",
			category_arena$highlight_guild_members : "Jelölje ki a többi szerver a játékosokat, akik a csapattársaim",
			category_arena$target_list : "A játékosok célpont listája",
			// Settings - Magus
			category_magus$fade_unimprovable_items : "Halványítsa el a tárgyakat, amit már nem tudok fejleszteni",
			// Settings - Market
			category_market$soulbound_warning : "Vásárlási figyelmeztetés összetartozó lélek esetén",
			category_market$one_gold_warning : "Vásárlási megerősítés olyan tárgynál, melynek értéke 1 arany",
			category_market$cancel_all_button : "Mutasd az összes visszavonása gombot",
			category_market$remember_sell_duration : "Emlékezzen az utolsó vásárlási oldalra",
			category_market$sell_duration : "Válassza az alapértelmezett eladási időtartamot",
			category_market$one_gold_mode : "Váltás gombra, mely az eladási árat mindig 1 aranyra változtatja",
			category_market$remember_sort : "Emlékezz az utolsó rendezési sorrendre",
			category_market$double_click_select : "Válassza ki az elemet dupla kattintással",
			category_market$sell_warning_icons : ""Figyelmeztető ikon elemek eladásakor,
			// Settings - Expedition
			category_expedition$show_enemy_drops : "Látszódjon az összes ellenségtől kapható anyag",
			category_expedition$underworld_layout : "Mutassa meg az alvilág ellenségeinek elrendezését, úgy, mint expedíciónál",
			// Settings - Guild
			category_guild$jail_layout : "Negotium X javítsa",
			category_guild$library_layout : "Könyvtár javítása",
			category_guild$library_fade_non_scrolls : "Elemek elhalványítása, amelyek nem férnek be a könyvtárban",
			category_guild$library_tooltip_data : "Több adat megjelenítése a könyvtárban",
			category_guild$bank_donate_layout : "Banki adományok elrendezésének javítása",
			category_guild$bank_book_layout : "Banki könyvi rendszer javítása",
			category_guild$medic_layout : "Villa Medici javítása",
			// Settings - Auction
			category_auction$items_counters : "Számolja a tárgyakat és az eladott tárgyakat",
			category_auction$more_search_levels : "További szintek megjelenítése a keresési lehetőségekben",
			category_auction$item_price_analyze : "Tárgyak árának analizálása",
			category_auction$item_level : "Mutassa a tárgyak szintjét",
			category_auction$x3_items_per_line : "Az elrendezést soronként 3 elemre változtassa",
			category_auction$multi_bids : "Licitálás az oldal frissítése nélkül",
			category_auction$extra_item_stats : "További statisztikák megjelenítése az elemek képein",
			category_auction$save_last_state : "Visszatérés a legutóbbi aukciós kereséshez",
			// Settings - Events
			category_events$craps_timer : "Jelenítse meg a kocka event maradék idejét az oldal tetején",
			category_events$server_quest_timer : "A tetején jelenítse meg a szerverkeresés vagy a helymeghatározási esemény időzítőjét",
			// Settings - Sound
			category_sound$enabled : "Hangrendszer engedélyezése",
			category_sound$muted : "Hangok némítása/némításának feloldása",
			category_sound$volume : "Hangerő",
			// Settings - Data
			category_data$export_settings : "Exportálja a beállítási adatokat a fájlba",
			category_data$import_settings : "Beállítási adatok importálása a fájlból",
			category_data$reset_settings : "Állítsa vissza a kiegészítő beállításait",
			category_data$clear_data : "Törölje az összes kiegészítő adatát",
			category_data$cross_browser_login : "Böngészőn keresztüli bejelentkezés",

			// Buttons
			save : "Mentés",
			export : "Exportálás",
			import : "Importálás",
			reset : "Visszaállítás",
			clear : "Törlés",
			do_not_show : "Ne mutasd",
			show_as : "Mutasd, mint",
			show_info : "Mutasd az információt",

			// InfoBiztos benne, hogy törli az összes kiegészítő adatát?"
			reset_settings_confirm : "Biztos benne, hogy vissza szeretnéd állítani a kiegészítő beállításait?",
			clear_data_confirm : "Biztos benne, hogy törlöd a kiegészítő összes adatát?",
			data_exported_save_the_file : "Az adatokat exportálták. Mentse a fájlt.",

			// Notifications
			notification_reload : "Frissítsd az oldalt, hogy a változások hatályba lépjenek",
		}
	}
}
