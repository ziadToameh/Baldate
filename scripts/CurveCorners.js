
curvyCorners.addEvent(window, 'load', initCorners);

function initCorners() {
    var settings_wrapper = {
        tl: { radius: 20 },
        tr: { radius: 20 },
        bl: { radius: 20 },
        br: { radius: 20 },
        antiAlias: true
    }

    var settings = {
        tl: { radius: 10 },
        tr: { radius: 10 },
        bl: { radius: 10 },
        br: { radius: 10 },
        antiAlias: true
    }

    var settings_sub_menu = {
        bl: { radius: 10 },
        br: { radius: 10 },
        antiAlias: true
    }

    var settings_image_slider = {
        tl: { radius: 10 },
        tr: { radius: 10 },
        antiAlias: true
    }

    var settings_body_wrapper = {
        tl: { radius: 20 },
        tr: { radius: 20 },
        bl: { radius: 20 },
        br: { radius: 20 },
        antiAlias: true
    }

    var settings_body = {
        tl: { radius: 10 },
        tr: { radius: 10 },
        bl: { radius: 10 },
        br: { radius: 10 },
        antiAlias: true
    }

    var settings_leftmenu = {
        tl: { radius: 7 },
        bl: { radius: 7 },
        antiAlias: true
    }

    /*
    Usage:

    curvyCorners(settingsObj, selectorStr);
    curvyCorners(settingsObj, Obj1[, Obj2[, Obj3[, . . . [, ObjN]]]]);

    selectorStr ::= complexSelector [, complexSelector]...
    complexSelector ::= singleSelector[ singleSelector]
    singleSelector ::= idType | classType
    idType ::= #id
    classType ::= [tagName].className
    tagName ::= div|p|form|blockquote|frameset // others may work
    className : .name
    selector examples:
    #mydiv p.rounded
    #mypara
    .rounded
    */
    curvyCorners(settings_wrapper, "#slider-wrapper");
    curvyCorners(settings, "#slider-content");
    curvyCorners(settings_sub_menu, "#sub-menu");
    curvyCorners(settings_body_wrapper, "#maincontent_wrapper");
    curvyCorners(settings_body, "#maincontent");
    curvyCorners(settings_leftmenu, "#left-side");
}
