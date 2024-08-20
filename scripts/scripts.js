'use strict';

// vf-banner

/**
 * Clear the cooke. This is mostly a development tool.
 */
/* eslint-disable no-unused-vars */
function vfBannerReset(vfBannerCookieNameAndVersion) {
  vfBannerSetCookie(vfBannerCookieNameAndVersion, false);
}
/* eslint-enable no-unused-vars */

/**
 * Dismiss a banner
 */
function vfBannerClose(targetBanner) {
  // remove padding added to not cover up content
  if (targetBanner.classList.contains("vf-banner--fixed")) {
    var height = targetBanner.offsetHeight || 0;
    var pagePadding;
    if (targetBanner.classList.contains("vf-banner--top")) {
      pagePadding = document.body.style.paddingTop.replace(/\D/g, "") || 0;
      pagePadding = pagePadding - height;
      document.body.style.paddingTop = pagePadding + "px";
    }
    if (targetBanner.classList.contains("vf-banner--bottom")) {
      pagePadding = document.body.style.paddingBottom.replace(/\D/g, "") || 0;
      pagePadding = pagePadding - height;
      document.body.style.paddingBottom = pagePadding + "px";
    }
  }

  // dismiss banner
  targetBanner.classList.add("vf-u-display-none");
}

/**
 * Confirm a banner, initiate cookie logging
 */
function vfBannerConfirm(banner, vfBannerCookieNameAndVersion) {
  vfBannerClose(banner);
  if (vfBannerCookieNameAndVersion !== "null") {
    vfBannerSetCookie(vfBannerCookieNameAndVersion, true);
  }
}

/**
 * Log a cookie
 */
