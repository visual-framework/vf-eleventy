'use strict'; // vf-banner
// Turn the below code snippet into a banner
// <div class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
// data-vf-js-banner
// data-vf-js-banner-state="persistent|dismissible|blocking" data-vf-js-banner-esc-close="y|n"
// data-vf-js-banner-cookie-name="{{data-service-id}}"
// data-vf-js-banner-cookie-version="{{data-protection-version}}"
// data-vf-js-banner-extra-button="<a href='#'>string1</a><a href='#'>string2</a>">
//   <div class="vf-banner__content | vf-grid">
//     <p class="vf-text vf-text--body-l">
//       This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-link" href="JavaScript:Void(0);">Terms Of Use</a>.
//     </p>
//
//     <button class="vf-button vf-button--secondary">
//       {{vf-data-protection-banner__link}}
//     </button>
//   </div>
// </div>

/**
 * Clear the cooke. This is mostly a development tool.
 */

function vfBannerReset(vfBannerCookieNameAndVersion) {
  vfBannerSetCookie(vfBannerCookieNameAndVersion, false);
}
/**
 * Confirm a banner, initiate cookie logging
 */


function vfBannerConfirm(banner, vfBannerCookieNameAndVersion) {
  banner.classList.add('vf-u-display-none');

  if (vfBannerCookieNameAndVersion !== 'null') {
    vfBannerSetCookie(vfBannerCookieNameAndVersion, true);
  }
}
/**
 * Log a cookie
 */


function vfBannerSetCookie(c_name, value, exdays) {
  // var value = value || 'true';
  var exdays = exdays || 90;
  var exdate = new Date();
  var c_value;
  exdate.setDate(exdate.getDate() + exdays);
  c_value = escape(value) + (exdays === null ? "" : ";expires=" + exdate.toUTCString()) + ";domain=" + document.domain + ";path=/";
  document.cookie = c_name + "=" + c_value;
}
/**
 * See if a cookie has been set
 */


function vfBannerGetCookie(c_name) {
  var i,
      x,
      y,
      ARRcookies = document.cookie.split(";");

  for (var i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");

    if (x === c_name) {
      return unescape(y);
    }
  }
}
/**
 * Finds all vf-banner on a page and activates them
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @example vfBanner(document.querySelectorAll('.vf-component__container')[0]);
 */


function vfBanner(scope) {
  var scope = scope || document;
  var bannerList = scope.querySelectorAll('[data-vf-js-banner]');

  if (!bannerList) {
    // exit: banners not found
    return;
  }

  if (bannerList.length == 0) {
    // exit: banner content not found
    return;
  } // generate the banner component, js events


  Array.prototype.forEach.call(bannerList, function (banner, i) {
    // map the JS data attributes to our object structure
    var bannerRemapped = JSON.parse(JSON.stringify(banner.dataset));

    if (typeof banner.dataset.vfJsBannerId != "undefined") {// don't reactivate an already processed banner
    } else {
      bannerRemapped.vfJsBannerText = banner.querySelectorAll('[data-vf-js-banner-text]')[0].innerHTML;
      var uniqueId = Math.round(Math.random() * 10000000); // set an id to target this banner

      banner.setAttribute('data-vf-js-banner-id', uniqueId); // preserve the classlist

      bannerRemapped.classList = banner.querySelectorAll('[data-vf-js-banner-text]')[0].classList; // Make the banner come alive

      vfBannerInsert(bannerRemapped, uniqueId);
    }
  });
}
/**
 * Takes a banner object and creates the necesary html markup, js events, and inserts
 * @example vfBannerInsert()
 * @param {object} [banner]  -
 * @param {string} [bannerId] - the id of the target div, `data-vf-js-banner-id="1"`
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 */


