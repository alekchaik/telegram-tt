"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_components_common_PeerBadge_tsx-src_components_common_pickers_PickerModal_tsx-src_compone-326c9b"],{

/***/ "./src/components/common/PeerBadge.tsx":
/*!*********************************************!*\
  !*** ./src/components/common/PeerBadge.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PeerBadge.module.scss */ "./src/components/common/PeerBadge.module.scss");





const PeerBadge = ({
  peer: avatarPeer,
  avatarWebPhoto,
  avatarSize,
  text,
  badgeText,
  badgeIcon,
  className,
  badgeClassName,
  badgeIconClassName,
  textClassName,
  onClick
}) => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].root, onClick && _PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].clickable, className),
    onClick: onClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].top
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: avatarSize,
    peer: avatarPeer,
    webPhoto: avatarWebPhoto
  }), badgeText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].badge, badgeClassName)
  }, badgeIcon && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: badgeIcon,
    className: badgeIconClassName
  }), badgeText)), text && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PeerBadge_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].text, textClassName)
  }, text));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PeerBadge));

/***/ }),

/***/ "./src/components/common/pickers/PickerModal.tsx":
/*!*******************************************************!*\
  !*** ./src/components/common/pickers/PickerModal.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PickerModal.module.scss */ "./src/components/common/pickers/PickerModal.module.scss");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const PickerModal = ({
  confirmButtonText,
  isConfirmDisabled,
  shouldAdaptToSearch,
  withFixedHeight,
  onConfirm,
  withPremiumGradient,
  ...modalProps
}) => {
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const hasButton = Boolean(confirmButtonText || onConfirm);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_4__["default"]
  // eslint-disable-next-line react/jsx-props-no-spreading
  , _extends({}, modalProps, {
    isSlim: true,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(shouldAdaptToSearch && _PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].withSearch, withFixedHeight && _PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fixedHeight, modalProps.className),
    contentClassName: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].content, modalProps.contentClassName),
    headerClassName: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].header, modalProps.headerClassName)
  }), modalProps.children, hasButton && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PickerModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].buttonWrapper
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    withPremiumGradient: withPremiumGradient,
    onClick: onConfirm || modalProps.onClose,
    color: "primary",
    size: "smaller",
    disabled: isConfirmDisabled
  }, confirmButtonText || lang('Confirm'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PickerModal));

/***/ }),

/***/ "./src/components/modals/common/TableAboutModal.tsx":
/*!**********************************************************!*\
  !*** ./src/components/modals/common/TableAboutModal.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/ListItem */ "./src/components/ui/ListItem.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _ui_Separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/Separator */ "./src/components/ui/Separator.tsx");
/* harmony import */ var _TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableAboutModal.module.scss */ "./src/components/modals/common/TableAboutModal.module.scss");








const TableAboutModal = ({
  isOpen,
  listItemData,
  headerIconName,
  header,
  footer,
  buttonText,
  hasBackdrop,
  withSeparator,
  onClose,
  onButtonClick,
  contentClassName
}) => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: isOpen,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].root, contentClassName),
    contentClassName: _TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].content,
    hasAbsoluteCloseButton: true,
    absoluteCloseButtonColor: hasBackdrop ? 'translucent-white' : undefined,
    onClose: onClose
  }, headerIconName && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].topIcon
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: headerIconName
  })), header, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, listItemData?.map(([icon, title, subtitle]) => {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isStatic: true,
      multiline: true,
      icon: icon,
      iconClassName: _TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].listItemIcon
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "title"
    }, title), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: "subtitle"
    }, subtitle));
  })), withSeparator && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Separator__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _TableAboutModal_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].separator
  }), footer, buttonText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "smaller",
    onClick: onButtonClick || onClose
  }, buttonText));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(TableAboutModal));

/***/ }),

/***/ "./src/components/modals/common/TableInfoModal.tsx":
/*!*********************************************************!*\
  !*** ./src/components/modals/common/TableInfoModal.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_PeerChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/PeerChip */ "./src/components/common/PeerChip.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableInfoModal.module.scss */ "./src/components/modals/common/TableInfoModal.module.scss");









const TableInfoModal = ({
  isOpen,
  title,
  tableData,
  headerAvatarPeer,
  header,
  modalHeader,
  footer,
  buttonText,
  className,
  hasBackdrop,
  onClose,
  onButtonClick
}) => {
  const {
    openChat
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const handleOpenChat = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(peerId => {
    openChat({
      id: peerId
    });
    onClose();
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: isOpen,
    hasCloseButton: Boolean(title),
    hasAbsoluteCloseButton: !title,
    absoluteCloseButtonColor: hasBackdrop ? 'translucent-white' : undefined,
    isSlim: true,
    header: modalHeader,
    title: title,
    className: className,
    contentClassName: _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].content,
    onClose: onClose
  }, headerAvatarPeer && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    peer: headerAvatarPeer,
    size: "jumbo",
    className: _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].avatar
  }), header, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].table
  }, tableData?.map(([label, value]) => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, label && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cell, _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].title)
  }, label), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cell, _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].value, !label && _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].fullWidth)
  }, typeof value === 'object' && 'chatId' in value ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PeerChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    peerId: value.chatId,
    className: _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].chatItem,
    forceShowSelf: true,
    withEmojiStatus: value.withEmojiStatus,
    clickArg: value.chatId,
    onClick: handleOpenChat
  }) : value)))), footer, buttonText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: !footer ? _TableInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].noFooter : undefined,
    size: "smaller",
    onClick: onButtonClick || onClose
  }, buttonText));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(TableInfoModal));