function vfBannerSetCookie(c_name, value, exdays) {
  // var value = value || 'true';
  /* eslint-disable no-redeclare */
  var exdays = exdays || 90;
  /* eslint-enable no-redeclare */
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
  var x,
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
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  /* eslint-enable no-redeclare */
  var bannerList = scope.querySelectorAll("[data-vf-js-banner]");
  if (!bannerList) {
    // exit: banners not found
    return;
  }
  if (bannerList.length == 0) {
    // exit: banner content not found
    return;
  }

  // generate the banner component, js events
  Array.prototype.forEach.call(bannerList, function (banner) {
    // map the JS data attributes to our object structure
    var bannerRemapped = JSON.parse(JSON.stringify(banner.dataset));
    if (typeof banner.dataset.vfJsBannerId != "undefined") {
      // don't reactivate an already processed banner
    } else {
      bannerRemapped.vfJsBannerText = banner.querySelectorAll("[data-vf-js-banner-text]")[0].innerHTML;
      var uniqueId = Math.round(Math.random() * 10000000);

      // set an id to target this banner
      banner.setAttribute("data-vf-js-banner-id", uniqueId);

      // preserve the classlist
      bannerRemapped.classList = banner.querySelectorAll("[data-vf-js-banner-text]")[0].classList;

      // Make the banner come alive
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
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  /* eslint-enable no-redeclare */
  var targetBanner = scope.querySelectorAll("[data-vf-js-banner-id=\"" + bannerId + "\"]")[0];
  if (targetBanner == undefined) {
    return;
  }
  var generatedBannerHtml = "<div class=\"" + banner.classList + "\" data-vf-js-banner-text>";
  generatedBannerHtml += banner.vfJsBannerText;

  // What type of banner?
  if (banner.vfJsBannerState === "persistent") {
    // nothing more to do for persistent, you can't close it
  } else if (banner.vfJsBannerState === "dismissible") {
    // nothing more to do for dismissible
  } else if (banner.vfJsBannerState === "blocking") {
    console.warn("vf-banner: Note, the blocking implementation is not yet feature complete.");
    // escape only works when blocking
    if (banner.vfJsBannerEscClose === "y" || banner.vfJsBannerEscClose === "Y") {
      document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
          vfBannerConfirm(targetBanner, "null");
        }
      };
    }
  }

  // Split passed links into buttons
  // <a href='#'>string1</a>\<a href='#'>string2</a>
  if (banner.vfJsBannerExtraButton) {
    var vfBannerExtraButtons = banner.vfJsBannerExtraButton.split("</a>");
    vfBannerExtraButtons.forEach(function (button) {
      if (button.length > 1) {
        button += "</a>";
        var newButton = document.createElement("button");
        newButton.innerHTML = button;
        newButton = newButton.firstChild;
        newButton.classList.add("vf-button", "vf-button--primary");
        generatedBannerHtml += newButton.outerHTML;
      }
    });
  }

  // if there is a vfJsBannerButtonText and banner is blocking or dismissible,
  // add a button so user can close the banner
  if (banner.vfJsBannerButtonText && (banner.vfJsBannerState === "blocking" || banner.vfJsBannerState === "dismissible")) {
    if (banner.vfJsBannerButtonTheme == "primary") {
      generatedBannerHtml += "<button class=\"vf-button vf-button--primary\" data-vf-js-banner-close>" + banner.vfJsBannerButtonText + "</button>";
    } else if (banner.vfJsBannerButtonTheme == "secondary") {
      generatedBannerHtml += "<button class=\"vf-button vf-button--secondary\" data-vf-js-banner-close>" + banner.vfJsBannerButtonText + "</button>";
    } else if (banner.vfJsBannerButtonTheme == "tertiary") {
      generatedBannerHtml += "<button class=\"vf-button vf-button--tertiary\" data-vf-js-banner-close>" + banner.vfJsBannerButtonText + "</button>";
    } else {
      // default
      generatedBannerHtml += "<button class=\"vf-button vf-button--primary\" data-vf-js-banner-close>" + banner.vfJsBannerButtonText + "</button>";
    }
  }
  generatedBannerHtml += "</div>";

  // set the html of the banner
  targetBanner.innerHTML = generatedBannerHtml;

  // prep for cookie
  var vfBannerCookieNameAndVersion = "null";
  if (banner.vfJsBannerCookieName && banner.vfJsBannerCookieVersion) {
    vfBannerCookieNameAndVersion = banner.vfJsBannerCookieName + "_" + banner.vfJsBannerCookieVersion;
  }

  // utility to reset cookie when developing
  // console.warn('vf-banner: vfBannerReset cookie reset override is on.');
  // vfBannerReset(vfBannerCookieNameAndVersion);

  // if blocking or dismissible, allow the user to close it, store a cookie (if specified)
  if (banner.vfJsBannerState === "blocking" || banner.vfJsBannerState === "dismissible") {
    // On click: close banner, pass any cookie name (or `null`)
    if (banner.vfJsBannerButtonText) {
      targetBanner.querySelectorAll("[data-vf-js-banner-close]")[0].addEventListener("click", function () {
        vfBannerConfirm(targetBanner, vfBannerCookieNameAndVersion);
      }, false);
    }
  }

  // add appropriate padding to the page to not cover up content
  if (targetBanner.classList.contains("vf-banner--fixed")) {
    var height = Number(targetBanner.offsetHeight || 0);
    var pagePadding;
    if (targetBanner.classList.contains("vf-banner--top")) {
      pagePadding = Number(document.body.style.paddingTop.replace(/\D/g, "") || 0);
      pagePadding = pagePadding + height;
      document.body.style.paddingTop = pagePadding + "px";
    }
    if (targetBanner.classList.contains("vf-banner--bottom")) {
      pagePadding = Number(document.body.style.paddingBottom.replace(/\D/g, "") || 0);
      pagePadding = pagePadding + height;
      document.body.style.paddingBottom = pagePadding + "px";
    }
  }
  if (vfBannerCookieNameAndVersion != "null") {
    // if banner has been previously accepted
    if (vfBannerGetCookie(vfBannerCookieNameAndVersion) === "true") {
      // banner has been accepted, close
      vfBannerClose(targetBanner);
      // exit, nothng more to do
      return;
    }

    // if banner is marked as auto-accept, set as read
    if (banner.vfJsBannerAutoAccept == "true") {
      if (banner.vfJsBannerState === "blocking" || banner.vfJsBannerState === "dismissible") {
        vfBannerSetCookie(vfBannerCookieNameAndVersion, true);
      }
    }
  }
}

// vf-tabs

/**
 * Finds all tabs on a page and activates them
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @param {boolean} [activateDeepLinkOnLoad] - if deep linked tabs should be activated on page load, defaults to true
 * @example vfTabs(document.querySelectorAll('.vf-component__container')[0]);
 */
function vfTabs(scope) {
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  var activateDeepLinkOnLoad = activateDeepLinkOnLoad || true;
  /* eslint-enable no-redeclare */
  // Get relevant elements and collections
  var tabsList = scope.querySelectorAll("[data-vf-js-tabs]");
  var panelsList = scope.querySelectorAll("[data-vf-js-tabs-content]");
  var panels = scope.querySelectorAll("[data-vf-js-tabs-content] [id^='vf-tabs__section']");
  var tabs = scope.querySelectorAll("[data-vf-js-tabs] .vf-tabs__link");
  if (!tabsList || !panels || !tabs) {
    // exit: either tabs or tabbed content not found
    return;
  }
  if (tabsList.length == 0 || panels.length == 0 || tabs.length == 0) {
    // exit: either tabs or tabbed content not found
    return;
  }

  // Add semantics are remove user focusability for each tab
  Array.prototype.forEach.call(tabs, function (tab, i) {
    var tabId = tab.href.split("#")[1]; // calculate an ID based off the tab href (todo: add support for a data-vf-js-tab-id, and if set use that)
    tab.setAttribute("role", "tab");
    tab.setAttribute("id", tabId);
    tab.setAttribute("data-tabs__item", tabId);
    tab.setAttribute("tabindex", "0");
    tab.parentNode.setAttribute("role", "presentation");

    // Reset any active tabs from a previous JS call
    tab.removeAttribute("aria-selected");
    tab.setAttribute("tabindex", "-1");
    tab.classList.remove("is-active");
    // Handle clicking of tabs for mouse users
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      vfTabsSwitch(e.currentTarget);
    });

    // Handle keydown events for keyboard users
    tab.addEventListener("keydown", function (e) {
      // Get the index of the current tab in the tabs node list
      var index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? "down" : null;
      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === "down" ? panels[i].focus({
          preventScroll: true
        }) : tabs[dir] ? vfTabsSwitch(tabs[dir]) : void 0;
      }
    });
  });

  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, function (panel) {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("tabindex", "-1");
    // let id = panel.getAttribute("id");
    panel.setAttribute("aria-labelledby", panel.id);
    panel.hidden = true;
  });

  // Add the tabsList role to the first <ul> in the .tabbed container
  Array.prototype.forEach.call(tabsList, function (tabsListset) {
    tabsListset.setAttribute("role", "tabsList");
    // Initially activate the first tab
    var firstTab = tabsListset.querySelectorAll(".vf-tabs__link")[0];
    firstTab.removeAttribute("tabindex");
    firstTab.setAttribute("aria-selected", "true");
    firstTab.classList.add("is-active");
  });
  Array.prototype.forEach.call(panelsList, function (panel) {
    // Initially reveal the first tab panel
    var firstPanel = panel.querySelectorAll(".vf-tabs__section")[0];
    firstPanel.hidden = false;
  });

  // activate any deeplinks to a specific tab
  if (activateDeepLinkOnLoad) {
    Array.prototype.forEach.call(panels, function (panel) {
      var links = panel.querySelectorAll("[href*='vf-tabs__section']");
      links.forEach(function (link) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          var href = e.currentTarget.getAttribute("href");
          vfTabsDeepLinkOnLoad(tabs, href);
        });
      });
    });
  }
}