function vfBannerInsert(banner, bannerId, scope) {
  var scope = scope || document;
  var targetBanner = scope.querySelectorAll('[data-vf-js-banner-id="' + bannerId + '"]')[0];

  if (targetBanner == undefined) {
    return;
  }

  var generatedBannerHtml = '<div class="' + banner.classList + '" data-vf-js-banner-text>';
  generatedBannerHtml += banner.vfJsBannerText; // What type of banner?

  if (banner.vfJsBannerState === 'persistent') {// nothing more to do for persistent, you can't close it
  } else if (banner.vfJsBannerState === 'dismissible') {// nothing more to do for dismissible
  } else if (banner.vfJsBannerState === 'blocking') {
    console.warn('vf-banner: Note, the blocking implementation is not yet feature complete.'); // escape only works when blocking

    if (banner.vfJsBannerEscClose === 'y' || banner.vfJsBannerEscClose === 'Y') {
      document.onkeydown = function (evt) {
        evt = evt || window.event;

        if (evt.keyCode == 27) {
          vfBannerConfirm(targetBanner, 'null');
        }
      };
    }
  } // Split passed links into buttons
  // <a href='#'>string1</a>\<a href='#'>string2</a>


  if (banner.vfJsBannerExtraButton) {
    var vfBannerExtraButtons = banner.vfJsBannerExtraButton.split('</a>');
    vfBannerExtraButtons.forEach(function (button) {
      if (button.length > 1) {
        button += '</a>';
        var newButton = document.createElement('button');
        newButton.innerHTML = button;
        newButton = newButton.firstChild;
        newButton.classList.add('vf-button', 'vf-button--primary');
        generatedBannerHtml += newButton.outerHTML;
      }
    });
  } // if there is a vfJsBannerButtonText and banner is blocking or dismissible,
  // add a button so user can close the banner


  if (banner.vfJsBannerButtonText && (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible')) {
    if (banner.vfJsBannerButtonTheme == 'primary') {
      generatedBannerHtml += '<button class="vf-button vf-button--primary" data-vf-js-banner-close>' + banner.vfJsBannerButtonText + '</button>';
    } else if (banner.vfJsBannerButtonTheme == 'secondary') {
      generatedBannerHtml += '<button class="vf-button vf-button--secondary" data-vf-js-banner-close>' + banner.vfJsBannerButtonText + '</button>';
    } else if (banner.vfJsBannerButtonTheme == 'tertiary') {
      generatedBannerHtml += '<button class="vf-button vf-button--tertary" data-vf-js-banner-close>' + banner.vfJsBannerButtonText + '</button>';
    } else {
      generatedBannerHtml += '<button class="vf-button vf-button--secondary" data-vf-js-banner-close>' + banner.vfJsBannerButtonText + '</button>';
    }
  }

  generatedBannerHtml += '</div>'; // set the html of the banner

  targetBanner.innerHTML = generatedBannerHtml; // prep for cookie

  var vfBannerCookieNameAndVersion = 'null';

  if (banner.vfJsBannerCookieName && banner.vfJsBannerCookieVersion) {
    vfBannerCookieNameAndVersion = banner.vfJsBannerCookieName + '_' + banner.vfJsBannerCookieVersion;
  } // utility to reset cookie when developing
  // console.warn('vf-banner: vfBannerReset cookie reset override is on.');
  // vfBannerReset(vfBannerCookieNameAndVersion);
  // if blocking or dismissible, allow the user to close it, store a cookie (if specified)


  if (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible') {
    // On click: close banner, pass any cookie name (or `null`)
    if (banner.vfJsBannerButtonText) {
      targetBanner.querySelectorAll('[data-vf-js-banner-close]')[0].addEventListener('click', function () {
        vfBannerConfirm(targetBanner, vfBannerCookieNameAndVersion);
      }, false);
    }
  }

  if (vfBannerCookieNameAndVersion != 'null') {
    // if banner has been previously accepted
    if (vfBannerGetCookie(vfBannerCookieNameAndVersion) === 'true') {
      // banner has been accepted, close
      targetBanner.classList.add('vf-u-display-none'); // exit, nothng more to do

      return;
    } // if banner is marked as auto-accept, set as read


    if (banner.vfJsBannerAutoAccept == 'true') {
      if (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible') {
        vfBannerSetCookie(vfBannerCookieNameAndVersion, true);
      }
    }
  }
} // By default this creates banners from HTML
// optionally you can programatically supply
// Target HTML
// `<div class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
//       data-vf-js-banner
//       data-vf-js-banner-id="32423"
//
// ></div>`
// var programaticalBanner = {
//   vfJsBanner: "",
//   vfJsBannerButtonText: "I agree, dismiss this banner",
//   vfJsBannerCookieName: "MyService",
//   vfJsBannerCookieVersion: "0.1",
//   vfJsBannerExtraButton: "<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>",
//   vfJsBannerId: "2352286",
//   vfJsBannerText: '<p class="vf-text vf-text--body-l">This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-link" href="JavaScript:Void(0);">Terms Of Use</a>.</p>',
//   vfJsBannerState: "dismissible",
//   vfJsBannerAutoAccept: "true"
// };
// vfBannerInsert(programaticalBanner,'32423');
// vf-analytics-google

/*
 * A note on the Visual Framework and JavaScript:
 * The VF is primairly a CSS framework so we've included only a minimal amount
 * of JS in components and it's fully optional (just remove the JavaScript selectors
 * i.e. `data-vf-js-tabs`). So if you'd rather use Angular or Bootstrap for your
 * tabs, the Visual Framework won't get in the way.
 *
 * When querying the DOM for elements that should be acted on:
 * 🚫 Don't: const tabs = document.querySelectorAll('.vf-tabs');
 * ✅ Do:    const tabs = document.querySelectorAll('[data-vf-js-tabs]');
 *
 * This allows users who would prefer not to have this JS engange on an element
 * to drop `data-vf-js-component` and still maintain CSS styling.
 */

/**
 * Utility method to invalidate prior GA check.
 */


function vfGaIndicateUnloaded() {
  var el = document.querySelector('body');
  el.setAttribute('data-vf-google-analytics-loaded', 'false');
}
/**
 * Track the last time an event was sent (don't double send)
 * @param {Date} lastGaEventTime
 */


var lastGaEventTime = Date.now();
/**
 * We poll the document until we find GA has loaded, or we've tried a few times.
 * Port of https://github.com/ebiwd/EBI-Framework/blob/v1.3/js/foundationExtendEBI.js#L4
 * @param {number} [numberOfGaChecksLimit=2]
 * @param {number} [checkTimeout=900]
 */

function vfGaIndicateLoaded(numberOfGaChecksLimit, numberOfGaChecks, checkTimeout) {
  var numberOfGaChecks = numberOfGaChecks || 0;
  var numberOfGaChecksLimit = numberOfGaChecksLimit || 5;
  var checkTimeout = checkTimeout || 900;
  var el = document.querySelector('body'); // debug
  // console.log('checking',numberOfGaChecks,numberOfGaChecksLimit)

  numberOfGaChecks++; // If successful we set `data-vf-google-analytics-loaded` on the `body` to true.

  try {
    // unset our check
    vfGaIndicateUnloaded();

    if (ga && ga.loaded) {
      el.setAttribute('data-vf-google-analytics-loaded', 'true');
      vfGaInit();
    } else {
      if (numberOfGaChecks <= numberOfGaChecksLimit) {
        setTimeout(function () {
          vfGaIndicateLoaded(numberOfGaChecksLimit, numberOfGaChecks, checkTimeout);
        }, 900); // give a second check if GA was slow to load
      }
    }
  } catch (err) {
    if (numberOfGaChecks <= numberOfGaChecksLimit) {
      setTimeout(function () {
        vfGaIndicateLoaded(numberOfGaChecksLimit, numberOfGaChecks, checkTimeout);
      }, 900); // give a second check if GA was slow to load
    }
  }
}
/**
 * Get Meta Tag Content
 * via https://jonlabelle.com/snippets/view/javascript/get-meta-tag-content
 *
 * @param {string} metaName The meta tag name.
 * @return {string} The meta tag content value, or empty string if not found.
 */


function vfGetMeta(metaName) {
  var metas = document.getElementsByTagName('meta');
  var re = new RegExp('\\b' + metaName + '\\b', 'i');
  var i = 0;
  var mLength = metas.length;

  for (i; i < mLength; i++) {
    if (re.test(metas[i].getAttribute('name'))) {
      return metas[i].getAttribute('content');
    }
  }

  return '';
}
/**
 * Hooks into common analytics tracking
 */


function vfGaInit() {
  // Need help
  // How to add dimension to your property
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/custom-dims-mets
  // https://support.google.com/analytics/answer/2709829?hl=en
  // standard google analytics bootstrap
  // @todo: add conditional
  ga('set', 'anonymizeIp', true); // lookup metadata  <meta name="vf:page-type" content="category;pageTypeHere">
  // Pass your GA dimension with a `;` divider

  var pageType = vfGetMeta('vf:page-type');

  if (pageType.length > 0) {
    var toLog = pageType.split(';');
    var dimension = toLog[1];
    var pageTypeName = toLog[0];
    ga('set', dimension, pageTypeName);
  } // standard google analytics bootstrap
  // @todo: add conditional


  ga('send', 'pageview'); // If we want to send metrics in one go
  // ga('set', {
  //   'dimension5': 'custom dimension data'
  //   // 'metric5': 'custom metric data'
  // });

  vfGaLinkTrackingInit();
}
/**
 * Track page links as events
 */


function vfGaLinkTrackingInit() {
  // jQuery("body.google-analytics-loaded .track-with-analytics-events a").on('mousedown', function(e) {
  //   analyticsTrackInteraction(e.target,'Manually tracked area');
  // });
  document.body.onclick = function (e) {
    e = e || event;
    var from = findParent('a', e.target || e.srcElement);

    if (from) {
      /* it's a link, actions here */
      console.log('click', from);
      analyticsTrackInteraction(from);
    }
  }; //find first parent with tagName [tagname]


  function findParent(tagname, el) {
    while (el) {
      if ((el.nodeName || el.tagName).toLowerCase() === tagname.toLowerCase()) {
        return el;
      }

      el = el.parentNode;
    }

    return null;
  }
}
/**
 * Utility method to get the last in an array
 * @returns {var} the last item in the array
 * @example linkName = actedOnItem.src.split('/').vfGaLinkLast();
 */


if (!Array.prototype.vfGaLinkLast) {
  Array.prototype.vfGaLinkLast = function () {
    return this[this.length - 1];
  };
}

;
/**
 * Analytics tracking
 * ---
 * This code tracks the user's clicks in various parts of the site and logs them as GA events.<br/>
 * Links in non-generic regions can be tracked by adding '.track-with-analytics-events' to a parent div. Careful with the scoping.
 *
 * Dev note:
 * add class verbose-analytics to your body for a readout to console on clicks.
 *
 * @param {element} actedOnItem
 * @param {string} customEventName Event action
 * @example
 * jQuery(".analytics-content-footer").on('mousedown', 'a, button', function(e) {
 *   analyticsTrackInteraction(e.target,'Content footer');
 * });
 */

function analyticsTrackInteraction(actedOnItem, customEventName) {
  var customEventName = customEventName || []; // you can pass some custom text as a 3rd param

  var linkName;

  if (customEventName.length > 0) {
    linkName = customEventName;
  } else {
    // then derive a value
    linkName = actedOnItem.innerText;
    console.log('linkName', linkName); // if there's no text, it's probably and image

    if (linkName.length == 0 && actedOnItem.hasAttribute('src')) linkName = actedOnItem.src.split('/').vfGaLinkLast();
    if (linkName.length == 0 && actedOnItem.value) linkName = actedOnItem.value; // special things for gloabl search box
    // if (parentContainer == 'Global search') {
    //   linkName = 'query: ' + jQuery('#global-search input#query').value;
    // }
  } // Get closest parent container
  // Track the region of the link clicked (global nav, masthead, hero, main content, footer, etc)
  //data-vf-google-anlaytics-region="main-content-area-OR-SOME-OTHER-NAME"


  var parentContainer = actedOnItem.closest("[data-vf-google-anlaytics-region]");

  if (parentContainer) {
    parentContainer = parentContainer.dataset.vfGoogleAnlayticsRegion;
  } else {
    parentContainer = 'No container specified';
  } // send to GA
  // Only if more than 100ms has past since last click.
  // Due to our structure, we fire multiple events, so we only send to GA the most specific event resolution


  if (Date.now() - lastGaEventTime > 150) {
    // track link name and region
    ga && ga('send', 'event', 'UI', 'UI Element / ' + parentContainer, linkName); // Track file type (PDF, DOC, etc) or if mailto
    // adapted from https://www.blastanalytics.com/blog/how-to-track-downloads-in-google-analytics

    var filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3)$/i;
    var baseHref = '';
    var href = actedOnItem.href;

    if (href && href.match(/^mailto\:/i)) {
      var mailLink = href.replace(/^mailto\:/i, '');
      ga && ga('send', 'event', 'Email', 'Region / ' + parentContainer, mailLink);
    }

    if (href && href.match(filetypes)) {
      var extension = /[.]/.exec(href) ? /[^.]+$/.exec(href) : undefined;
      var filePath = href;
      ga && ga('send', 'event', 'Download', 'Type / ' + extension + ' / ' + parentContainer, filePath);
    } // note that we've stored an event(s)


    lastGaEventTime = Date.now(); // conditional logging

    var conditionalLoggingCheck = document.querySelector('body'); // debug: always turn on verbos analytics
    // conditionalLoggingCheck.setAttribute('data-vf-google-analytics-verbose', 'true');

    if (conditionalLoggingCheck.dataset.vfGoogleAnalyticsVerbose) {
      console.log('%c Verbose analytics on ', 'color: #FFF; background: #111; font-size: .75rem;');
      console.log('clicked on: %o ', actedOnItem);
      console.log('sent to GA: ', 'event ->', 'UI ->', 'UI Element / ' + parentContainer + ' ->', linkName, '; at: ', lastGaEventTime);
    }
  }
} // vf-tabs

