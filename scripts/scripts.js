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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function vfBannerReset(vfBannerCookieNameAndVersion) {
  vfBannerSetCookie(vfBannerCookieNameAndVersion, false);
}
/**
 * Confirm a banner, initiate cookie logging
 */


function vfBannerConfirm(banner, vfBannerCookieNameAndVersion) {
  banner.classList += " vf-u-display-none";

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
        newButton.classList = 'vf-button vf-button--primary';
        generatedBannerHtml += newButton.outerHTML;
      }
    });
  } // if there is a vfJsBannerButtonText and banner is blocking or dismissible,
  // add a button so user can close the banner


  if (banner.vfJsBannerButtonText && (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible')) {
    generatedBannerHtml += '<button class="vf-button vf-button--secondary" data-vf-js-banner-close>' + banner.vfJsBannerButtonText + '</button>';
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
      targetBanner.classList += " vf-u-display-none"; // exit, nothng more to do

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
// vf-tabs

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
} // vf-form__float-labels

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
 * The global function for this component
 * @example vfcomponentName(firstPassedVar)
 * @param {string} [firstPassedVar]  - An option to be passed
 */


function vfFormFloatLabels() {
  function addFloatLabel(self) {
    var label = document.createElement('label');
    var id = 'label-' + new Date().getTime();
    label.setAttribute('id', id);
    self.dataset.inputOf = id;
    self.parentNode.insertBefore(label, self);
    label.innerHTML = self.getAttribute('placeholder'); // not namespaced as this is a HTML-native attribute

    label.classList.add('vf-form__label');
  }

  function floatLabelKeyUp(event) {
    var self = event.target;

    if (!self.dataset.inputOf && !!self.value) {
      addFloatLabel(self);
    } else {
      var label = document.querySelector('#' + self.dataset.inputOf);

      if (!self.value && !!label) {
        setTimeout(function () {
          label.parentNode.removeChild(label);
          delete self.dataset.inputOf;
        }, 10);
      }
    }
  }

  function wrapElement(element) {
    var parent = element.parentNode;
    var sibling = element.nextElementSibling;
    var div = document.createElement('div');
    div.appendChild(element);

    if (!sibling) {
      parent.appendChild(div);
    } else {
      parent.insertBefore(div, sibling);
    }
  }

  var floatLabels = document.querySelectorAll('[data-vf-js-form-floatlabel]');

  if (floatLabels.length === 0) {
    // console.warn('There are no `[data-vf-js-form-floatlabel]` to process; exiting');
    return false;
  }

  var inputs = [].slice.call(floatLabels);

  if (typeof inputs != "undefined") {
    for (var i in inputs) {
      if (_typeof(inputs[i]) == "object") {
        // prevent execution on array functions
        wrapElement(inputs[i]);

        if (!!inputs[i].value) {
          addFloatLabel(inputs[i]);
        }

        inputs[i].classList.add('vf-form__floatlabel'); // .vf-form__floatlabel

        inputs[i].addEventListener('keyup', floatLabelKeyUp);
      }
    }
  }

  function checkEmail(str) {
    var errorElem = document.getElementById('error'); // email regex

    var re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(str)) {
      if (document.getElementById('email-error')) {// do nothing
      } else {
        var el = document.getElementById('email-form'),
            elChild = document.createElement('div'),
            parent = elChild;
        elChild.innerHTML = '<div id="email-error" class="mt-b-form__message mt-b-form__message--inline-error"><p>Your email is incorrect</p></div>';
      }

      el.parentNode.appendChild(elChild);
    } else {
      var elem = document.getElementById('email-error');
      elem.parentNode.removeChild(elem);
    }
  }

  function checkForm() {
    var canSubmit = true;
    var emailcheck = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailField = document.getElementById('username').value;
    var passwordField = document.forms['loginform'].querySelector('.form__input--password').value;

    if (!emailcheck.test(emailField)) {
      canSubmit = false;
    }

    if (passwordField.length < 5) {
      canSubmit = false;
    }

    if (canSubmit) {
      document.forms['loginform'].querySelector('.mt-b-button__item').disabled = false;
    } else {
      document.forms['loginform'].querySelector('.mt-b-button__item').disabled = true;
    }
  }
} // vf-local-overrides
// Don't need JS? Then feel free to delete this file.

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
// // if you need to import any other components' JS to use here
// import { vfOthercomponent } from 'vf-other-component/vf-other-component';

/**
 * The global function for this component
 * @example vfcomponentName(firstPassedVar)
 * @param {string} [firstPassedVar]  - An option to be passed
 */


function vfLocalOverrides(firstPassedVar) {
  firstPassedVar = firstPassedVar || 'defaultVal';
  console.log('vfLocalOverrides invoked with a value of', firstPassedVar);
} //
// // You should also import it at ./components/vf-core/scripts.js
// // import { vfcomponentName } from '../components/raw/vf-component/vf-component.js';
// // And, if needed, invoke it
// // vfcomponentName();

/*
 *
 * scripts.css
 * The Visual Framework kitchen sink of JavaScript.
 * Import this as a quick way to get *everything*,
 *
 */


vfBanner();
vfMasthead.vfMastheadSetStyle();
vfTabs();
vfTree.vfTree();
vfFormFloatLabels();
emblContentHubLoader.emblContentHub();
emblBreadcrumbsLookup.emblBreadcrumbs();
vfLocalOverrides();