/***/ }),

/***/ "./src/components/modals/stars/StarTopupOptionList.tsx":
/*!*************************************************************!*\
  !*** ./src/components/modals/stars/StarTopupOptionList.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_formatCurrency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/formatCurrency */ "./src/util/formatCurrency.tsx");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StarTopupOptionList.module.scss */ "./src/components/modals/stars/StarTopupOptionList.module.scss");












const MAX_STARS_COUNT = 6;
const StarTopupOptionList = ({
  isActive,
  className,
  options,
  selectedStarOption,
  selectedStarCount,
  starsNeeded,
  onClick
}) => {
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const [areOptionsExtended, markOptionsExtended, unmarkOptionsExtended] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isActive) {
      unmarkOptionsExtended();
    }
  }, [isActive]);
  const [renderingOptions, canExtend] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!options) return [undefined, false];
    const maxOption = options.reduce((max, option) => max.stars > option.stars ? max : option);
    const forceShowAll = starsNeeded && maxOption.stars < starsNeeded;
    const result = [];
    let currentStackedStarsCount = 0;
    let canExtendOptions = false;
    options.forEach((option, index) => {
      if (!option.isExtended) currentStackedStarsCount++;
      if (starsNeeded && !forceShowAll && option.stars < starsNeeded) return;
      if (!areOptionsExtended && option.isExtended) {
        canExtendOptions = true;
        return;
      }
      result.push({
        option,
        starsCount: Math.min(currentStackedStarsCount, MAX_STARS_COUNT),
        isWide: index === options.length - 1
      });
    });
    return [result, canExtendOptions];
  }, [areOptionsExtended, options, starsNeeded]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].options, className)
  }, renderingOptions?.map(({
    option,
    starsCount,
    isWide
  }) => {
    const length = renderingOptions?.length;
    const isOdd = length % 2 === 0;
    const isActiveOption = option === selectedStarOption;
    let perUserStarCount;
    if (option && 'winners' in option) {
      const winner = option.winners.find(opt => opt.users === selectedStarCount) || option.winners.reduce((max, opt) => opt.users > max.users ? opt : max, option.winners[0]);
      perUserStarCount = winner?.perUserStars;
    }
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].option, !isOdd && isWide && _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].wideOption, isActiveOption && _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].active),
      key: option.stars,
      onClick: () => onClick?.(option)
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].optionTop
    }, "+", (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_3__.formatInteger)(option.stars), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].stackedStars,
      dir: lang.isRtl ? 'ltr' : 'rtl'
    }, Array.from({
      length: starsCount
    }).map(() => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].stackedStar,
      type: "gold",
      size: "big"
    })))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].optionBottom
    }, (0,_util_formatCurrency__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(option.amount, option.currency, oldLang.code)), (isActiveOption || selectedStarOption && 'winners' in selectedStarOption) && perUserStarCount && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].optionBottom
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].perUserStars
    }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_4__["default"])(oldLang('BoostGift.Stars.PerUser', (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_3__.formatInteger)(perUserStarCount))))));
  }), !areOptionsExtended && canExtend && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].moreOptions,
    isText: true,
    noForcedUpperCase: true,
    onClick: markOptionsExtended
  }, oldLang('Stars.Purchase.ShowMore'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _StarTopupOptionList_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].iconDown,
    name: "down"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(StarTopupOptionList));

/***/ }),

/***/ "./src/components/common/PeerBadge.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/common/PeerBadge.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"hyRfEyRz","top":"p_Ny8jqJ","badge":"QRrryqp4","text":"I5jdPgFL"});

/***/ }),

/***/ "./src/components/common/pickers/PickerModal.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/common/pickers/PickerModal.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"content":"FuFYE0AA","fixedHeight":"CrEsDylb","withSearch":"WGSZ8u75","header":"iEptOmIp","buttonWrapper":"HqeDTaSr"});

/***/ }),

/***/ "./src/components/modals/common/TableAboutModal.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/modals/common/TableAboutModal.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"LAh8evux","title":"yfODVQ1M","description":"QaQn08BX","secondary":"sQZslvAr","topIcon":"jySLtQNG","listItemIcon":"hQbEPsTU","content":"hrizpMDe","separator":"En1zD2cT"});

/***/ }),

/***/ "./src/components/modals/common/TableInfoModal.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/modals/common/TableInfoModal.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"content":"KYHkJ9Qf","title":"AwnUe4Qk","value":"JGH6P9Az","table":"DFRB0Ad4","noFooter":"cSamlkt9","cell":"Cnh5ENvm","fullWidth":"UssCZwgy","avatar":"SHQbPR5Y","chatItem":"aS9U4hiQ"});

/***/ }),

/***/ "./src/components/modals/stars/StarTopupOptionList.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/modals/stars/StarTopupOptionList.module.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"options":"OnCj9kef","option":"tpTHQAUF","active":"U_9MXPG5","wideOption":"dJcJl33b","optionTop":"x9G4lqMf","stackedStars":"etXLebjM","stackedStar":"swttXv9P","optionBottom":"tK7La7L2","moreOptions":"AWXBaWLW","iconDown":"zWYHZJmd"});

/***/ })

}]);
//# sourceMappingURL=src_components_common_PeerBadge_tsx-src_components_common_pickers_PickerModal_tsx-src_compone-326c9b.1e5bff5c4bba4513a911.js.map