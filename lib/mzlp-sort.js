'use babel';

import {CompositeDisposable} from 'atom';

export default {

    mzlpSortView: null,
    modalPanel: null,
    subscriptions: null,
    editor: atom.workspace.getActiveTextEditor(),

    activate(state) {
        this.subscriptions = new CompositeDisposable();
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'mzlp-sort:ifSorting': () => this.ifSorting()
        }));
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'mzlp-sort:gSorting': () => this.gSorting()
        }));
    },

    deactivate() {

    },

    serialize() {
        return {};
    },
    getIndexList() {
        //우선순위에 맞게 변수명 인덱싱 - (리터럴정렬기준3)
        let list = ["N_TAG_OFF",
            "N_TAG_UNDEFINED_ID",
            "N_TAG_BREAK_ID",
            "N_TAG_SIGNAL_ID",
            "N_TAG_NONE_ID",
            "N_TAG_MANUAL_VAD_DISCONNECTED_ID",
            "N_TAG_MANUAL_NETWORK_DISCONNECTED_ID",
            "N_TAG_MANUAL_PTT_ID",
            "N_TAG_INNER_RESULT_ID",
            "N_TAG_SERVER_INNER_RESULT_ID",
            "N_TAG_AUTO_RESULT_ID",
            "N_TAG_DRIVING_BACK_ID",
            "N_TAG_EXIT_BACK_ID",
            "N_TAG_EXIT_EXIT_ID",
            "N_TAG_HOUSE_NUMBER_BACK_STEP_ID",
            "N_TAG_HELP_ID",
            "N_TAG_EXIT_ID",
            "N_TAG_BACK_ID",
            "N_TAG_YES_ID",
            "N_TAG_NO_ID",
            "N_TAG_LINE_NUMBER_ID",
            "N_TAG_NEXT_PAGE_ID",
            "N_TAG_PREVIOUS_PAGE_ID",
            "N_TAG_MANUAL_INPUT_ID",
            "N_TAG_MANUAL_QUESTION_MARK_ID",
            "N_TAG_MANUAL_PHONE_QUESTION_MARK_ID",
            "N_TAG_MANUAL_RADIO_QUESTION_MARK_ID",
            "N_TAG_MANUAL_UVO_QUESTION_MARK_ID",
            "N_TAG_MANUAL_NAVI_QUESTION_MARK_ID",
            "N_TAG_POI_NAME_ID",
            "N_TAG_NAVI_LOCATION_DP_ID",
            "N_TAG_PHONE_HELP_ID",
            "N_TAG_PHONE_CALL_ID",
            "N_TAG_VAD_CALL_ID",
            "N_TAG_VAD_MOBILE_ID",
            "N_TAG_MANUAL_VAD_MOBILE_ID",
            "N_TAG_VAD_OFFICE_ID",
            "N_TAG_MANUAL_VAD_OFFICE_ID",
            "N_TAG_VAD_HOME_ID",
            "N_TAG_MANUAL_VAD_HOME_ID",
            "N_TAG_VAD_OTHER_ID",
            "N_TAG_MANUAL_VAD_OTHER_ID",
            "N_TAG_PHONE_DIAL_NUMBER_ID",
            "N_TAG_VAD_NUMBER_ID",
            "N_TAG_VAD_NUM_SLOT_ID",
            "N_TAG_PHONE_MOBILE_ID",
            "N_TAG_PHONE_HOME_ID",
            "N_TAG_PHONE_OFFICE_ID",
            "N_TAG_PHONE_OTHER_ID",
            "N_TAG_PHONE_DIAL_ID",
            "N_TAG_PHONE_CORRECTION_ID",
            "N_TAG_PHONE_DELETE_ID",
            "N_TAG_CHANGE_BT_DEVICE_ID",
            "N_TAG_NAME_ID",
            "N_TAG_NAME_FULL_FIRST_ID",
            "N_TAG_NAME_REVERSE_LAST_ID",
            "N_TAG_NAME_FIRST_ID",
            "N_TAG_NAME_LAST_ID",
            "N_TAG_OTHER_NUMBERS_ID",
            "N_TAG_RADIO_ID",
            "N_TAG_RADIO_HELP_ID",
            "N_TAG_FM_ID",
            "N_TAG_FM_FREQUENCY_ID",
            "N_TAG_AM_ID",
            "N_TAG_AM_FREQUENCY_ID",
            "N_TAG_SIRIUSXM_ID",
            "N_TAG_SIRIUSXM_CHANNEL_NUMBER_ID",
            "N_TAG_CHANNEL_NUMBER_ID",
            "N_TAG_FM_FREQ_SLOT_ID",
            "N_TAG_AM_FREQ_SLOT_ID",
            "N_TAG_MANUAL_FM_ID",
            "N_TAG_MANUAL_AM_ID",
            "N_TAG_MANUAL_CHANNEL_ID",
            "N_TAG_PANDORA_RADIO_ID",
            "N_TAG_SKIP_ID",
            "N_TAG_THUMBS_UP_ID",
            "N_TAG_THUMBS_DOWN_ID",
            "N_TAG_MUSIC_ID",
            "N_TAG_CD_ID",
            "N_TAG_IPOD_ID",
            "N_TAG_BT_AUDIO_ID",
            "N_TAG_AUX_ID",
            "N_TAG_MY_MUSIC_ID",
            "N_TAG_USB_ID",
            "N_TAG_PLAY_ID",
            "N_TAG_PAUSE_ID",
            "N_TAG_PLAY_TRACK_NUMBER_ID",
            "N_TAG_SHUFFLE_ID",
            "N_TAG_SHUFFLE_OFF_ID",
            "N_TAG_REPEAT_ID",
            "N_TAG_REPEAT_OFF_ID",
            "N_TAG_VIDEO_ID",
            "N_TAG_VOICE_MEMO_ID",
            "N_TAG_MANUAL_TRACK_ID",
            "N_TAG_PRIM_USB_MUSIC_ID",
            "N_TAG_PRIM_DVD_ID",
            "N_TAG_PRIM_USB_VIDEO_ID",
            "N_TAG_UVO_HELP_ID",
            "N_TAG_ROADSIDE_ASSIST_ID",
            "N_TAG_VEHICLE_DIAGNOSTICS_ID",
            "N_TAG_ESERVICES_GUIDE_ID",
            "N_TAG_UVO_HELP_EV_ID",
            "N_TAG_EV_SERVICES_GUIDE_ID",
            "N_TAG_CARPLAY_ID",
            "N_TAG_ANDROID_AUTO_ID",
            "N_TAG_NAVIGATION_HELP_ID",
            "N_TAG_CATEGORY_NAME_BIG_ID",
            "N_TAG_CATEGORY_NAME_MID_ID",
            "N_TAG_CATEGORY_NAME_SMALL_ID",
            "N_TAG_SHOW_MAP_ID",
            "N_TAG_PREVIOUS_POINT_ID",
            "N_TAG_PREVIOUS_DESTINATION_ID",
            "N_TAG_PREVIOUS_SEARCH_ID",
            "N_TAG_PREVIOUS_START_ID",
            "N_TAG_TRAFFIC_INFO_ID",
            "N_TAG_GO_HOME_ID",
            "N_TAG_GO_TO_OFFICE_ID",
            "N_TAG_NAVI_DIAL_ID",
            "N_TAG_TURN_GUIDANCE_ON_ID",
            "N_TAG_TURN_GUIDANCE_OFF_ID",
            "N_TAG_CANCEL_ROUTE_ID",
            "N_TAG_DESTINATION_INFO_ID",
            "N_TAG_ROUTE_OPTION_ID",
            "N_TAG_SHOW_ROUTE_ID",
            "N_TAG_FIND_ADDRESS_ID",
            "N_TAG_FIND_FULL_ADDRESS_ID",
            "N_TAG_FIND_ADDRESS_STATE_ID",
            "N_TAG_STATE_NAME_ID",
            "N_TAG_AL_ID",
            "N_TAG_AK_ID",
            "N_TAG_AZ_ID",
            "N_TAG_AR_ID",
            "N_TAG_CA_ID",
            "N_TAG_CO_ID",
            "N_TAG_CT_ID",
            "N_TAG_DE_ID",
            "N_TAG_DC_ID",
            "N_TAG_FL_ID",
            "N_TAG_GA_ID",
            "N_TAG_HI_ID",
            "N_TAG_ID_ID",
            "N_TAG_IL_ID",
            "N_TAG_IN_ID",
            "N_TAG_IA_ID",
            "N_TAG_KS_ID",
            "N_TAG_KY_ID",
            "N_TAG_LA_ID",
            "N_TAG_ME_ID",
            "N_TAG_MD_ID",
            "N_TAG_MA_ID",
            "N_TAG_MI_ID",
            "N_TAG_MN_ID",
            "N_TAG_MS_ID",
            "N_TAG_MO_ID",
            "N_TAG_MT_ID",
            "N_TAG_NE_ID",
            "N_TAG_NV_ID",
            "N_TAG_NH_ID",
            "N_TAG_NJ_ID",
            "N_TAG_NM_ID",
            "N_TAG_NY_ID",
            "N_TAG_NC_ID",
            "N_TAG_ND_ID",
            "N_TAG_OH_ID",
            "N_TAG_OK_ID",
            "N_TAG_OR_ID",
            "N_TAG_PA_ID",
            "N_TAG_RI_ID",
            "N_TAG_SC_ID",
            "N_TAG_SD_ID",
            "N_TAG_TN_ID",
            "N_TAG_TX_ID",
            "N_TAG_UT_ID",
            "N_TAG_VT_ID",
            "N_TAG_VA_ID",
            "N_TAG_WA_ID",
            "N_TAG_WV_ID",
            "N_TAG_WI_ID",
            "N_TAG_WY_ID",
            "N_TAG_PR_ID",
            "N_TAG_AB_ID",
            "N_TAG_BC_ID",
            "N_TAG_MB_ID",
            "N_TAG_NB_ID",
            "N_TAG_NL_ID",
            "N_TAG_NS_ID",
            "N_TAG_NT_ID",
            "N_TAG_NU_ID",
            "N_TAG_ON_ID",
            "N_TAG_PE_ID",
            "N_TAG_QC_ID",
            "N_TAG_SK_ID",
            "N_TAG_YT_ID",
            "N_TAG_ZOOM_OUT_ID",
            "N_TAG_ZOOM_IN_ID",
            "N_TAG_CATEGORY_BIG_RESTAURANTS_ID",
            "N_TAG_CATEGORY_BIG_AUTOMOTIVE_ID",
            "N_TAG_CATEGORY_BIG_TRAVEL_ID",
            "N_TAG_CATEGORY_BIG_SHOPPING_ID",
            "N_TAG_CATEGORY_BIG_RECREATION_ID",
            "N_TAG_CATEGORY_BIG_FINANCIAL_SERVICES_ID",
            "N_TAG_CATEGORY_BIG_COMMUNITY_ID",
            "N_TAG_CATEGORY_BIG_SERVICES_ID",
            "N_TAG_FIND_POI_ID",
            "N_TAG_FIND_CATEGORY_ID",
            "N_TAG_NEAR_CURRENT_POSITION_ID",
            "N_TAG_NEAR_DESTINATION_ID",
            "N_TAG_ALONG_ROUTE_ID",
            "N_TAG_NAVI_YES_ID",
            "N_TAG_NAVI_NO_ID",
            "N_TAG_NAVI_LINE_NUMBER_ID",
            "N_TAG_NONE_OF_THEM_ID",
            "N_TAG_ADDRESS_STEP_EDIT_ID",
            "N_TAG_EMERGENCY_SERVICES_ID",
            "N_TAG_POLICE_STATION_ID",
            "N_TAG_HOSPITAL_ID",
            "N_TAG_DEALERSHIP_ID",
            "N_TAG_ROAD_ASSISTANCE_ID",
            "N_TAG_CHANGE_HOUSE_NUMBER_ID",
            "N_TAG_CHANGE_STREET_CITY_ID",
            "N_TAG_USER_HOUSE_NUMBER_ID",
            "N_TAG_STREET_CITY_STEP_ID",
            "N_TAG_HOUSE_NUMBER_STEP_ID",
            "N_TAG_USER_STREET_CITY_ID",
            "N_TAG_MY_POIS_ID",
            "N_TAG_LOCAL_SEARCH_ID",
            "N_TAG_ADD_WAYPOINT_ID",
            "N_TAG_DELETE_WAYPOINT_ID",
            "N_TAG_UNSUPPORTED_SERVER_ID",
            "N_TAG_FIND_SERVER_ID",
            "N_TAG_DOMAIN_UDE_ID",
            "N_TAG_POI_ADDRESS_SERVER_ID",
            "N_TAG_FIND_POI_ADDRESS_SERVER_ID",
            "N_TAG_SEND_MESSAGE_ID",
            "N_TAG_DOMAIN_SMS_ID",
            "N_TAG_SEND_MESSAGE_NAME_ID",
            "N_TAG_MESSAGE_BODY_ID",
            "N_TAG_SERVER_DICTATION_ID",
            "N_TAG_WAIT_SERVER_ID",
            "N_LEXEME_MANUAL_VAD_DISCONNECTED",
            "N_LEXEME_MANUAL_NETWORK_DISCONNECTED",
            "N_LEXEME_MANUAL_PTT",
            "N_LEXEME_NUMBER",
            "N_LEXEME_INNER_RESULT",
            "N_LEXEME_SERVER_INNER_RESULT",
            "N_LEXEME_AUTO_RESULT",
            "N_LEXEME_DRIVING_BACK",
            "N_LEXEME_EXIT_BACK",
            "N_LEXEME_EXIT_EXIT",
            "N_LEXEME_HOUSE_NUMBER_BACK_STEP",
            "N_LEXEME_HELP",
            "N_LEXEME_EXIT",
            "N_LEXEME_BACK",
            "N_LEXEME_YES",
            "N_LEXEME_NO",
            "N_LEXEME_LINE_NUMBER",
            "N_LEXEME_NEXT_PAGE",
            "N_LEXEME_PREVIOUS_PAGE",
            "N_LEXEME_MANUAL_INPUT",
            "N_LEXEME_MANUAL_QUESTION_MARK",
            "N_LEXEME_SMART_VUI",
            "N_LEXEME_CALL",
            "N_LEXEME_MANUAL_VAD_MOBILE",
            "N_LEXEME_MANUAL_VAD_OFFICE",
            "N_LEXEME_MANUAL_VAD_HOME",
            "N_LEXEME_MANUAL_VAD_OTHER",
            "N_LEXEME_PHONE_DIAL_NUMBER",
            "N_LEXEME_MOBILE",
            "N_LEXEME_HOME",
            "N_LEXEME_OFFICE",
            "N_LEXEME_OTHER",
            "N_LEXEME_CORRECTION",
            "N_LEXEME_DELETE",
            "N_LEXEME_CHANGE_BT_DEVICE",
            "N_LEXEME_NAME",
            "N_LEXEME_RADIO",
            "N_LEXEME_FM",
            "N_LEXEME_AM",
            "N_LEXEME_SIRIUSXM",
            "N_LEXEME_SIRIUSXM_CHANNEL_NUMBER",
            "N_LEXEME_CHANNEL_NUMBER",
            "N_LEXEME_MANUAL_FM",
            "N_LEXEME_MANUAL_AM",
            "N_LEXEME_MANUAL_CHANNEL",
            "N_LEXEME_PANDORA_RADIO",
            "N_LEXEME_SKIP",
            "N_LEXEME_THUMBS_UP",
            "N_LEXEME_THUMBS_DOWN",
            "N_LEXEME_MEDIA",
            "N_LEXEME_CD",
            "N_LEXEME_IPOD",
            "N_LEXEME_BT_AUDIO",
            "N_LEXEME_AUX",
            "N_LEXEME_MY_MUSIC",
            "N_LEXEME_USB",
            "N_LEXEME_PLAY",
            "N_LEXEME_PAUSE",
            "N_LEXEME_PLAY_TRACK_NUMBER",
            "N_LEXEME_SHUFFLE",
            "N_LEXEME_SHUFFLE_OFF",
            "N_LEXEME_REPEAT",
            "N_LEXEME_REPEAT_OFF",
            "N_LEXEME_VIDEO",
            "N_LEXEME_VOICE_MEMO",
            "N_LEXEME_MANUAL_TRACK",
            "N_LEXEME_PRIM_USB_MUSIC",
            "N_LEXEME_PRIM_DVD",
            "N_LEXEME_PRIM_USB_VIDEO",
            "N_LEXEME_UVO_HELP",
            "N_LEXEME_ROADSIDE_ASSIST",
            "N_LEXEME_VEHICLE_DIAGNOSTICS",
            "N_LEXEME_ESERVICES_GUIDE",
            "N_LEXEME_UVO_HELP_EV",
            "N_LEXEME_EV_SERVICES_GUIDE",
            "N_LEXEME_CARPLAY",
            "N_LEXEME_ANDROID_AUTO",
            "N_LEXEME_NAVIGATION",
            "N_LEXEME_CATEGORY_NAME",
            "N_LEXEME_CATEGORY_NAME_BIG",
            "N_LEXEME_CATEGORY_NAME_MID",
            "N_LEXEME_CATEGORY_NAME_SMALL",
            "N_LEXEME_PREVIOUS_POINT",
            "N_LEXEME_PREVIOUS_DESTINATION",
            "N_LEXEME_PREVIOUS_SEARCH",
            "N_LEXEME_PREVIOUS_START",
            "N_LEXEME_TRAFFIC_INFO",
            "N_LEXEME_TURN_GUIDANCE_ON",
            "N_LEXEME_TURN_GUIDANCE_OFF",
            "N_LEXEME_CANCEL_ROUTE",
            "N_LEXEME_DESTINATION_INFO",
            "N_LEXEME_ROUTE_OPTION",
            "N_LEXEME_SHOW_ROUTE",
            "N_LEXEME_FIND_ADDRESS",
            "N_LEXEME_FIND_FULL_ADDRESS",
            "N_LEXEME_FIND_ADDRESS_STATE",
            "N_LEXEME_STATE_NAME",
            "N_LEXEME_CITY_NAME",
            "N_LEXEME_STREET_NAME",
            "N_LEXEME_HOUSE_NUMBER",
            "N_LEXEME_FIND_POI",
            "N_LEXEME_FIND_CATEGORY",
            "N_LEXEME_CHANGE_HOUSE_NUMBER",
            "N_LEXEME_CHANGE_STREET_CITY",
            "N_LEXEME_ZOOM_OUT",
            "N_LEXEME_ZOOM_IN",
            "N_LEXEME_NEAR_CURRENT_POSITION",
            "N_LEXEME_NEAR_DESTINATION",
            "N_LEXEME_ALONG_ROUTE",
            "N_LEXEME_NONE_OF_THEM",
            "N_LEXEME_ADDRESS_STEP_EDIT",
            "N_LEXEME_EMERGENCY_SERVICES",
            "N_LEXEME_POLICE_STATION",
            "N_LEXEME_HOSPITAL",
            "N_LEXEME_DEALERSHIP",
            "N_LEXEME_ROAD_ASSISTANCE",
            "N_LEXEME_STREET_CITY_STEP",
            "N_LEXEME_HOUSE_NUMBER_STEP",
            "N_LEXEME_MY_POIS",
            "N_LEXEME_LOCAL_SEARCH",
            "N_LEXEME_ADD_WAYPOINT",
            "N_LEXEME_UNSUPPORTED_SERVER",
            "N_LEXEME_DOMAIN",
            "N_LEXEME_NAVIGATION_SERVER",
            "N_LEXEME_SERVER_REJECTION",
            "N_LEXEME_SEND_MESSAGE",
            "N_LEXEME_SEND_MESSAGE_NAME",
            "N_LEXEME_SEND_MESSAGE_SERVER",
            "N_LEXEME_SLOT",
            "N_LEXEME_WAIT_SERVER",
            "N_DIALOG_DIALOG_BOOT",
            "N_DIALOG_VIRTUAL_TTS_BT",
            "N_DIALOG_VIRTUAL_TTS_SMS",
            "N_DIALOG_VIRTUAL_TTS_NAVI",
            "N_DIALOG_VIRTUAL_SERVER_DICTATION",
            "N_DIALOG_NO_RECOG_DRIVING",
            "N_DIALOG_NO_RECOG_BACK",
            "N_DIALOG_NO_RECOG_EXIT",
            "N_DIALOG_NO_RECOG_HOUSE_NUMBER_STEP",
            "N_DIALOG_MAINMENU",
            "N_DIALOG_MAINMENU_HELP_CATEGORY",
            "N_DIALOG_MAINMENU_SELECT",
            "N_DIALOG_NBEST_LIST",
            "N_DIALOG_BT_VAD",
            "N_DIALOG_BT_VAD_CATEGORY",
            "N_DIALOG_BT_VAD_CATEGORY_NUM",
            "N_DIALOG_BT_VAD_LIST",
            "N_DIALOG_BT_VAD_NUM_LOCAL",
            "N_DIALOG_BT_VAD_NUM_SELECT",
            "N_DIALOG_BT_VAD_SELECT",
            "N_DIALOG_BT_DEVICE_LIST",
            "N_DIALOG_MAINMENU_HELP_PHONE",
            "N_DIALOG_LOCAL_VR_BT_VAD",
            "N_DIALOG_LOCAL_VR_BT_VAD_NUM_LOCAL",
            "N_DIALOG_MAINMENU_AM_FREQUENCY",
            "N_DIALOG_MAINMENU_FM_FREQUENCY",
            "N_DIALOG_MAINMENU_HELP_RADIO",
            "N_DIALOG_MAINMENU_SIRIUSXM_CHANNEL",
            "N_DIALOG_LOCAL_VR_MAINMENU_AM_FREQUENCY",
            "N_DIALOG_LOCAL_VR_MAINMENU_FM_FREQUENCY",
            "N_DIALOG_LOCAL_VR_MAINMENU_SIRIUSXM_CHANNEL",
            "N_DIALOG_MAINMENU_TRACKLIST",
            "N_DIALOG_MAINMENU_HELP_UVO",
            "N_DIALOG_NAVI_NBEST_LIST",
            "N_DIALOG_MAINMENU_HELP_NAVIGATION",
            "N_DIALOG_NAVI_LIST",
            "N_DIALOG_NAVI_FIND_CATEGORY_LIST",
            "N_DIALOG_NAVI_FIND_CATEGORY_NONE_LIST",
            "N_DIALOG_NAVI_SELECT",
            "N_DIALOG_NAVI_WAY_SELECT",
            "N_DIALOG_NAVI_DEL_WAY_SELECT",
            "N_DIALOG_NAVI_CALL_SELECT",
            "N_DIALOG_NAVI_CALL_WAY_SELECT",
            "N_DIALOG_NAVI_YESNO_SELECT",
            "N_DIALOG_NAVI_YESNO_WAY_SELECT",
            "N_DIALOG_NAVI_PRE_YESNO_CALL_SELECT",
            "N_DIALOG_NAVI_PRE_CALL_WAY_SELECT",
            "N_DIALOG_NAVI_PREVIOUS_POINT",
            "N_DIALOG_NAVI_PREVIOUS_DESTINATION",
            "N_DIALOG_NAVI_PREVIOUS_SEARCH",
            "N_DIALOG_NAVI_PREVIOUS_START",
            "N_DIALOG_NAVI_PRE_YESNO_SELECT",
            "N_DIALOG_NAVI_PRE_WAY_SELECT",
            "N_DIALOG_NAVI_ADDRESS_SELECT",
            "N_DIALOG_NAVI_ADDRESS_WAY_SELECT",
            "N_DIALOG_NAVI_CHANGE_HOUSE_NUMBER",
            "N_DIALOG_NAVI_CHANGE_STREET_CITY",
            "N_DIALOG_NAVI_FIND_BIG_CATEGORY",
            "N_DIALOG_NAVI_FIND_MID_CATEGORY",
            "N_DIALOG_NAVI_REGISTER_HOME_SELECT",
            "N_DIALOG_NAVI_REGISTER_OFFICE_SELECT",
            "N_DIALOG_NAVI_REGISTER_HOME_SELECT_STEP",
            "N_DIALOG_NAVI_REGISTER_OFFICE_SELECT_STEP",
            "N_DIALOG_NAVI_REGISTER_HOME_NONE_HOUSE_NUMBER_SELECT_STEP",
            "N_DIALOG_NAVI_REGISTER_OFFICE_NONE_HOUSE_NUMBER_SELECT_STEP",
            "N_DIALOG_NAVI_ADDRESS_LIST",
            "N_DIALOG_NAVI_FULL_ADDRESS_LIST",
            "N_DIALOG_NAVI_VDE_LOCATION",
            "N_DIALOG_NAVI_VDE_STREETCITY_STEP",
            "N_DIALOG_NAVI_VDE_HOUSE_NUMBER_STEP",
            "N_DIALOG_NAVI_VDE_ADDRESS_SELECT_STEP",
            "N_DIALOG_NAVI_VDE_ADDRESS_WAY_SELECT_STEP",
            "N_DIALOG_NAVI_VDE_NONE_HOUSE_NUMBER_STEP",
            "N_DIALOG_NAVI_VDE_NONE_HOUSE_NUMBER_WAY_STEP",
            "N_DIALOG_LOCAL_VR_NAVI_FIND_BIG_CATEGORY",
            "N_DIALOG_LOCAL_VR_NAVI_VDE_LOCATION",
            "N_DIALOG_BT_SMS",
            "N_DIALOG_BT_SMS_MESSAGE",
            "N_DIALOG_BT_SMS_SELECT",
            "N_DIALOG_NAVI_FIND_SERVER",
            "N_DIALOG_LOCAL_VR_BT_SMS",
            "N_DIALOG_LOCAL_VR_NAVI_FIND_SERVER"];
        let index_list = [];
        for (let i in list) {
            index_list.push({"value": list[i], "index": i})
        }
        return index_list;
    },

    ifSorting() {
        that = this;
        let index_list = this.getIndexList();

        //서치할 텍스트 정규표현식
        let regex = /\tIF\s*[\w.$]*\s*=\s*[\"\\]*@([\w._]*)[\n\s\w\!\s가-힣\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]*?\n\t\tEND/g;
        let array = [];
        let notexistarray = []; //리스트에 존재하지 않는 변수
        let selected = this.editor.getSelectedBufferRange();        //선택한 텍스트 Range
        let selected_text = this.editor.getTextInBufferRange(selected); //선택한 텍스트
        let check_num_of_obj = 0;
        //선택한 범위안에 정규표현식에 맞는 텍스트 객체 배열에 추가 (인덱스 리스트를 참고하여 같은 변수값은 해당 인덱스 인덱싱)
        this.editor.scanInBufferRange(regex, selected, function (obj) {
            check_num_of_obj++;
            let is_exist = false;
            for (let i in index_list) {
                if (index_list[i].value == obj.match[1]) {
                    array.push({"item": obj.match[0], "keyword": obj.match[1], "index": index_list[i].index});
                    is_exist = true;
                }
            }
            if (is_exist == false) {
                notexistarray.push({"item": obj.match[0], "keyword": obj.match[1]})
            }
        })
        //인덱스값 기준으로 객체배열 정렬
        array.sort(function (a, b) {
            return a.index - b.index;
        })

        //객체의 텍스트값 append & 줄바꿈 처리
        let items = "";
        for (let i in array) {
            items += array[i].item;
            if (i != array.length - 1) {
                items += "\n\n";
            }
        }

        console.log(array.length, check_num_of_obj);
        console.log(this.getLineCount(items));

        //에러처리 - regex에 걸리는 객체 수와 인덱스 리스트에 걸린 객체 수 비교, 선택된 라인수와 정렬된 라인수 비교(주석,위아래 공백 )
        console.log(this.getLineCount(selected_text) - this.getLineCount(items));
        if (array.length == check_num_of_obj && (this.getLineCount(selected_text) - this.getLineCount(items)) < 3) {
            this.editor.insertText(items)
            atom.notifications.addSuccess(array.length + "개 요소 정렬 완료")
        } else {
            if (notexistarray.length != 0) {
                let string = "검색 되지 않는 변수가 있습니다."
                for (let i in notexistarray) {
                    string += notexistarray[i].keyword + "  ";
                }
                atom.notifications.addError(string)
            }
            atom.notifications.addError("오류가 있습니다! (if문 형식 if앞에 탭1개, else앞에 탭2개, 변수명을 확인해주세요)")
        }
    }
    ,

    gSorting() {
        that = this;
        let index_list = this.getIndexList();

        //서치할 텍스트 정규표현식
        let regex = /\\@([\w\!가-힣\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(]*)/g;
        let array = [];
        let notexistarray = []; //리스트에 존재하지 않는 변수
        let selected = this.editor.getSelectedBufferRange();        //선택한 텍스트 Range
        let selected_text = this.editor.getTextInBufferRange(selected); //선택한 텍스트
        let check_num_of_obj = 0;
        //선택한 범위안에 정규표현식에 맞는 텍스트 객체 배열에 추가 (인덱스 리스트를 참고하여 같은 변수값은 해당 인덱스 인덱싱)
        this.editor.scanInBufferRange(regex, selected, function (obj) {
            check_num_of_obj++;
            let is_exist = false;
            for (let i in index_list) {
                if (index_list[i].value == obj.match[1]) {
                    array.push({"item": obj.match[0], "keyword": obj.match[1], "index": index_list[i].index});
                    is_exist = true;
                }
            }
            if (is_exist == false) {
                notexistarray.push({"item": obj.match[0], "keyword": obj.match[1]})
            }
        })
        //인덱스값 기준으로 객체배열 정렬
        array.sort(function (a, b) {
            return a.index - b.index;
        })

        console.log(array)
        //객체의 텍스트값 append & 줄바꿈 처리
        let items = "";
        for (let i in array) {
            if (i == 0) {
                items += array[i].item;
            } else items += " " + array[i].item;

        }
        console.log(items)
        console.log(notexistarray);
        console.log(array.length, check_num_of_obj);
        console.log(this.getLineCount(items));

        if (array.length == check_num_of_obj && notexistarray.length == 0) {
            atom.notifications.addSuccess(array.length + "개 요소 정렬 완료")
            this.editor.insertText(items)

        } else {
            if (notexistarray.length != 0) {
                let string = "검색 되지 않는 변수가 있습니다."
                for (let i in notexistarray) {
                    string += notexistarray[i].keyword + "  ";
                }
                atom.notifications.addError(string)
            }
            atom.notifications.addError("에러가 있습니다. 선택범위를 확인해주세요.")
        }


    },

    //Text의 라인수를 계산한다.
    getLineCount(text) {
        return text.split(/\r\n|\r|\n/).length;
    }


};