// The tab switching function
var vfTabsSwitch = function vfTabsSwitch(newTab) {
  // Update url based on tab id

  // get the parent ul of the clicked tab
  var parentTabSet = newTab.closest(".vf-tabs");
  var parentPanelSet = parentTabSet.nextElementSibling;
  var tabs = parentTabSet.querySelectorAll("[data-vf-js-tabs] .vf-tabs__link");
  var panels = parentPanelSet.querySelectorAll("[data-vf-js-tabs-content] [id^='vf-tabs__section']");
  tabs.forEach(function (tab) {
    if (tab.getAttribute("aria-selected")) {
      tab.removeAttribute("aria-selected");
      tab.setAttribute("tabindex", "-1");
      tab.classList.remove("is-active");
      panels.forEach(function (panel) {
        if (panel.id === tab.id) {
          panel.hidden = true;
        }
      });
    }
  });
  newTab.focus({
    preventScroll: true
  });
  // Make the active tab focusable by the user (Tab key)
  newTab.removeAttribute("tabindex");
  // Set the selected state
  newTab.setAttribute("aria-selected", "true");
  newTab.classList.add("is-active");
  // Get the indices of the new tab to find the correct
  // tab panel to show
  panels.forEach(function (panel) {
    if (panel.id === newTab.id) {
      panel.hidden = false;
    }
  });
};
function vfTabsDeepLinkOnLoad(tabs, href) {
  // 1. See if there is a `#vf-tabs__section--88888`
  if (href) {
    var hash = href.substring(href.indexOf("#") + 1);
  } else {
    // No hash found
    return false;
  }
  console.log("vfTabs: will activate tab", hash);

  // 2. loop through all tabs, if a match then activate
  Array.prototype.forEach.call(tabs, function (tab) {
    var tabId = tab.getAttribute("data-tabs__item");
    if (tabId == hash) {
      vfTabsSwitch(tab);
    }
  });
}

