(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var p = n != undefined ? o['getObjective'](n, m) : o['get'](m);
                                if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    p += 0x1;
                                return p;
                            } catch (q) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"scrollBarOpacity":0.5,"paddingBottom":0,"id":"rootPlayer","propagateClick":false,"paddingLeft":0,"gap":10,"width":"100%","mediaActivationMode":"window","overflow":"hidden","verticalAlign":"top","vrPolyfillScale":0.75,"paddingRight":0,"scripts":{"syncPlaylists":TDV.Tour.Script.syncPlaylists,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"openLink":TDV.Tour.Script.openLink,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getComponentByName":TDV.Tour.Script.getComponentByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupImage":TDV.Tour.Script.showPopupImage,"cloneCamera":TDV.Tour.Script.cloneCamera,"initGA":TDV.Tour.Script.initGA,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setValue":TDV.Tour.Script.setValue,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPixels":TDV.Tour.Script.getPixels,"quizShowScore":TDV.Tour.Script.quizShowScore,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"init":TDV.Tour.Script.init,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setLocale":TDV.Tour.Script.setLocale,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"isPanorama":TDV.Tour.Script.isPanorama,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"unregisterKey":TDV.Tour.Script.unregisterKey,"shareSocial":TDV.Tour.Script.shareSocial,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizFinish":TDV.Tour.Script.quizFinish,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getKey":TDV.Tour.Script.getKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showWindow":TDV.Tour.Script.showWindow,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"translate":TDV.Tour.Script.translate,"getOverlays":TDV.Tour.Script.getOverlays,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"registerKey":TDV.Tour.Script.registerKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaByName":TDV.Tour.Script.getMediaByName,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"existsKey":TDV.Tour.Script.existsKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"playAudioList":TDV.Tour.Script.playAudioList,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera},"scrollBarMargin":2,"backgroundPreloadEnabled":true,"borderSize":0,"desktopMipmappingEnabled":false,"horizontalAlign":"left","scrollBarWidth":10,"scrollBarVisible":"rollOver","children":["this.MainViewer","this.Container_90288E1A_9C5B_BCFA_41D0_7AF8BC8A7116"],"defaultVRPointer":"laser","toolTipHorizontalAlign":"center","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_902A9E1A_9C5B_BCFA_41DF_41C5297B2FB8_playlist])","class":"Player","height":"100%","downloadEnabled":false,"definitions": [{"paddingBottom":10,"itemPaddingBottom":3,"id":"ThumbnailList_902A9E1A_9C5B_BCFA_41DF_41C5297B2FB8","gap":10,"verticalAlign":"top","propagateClick":false,"paddingLeft":20,"playList":"this.ThumbnailList_902A9E1A_9C5B_BCFA_41DF_41C5297B2FB8_playlist","selectedItemLabelFontWeight":"bold","itemBackgroundColorRatios":[],"itemPaddingLeft":3,"itemThumbnailShadowOpacity":0.8,"itemHorizontalAlign":"center","itemLabelFontFamily":"Arial","paddingRight":20,"itemLabelFontWeight":"normal","itemThumbnailShadowHorizontalLength":3,"scrollBarMargin":2,"horizontalAlign":"left","itemThumbnailShadowVerticalLength":3,"scrollBarWidth":10,"borderSize":0,"itemPaddingTop":3,"itemLabelGap":5,"itemThumbnailScaleMode":"fit_outside","scrollBarVisible":"rollOver","itemBackgroundColor":[],"maxHeight":600,"backgroundColor":["#000000"],"toolTipHorizontalAlign":"center","maxWidth":800,"class":"ThumbnailList","itemLabelTextDecoration":"none","itemVerticalAlign":"middle","itemThumbnailShadowBlurRadius":4,"itemLabelFontSize":14,"itemThumbnailWidth":100,"minHeight":0,"itemThumbnailShadow":true,"itemLabelPosition":"bottom","itemThumbnailShadowColor":"#000000","minWidth":0,"itemPaddingRight":3,"itemThumbnailBorderRadius":5,"layout":"horizontal","shadow":false,"scrollBarColor":"#FFFFFF","itemBackgroundOpacity":0,"itemThumbnailHeight":75,"itemLabelFontColor":"#FFFFFF","itemBackgroundColorDirection":"vertical","itemBorderRadius":0,"itemLabelHorizontalAlign":"center","data":{"name":"ThumbnailList576"},"paddingTop":10,"itemOpacity":1,"backgroundColorRatios":[0],"scrollBarOpacity":0.5,"itemThumbnailShadowSpread":1,"backgroundOpacity":0.2,"itemMode":"normal","borderRadius":5,"itemLabelFontStyle":"normal","backgroundColorDirection":"vertical","itemThumbnailOpacity":1},{"items":[{"media":"this.panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9_camera"}],"id":"mainPlayList","class":"PlayList"},{"automaticZoomSpeed":10,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9_camera","initialSequence":"this.sequence_969050B4_9C5D_A5EB_41B7_0C13FCE380E2"},{"items":[{"media":"this.panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9_camera"}],"id":"ThumbnailList_902A9E1A_9C5B_BCFA_41DF_41C5297B2FB8_playlist","class":"PlayList"},{"class":"Panorama","label":trans('panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9.label'),"vfov":180,"id":"panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9","data":{"label":"47_VRAY3_7_textures_0000-DeNoiseAI-low-light"},"partial":false,"pitch":0,"hfov":360,"hfovMin":"120%","thumbnailUrl":"media/panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9_t.jpg","frames":[{"thumbnailUrl":"media/panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"url":"media/panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":18432,"rowCount":6,"colCount":36,"height":3072},{"url":"media/panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":9216,"rowCount":3,"colCount":18,"height":1536},{"url":"media/panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","width":6144,"rowCount":2,"colCount":12,"height":1024},{"url":"media/panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072,"rowCount":1,"colCount":6,"height":512},{"url":"media/panorama_90D6F171_9C5C_676D_41C6_EE27A5F21AE9_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","width":9216,"rowCount":1,"colCount":6,"height":1536}],"class":"ImageResource"}}],"hfovMax":130},{"arrowKeysAction":"translate","zoomEnabled":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer"},{"children":["this.ThumbnailList_902A9E1A_9C5B_BCFA_41DF_41C5297B2FB8"],"paddingBottom":0,"id":"Container_90288E1A_9C5B_BCFA_41D0_7AF8BC8A7116","propagateClick":false,"paddingLeft":0,"left":0,"right":0,"gap":10,"verticalAlign":"bottom","paddingRight":0,"scrollBarMargin":2,"borderSize":0,"horizontalAlign":"center","scrollBarWidth":10,"scrollBarVisible":"rollOver","bottom":0,"height":200,"toolTipHorizontalAlign":"center","layout":"horizontal","class":"Container","minHeight":20,"minWidth":20,"contentOpaque":false,"shadow":false,"borderRadius":0,"scrollBarColor":"#000000","data":{"name":"Container575"},"paddingTop":0,"backgroundOpacity":0,"overflow":"visible","scrollBarOpacity":0.5},{"subtitlesTop":0,"playbackBarOpacity":1,"id":"MainViewer","toolTipBackgroundColor":"#F6F6F6","propagateClick":false,"subtitlesTextShadowColor":"#000000","toolTipShadowVerticalLength":0,"subtitlesFontSize":"3vmin","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderColor":"#000000","playbackBarBottom":5,"transitionMode":"blending","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingBottom":5,"toolTipShadowColor":"#333333","progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColorDirection":"vertical","toolTipTextShadowOpacity":0,"width":"100%","toolTipShadowSpread":0,"borderSize":0,"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressBarOpacity":1,"playbackBarHeight":10,"toolTipPaddingBottom":4,"subtitlesTextDecoration":"none","subtitlesTextShadowBlurRadius":0,"toolTipShadowBlurRadius":3,"playbackBarHeadWidth":6,"class":"ViewerArea","playbackBarHeadBackgroundColorDirection":"vertical","doubleClickAction":"toggle_fullscreen","playbackBarProgressBorderSize":0,"progressBottom":0,"playbackBarBackgroundColorDirection":"vertical","firstTransitionDuration":0,"height":"100%","playbackBarRight":0,"progressHeight":10,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"playbackBarProgressBorderRadius":0,"progressBorderSize":0,"subtitlesShadow":false,"playbackBarProgressBackgroundColor":["#3399FF"],"shadow":false,"subtitlesGap":0,"subtitlesOpacity":1,"progressBarBorderRadius":0,"playbackBarHeadShadowOpacity":0.7,"toolTipOpacity":1,"vrPointerSelectionColor":"#FF6600","subtitlesHorizontalAlign":"center","subtitlesBackgroundColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"paddingTop":0,"progressBarBorderSize":0,"subtitlesVerticalAlign":"bottom","toolTipPaddingLeft":6,"paddingBottom":0,"playbackBarProgressBackgroundColorRatios":[0],"transitionDuration":500,"toolTipFontStyle":"normal","toolTipShadowHorizontalLength":0,"toolTipFontColor":"#606060","playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"vrPointerSelectionTime":2000,"toolTipShadowOpacity":1,"toolTipFontSize":"1.11vmin","subtitlesBorderSize":0,"subtitlesFontColor":"#FFFFFF","paddingLeft":0,"vrPointerColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderRadius":0,"progressBorderRadius":0,"playbackBarProgressBorderColor":"#000000","paddingRight":0,"subtitlesFontWeight":"normal","playbackBarHeadBorderRadius":0,"progressBackgroundOpacity":1,"playbackBarProgressOpacity":1,"subtitlesPaddingLeft":5,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":50,"progressLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipHorizontalAlign":"center","playbackBarLeft":0,"toolTipBorderRadius":3,"playbackBarHeadHeight":15,"subtitlesPaddingRight":5,"playbackBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","toolTipFontWeight":"normal","progressRight":0,"minHeight":50,"progressOpacity":1,"minWidth":100,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowColor":"#000000","toolTipBorderSize":1,"subtitlesTextShadowHorizontalLength":1,"progressBarBackgroundColorDirection":"vertical","toolTipBorderColor":"#767676","borderRadius":0,"toolTipPaddingTop":4,"toolTipDisplayTime":600,"playbackBarHeadBorderSize":0,"progressBarBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"playbackBarHeadShadow":true,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","toolTipFontFamily":"Arial","playbackBarHeadOpacity":1,"playbackBarBackgroundOpacity":1,"toolTipTextShadowBlurRadius":3,"toolTipPaddingRight":6,"displayTooltipInTouchScreens":true},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_969050B4_9C5D_A5EB_41B7_0C13FCE380E2"}],"minHeight":20,"layout":"absolute","minWidth":20,"mobileMipmappingEnabled":false,"contentOpaque":false,"shadow":false,"borderRadius":0,"data":{"name":"Player573","defaultLocale":"de","textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"rate":1,"volume":1},"locales":{"de":"locale/de.txt"}},"mouseWheelEnabled":true,"scrollBarColor":"#000000","paddingTop":0};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.4.19.js.map
//Generated with v2020.4.19, Mon Jul 12 2021