/**
 * Finds all tabs on a page and activates them
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @example vfTabs(document.querySelectorAll('.vf-component__container')[0]);
 */


function vfTabs(scope) {
  var scope = scope || document; // Get relevant elements and collections

  var tablist = scope.querySelectorAll('[data-vf-js-tabs]');
  var panelsList = scope.querySelectorAll('[data-vf-js-tabs-content]');
  var panels = scope.querySelectorAll('[data-vf-js-tabs-content] [id^="vf-tabs__section"]');
  var tabs = scope.querySelectorAll('[data-vf-js-tabs] .vf-tabs__link');

  if (!tablist || !panels || !tabs) {
    // exit: either tabs or tabbed content not found
    return;
  }

  if (tablist.length == 0 || panels.length == 0 || tabs.length == 0) {
    // exit: either tabs or tabbed content not found
    return;
  } // The tab switching function


  var switchTab = function switchTab(newTab) {
    // get the parent ul of the clicked tab
    var parentTabSet = newTab.closest(".vf-tabs__list");
    var oldTab = parentTabSet.querySelector('[aria-selected]');

    if (oldTab) {
      oldTab.removeAttribute('aria-selected');
      oldTab.setAttribute('tabindex', '-1');
      oldTab.classList.remove('is-active');
      var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
      panels[oldIndex].hidden = true;
    }

    newTab.focus(); // Make the active tab focusable by the user (Tab key)

    newTab.removeAttribute('tabindex'); // Set the selected state

    newTab.setAttribute('aria-selected', 'true');
    newTab.classList.add('is-active'); // Get the indices of the new tab to find the correct
    // tab panel to show

    var index = Array.prototype.indexOf.call(tabs, newTab);
    panels[index].hidden = false;
  }; // Add semantics are remove user focusability for each tab


  Array.prototype.forEach.call(tabs, function (tab, i) {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', 'tab' + (i + 1));
    tab.setAttribute('data-tabs__item', 'tab' + (i + 1));
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation'); // Reset any active tabs from a previous JS call

    tab.removeAttribute('aria-selected');
    tab.setAttribute('tabindex', '-1');
    tab.classList.remove('is-active'); // Handle clicking of tabs for mouse users

    tab.addEventListener('click', function (e) {
      e.preventDefault();
      switchTab(e.currentTarget);
    }); // Handle keydown events for keyboard users

    tab.addEventListener('keydown', function (e) {
      // Get the index of the current tab in the tabs node list
      var index = Array.prototype.indexOf.call(tabs, e.currentTarget); // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate

      var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;

      if (dir !== null) {
        e.preventDefault(); // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab

        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(tabs[dir]) : void 0;
      }
    });
  }); // Add tab panel semantics and hide them all

  Array.prototype.forEach.call(panels, function (panel, i) {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    var id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  }); // Add the tablist role to the first <ul> in the .tabbed container

  Array.prototype.forEach.call(tablist, function (tablistset, i) {
    tablistset.setAttribute('role', 'tablist'); // Initially activate the first tab

    var firstTab = tablistset.querySelectorAll('.vf-tabs__link')[0];
    firstTab.removeAttribute('tabindex');
    firstTab.setAttribute('aria-selected', 'true');
    firstTab.classList.add('is-active');
  });
  Array.prototype.forEach.call(panelsList, function (panel, i) {
    // Initially reveal the first tab panel
    var firstPanel = panel.querySelectorAll('.vf-tabs__section')[0];
    firstPanel.hidden = false;
  });
}
/*
 *
 * scripts.css
 * The Visual Framework kitchen sink of JavaScript.
 * Import this as a quick way to get *everything*,
 *
 */


vfBanner();
vfMasthead.vfMastheadSetStyle();
vfGaIndicateLoaded();
vfTabs();
vfTree.vfTree(); // import { vfFormFloatLabels } from 'vf-form__core/assets/vf-form__float-labels.js';
// vfFormFloatLabels();
// All EMBL JS
// import { emblContentHubLoaderHtmlImports } from 'embl-content-hub-loader/embl-content-hub-loader__html-imports';
// import { emblContentHubFetch } from 'embl-content-hub-loader/embl-content-hub-loader__fetch';
// import { emblContentHub } from 'embl-content-hub-loader/embl-content-hub-loader';
// import { emblConditionalEdit } from 'embl-conditional-edit/embl-conditional-edit';
// emblContentHub();
// import { emblBreadcrumbs } from 'embl-breadcrumbs-lookup/embl-breadcrumbs-lookup';
// emblBreadcrumbs();
// import { emblContentMetaProperties_Read } from 'embl-content-meta-properties/embl-content-meta-properties';
// import { emblNotifications } from 'embl-notifications/embl-notifications';
// emblNotifications();
// No default invokation