/*
 *
 * scripts.js
 * The Visual Framework kitchen sink of JavaScript.
 * Import this as a quick way to get *everything*,
 *
 */

vfBanner();
vfTabs();

// import { vfTree } from "vf-tree/vf-tree";
// vfTree();

// import { vfFormFloatLabels } from 'form /assets/vf-form__float-labels.js';
// vfFormFloatLabels();

// import { vfSearchClientSide } from "vf-search-client-side/vf-search-client-side";
// No default invokation

// import { vfShowMore } from "vf-show-more/vf-show-more";
// vfShowMore();

// import { vfLocationNearest } from "vf-location-nearest/vf-location-nearest";
// Not invoked by default

// All EMBL JS
// import { emblContentHubLoaderHtmlImports } from "embl-content-hub-loader/embl-content-hub-loader__html-imports";
// import { emblContentHubFetch } from "embl-content-hub-loader/embl-content-hub-loader__fetch";
// import { emblContentHub } from "embl-content-hub-loader/embl-content-hub-loader";
// import { emblConditionalEdit } from "embl-conditional-edit/embl-conditional-edit";
// emblContentHub();

// import { emblBreadcrumbs } from "embl-breadcrumbs-lookup/embl-breadcrumbs-lookup";
// emblBreadcrumbs();

// import { vfBackToTop } from "vf-back-to-top/vf-back-to-top.js";
// vfBackToTop();

// import { vfDropdown } from "vf-dropdown/vf-dropdown.js";
// vfDropdown();

// import { vfNavigationOnThisPage } from "vf-navigation/vf-navigation.js";
// vfNavigationOnThisPage();

// import { emblContentMetaProperties_Read } from "embl-content-meta-properties/embl-content-meta-properties";

// import { emblNotifications } from "embl-notifications/embl-notifications";
// emblNotifications();

// import { vfMegaMenu } from 'vf-mega-menu/vf-mega-menu';
// vfMegaMenu();

// No default invokation