(() => {
"use strict";
var __webpack_modules__ = ({
5513(__unused_rspack_module, __unused_rspack___webpack_exports__, __webpack_require__) {

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-router/dist/development/chunk-LFPYN7LY.mjs
var chunk_LFPYN7LY = __webpack_require__(1344);
// EXTERNAL MODULE: ./node_modules/react-router-hash-link/dist/react-router-hash-link.esm.js
var react_router_hash_link_esm = __webpack_require__(4433);
;// CONCATENATED MODULE: ./assets/images/kisaragichibi.png
const kisaragichibi_namespaceObject = __webpack_require__.p + "static/image/kisaragichibi.png";
;// CONCATENATED MODULE: ./assets/icons/hamburger.png
const hamburger_namespaceObject = __webpack_require__.p + "static/image/hamburger.png";
;// CONCATENATED MODULE: ./components/styles/navbar.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./components/Navbar.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 



let $;

if (typeof window !== "undefined") {
    $ = __webpack_require__(3486);
}
const Navbar = (props)=>{
    const [featureDropdown, setFeatureDropdown] = (0,react.useState)(false);
    const [doubleLeave, setDoubleLeave] = (0,react.useState)(false);
    const [mobileNavbar, setMobileNavbar] = (0,react.useState)(false);
    let mobileNav;
    const toggleMobileNavbar = ()=>{
        setMobileNavbar((prev)=>!prev);
    };
    const slide = ()=>{
        $(".mobile-navbar").slideToggle();
    };
    const toggleDropdown = (enable)=>{
        if (enable === true) {
            setFeatureDropdown(true);
        } else if (enable === false) {
            setFeatureDropdown(false);
        } else {
            setFeatureDropdown((prev)=>!prev);
        }
    };
    const dropdown = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "dropdown",
            onMouseLeave: ()=>toggleDropdown(false),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                            to: "/home#anime",
                            children: "Anime"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                            to: "/home#music",
                            children: "Music"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                            to: "/home#utility",
                            children: "Utility"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                            to: "/home#games",
                            children: "Games"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                            to: "/home#website",
                            children: "Website"
                        })
                    })
                ]
            })
        });
    };
    const mobileNavbarJSX = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "mobile-navbar",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                            to: "/",
                            className: "navbar-mobile-text",
                            children: "Kisaragi"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                            to: "/home#features",
                            className: "navbar-mobile-text",
                            children: "Features"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                            to: "/commands",
                            className: "navbar-mobile-text",
                            children: "Commands"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                            to: "/about",
                            className: "navbar-mobile-text",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279",
                            className: "navbar-mobile-text",
                            target: "_blank",
                            children: "Invite"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "https://discord.gg/sNhUu5JN6y",
                            className: "navbar-mobile-text",
                            target: "_blank",
                            children: "Discord"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: "https://github.com/Moebytes/Kisaragi",
                            className: "navbar-mobile-text",
                            target: "_blank",
                            children: "Github"
                        })
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "nav-fixed",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                className: "navbar",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "nav-left",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                to: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: kisaragichibi_namespaceObject,
                                    alt: "Kisaragi Chibi",
                                    height: "56",
                                    width: "58",
                                    className: "kisaragichibi no-ios-preview"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "nav-ul",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        className: "nav-li",
                                        onMouseEnter: ()=>toggleDropdown(false),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                            to: "/",
                                            className: "navbar-text drop-hide",
                                            children: "Kisaragi"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        className: "nav-li",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            className: "navbar-text",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "features",
                                                onClick: ()=>toggleDropdown(),
                                                children: "Features"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        className: "nav-li",
                                        onMouseEnter: ()=>toggleDropdown(false),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                            to: "/commands",
                                            className: "navbar-text drop-hide",
                                            children: "Commands"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        className: "nav-li",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                            to: "/about",
                                            className: "navbar-text drop-hide",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        className: "nav-li",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279",
                                            className: "navbar-text",
                                            target: "_blank",
                                            children: "Invite"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        className: "nav-li",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "https://discord.gg/sNhUu5JN6y",
                                            className: "navbar-text",
                                            target: "_blank",
                                            children: "Discord"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        className: "nav-li",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "https://github.com/Moebytes/Kisaragi",
                                            className: "navbar-text",
                                            target: "_blank",
                                            children: "Github"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: hamburger_namespaceObject,
                        alt: "Hamburger Menu",
                        height: "50",
                        width: "50",
                        className: "hamburger",
                        onClick: ()=>slide()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "mobile-navbar",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                to: "/",
                                className: "navbar-mobile-text",
                                children: "Kisaragi"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                to: "/home#features",
                                className: "navbar-mobile-text",
                                children: "Features"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                to: "/commands",
                                className: "navbar-mobile-text",
                                children: "Commands"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                to: "/about",
                                className: "navbar-mobile-text",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: "https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279",
                                className: "navbar-mobile-text",
                                target: "_blank",
                                children: "Invite"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: "https://discord.gg/sNhUu5JN6y",
                                className: "navbar-mobile-text",
                                target: "_blank",
                                children: "Discord"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: "https://github.com/Moebytes/Kisaragi",
                                className: "navbar-mobile-text",
                                target: "_blank",
                                children: "Github"
                            })
                        })
                    ]
                })
            }),
            featureDropdown ? dropdown() : null
        ]
    });
};
/* export default */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./assets/images/laffeykimono.png
const laffeykimono_namespaceObject = __webpack_require__.p + "static/image/laffeykimono.png";
;// CONCATENATED MODULE: ./assets/icons/github.png
const github_namespaceObject = __webpack_require__.p + "static/image/github.png";
;// CONCATENATED MODULE: ./assets/icons/invitebot.png
const invitebot_namespaceObject = __webpack_require__.p + "static/image/invitebot.png";
;// CONCATENATED MODULE: ./assets/icons/theme.png
const theme_namespaceObject = __webpack_require__.p + "static/image/theme.png";
;// CONCATENATED MODULE: ./assets/icons/theme-invert.png
const theme_invert_namespaceObject = __webpack_require__.p + "static/image/theme-invert.png";
;// CONCATENATED MODULE: ./assets/icons/discord.png
const discord_namespaceObject = __webpack_require__.p + "static/image/discord.png";
;// CONCATENATED MODULE: ./assets/images/moebytes.png
const moebytes_namespaceObject = __webpack_require__.p + "static/image/moebytes.png";
;// CONCATENATED MODULE: ./components/styles/footer.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./components/Footer.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 









const Footer = (props)=>{
    const [themeIcon, setThemeIcon] = (0,react.useState)(theme_invert_namespaceObject);
    const themeChange = ()=>{
        if (themeIcon === theme_invert_namespaceObject) {
            setThemeIcon(theme_namespaceObject);
        } else {
            setThemeIcon(theme_invert_namespaceObject);
        }
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
        props.reRender();
    };
    const fanartSection = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "fanart-credits",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "fanart-text",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "footer-text fanart-header",
                                    children: "Fanart Credits"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "fanart-links",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "https://www.pixiv.net/en/users/786200",
                                                className: "footer-link",
                                                target: "_blank",
                                                children: "Tsukimi"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "https://www.pixiv.net/en/users/869368",
                                                className: "footer-link",
                                                target: "_blank",
                                                children: "Hiyoyo"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "https://www.pixiv.net/en/users/39617326",
                                                className: "footer-link",
                                                target: "_blank",
                                                children: "Toro"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "https://www.pixiv.net/en/users/2075334",
                                                className: "footer-link",
                                                target: "_blank",
                                                children: "Shirayu"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "https://www.pixiv.net/en/users/1422579",
                                                className: "footer-link",
                                                target: "_blank",
                                                children: "Saru"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "https://www.pixiv.net/en/users/3312169",
                                                className: "footer-link",
                                                target: "_blank",
                                                children: "Hecha"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "https://danbooru.donmai.us/posts/3545368",
                                                className: "footer-link",
                                                target: "_blank",
                                                children: "Memorii"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "https://www.pixiv.net/en/users/12089469",
                                                className: "footer-link",
                                                target: "_blank",
                                                children: "Wan"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: laffeykimono_namespaceObject,
                            alt: "Laffey Kimono",
                            height: "591",
                            width: "244",
                            className: "laffeykimono no-ios-preview"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                    className: "footer-text copyright",
                    children: [
                        "Copyright \xa9 ",
                        new Date().getFullYear(),
                        " Moebytes"
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "footer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "footer-container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "footer-column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "footer-box navigation",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "footer-text",
                                        children: "Navigation"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                className: "footer-li",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                                    to: "/",
                                                    className: "footer-link",
                                                    children: "Features"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                className: "footer-li",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                                    to: "/commands",
                                                    className: "footer-link",
                                                    children: "Commands"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                className: "footer-li",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                                    to: "/terms",
                                                    className: "footer-link",
                                                    children: "Terms of Service"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                className: "footer-li",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                                    to: "/terms#privacy",
                                                    className: "footer-link",
                                                    children: "Privacy Policy"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                className: "footer-li",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_hash_link_esm/* .HashLink */.Vq, {
                                                    to: "/about",
                                                    className: "footer-link",
                                                    children: "About"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "footer-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "footer-text",
                                        children: "Source Code"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: github_namespaceObject,
                                        alt: "Github",
                                        height: "94",
                                        width: "94",
                                        className: "footer-img github no-ios-preview",
                                        onClick: ()=>window.open("https://github.com/Moebytes/Kisaragi", "_blank")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "footer-column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "footer-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "footer-text",
                                        children: "Invite the bot!"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: invitebot_namespaceObject,
                                        alt: "Invite Bot",
                                        height: "77",
                                        width: "77",
                                        className: "footer-img invitebot",
                                        onClick: ()=>window.open("https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279", "_blank")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "footer-box site-theme",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "footer-text",
                                        children: "Site Theme"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: themeIcon,
                                        alt: "Site Theme",
                                        height: "80",
                                        width: "80",
                                        className: "footer-img theme-img",
                                        onClick: ()=>themeChange()
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "footer-column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "footer-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "footer-text",
                                        children: "Join our Discord Server!"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: discord_namespaceObject,
                                        alt: "Discord",
                                        height: "89",
                                        width: "78",
                                        className: "footer-img discord",
                                        onClick: ()=>window.open("https://discord.gg/sNhUu5JN6y", "_blank")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "footer-box other-links",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "footer-text",
                                        children: "Other Links"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                className: "footer-li",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "https://discord.com/discovery/applications/593838271650332672",
                                                    className: "footer-link",
                                                    target: "_blank",
                                                    children: "Discovery"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                className: "footer-li",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "https://top.gg/bot/593838271650332672/vote",
                                                    className: "footer-link",
                                                    target: "_blank",
                                                    children: "Upvote"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "footer-logo-container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: moebytes_namespaceObject,
                        className: "footer-logo",
                        draggable: false
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                        className: "footer-text copyright",
                        children: [
                            "Copyright \xa9 ",
                            new Date().getFullYear(),
                            " Moebytes"
                        ]
                    })
                ]
            })
        ]
    });
};
/* export default */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./assets/images/kisaragi.png
const kisaragi_namespaceObject = __webpack_require__.p + "static/image/kisaragi.png";
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_define_property.js
var _define_property = __webpack_require__(467);
;// CONCATENATED MODULE: ./structures/Functions.tsx
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 
let Functions_$;
let newScrollY = 0;
let lastScrollTop = 0;
let Functions_element = null;
let inertia = false;
let mouseDown = false;
if (typeof window !== "undefined") {
    Functions_$ = __webpack_require__(3486);
}
class Functions {
    static clearSelection() {
        var _window_getSelection;
        (_window_getSelection = window.getSelection()) === null || _window_getSelection === void 0 ? void 0 : _window_getSelection.removeAllRanges();
    }
}
/** Promise SetTimeout */ (0,_define_property._)(Functions, "timeout", (ms)=>{
    return new Promise((resolve)=>setTimeout(resolve, ms));
});
/** Changes a css property */ (0,_define_property._)(Functions, "changeCSS", (css)=>{
    Object.keys(css).map((key)=>{
        const value = css[key];
        document.documentElement.style.setProperty(key, String(value));
    });
});
/** Adds css to an html element */ (0,_define_property._)(Functions, "addCSS", (element, css)=>{
    console.log(css);
    Object.keys(css).map((key)=>{
        const value = css[key];
        element.current.style[key] = String(value);
    });
    console.log(window.getComputedStyle(element.current));
});
/** Gets the width and height of an html element */ (0,_define_property._)(Functions, "dimensions", (element)=>{
    var _element_current, _element_current1;
    const height = (_element_current = element.current) === null || _element_current === void 0 ? void 0 : _element_current.clientHeight;
    const width = (_element_current1 = element.current) === null || _element_current1 === void 0 ? void 0 : _element_current1.clientWidth;
    return {
        width,
        height
    };
});
/** Gets the browser a user is using */ (0,_define_property._)(Functions, "getBrowser", ()=>{
    // @ts-ignore Not in types
    const Opera = !!window["opr"] && !!opr.addons || !!window["opera"] || navigator.userAgent.indexOf(" OPR/") >= 0;
    // @ts-ignore Not in types
    const Firefox = typeof InstallTrigger !== "undefined";
    // @ts-ignore Not in types
    const Safari = /constructor/i.test(window.HTMLElement) || function(p) {
        return p.toString() === "[object SafariRemoteNotification]";
    }(!window["safari"] || typeof safari !== "undefined" && safari.pushNotification);
    const IE =  false || !!document["documentMode"];
    // @ts-ignore
    const Edge = !IE && !!window.StyleMedia;
    const Chrome = /Chrome/i.test(navigator.userAgent) && /Google Inc/i.test(navigator.vendor);
    return {
        Opera,
        Firefox,
        Safari,
        IE,
        Edge,
        Chrome
    };
});
/** Animate details and summary */ (0,_define_property._)(Functions, "animateSummary", (element)=>{
    const details = Functions_$(element).parent("details");
    const wrapper = Functions_$(element).nextAll().wrapAll("<div></div>").parent();
    if (!details.prop("open")) wrapper.hide();
    Functions_$(element).on("click", (event)=>{
        event.preventDefault();
        if (details.prop("open")) {
            wrapper.slideUp(()=>{
                details.prop("open", false);
            });
        } else {
            details.prop("open", true);
            wrapper.slideDown();
        }
    });
});
/** Prevent double click selection */ (0,_define_property._)(Functions, "preventDoubleClick", ()=>{
    document.addEventListener("mousedown", (event)=>{
        if (event.detail > 1) {
            event.preventDefault();
        }
    }, false);
});
/** Check if an image exists */ (0,_define_property._)(Functions, "imageExists", async (src)=>{
    return new Promise((resolve)=>{
        const img = new Image();
        img.onload = ()=>{
            resolve(true);
        };
        img.onerror = ()=>{
            resolve(false);
        };
        img.src = src;
    });
});
/** Get nearest perfect divisor */ (0,_define_property._)(Functions, "perfectDivision", (dividend, divisor)=>{
    let iterations = dividend;
    while(iterations % divisor !== 0){
        iterations++;
    }
    return iterations;
});
/** Split array into multiple */ (0,_define_property._)(Functions, "splitArray", (array, size)=>{
    const arrays = [];
    for(let i = 0; i < array.length; i += size){
        arrays.push(array.slice(i, i + size));
    }
    return arrays;
});
/** Prevent image dragging */ (0,_define_property._)(Functions, "preventDragging", ()=>{
    document.querySelectorAll("img").forEach((img)=>{
        img.draggable = false;
    });
});
(0,_define_property._)(Functions, "dragScroll", (enabled)=>{
    if (inertia || mouseDown) return;
    Functions_element === null || Functions_element === void 0 ? void 0 : Functions_element.removeEventListener("mousedown", Functions_element === null || Functions_element === void 0 ? void 0 : Functions_element.mouseDownFunc, false);
    window.removeEventListener("mouseup", Functions_element === null || Functions_element === void 0 ? void 0 : Functions_element.mouseUpFunc, false);
    window.removeEventListener("mousemove", Functions_element === null || Functions_element === void 0 ? void 0 : Functions_element.mouseMoveFunc, false);
    window.removeEventListener("scroll", Functions_element === null || Functions_element === void 0 ? void 0 : Functions_element.scrollFunc, false);
    Functions_element = document.querySelector(".drag");
    if (!Functions_element || !enabled) return;
    let lastClientY = 0;
    mouseDown = false;
    let time = null;
    let id = 0;
    Functions_element.addEventListener("mousedown", Functions_element.mouseDownFunc = (event)=>{
        if (event.button === 2) return;
        Functions.clearSelection();
        // @ts-ignore
        document.activeElement.blur();
        mouseDown = true;
        inertia = false;
        time = new Date();
        lastClientY = event.clientY;
        let scrollElement = Functions_element;
        if (Functions_element == document.body) scrollElement = document.documentElement;
        lastScrollTop = scrollElement.scrollTop;
        cancelAnimationFrame(id);
    }, false);
    window.addEventListener("scroll", Functions_element.scrollFunc = ()=>{
        cancelAnimationFrame(id);
    }, false);
    window.addEventListener("mouseup", Functions_element.mouseUpFunc = (event)=>{
        mouseDown = false;
        const timeDiff = new Date() - time;
        let scrollElement = Functions_element;
        if (Functions_element == document.body) scrollElement = document.documentElement;
        let speedY = (scrollElement.scrollTop - lastScrollTop) / timeDiff * 25;
        let speedYAbsolute = Math.abs(speedY);
        const draw = ()=>{
            let scrollElement = Functions_element;
            if (Functions_element == document.body) scrollElement = document.documentElement;
            if (speedYAbsolute > 0) {
                if (speedY > 0) {
                    scrollElement.scrollTop += speedYAbsolute--;
                } else {
                    scrollElement.scrollTop -= speedYAbsolute--;
                }
            } else {
                inertia = false;
            }
            id = requestAnimationFrame(draw);
        };
        inertia = true;
        draw();
    }, false);
    window.addEventListener("mousemove", Functions_element.mouseMoveFunc = (event)=>{
        if (!mouseDown) return;
        let scrollElement = Functions_element;
        if (Functions_element == document.body) scrollElement = document.documentElement;
        newScrollY = event.clientY - lastClientY;
        lastClientY = event.clientY;
        scrollElement.scrollTop -= newScrollY;
    }, false);
});


;// CONCATENATED MODULE: ./components/styles/section1.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./components/Section1.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 




const Section1 = (props)=>{
    const [chrome, setChrome] = (0,react.useState)(true);
    (0,react.useEffect)(()=>{
        const { Chrome } = Functions.getBrowser();
        setChrome(Chrome);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "section1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: kisaragi_namespaceObject,
                alt: "Kisaragi",
                height: "578",
                width: "454",
                className: "kisaragi no-ios-preview"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "section1-vertical",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: !chrome ? "section1-text section1-title stroke-title" : "section1-text section1-title",
                        children: "A kawaii discord bot!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                        className: !chrome ? "section1-text section1-paragraph stroke-paragraph" : "section1-text section1-paragraph",
                        children: "Kisaragi has over 370 commands that mainly focus on anime, music, and website searching. She also has some utilities like anime picture detection, reaction roles, and welcome/leave messages!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "button-container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "blue-button",
                                onClick: ()=>window.open("https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279", "_blank"),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section1-text button-text",
                                    children: "Invite"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .Link */.N_, {
                                to: "/commands",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    className: "blue-button",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "section1-text button-text",
                                        children: "Commands"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "blue-button",
                                onClick: ()=>window.open("https://github.com/Moebytes/Kisaragi", "_blank"),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section1-text button-text",
                                    children: "Source Code"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* export default */ const components_Section1 = (Section1);

;// CONCATENATED MODULE: ./assets/images/kisaragicute.png
const kisaragicute_namespaceObject = __webpack_require__.p + "static/image/kisaragicute.png";
;// CONCATENATED MODULE: ./assets/images/hammann.png
const hammann_namespaceObject = __webpack_require__.p + "static/image/hammann.png";
;// CONCATENATED MODULE: ./assets/images/akashinewyear.png
const akashinewyear_namespaceObject = __webpack_require__.p + "static/image/akashinewyear.png";
;// CONCATENATED MODULE: ./assets/images/33.png
const _33_namespaceObject = __webpack_require__.p + "static/image/33.png";
;// CONCATENATED MODULE: ./assets/images/laffeychibi.png
const laffeychibi_namespaceObject = __webpack_require__.p + "static/image/laffeychibi.png";
;// CONCATENATED MODULE: ./components/styles/section2.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./components/Section2.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 






const Section2 = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "section2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: "section2-heading",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: "section2-hover",
                    id: "features",
                    children: "Features"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "section2-container",
                id: "anime",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: kisaragicute_namespaceObject,
                        alt: "Kisaragi Cute",
                        height: "456",
                        width: "327",
                        className: "fanart"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "section2-vertical",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "section2-title",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section2-hover",
                                    children: "Search for fanart of cute anime girls!"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "section2-paragraph",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section2-hover",
                                    children: "There are commands for searching Pixiv, Deviantart, Safebooru, and other sites! Check the help documentation to view sub-options like searching for lewd pictures. There is also a download reaction that will pack all of the images into a zip file."
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "section2-container",
                id: "music",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "section2-vertical",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "section2-title",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section2-hover",
                                    children: "Photoshop images! Play music with effects!"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "section2-paragraph",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section2-hover",
                                    children: "You can add adjustments to images such as brightness and hue/saturation, similar to Photoshop! Play music from Soundcloud, Youtube, or an attachment. There are many cool audio effects that you can apply, such as reverse, speed, pitch, reverb, and highpass."
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: hammann_namespaceObject,
                        alt: "Hammann",
                        height: "633",
                        width: "383",
                        className: "fanart hammann"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "section2-container",
                id: "utility",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: akashinewyear_namespaceObject,
                        alt: "Akashi New Year",
                        height: "671",
                        width: "548",
                        className: "fanart akashinewyear"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "section2-vertical",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "section2-title",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section2-hover",
                                    children: "Extra moderation and utility features!"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "section2-paragraph",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section2-hover",
                                    children: "There is basic moderation such as word filtering, ban, and kick. There are helpful utilities like reaction roles, captcha verification, starboard, and welcome/leave messages. You can also receive notifications for Youtube and Twitch."
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "section2-container",
                id: "games",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "section2-vertical",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "section2-title",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section2-hover",
                                    children: "Game commands such as Azur Lane and Osu!"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "section2-paragraph",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section2-hover",
                                    children: "Search for Kancolle and Azur Lane shipgirls and get information on Osu! beatmaps and players. There is also a command for playing a game of minesweeper, which can be played in either reactions or spoiler tags."
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: _33_namespaceObject,
                        alt: "33",
                        height: "716",
                        width: "422",
                        className: "fanart"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "section2-container",
                id: "website",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: laffeychibi_namespaceObject,
                        alt: "Laffey Chibi",
                        height: "595",
                        width: "625",
                        className: "fanart laffeychibi"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "section2-vertical",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "section2-title",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section2-hover",
                                    children: "Browse Reddit and Twitter posts!"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "section2-paragraph",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "section2-hover",
                                    children: "Connect your Reddit and Twitter account with Oauth2 to like, comment, and retweet posts with your account. There are also many commands that are subreddit specific."
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* export default */ const components_Section2 = (Section2);

;// CONCATENATED MODULE: ./components/HomePage.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 




const HomePage = (props)=>{
    (0,react.useEffect)(()=>{
        document.title = "Kisaragi Bot";
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Section1, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Section2, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Footer, {
                fanart: true,
                reRender: props.reRender
            })
        ]
    });
};
/* export default */ const components_HomePage = (HomePage);

;// CONCATENATED MODULE: ./assets/images/kisaraginewyearchibi.png
const kisaraginewyearchibi_namespaceObject = __webpack_require__.p + "static/image/kisaraginewyearchibi.png";
;// CONCATENATED MODULE: ./assets/icons/search-icon.png
const search_icon_namespaceObject = __webpack_require__.p + "static/image/search-icon.png";
;// CONCATENATED MODULE: ./assets/icons/show-pic.png
const show_pic_namespaceObject = __webpack_require__.p + "static/image/show-pic.png";
;// CONCATENATED MODULE: ./assets/icons/loading.gif
const loading_namespaceObject = __webpack_require__.p + "static/image/loading.gif";
;// CONCATENATED MODULE: ./json/commands.json
var commands_namespaceObject = JSON.parse('[{"command":"bansync","category":"admin","description":"Syncs the ban list of this server with another guild.","help":"_Note: The bot will only add bans unless you specify perfect._\\nbansync guild name/id - Adds the bans from the server to this one\\nbansync guild name/id perfect - Also removes bans that are not shared, for perfect sync.","aliases":"syncbans","examples":"=>bansync my other server\\n=>bansync another server perfect","cooldown":10},{"command":"block","category":"admin","description":"Configure settings for word and invite filtering.","help":"_Note: You can type multiple options in one command._\\nblock - Opens the interactive block prompt.\\nblock word1 word2... - Adds blocked words.\\nblock enable/disable - Toggles filtering on or off.\\nblock exact/partial - Sets the matching algorithm.\\nblock asterisk - Toggles asterisk filtering.\\nblock invite - Block invites to other servers\\nblock delete (number) - Deletes a word.\\nblock reset - Deletes all words.","aliases":"filter","examples":"=>block badword\\n=>block delete 1\\n=>block asterisk disable\\n=>block partial\\n=>block reset","cooldown":10},{"command":"captcha","category":"admin","description":"Configure settings for captcha verification.","help":"Note: You can type multiple options in one command.\\ncaptcha - Opens interactive captcha prompt.\\ncaptcha enable/disable - Enables or disables captcha verification.\\ncaptcha @role/role id - Sets the verify role.\\ncaptcha text/math - Changes the captcha type.\\ncaptcha easy/medium/hard/extreme - Changes the difficulty.\\ncaptcha #hexcolor - Changes the background color.\\ncaptcha reset - Resets all settings.","aliases":"verification","examples":"=>captcha @Member 🔑 text medium #ffffff\\n=>captcha _then_ extreme\\n=>captcha math easy","cooldown":10},{"command":"create","category":"admin","description":"Create channels, roles, and emojis.","help":"create channel name above? reason? - Creates a new channel with the name above the current one, or above the \\"above\\" channel.\\ncreate role role-name? #color? position? hoisted? mentionable? - Creates a role with these properties. Dashes and underscores in the name are replaced by spaces.\\ncreate emoji name imageLink? reason? - Creates a new emoji with the name, if no image link is provided the last sent image is used (if found).","aliases":"none","examples":"=>create channel anime-chat gamer-chat\\n=>create role Members #bf4dff 10 true true\\n=>create emoji smugFace","cooldown":10},{"command":"deletecase","category":"admin","description":"Deletes a moderation case, or all cases.","help":"deletecase case - Deletes a case.\\ndeletecase all - Deletes all cases (no undo).","aliases":"delcase","examples":"=>deletecase 5\\n=>deletecase all","cooldown":10},{"command":"disable","category":"admin","description":"Disables certain command categories.","help":"disable - Shows the disable prompt.\\ndisable category1 category2? - Disables the categories, or enables them if they were disabled.\\ndisable reset - Deletes all settings.","aliases":"none","examples":"=>disable","cooldown":3},{"command":"emojiroles","category":"admin","description":"Restricts an emoji to certain roles (Bot exclusive feature).","help":"emojiroles - Shows the linked channels prompt.\\nemojiroles emoji? @role1? @role2? whitelist/blacklist? - Sets the restricted roles, and whether it\'s treated as a whitelist or blacklist.\\nemojiroles edit setting emoji? @role1? @role2? whitelist/blacklist? - Edits an existing setting.\\nemojiroles delete setting - Deletes a setting.\\nemojiroles reset - Deletes all settings.","aliases":"er, eroles","examples":"=>emojiroles supervip @admin whitelist","cooldown":3},{"command":"instantban","category":"admin","description":"Configure settings for instant bans.","help":"instantban - Opens the instant ban prompt\\ninstantban pfp - Toggles no profile picture bans\\ninstantban everyone - Toggles banning of people who tag @everyone","aliases":"iban","examples":"=>instantban pfp everyone","cooldown":3},{"command":"link","category":"admin","description":"Configure settings for linked channels.","help":"link - Shows the linked channels prompt.\\nlink #textchannel? voicechannel? - Sets the text and voice channel that are linked.\\nlink toggle setting - Enables or disables a setting.\\nlink edit setting #textchannel? voicechannel? - Edits an existing setting.\\nlink delete setting - Deletes a setting.\\nlink reset - Deletes all settings.","aliases":"links, linked, linkchannel","examples":"=>link #music-commands music\\n=>link #voice-chat voice","cooldown":3},{"command":"mention","category":"admin","description":"Mentions any role, then sets it to unmentionable.","help":"mention @role - Mentions the role, and then makes it unmentionable.","aliases":"none","examples":"=>mention @news","cooldown":5},{"command":"mod","category":"admin","description":"Configures moderation settings for the server.","help":"mod - Configure settings\\nmod @role/id - Set the admin role.\\nmod !@role/id! - Set the mod role.\\nmod #@role/id# - Sets the mute role.\\nmod $@role/id$ - Sets the restricted role.\\nmod (@role/id) - Sets the warn one role.\\nmod [@role/id] - Sets the warn two role.\\nmod none/mute/kick/ban - Sets the warn penalty.\\nmod num - Sets the warn threshold.\\nmod ascii - Toggles the removal of non-ascii characters in names.","aliases":"moderation","examples":"=>mod @role !@role! #@role# $@role$","cooldown":10},{"command":"remove","category":"admin","description":"Removes channels, roles, and emojis.","help":"remove channel name/#channel/id reason? - Removes a channel by name, mention, or id.\\nremove role name/@role/id reason? - Removes a role by name, mention, or id.\\nremove emoji emoji/name/id reason? - Removes an emoji by emoji, name or id.","aliases":"none","examples":"=>remove channel #anime-pics\\n=>remove role @weebs\\n=>remove emoji thumbsUp","cooldown":10},{"command":"reset","category":"admin","description":"Deletes and resets all data on your guild (no undo).","help":"reset - Resets all data","aliases":"none","examples":"=>reset","cooldown":10},{"command":"swap","category":"admin","description":"Swaps all members to a weeb or normie role.","help":"swap - Swaps all members to the weeb or normie role.","aliases":"none","examples":"=>swap","cooldown":10},{"command":"unbanall","category":"admin","description":"Unbans everyone (no undo).","help":"unbanall - Unbans everyone in this server","aliases":"none","examples":"=>unbanall","cooldown":10},{"command":"verify","category":"admin","description":"Posts a captcha that must be solved to be verified.","help":"_Note:_ Edit captcha and verify role settings using the **captcha** command.\\nverify - Posts a captcha that must be solved.","aliases":"none","examples":"=>verify","cooldown":10},{"command":"anime","category":"anime","description":"Searches for an anime series.","help":"anime query - Searches for an anime with the query.","aliases":"a","examples":"=>anime gabriel dropout\\n=>anime konosuba\\n=>anime rezero","cooldown":10},{"command":"animebooks","category":"anime","description":"Anime girls holding programming books.","help":"animebooks - Get any books\\nanimebooks language - Searches for books in the language","aliases":"books, animegirlbooks, animegirlsholdingprogrammingbooks","examples":"=>animebooks\\n=>animebooks javascript\\n=>animebooks c","cooldown":10},{"command":"animequote","category":"anime","description":"Posts a random anime quote.","help":"_Note: Search for japanese names. Punctuation and capitalization could matter._\\nanimequote - Gets a random quote.\\nanimequote id - Gets a quote with the given id.\\nanimequote anime - Searches for a quote in the given anime.\\nanimequote character - Searches for a quote by the given character.","aliases":"aq","examples":"=>animequote\\n=>animequote 6969\\n=>animequote pokemon\\n=>animequote himouto\\n=>animequote rem","cooldown":5},{"command":"chibi","category":"anime","description":"Posts some chibi pictures.","help":"chibi - Sends some chibi","aliases":"none","examples":"=>chibi","cooldown":10},{"command":"kawaii","category":"anime","description":"Posts some kawaii anime pictures.","help":"kawaii - Sends some kawaii pictures","aliases":"none","examples":"=>kawaii","cooldown":10},{"command":"kitsune","category":"anime","description":"Post a picture of a fox girl.","help":"kitsune - Gets a random image.","aliases":"k, foxgirl","examples":"=>kitsune","cooldown":10},{"command":"manga","category":"anime","description":"Searches for a manga series.","help":"manga query - Searches for a manga with the query.","aliases":"m","examples":"=>manga gabriel dropout\\n=>manga sword art online\\n=>manga himouto umaru chan","cooldown":10},{"command":"neko","category":"anime","description":"Posts images of catgirls.","help":"_Note: Different tags are separated by comma._\\nneko - Posts random neko images.\\nneko tags - Searches for images matching the tags.\\nneko gif - Posts a random neko gif.\\nneko gif lewd - Posts a random nsfw neko gif.","aliases":"nekos, catgirl, catgirls","examples":"=>neko\\n=>neko :o\\n=>neko lewd","cooldown":10},{"command":"pixiv","category":"anime","description":"Searches for or downloads anime images on pixiv.","help":"_Note: Put the folder mapping in brackets in the format [folderName:tagName, folderName2:tagName2, etc.]._\\npixiv - Gets a pixiv image with some defaults.\\npixiv link/id - Gets the pixiv or ugoira image from the link.\\npixiv tag - Gets a pixiv image with the tag (translated to japanese).\\npixiv en tag - Gets a pixiv image with the tag (not translated).\\npixiv popular - Gets a pixiv image from the daily rankings.\\npixiv download/dl query [folderMap]? - Downloads images on pixiv and uploads the zip file. Folder map will organize certain tags into sub folders.","aliases":"p","examples":"=>pixiv\\n=>pixiv azur lane\\n=>pixiv download black tights\\n=>pixiv download gabriel dropout [gabriel:gabriel, satania:satania, raphiel:raphiel, vignette:vignette]","cooldown":60},{"command":"stockings","category":"anime","description":"Posts pictures of anime girls wearing stockings.","help":"stockings - Sends pictures of anime girls in stockings.","aliases":"leggings, tights","examples":"=>stockings","cooldown":10},{"command":"trace","category":"anime","description":"Searches for the exact scene of an anime picture using trace.moe.","help":"trace url? - Searches the last posted image, or the image from the url","aliases":"animescene","examples":"=>trace","cooldown":10},{"command":"ugoira","category":"anime","description":"Searches for animated pixiv images (pixiv ugoira).","help":"_Note: Using the **pixiv** command on a ugoira link will run this command too!_\\nugoira - Gets a pixiv ugoira with some defaults.\\nugoira link/id - Gets the pixiv ugoira from the link.\\nugoira tag - Gets a pixiv ugoira from the tag (translated to japanese).\\nugoira en tag - Gets a pixiv ugoira from the tag (not translated).","aliases":"u","examples":"=>ugoira\\n=>ugoira izumi sagiri\\n=>ugoira kisaragi (azur lane)","cooldown":30},{"command":"danbooru","category":"booru","description":"Searches for anime pictures on danbooru.","help":"_Note: Underscores are not required._\\ndanbooru - Get a random image.\\ndanbooru link/id - Gets the image from the link.\\ndanbooru tag - Gets an image with the tag.\\ndanbooru r18 - Get a random r18 image.\\ndanbooru r18 tag - Get an r18 image with the tag.\\n=>danbooru r18 gabriel dropout","aliases":"d, dan","examples":"=>danbooru\\n=>danbooru tenma gabriel white","cooldown":20},{"command":"gelbooru","category":"booru","description":"Searches for anime pictures on gelbooru.","help":"_Note: Underscores are not required._\\ngelbooru - Get a random image.\\ngelbooru link/id - Gets the image from the link.\\ngelbooru tag - Gets an image with the tag.\\ngelbooru r18 - Get a random r18 image.\\ngelbooru r18 tag - Get an r18 image with the tag.","aliases":"gel","examples":"=>gelbooru\\n=>gelbooru tenma gabriel white","cooldown":20},{"command":"konachan","category":"booru","description":"Searches for anime pictures on konachan.","help":"_Note: Underscores are not required._\\nkonachan - Get a random image.\\nkonachan link/id - Gets the image from the link.\\nkonachan tag - Gets an image with the tag.\\nkonachan r18 - Get a random r18 image.\\nkonachan r18 tag - Get an r18 image with the tag.\\n=>konachan r18 azur lane","aliases":"k, kona, kchan","examples":"=>konachan\\n=>konachan kisaragi (azur lane)","cooldown":20},{"command":"moepictures","category":"booru","description":"Searches for anime pictures on moepictures.","help":"moepictures - Get random images.\\nmoepictures tags - Gets images with the tags.\\nmoepictures link/id - Gets the image from the link.","aliases":"m, moe","examples":"=>moepictures\\n=>moepictures usada pekora","cooldown":20},{"command":"safebooru","category":"booru","description":"Searches for anime pictures on safebooru.","help":"_Note: Underscores are not required. This is safebooru, so r18 only gets you \\"questionable\\" images._\\nsafebooru - Get a random image.\\nsafebooru link/id - Gets the image from the link.\\nsafebooru tag - Gets an image with the tag.\\nsafebooru r18 - Get a random questionable image.\\nsafebooru r18 tag - Get a questionable image with the tag.","aliases":"safe","examples":"=>safebooru\\n=>safebooru tenma gabriel white\\n=>safebooru r18 gabriel dropout","cooldown":20},{"command":"yandere","category":"booru","description":"Searches for anime pictures on yandere.","help":"_Note: Underscores are not required._\\nyandere - Get a random image.\\nyandere link/id - Gets the image from the link.\\nyandere tag - Gets an image with the tag.\\nyandere r18 - Get a random r18 image.\\nyandere r18 tag - Get an r18 image with the tag.\\n=>yandere r18 azur lane","aliases":"y, ydere","examples":"=>yandere\\n=>yandere kisaragi (azur lane)","cooldown":20},{"command":"zerochan","category":"booru","description":"Searches for anime pictures on zerochan.","help":"zerochan - Get random images.\\nzerochan tags - Gets images with the tags.\\nzerochan link/id - Gets the image from the link.","aliases":"zc","examples":"=>zerochan\\n=>zerochan citlali","cooldown":20},{"command":"blacklist","category":"botdev","description":"Blacklists a user or entire guild.","help":"blacklist id reason? - Blacklists a guild (the default).\\nblacklist user id reason? Blacklists a user.\\nblacklist guild id reason? - Long form for blacklisting guilds","aliases":"none","examples":"=>blacklist <guild id>\\n=>blacklist user <user id>","cooldown":3},{"command":"event","category":"botdev","description":"Triggers an event.","help":"event event - Triggers the event","aliases":"none","examples":"=>event guildCreate","cooldown":3},{"command":"flush","category":"botdev","description":"Flushes cached data.","help":"flush - Flushes the redis keys.\\nflush embed - Flushes the cached embeds.\\nflush pixiv - Flushes the pixiv embeds.","aliases":"none","examples":"=>flush","cooldown":3},{"command":"gcount","category":"botdev","description":"Refreshes the guild count and reposts stats.","help":"gcount - Refresh guild count","aliases":"none","examples":"=>gcount","cooldown":3},{"command":"guilds","category":"botdev","description":"Posts all the guilds the bot is in.","help":"guilds - Posts all of the bot guilds","aliases":"none","examples":"=>guilds","cooldown":3},{"command":"ip","category":"botdev","description":"Posts the bot\'s ip address.","help":"ip - Posts the ip address","aliases":"none","examples":"=>ip","cooldown":3},{"command":"leaveguild","category":"botdev","description":"Forcefully leaves a guild.","help":"leaveguild id reason? - Leaves the guild\\nleaveguild silent id - Leaves the guild without a reason","aliases":"lg","examples":"=>leaveguild 123","cooldown":10},{"command":"noimg","category":"botdev","description":"Lists all commands with no image.","help":"noimg - Show noimg commands\\nunlist - Show unlisted commands","aliases":"unlist, hidden","examples":"=>noimg","cooldown":10},{"command":"order","category":"botdev","description":"Orders the rows in the guilds table.","help":"order - Order rows","aliases":"none","examples":"=>order","cooldown":3},{"command":"reboot","category":"botdev","description":"Reboots the bot.","help":"reboot - Reboot the bot","aliases":"restart","examples":"=>reboot","cooldown":100},{"command":"refresh","category":"botdev","description":"Refreshes all commands and events.","help":"refresh - Refreshes all commands and events, without needing to restart the bot.","aliases":"reload","examples":"=>refresh","cooldown":50},{"command":"set","category":"botdev","description":"Sets the bot\'s activity text.","help":"set activity, status - Set the activity and status","aliases":"none","examples":"=>set watching anime, dnd","cooldown":3},{"command":"unblacklist","category":"botdev","description":"Unblacklists a user or guild.","help":"unblacklist id - Unblacklists a guild (the default).\\nunblacklist user id reason? Unblacklists a user. Reason is sent in dms.\\nunblacklist guild id - Long form for unblacklisting guilds","aliases":"none","examples":"=>unblacklist <guild id>\\n=>unblacklist user <user id>","cooldown":3},{"command":"voteunlock","category":"botdev","description":"Manually unlocks voting for a user.","help":"voteunlock user id - Unlock the user\'s voting","aliases":"none","examples":"=>voteunlock <user id>","cooldown":3},{"command":"auto","category":"config","description":"Configures settings for auto commands.","help":"auto - Shows the auto settings prompt.\\nauto cmd? #channel? num? - Sets the command, channel, and frequency (in hours).\\nauto toggle setting - Turns a setting on or off.\\nauto edit setting cmd? #channel? num? - Edits an existing setting.\\nauto delete setting - Deletes a setting.\\nauto reset - Resets all settings.","aliases":"none","examples":"=>auto holiday #holidays 24\\n=>auto edit 1 #newchannel 12\\n=>auto delete 1","cooldown":10},{"command":"config","category":"config","description":"Configures bot settings like embed colors.","help":"config - Shows the config prompt.\\nconfig default/random/#hexcolor1 #hexcolor2 - Sets the colors of the embeds\\nconfig role/perm - Checks permissions with mod/admin roles or discord permissions (eg. ban members)\\nconfig reset - Resets settings to the default","aliases":"none","examples":"=>config default role\\n=>config reset","cooldown":10},{"command":"detect","category":"config","description":"Configures detection settings.","help":"detect - Shows the anime detection prompt.\\ndetect link - Detects links and runs a command on them, eg. youtube links\\ndetect anime - Removes pictures that don\'t contain anime characters\\ndetect pfp - Swaps members to a weeb (anime pfp) and normie (non anime pfp) role\\ndetect response - Toggles auto responses (eg. ayaya)\\ndetect reset - Resets settings to the default\\ndetect @role [@role] Sets the weeb role (@role) and normie role [@role]","aliases":"detection","examples":"=>detect link anime pfp\\n=>detect @role [@role]\\n=>detect reset","cooldown":10},{"command":"detectignore","category":"config","description":"Configures channels ignored by anime detection.","help":"detectignore - Opens the detect ignore prompt\\ndetectignore #channel1 #channel2 - Sets channels that are ignored from anime detection\\ndetectignore delete setting - Deletes a channel\\ndetectignore reset - Deletes all channels","aliases":"none","examples":"=>detectignore #channel","cooldown":10},{"command":"gallery","category":"config","description":"Configures gallery (image only) channels.","help":"gallery - Opens the gallery prompt\\ngallery #channel1 #channel2 - Add gallery channels\\ngallery delete setting - Deletes a channel\\ngallery reset - Deletes all channels","aliases":"none","examples":"=>gallery #channel","cooldown":10},{"command":"leave","category":"config","description":"Configures settings for leave messages.","help":"leave - Opens the leave prompt.\\nleave enable/disable - Enables or disables leave messages\\nleave msg - Sets the leave message\\nleave #channel - Sets the channel where messages are sent\\nleave url - Sets the background image(s)\\nleave [msg] - Sets the background text\\nleave rainbow/#hexcolor - Sets the background text color\\nleave bg - Toggles the background text and picture (just displays the raw image)\\nleave reset - Resets settings to the default","aliases":"farewell","examples":"=>leave user left guild! #channel [username left!] rainbow\\n=>leave reset","cooldown":10},{"command":"logs","category":"config","description":"Configures logging settings (message log, mod log, etc).","help":"logs - Opens the logs prompt\\nlogs #channel? [#channel]? (#channel)? {#channel}? - Sets the message, mod, user, and guild log respectively\\nlogs delete message/mod/user/member - Removes the specified log channels.\\nlogs reset - Removes all channels.","aliases":"log, logging","examples":"=>logs\\n=>logs #message-log [#mod-log] <#user-log>\\n=>logs reset","cooldown":15},{"command":"pinboard","category":"config","description":"Forwards pins to a pinboard channel.","help":"pinboard - Opens the pinboard prompt\\npinboard #channel - Sets the pinboard channel\\npinboard [#channel] - Sets the NSFW pinboard channel\\npinboard reset - Deletes the pinboard channel.","aliases":"none","examples":"=>pinboard\\n=>pinboard #pinboard","cooldown":15},{"command":"prefix","category":"config","description":"Changes the bot prefix.","help":"prefix text - Sets the new prefix.","aliases":"pref","examples":"=>prefix k!","cooldown":10},{"command":"reactionroles","category":"config","description":"Configures settings for reaction roles.","help":"reactionroles - Opens the reaction roles prompt\\nreactionroles [messageID]? @role/rolename? emoji/!emojiName!? dm? - Adds a new reaction role with the parameters\\nreactionroles delete setting - Removes a reaction role\\nreactionroles edit setting [messageID]? @role/rolename? emoji? dm? - Edits a reaction role\\nreactionroles toggle setting - Toggles the reaction role on or off\\nreactionroles reset - Deletes all reaction roles.","aliases":"rr","examples":"=>reactionroles\\n=>reactionroles edit 1 [messageID] weebs :anime:\\n=>reactionroles delete 5","cooldown":15},{"command":"selfrole","category":"config","description":"Adds a role from the self assignable roles list.","help":"_Note:_ Add roles to the self assignable role list with **selfroles**.\\nselfrole rolename - Adds a role from the guilds self assignable role list","aliases":"sr","examples":"=>selfrole kanna","cooldown":10},{"command":"selfroles","category":"config","description":"Configures settings for self-assignable roles, or lists all of them.","help":"_Note:_ The commands for the prompt are restricted to admins only.\\nselfroles - Lists all self assignable roles (non-admin) or opens the self roles prompt (admin)\\nselfroles list - Lists all of the self assignable roles (works for admins)\\nselfroles @role1 @role2 - Adds roles to the self assignable roles list\\nselfroles delete setting - Removes a role from the list\\nselfroles reset - Deletes all self roles.","aliases":"none","examples":"=>selfroles list\\n=>selfroles @role1 @role2\\n=>selfroles reset","cooldown":10},{"command":"source","category":"config","description":"Configure auto image reverse search channels.","help":"source - Opens the source prompt\\nsource #channel1 #channel2 - Add source channels\\nsource delete setting - Deletes a channel\\nsource reset - Deletes all channels","aliases":"autosaucenao","examples":"=>source #channel","cooldown":10},{"command":"starboard","category":"config","description":"Forwards messages that exceed a threshold of star reactions to a starboard channel.","help":"_Note: The star threshold must be at least 1._\\nstarboard - Opens the pinboard prompt\\nstarboard #channel num? - Sets the starboard channel and star threshold\\nstarboard reset - Resets all settings.","aliases":"none","examples":"=>starboard #starboard\\n=>starboard 5","cooldown":15},{"command":"welcome","category":"config","description":"Configures settings for welcome messages.","help":"welcome - Opens the welcome messages prompt\\nwelcome msg - Sets the welcome message\\nwelcome #channel - Sets the channel where welcome messages are sent\\nwelcome url - Sets the background image(s)\\nwelcome [msg] - Sets the background text\\nwelcome rainbow/#hexcolor - Sets the background text color\\nwelcome bg - Toggles the background text and picture (just displays the raw image)\\nwelcome reset - Resets welcome settings to the default","aliases":"greeting","examples":"=>welcome welcome user to guild! [welcome username! There are now count members.]\\n=>welcome enable rainbow","cooldown":10},{"command":"8ball","category":"fun","description":"Responds to your question.","help":"8ball question - Answers your question.","aliases":"eightball","examples":"=>8ball do you love me?","cooldown":3},{"command":"ascii","category":"fun","description":"Converts text to ascii art.","help":"_Note: Long texts will get chopped off._\\nascii text - Converts the text to ascii.","aliases":"none","examples":"=>ascii hi","cooldown":3},{"command":"chat","category":"fun","description":"Connects or disconnects to the global chat.","help":"_Note: Messages cannot exceed 100 characters, and 1 message per 3 seconds._\\nchat - Connects or disconnects to the global chat","aliases":"globalchat, gchat","examples":"=>chat","cooldown":3},{"command":"coin","category":"fun","description":"Flips a coin.","help":"coin - Flips the coin.","aliases":"coinflip, flipcoin","examples":"=>coin","cooldown":3},{"command":"dice","category":"fun","description":"Rolls a dice.","help":"dice - Rolls the dice.","aliases":"roll","examples":"=>dice","cooldown":3},{"command":"embed","category":"fun","description":"Creates a custom embed and sends it.","help":"embed - Open the embed creator","aliases":"embeds, customembed, richembed, messageembed","examples":"=>embed","cooldown":3},{"command":"emojify","category":"fun","description":"Converts text to emoji letters.","help":"emojify text - Converts the text to emoji letters.","aliases":"none","examples":"=>emojify kawaii","cooldown":3},{"command":"kaomoji","category":"fun","description":"Posts a kawaii emoji.","help":"kaomoji - Gets a random kaomoji.\\nkaomoji query - Searches for a kaomoji with the query.","aliases":"kmoji","examples":"=>kaomoji\\n=>kaomoji kawaii","cooldown":3},{"command":"lenny","category":"fun","description":"Posts a lenny emoji.","help":"lenny - Posts a lenny emoji.\\nlenny face/shrug/tableflip/unflip - Posts one of these popular faces.\\nlenny query - Searches for a lenny emoji with the query.","aliases":"none","examples":"=>lenny\\n=>lenny face\\n=>lenny shrug","cooldown":3},{"command":"number","category":"fun","description":"Guess the number!","help":"number - Start the number game.","aliases":"number","examples":"=>number","cooldown":10},{"command":"pickle","category":"fun","description":"Posts your pickle size","help":"_Note:_ The sizes are seeded and won\'t change null\\npickle - Gets your pickle size.\\npickle @user - Gets the pickle size of the user.","aliases":"pp, peepee, hotdog, dong, cock, dick, penis, sausage, fun stick, schlong, willy, ding dong, peen, meat stick","examples":"=>pickle","cooldown":3},{"command":"react","category":"fun","description":"Adds a reaction to a message.","help":"react emoji/name/id - Adds a reaction from this server\\nreact bot emoji/name/id - Adds a reaction from the bot\'s emojis.\\nreact global emoji/name/id - Finds a reaction from all servers that the bot is in.\\nreact msg/message id dev?/global? emoji/name/id - Adds a reaction to the specified message instead of the last one.","aliases":"reaction","examples":"=>react raphiOMG","cooldown":5},{"command":"reversetext","category":"fun","description":"Reverses your message.","help":"reversetext text - Sends the message in reverse.","aliases":"rtext, rsay, sayreverse","examples":"=>reversetext noon","cooldown":3},{"command":"rps","category":"fun","description":"Game of rock, paper, and scissors.","help":"rps rock/paper/scissors - Choose either rock, paper, or scissors\\nrps r/p/s - Short form.","aliases":"none","examples":"=>rps paper\\n=>rps rock","cooldown":5},{"command":"say","category":"fun","description":"Posts your message.","help":"say text - Posts the text.","aliases":"none","examples":"=>say I love you","cooldown":3},{"command":"ship","category":"fun","description":"Ships two users.","help":"ship @user1 @user2 - Ships two users.","aliases":"shipping","examples":"=>ship @user1 @user2","cooldown":5},{"command":"slots","category":"fun","description":"Rolls the slot machine.","help":"slots - Rolls the slot machine.","aliases":"none","examples":"=>slots","cooldown":3},{"command":"azurlane","category":"game","description":"Gets information on an azur lane ship girl.","help":"azurlane - Gets some handpicked girls.\\nazurlane shipgirl - Gets information on the shipgirl.","aliases":"al","examples":"=>azurlane kisaragi\\n=>azurlane laffey","cooldown":10},{"command":"bluearchive","category":"game","description":"Searches for a blue archive character.","help":"bluearchive - Gets some picked characters.\\nbluearchive character - Gets information on the character.","aliases":"ba","examples":"=>bluearchive shiroko\\n=>bluearchive hoshino","cooldown":10},{"command":"genshin","category":"game","description":"Gets information on a genshin impact character.","help":"genshin - Gets some picked characters.\\ngenshin character - Gets information on the character.","aliases":"genshinimpact","examples":"=>genshin klee\\n=>genshin lumine","cooldown":10},{"command":"kancolle","category":"game","description":"Gets information on a kancolle ship girl.","help":"kancolle - Gets some handpicked girls\\nkancolle shipgirl - Gets information on the shipgirl.","aliases":"kc, kantai, kantaicollection","examples":"=>kancolle fubuki\\n=>kancolle hibiki","cooldown":10},{"command":"minesweeper","category":"game","description":"Starts a new game of minesweeper.","help":"minesweeper rows? columns? - Starts a new game, defaults to 5x5.\\nminesweeper spoiler rows? columns? - Spoiler tag version. No win/lose feedback.","aliases":"mine","examples":"=>minesweeper\\n=>minesweeper spoiler","cooldown":5},{"command":"osu","category":"game","description":"Searches for osu beatmaps, players, and scores.","help":"osu query? - Searches for beatmaps\\nosu url - Gets the beatmap from the url\\nosu user name - Gets a user profile\\nosu set name - Links your account with your osu name, used for the recent/best sub commands\\nosu recent/rs name? - Gets a user\'s recent plays\\nosu best/bt name? - Gets a user\'s best plays","aliases":"none","examples":"=>osu\\n=>osu https://osu.ppy.sh/beatmapsets/556393#osu/1177545\\n=>osu set name _then_ =>osu best","cooldown":10},{"command":"cuddle","category":"heart","description":"Cuddles someone.","help":"cuddle @user - Cuddles the user.\\ncuddle - Cuddle no one...","aliases":"none","examples":"=>cuddle @user","cooldown":3},{"command":"hug","category":"heart","description":"Hugs someone.","help":"hug @user - Hugs the user.\\nhug - Hugs no one...","aliases":"none","examples":"=>hug @user","cooldown":3},{"command":"kiss","category":"heart","description":"Kisses someone.","help":"kiss @user - Kisses the user.\\nkiss - Kisses no one...","aliases":"none","examples":"=>kiss @user","cooldown":3},{"command":"pat","category":"heart","description":"Pats someone.","help":"pat @user - Pats the user.\\npat - Pats no one...","aliases":"none","examples":"=>hug @user","cooldown":3},{"command":"slap","category":"heart","description":"Slaps someone.","help":"slap @user - Slaps the user.\\nslap - Slaps no one...","aliases":"none","examples":"=>slap @user","cooldown":3},{"command":"smug","category":"heart","description":"Posts a smug face.","help":"smug @user - Be smug to someone.\\nsmug - Posts a smug image.","aliases":"none","examples":"=>smug @user","cooldown":3},{"command":"tickle","category":"heart","description":"Tickles someone.","help":"tickle @user - Tickles the user.\\ntickle - Tickles no one...","aliases":"none","examples":"=>tickle @user","cooldown":3},{"command":"blur","category":"image","description":"Applies a fast or gaussian blur to an image.","help":"blur radius - Blurs the last posted image\\nblur radius url - Blurs the linked image\\ngaussian radius url? - Applies a gaussian blur instead of a fast blur.","aliases":"gaussian, blurry, blurriness","examples":"=>blur 30\\n=>gaussian 40","cooldown":10},{"command":"brightness","category":"image","description":"Increases or decreases the brightness of an image.","help":"_Note: The range is -100 to 100._\\nbrightness factor - Edits the brightness of the last posted image\\nbrightness factor url - Edits the brightness of the linked image","aliases":"brighten","examples":"=>brightness 20","cooldown":10},{"command":"contrast","category":"image","description":"Increases or decreases the contrast of an image.","help":"_Note: The range is -100 to 100._\\ncontrast factor - Edits the contrast of the last posted image\\ncontrast factor url - Edits the contrast of the linked image","aliases":"contrast","examples":"=>contrast 40","cooldown":10},{"command":"crop","category":"image","description":"Crops an image at an x and y offset.","help":"_Note: Omit the height for a proportional crop._\\ncrop x y width height? - Crops the last posted image\\ncrop x y width height? url - Crops the linked image","aliases":"none","examples":"=>crop 100 200 200 200\\n=>crop 200 300 1280","cooldown":10},{"command":"flip","category":"image","description":"Flips an image horizontally, vertically, or both.","help":"_Note: Some param aliases that can be used are horizontal, h, vertical, and v._\\nflip x? url? - Flips the image horizontally (the default)\\nflip y url? - Flips an image vertically.\\nflip xy url? - Flips the image in both directions.\\nflop yx url? - Inverse of flip (vertical becomes the default).\\nflipflop url? - Alias for flipping in both directions.","aliases":"flop, flipflop","examples":"=>flip\\n=>flip y","cooldown":10},{"command":"greyscale","category":"image","description":"Makes an image greyscale.","help":"greyscale url? - Makes the image greyscale","aliases":"grayscale","examples":"=>greyscale","cooldown":10},{"command":"hue","category":"image","description":"Shifts the hue of an image.","help":"_Note: Hue is in degrees._\\nhue shift - Shifts the hue of the last posted image\\nhue shift url - Shifts the hue of the linked image","aliases":"spin","examples":"=>hue 180","cooldown":10},{"command":"invert","category":"image","description":"Inverts the colors of an image.","help":"invert url? - Inverts the colors","aliases":"none","examples":"=>invert","cooldown":10},{"command":"lightness","category":"image","description":"Lightens or darkens an image.","help":"_Note: The range is -100 to 100._\\nlightness amount - Changes the value of the last posted image\\nlightness amount url - Changes the value of the linked image","aliases":"lighten, darken, darkness","examples":"=>lightness 50\\n=>lightness -25","cooldown":10},{"command":"opacity","category":"image","description":"Changes the opacity of an image.","help":"_Note: The range is 0 to 100._\\nopacity factor - Edits the opacity of the last posted image\\nopacity factor url - Edits the opacity of the linked image","aliases":"none","examples":"=>opacity 70","cooldown":10},{"command":"photoshop","category":"image","description":"Opens the image editor to apply multiple edits to an image.","help":"photoshop - Edits the last posted image\\nphotoshop url - Edits the linked image","aliases":"ps, edit, editor, adjust, hsv, hsb","examples":"=>photoshop","cooldown":10},{"command":"pixelate","category":"image","description":"Adds a pixelation effect to an image.","help":"pixelate factor - Edits the pixelation of the last posted image\\npixelate factor url - Edits the pixelation of the linked image","aliases":"censor","examples":"=>pixelate 50","cooldown":10},{"command":"posterize","category":"image","description":"Applies a posterization effect to an image.","help":"posterize level url? - Apples a posterization effect.","aliases":"none","examples":"=>posterize 10","cooldown":10},{"command":"resize","category":"image","description":"Resizes an image to a new width/height (or resizes proportionally).","help":"_Note: Omit the height to resize proportionally. To use a scale factor instead of pixels, see scale._\\nresize width height? - Resizes the last posted image\\nresize width height? url - Resizes the linked image","aliases":"none","examples":"=>resize 1280 720\\n=>resize 1920","cooldown":10},{"command":"rotate","category":"image","description":"Rotates an image a certain number of degrees.","help":"rotate degrees - Rotates the last posted image\\nrotate degrees url - Rotates the linked image","aliases":"none","examples":"=>rotate 90","cooldown":10},{"command":"saturation","category":"image","description":"Increases or decreases the saturation of an image.","help":"_Note: The range is -100 to 100._\\nsaturation amount - Changes the saturation of the last posted image\\nsaturation amount url - Changes the saturation of the linked image","aliases":"saturate, desaturate","examples":"=>saturation 50\\n=>saturation -25","cooldown":10},{"command":"scale","category":"image","description":"Scales an image by a certain factor.","help":"_Note: To resize by pixels instead, see resize._\\nscale factor - Scales the last posted image\\nscale factor url - Scales the linked image","aliases":"none","examples":"=>scale 1.5","cooldown":10},{"command":"sepia","category":"image","description":"Apply a sepia wash to an image.","help":"sepia url? - Apply a sepia","aliases":"none","examples":"=>sepia","cooldown":10},{"command":"sharpen","category":"image","description":"Sharpens an image.","help":"sharpen sigma? - Sharpens the last posted image\\nsharpen sigma? url - Sharpens the linked image","aliases":"sharp, sharpness","examples":"=>sharpen 5","cooldown":10},{"command":"tint","category":"image","description":"Tints the image with a color.","help":"tint #hexcolor - Tints the last posted image\\ntint #hexcolor url - Tints the linked image","aliases":"colorize, photofilter","examples":"=>tint #ff5ce1","cooldown":10},{"command":"waifu2x","category":"image","description":"Upscales an image with waifu2x.","help":"waifu2x - Upscales the first image found above\\nwaifu2x url - Upscales the image from the url\\nwaifu2x cugan url? - Changes the upscaler to real-cugan\\nwaifu2x esrgan url? - Changes the upscaler to real-esrgan\\nwaifu2x anime4k url? - Changes the upscaler to anime4k","aliases":"2x","examples":"=>waifu2x","cooldown":60},{"command":"avatar","category":"info","description":"Posts the avatar of a user.","help":"avatar - Posts your avatar\\navatar @user1 @user2 - Posts the avatar(s) of the mentioned user(s)","aliases":"av","examples":"=>avatar","cooldown":5},{"command":"banner","category":"info","description":"Posts the guild\'s banner.","help":"banner - Posts the guild banner","aliases":"none","examples":"=>banner","cooldown":5},{"command":"changelog","category":"info","description":"The most recent bot updates in chronological order.","help":"changelog num? - Sends the changelog (or specific one)","aliases":"updates","examples":"=>changelog","cooldown":10},{"command":"channels","category":"info","description":"Info on all channels.","help":"channels - Posts all of the channels","aliases":"none","examples":"=>channels","cooldown":3},{"command":"emoji","category":"info","description":"Posts the image of an emoji.","help":"emoji emoji/name - Posts an emoji from the emoji or name\\nemoji bot emoji/name - Gets an emoji from the bot\\nemoji list - Posts a list of all the emojis in the server","aliases":"none","examples":"=>emoji karenSugoi\\n=>emoji kannaHungry\\n=>emoji dev download\\n=>emoji list","cooldown":5},{"command":"emojis","category":"info","description":"Posts all emojis.","help":"emojis - Posts all of the emojis.\\nemojis info - Posts all emojis with info.","aliases":"none","examples":"=>emojis\\n=>emojis info","cooldown":3},{"command":"feedback","category":"info","description":"Sends bug reports or suggestions to the developer.","help":"feedback msg - Sends feedback to the developer","aliases":"suggest, suggestion, bug, report","examples":"=>feedback some feedback","cooldown":10},{"command":"gettingstarted","category":"info","description":"Posts getting started info.","help":"gettingstarted channel? - Sends getting started info to the channel or current one","aliases":"none","examples":"=>gettingstarted","cooldown":10},{"command":"guild","category":"info","description":"Gets information on this server.","help":"guild - Posts guild info","aliases":"server","examples":"=>guild","cooldown":5},{"command":"help","category":"info","description":"Lists all bot commands and describes how to use them.","help":"Looking for help on the help command, how ironic!\\nhelp - Lists all commands\\nhelp command - Gets detailed help on a command\\nhelp !category - Only post the specific category\\nhelp dm - Sends a compact list through dm\'s","aliases":"h","examples":"=>help\\n=>help help\\n=>help !website 2","cooldown":20},{"command":"icon","category":"info","description":"Posts the guild\'s icon.","help":"icon - Posts the guild icon","aliases":"gicon, guildicon","examples":"=>icon","cooldown":5},{"command":"info","category":"info","description":"Posts info on the bot.","help":"info - Posts bot info","aliases":"about","examples":"=>info","cooldown":5},{"command":"inrole","category":"info","description":"Lists all users in a role.","help":"inrole name/@role/id - Gets all users in this role","aliases":"roleinfo","examples":"=>inrole @kawaii","cooldown":5},{"command":"invite","category":"info","description":"Posts the invite link and support server link.","help":"invite - Posts invite","aliases":"support, contact","examples":"=>invite","cooldown":5},{"command":"privacy","category":"info","description":"Privacy policy of the bot.","help":"privacy - Privacy policy","aliases":"privacypolicy","examples":"=>privacy","cooldown":5},{"command":"rgb","category":"info","description":"Posts a visual representation of a color.","help":"rgb #color - Posts a color (word/hex/rgb)","aliases":"color","examples":"=>rgb red\\n=>rgb #FFFFFF\\n=>rgb 50 50 50","cooldown":5},{"command":"roles","category":"info","description":"Info on all roles.","help":"roles - Posts all of the roles","aliases":"none","examples":"=>roles","cooldown":3},{"command":"splash","category":"info","description":"Posts the guild\'s splash screen.","help":"splash - Posts the guild splash screen","aliases":"none","examples":"=>splash","cooldown":5},{"command":"tos","category":"info","description":"Terms of service for the bot.","help":"tos - Terms of service","aliases":"termsofservice","examples":"=>tos","cooldown":5},{"command":"usage","category":"info","description":"Get the usage statistics of a command, guild, or user.","help":"usage - Usage for all commands\\nusage command - Gets the usage of a command\\nusage guild id/name command? - Gets the usage of a guild\\nusage user id/tag command? - Gets the usage of a user\\nusage me command? - Gets your usage\\nusage guild/server command? - Gets the usage of the current guild\\nusage guild list - Usage for all guilds (Bot developer only)\\nusage user list - Usage for all users (Bot developer only)","aliases":"activity","examples":"=>usage help\\n=>usage user#6969\\n=>usage guild list","cooldown":5},{"command":"user","category":"info","description":"Gets information on a user or on yourself.","help":"user @user? - Gets info on a user","aliases":"member, whois","examples":"=>user","cooldown":5},{"command":"users","category":"info","description":"Info on all users.","help":"users - Posts all of the users","aliases":"members","examples":"=>users","cooldown":3},{"command":"furigana","category":"weeb","description":"Adds furigana to japanese text.","help":"furigana text - Adds furigana to the text","aliases":"none","examples":"=>furigana 艦隊これくしょん","cooldown":5},{"command":"hiragana","category":"weeb","description":"Converts japanese text to hiragana.","help":"hiragana text - Converts text to hiragana","aliases":"none","examples":"=>hiragana 艦隊これくしょん","cooldown":5},{"command":"jisho","category":"weeb","description":"Searches for a word or kanji on jisho.","help":"jisho word - Searches for the word","aliases":"kanji","examples":"=>jisho cute","cooldown":5},{"command":"katakana","category":"weeb","description":"Converts japanese text to katakana.","help":"katakana text - Converts the text tokatakana","aliases":"none","examples":"=>katakana 艦隊これくしょん\\n=>katakana tesuto","cooldown":5},{"command":"romaji","category":"weeb","description":"Converts japanese text to romaji.","help":"romaji text - Converts the text to romaji","aliases":"romajinize","examples":"=>romaji 艦隊これくしょん","cooldown":5},{"command":"translate","category":"weeb","description":"Translates text to another language.","help":"translate code text - Translates the text into the given language (2 letter code)\\ntranslate text - Translates the text to english\\njapanese text - Special alias for japanese translation","aliases":"tr, trans, japanese, jp","examples":"=>translate ja translate this to japanese\\n=>translate これを日本語に翻訳する\\n=>japanese this will be translated to japanese","cooldown":5},{"command":"award","category":"level","description":"Award users level xp.","help":"_Note: Remove points by awarding a negative number._\\naward @user1 @user2? points - Gives the users points","aliases":"give","examples":"=>award @user1 @user2 @user3 2000\\n=>award @user1 -99999","cooldown":10},{"command":"leaderboard","category":"level","description":"Show the guild xp leaderboard.","help":"leaderboard - Posts the leaderboard","aliases":"lb, top","examples":"=>leaderboard","cooldown":3},{"command":"levelchannels","category":"level","description":"Sets the channels where no xp will be awarded.","help":"levelchannels - Opens the level channels prompt\\nlevelchannels #channel1 #channel2 - Sets channels ignored by xp gaining\\nlevelchannels delete setting - Deletes a channel\\nlevelchannels reset - Deletes all channels","aliases":"pointchannels","examples":"=>levelchannels #spam","cooldown":10},{"command":"levelroles","category":"level","description":"Configures settings for level up roles.","help":"levelroles - Opens the levelroles prompt\\nlevelroles @role? points? msg? - Sets a new level up role.\\nlevelroles edit setting @role? points? msg? - Edits the level up role.\\nlevelroles delete setting - Deletes a level up role.\\nlevelroles reset - Deletes all level up roles.","aliases":"lr","examples":"=>levelroles\\n=>levelroles @senpai 10000\\n=>levelroles @cute 5000 You are cute!","cooldown":10},{"command":"points","category":"level","description":"Configures settings for xp gaining.","help":"_Note: Points cannot be recovered after they are deleted._\\npoints - Opens the points prompt\\npoints enable/disable? [point, range]? {threshold}? <timeout>? - Sets the specified settings.\\npoints destroy - Deletes the scores of every member in the guild\\npoints reset - Resets all point settings, excluding scores","aliases":"point, pointsettings","examples":"=>points\\n=>points enable [10, 20] {1000} <60>\\n=>points destroy","cooldown":10},{"command":"rank","category":"level","description":"Posts your rank (level and score).","help":"rank - Posts your rank","aliases":"score, level, xp","examples":"=>rank","cooldown":5},{"command":"zero","category":"level","description":"Resets your points back to zero (no undo).","help":"zero - Resets your points\\nzero @user/id - Reset someones points (Moderator only)","aliases":"resetpoints, pointreset","examples":"=>zero","cooldown":10},{"command":"calc","category":"misc","description":"Calculates a math expression.","help":"calc expression - Calculates the expression","aliases":"none","examples":"=>calc sin(1)","cooldown":3},{"command":"chain","category":"misc","description":"Runs multiple commands in succession.","help":"_Note: The limit is 5 commands (to prevent abuse). This can be used to quickly set options such as reaction roles._\\nchain cmd1 & cmd2 - Run multiple commands separated by \\"&\\"","aliases":"none","examples":"=>chain holiday & mention kurisumasu\\n=>chain kawaii & kitsune & neko\\n=>chain reactionroles [messageID] @role1 !emoji1! & reactionroles [messageID] @role2 !emoji2!","cooldown":200},{"command":"define","category":"misc","description":"Retrieves the definition of a word from merriam webster.","help":"define word - Gets the definition of the word","aliases":"def, definition, word, dictionary","examples":"=>define energy","cooldown":10},{"command":"download","category":"misc","description":"Downloads images and gifs from a text channel.","help":"_Note:_ Gifs are excluded by default, but you can include them by adding \\"gif\\".\\nThe number must be between 1 and 1000, default is 300.\\ndownload num? - Downloads the number of images in the text channel\\ndownload gif num? - Includes gifs\\ndownload id num? - Starts downloading from the message id\\ndownload id gif num? - Includes gifs","aliases":"dl","examples":"=>download 100\\n=>download gif\\n=>download gif 100","cooldown":10},{"command":"holiday","category":"misc","description":"Searches for daily holidays.","help":"holiday - Gets today\'s holiday.\\nholiday date - Gets the holiday for the date","aliases":"none","examples":"=>holiday\\n=>holiday January 20\\n=>holiday 7/3","cooldown":10},{"command":"nasa","category":"misc","description":"Posts a random picture of space.","help":"nasa - Posts a random picture\\nnasa today - Posts the astronomy picture of the day\\nnasa date? - Posts the astronomy picture of a day, YYYY-MM-DD format","aliases":"space, apod","examples":"=>nasa\\n=>nasa 2020-03-07","cooldown":10},{"command":"pokemon","category":"misc","description":"Gets information on a pokemon.","help":"pokemon query - Posts info on a pokemon","aliases":"pokedex","examples":"=>pokemon eevee","cooldown":10},{"command":"random","category":"misc","description":"Executes a random command, excluding permission related commands.","help":"random - Gets a random command","aliases":"r, rc, rand, randomcommand","examples":"=>random","cooldown":10},{"command":"screenshot","category":"misc","description":"Posts a website screenshot.","help":"screenshot url - Posts the screenshot of the webpage\\nscreenshot mobile url - Posts the screenshot of the mobile version of the site","aliases":"screencap","examples":"=>screenshot https://www.youtube.com/\\n=>screenshot mobile https://www.youtube.com/","cooldown":15},{"command":"snowflake","category":"misc","description":"Deconstructs or generates a discord snowflake.","help":"snowflake flake - Deconstructs the snowflake\\nsnowflake date? - Generates a snowflake for the current time (or date, if provided)","aliases":"none","examples":"=>snowflake\\n=>snowflake 579720679612612608","cooldown":5},{"command":"thesaurus","category":"misc","description":"Gets synonyms for a word from merriam webster.","help":"thesaurus word - Gets synonyms and antonyms for the word","aliases":"synonym","examples":"=>thesaurus said","cooldown":10},{"command":"time","category":"misc","description":"Gets the current time in a city.","help":"time city/country - Gets the time.","aliases":"clock","examples":"=>time new york","cooldown":5},{"command":"weather","category":"misc","description":"Posts the current weather in a city or zip code.","help":"weather city/zip code - Gets the weather","aliases":"forecast, climate","examples":"=>weather new york","cooldown":5},{"command":"base64","category":"misc 2","description":"Encodes or decodes a message using the base64 algorithm.","help":"base64 text - Encodes or decodes the text","aliases":"b64","examples":"=>base64 some message","cooldown":3},{"command":"bcrypt","category":"misc 2","description":"Hashes a message using the bcrypt algorithm.","help":"bcrypt text - Hashes the text","aliases":"none","examples":"=>bcrypt password","cooldown":3},{"command":"binary","category":"misc 2","description":"Converts to and from binary.","help":"binary text/binary string - Converts the text to binary, or back to text.","aliases":"bin","examples":"=>binary hello world","cooldown":3},{"command":"hastebin","category":"misc 2","description":"Uploads a message or text file to hastebin.","help":"hastebin text? - Uploads the text, or the last uploaded text file","aliases":"none","examples":"=>hastebin insert code","cooldown":3},{"command":"hexadecimal","category":"misc 2","description":"Converts a number to and from hexadecimal.","help":"_Note: Not all hexadecimal numbers contain letters, so add the param decode somewhere to explicitly convert from hex to decimal._\\nhexadecimal number/hex string decode? - Converts decimal to hexadecimal or hexadecimal to decimal","aliases":"hex","examples":"=>hexadecimal hi","cooldown":3},{"command":"json","category":"misc 2","description":"Gets the JSON data of a message, embed, guild, role, channel, or emoji.","help":"_Note: If the message contains an embed, the JSON for the embed is posted._\\njson id? - Gets the json data of the resource, or last posted message.\\njson embed - Gets the json data of the last posted embed, specifically.","aliases":"none","examples":"=>json","cooldown":3},{"command":"md5","category":"misc 2","description":"Hashes a message using the md5 algorithm.","help":"md5 text - Hashes the text","aliases":"none","examples":"=>md5 secret password","cooldown":3},{"command":"pastebin","category":"misc 2","description":"Uploads a message or text file to pastebin.","help":"pastebin [title]? text? - Uploads the text, or the last uploaded text file\\npastebin public [title]? text? - By default, the privacy is unlisted, but this makes it public","aliases":"none","examples":"=>pastebin [some code]","cooldown":3},{"command":"ping","category":"misc 2","description":"Posts the response time.","help":"ping - Posts the response time","aliases":"none","examples":"=>ping","cooldown":3},{"command":"pwned","category":"misc 2","description":"Searches have i been pwned.","help":"pwned - Posts pwned websites\\npwned query - Searches for a specific data breach","aliases":"haveibeenpwned","examples":"=>pwned\\n=>pwned myspace","cooldown":5},{"command":"shorten","category":"misc 2","description":"Shortens a url using is.gd.","help":"shorten url - Shortens the url","aliases":"none","examples":"=>shorten https://www.youtube.com/","cooldown":5},{"command":"ban","category":"mod","description":"Bans the specified users.","help":"ban @user1 @user2 reason? - Bans the user(s) with an optional reason\\nban id1 id2 reason? - Bans by user id instead of mention","aliases":"none","examples":"=>ban @user spammer","cooldown":3},{"command":"cases","category":"mod","description":"Lists all logged moderation cases.","help":"_Note: You need to enable the mod log in logs for cases to be recorded._\\ncases - All cases in the server\\ncases @user/id - Cases for a user\\ncases mod @user/id - Cases executed by this moderator","aliases":"modlog, caselog","examples":"=>cases\\n=>cases mod @moderator","cooldown":10},{"command":"deafen","category":"mod","description":"Server deafens a user.","help":"deafen @user1 @user2 reason? - Server deafens the user(s) with an optional reason\\ndeafen id1 id2 reason? - Server deafens by user id instead of mention","aliases":"deaf, vcdeaf","examples":"=>deafen @user","cooldown":3},{"command":"delete","category":"mod","description":"Deletes the specified number of messages.","help":"delete number - Deletes the number of messages, up to 1000\\ndelete number user id - Deletes the last x messages by the user\\ndelete number query - Deletes the last x messages containing the query\\ndelete number text - Deletes only text messages\\ndelete number image - Deletes only messages with images","aliases":"del, purge","examples":"=>delete 1000\\n=>delete 100 badWord","cooldown":10},{"command":"kick","category":"mod","description":"Kicks the specified users.","help":"kick @user1 @user2 reason? - Kicks the user(s) with an optional reason\\nkick id1 id2 reason? - Kicks by user id instead of mention","aliases":"none","examples":"=>kick @user annoying","cooldown":3},{"command":"mute","category":"mod","description":"Mutes the specified users.","help":"_Note: You must set a mute role first._\\nmute @user1 @user2 reason? - Mutes the user(s) with an optional reason\\nmute id1 id2 reason? - Mutes by user id instead of mention","aliases":"silence","examples":"=>mute @user shush","cooldown":3},{"command":"nsfw","category":"mod","description":"Turns nsfw on/off for the current channel.","help":"nsfw - Sets nsfw to be on or off","aliases":"none","examples":"=>nsfw","cooldown":5},{"command":"reason","category":"mod","description":"Edits the reason of a case.","help":"reason case reason? - Changes the reason","aliases":"none","examples":"=>reason 3 being bad","cooldown":5},{"command":"restrict","category":"mod","description":"Adds a restricted role to the specified users.","help":"_Note: You must set a restricted role first._\\nrestrict @user1 @user2 reason? - Restricts the user(s) with an optional reason\\nrestrict id1 id2 reason? - Restricts by user id instead of mention","aliases":"none","examples":"=>restrict @user can\'t post images","cooldown":3},{"command":"role","category":"mod","description":"Adds or removes a role from a user.","help":"role add user role - Adds the role to the specified user\\nrole del user role - Deletes the role from the specified user","aliases":"none","examples":"=>role add @user @kawaii\\n=>role del @user @normie","cooldown":5},{"command":"softban","category":"mod","description":"Bans and immediately unbans the specified users.","help":"softban @user1 @user2 reason? - softbans the user(s) with an optional reason\\nsoftban id1 id2 reason? - softbans by user id instead of mention","aliases":"none","examples":"=>softban @user spammer","cooldown":3},{"command":"tempban","category":"mod","description":"Bans a user for the specified period.","help":"_Note: Time is in 0y 0mo 0w 0d 0h 0m 0s format._\\ntempban @user1 @user2 time reason? - tempbans the user(s) with an optional reason\\ntempban id1 id2 time reason? - tempbans by user id instead of mention","aliases":"none","examples":"=>tempban @user 100y bye","cooldown":3},{"command":"tempmute","category":"mod","description":"Mutes a user for the specified period.","help":"_Note: Time is in 0y 0mo 0w 0d 0h 0m 0s format._\\ntempmute @user1 @user2 time reason? - tempmutes the user(s) with an optional reason\\ntempmute id1 id2 time reason? - tempmutes by user id instead of mention","aliases":"none","examples":"=>tempmute @user 10m","cooldown":3},{"command":"topic","category":"mod","description":"Sets the topic on the current channel.","help":"topic newtopic - Sets the new topic","aliases":"channeltopic","examples":"=>topic general chat","cooldown":5},{"command":"unban","category":"mod","description":"Unbans the specified users.","help":"unban id1 id2 reason? - Unbans the user(s) by user id, with an optional reason","aliases":"none","examples":"=>unban 593838271650332672 forgiven","cooldown":3},{"command":"undeafen","category":"mod","description":"Server undeafens a user.","help":"undeafen @user1 @user2 reason? - Server undeafens the user(s) with an optional reason\\nundeafen id1 id2 reason? - Server undeafens by user id instead of mention","aliases":"undeaf, vcundeaf","examples":"=>undeafen @user","cooldown":3},{"command":"unmute","category":"mod","description":"Unmutes users.","help":"unmute @user1 @user2 reason? - Unmutes the user(s) with an optional reason\\nunmute id1 id2 reason? - Unmutes by user id instead of mention","aliases":"none","examples":"=>unmute @user","cooldown":3},{"command":"unrestrict","category":"mod","description":"Unrestricts users.","help":"unrestrict @user1 @user2 reason? - Unrestricts the user(s) with an optional reason\\nunrestrict id1 id2 reason? - Unrestricts by user id instead of mention","aliases":"none","examples":"=>unrestrict @user shush","cooldown":3},{"command":"vckick","category":"mod","description":"Disconnects users from a voice channel.","help":"vckick @user1 @user2 reason? - Voice kicks the user(s) with an optional reason\\nvckick id1 id2 reason? - Voice kicks by user id instead of mention","aliases":"vcdisconnect","examples":"=>vckick @user earrape","cooldown":3},{"command":"vcmute","category":"mod","description":"Voice mutes a user.","help":"vcmute @user1 @user2 reason? - Voice mutes the user(s) with an optional reason\\nvcmute id1 id2 reason? - Voice mutes by user id instead of mention","aliases":"none","examples":"=>vcmute @user earrape","cooldown":3},{"command":"vcunmute","category":"mod","description":"Voice unmutes a user.","help":"vcunmute @user1 @user2 reason? - Voice unmutes the user(s) with an optional reason\\nvcunmute id1 id2 reason? - Voice unmutes by user id instead of mention","aliases":"none","examples":"=>vcunmute @user earrape","cooldown":3},{"command":"warn","category":"mod","description":"Gives users a warning.","help":"warn @user/id reason? - Warns the user for the reason","aliases":"none","examples":"=>warn @user stop spamming","cooldown":10},{"command":"warns","category":"mod","description":"Lists all warns.","help":"warns - Displays all warns.\\nwarns @user - Gets the warns of the user.\\nwarns @user edit num new warning - Edits a warning.\\nwarns @user num - Deletes a specific warning.\\nwarns @user delete - Deletes all warns.\\nwarns destroy - Deletes all warns for every member (no undo).","aliases":"none","examples":"=>warns\\n=>warns @user\\n=>warns destroy","cooldown":10},{"command":"abloop","category":"music","description":"Loops a song from point A to point B.","help":"_Note: Also see loop, the time format is the same 00:00,_\\nabloop start end - Loops the current song between the times.","aliases":"none","examples":"=>abloop 1:30 2:30","cooldown":10},{"command":"clear","category":"music","description":"Clears all effects applied to a track.","help":"clear - Clears all effects.","aliases":"none","examples":"=>clear","cooldown":10},{"command":"deletequeue","category":"music","description":"Deletes the entire queue or a range.","help":"_Note: Valid ranges are a number, or two numbers separated by dash (eg. 3-5)._\\ndeletequeue range? - Deletes the queue, or the specified range.","aliases":"none","examples":"=>deletequeue\\n=>deletequeue 1-5","cooldown":5},{"command":"fastforward","category":"music","description":"Fastforwards the position of the song.","help":"fastforward time - Fastforwards the song, time can be in 00:00, 0m 0s, or 00 format","aliases":"seek","examples":"=>fastforward 30s","cooldown":5},{"command":"loop","category":"music","description":"Loops the current track, or stops looping.","help":"loop - Loops the current track.\\nloop link/query - An alias for play loop.","aliases":"repeat","examples":"=>loop","cooldown":10},{"command":"nowplaying","category":"music","description":"Displays the currently playing song.","help":"nowplaying - Displays the song that is now playing.","aliases":"np, playing","examples":"=>nowplaying","cooldown":10},{"command":"pause","category":"music","description":"Pauses a music stream.","help":"pause - Pauses the stream","aliases":"none","examples":"=>pause","cooldown":5},{"command":"pitch","category":"music","description":"Changes the pitch of the audio (in semitones).","help":"_Note: Negative values will decrease pitch 12 semitones = 1 octave._\\npitch semitones - Changes the pitch of the song\\npitch download/dl semitones - Applies the effect to an attachment and uploads it.","aliases":"pitchshift, semitones","examples":"=>pitch 12\\n=>pitch -12","cooldown":10},{"command":"play","category":"music","description":"Plays a song from soundcloud or an attachment.","help":"_Note: You must be in a voice channel._\\nplay - Plays the default songs.\\nplay song - Searches for songs on soundcloud and plays the one that you pick.\\nplay first song - Plays the first result automatically.\\nplay reverse song - Starts playback in reverse mode.\\nplay loop song - Starts playback in loop mode.","aliases":"pl, stream","examples":"=>play\\n=>play reverse first synthion comet","cooldown":15},{"command":"queue","category":"music","description":"Displays the full queue of songs.","help":"queue - Shows the queue of songs.","aliases":"none","examples":"=>queue","cooldown":10},{"command":"resume","category":"music","description":"Resumes a paused music stream.","help":"resume - Resumes the stream","aliases":"none","examples":"=>resume","cooldown":5},{"command":"reverse","category":"music","description":"Reverses the current audio.","help":"reverse - Reverses the song that is playing.\\nreverse link/query - An alias for play reverse\\nreverse download/dl - Applies the effect on an mp3 attachment and uploads it.","aliases":"none","examples":"=>reverse","cooldown":15},{"command":"rewind","category":"music","description":"Rewinds the position of the song.","help":"rewind time - Rewinds the song, time can be in 00:00, 0m 0s, or 00 format","aliases":"seek","examples":"=>rewind 10s","cooldown":5},{"command":"scrub","category":"music","description":"Starts playing from a new position.","help":"_Note: The song will be skipped if the position is longer than the song length._\\nscrub time? - Starts playing at the time in 00:00, 0m 0s, or 00 format","aliases":"seek","examples":"=>scrub 1:00","cooldown":5},{"command":"shuffle","category":"music","description":"Shuffles the queue.","help":"shuffle - Shuffles the queue.","aliases":"none","examples":"=>shuffle","cooldown":5},{"command":"skip","category":"music","description":"Skips a song, or skips to a song.","help":"skip - Skips to the next song.\\nskip num/name - Skips to the song at the position, or with the given title.","aliases":"none","examples":"=>skip 3\\n=>skip rainfall","cooldown":5},{"command":"speed","category":"music","description":"Changes the song speed (and optionally, pitch as well).","help":"_Note: Speed changes are based on the speed of the original file._\\nspeed factor - Changes the speed by a factor (eg. 2.0x, 0.5x speed)\\nspeed factor pitch - The pitch will change along with the speed.\\nspeed download/dl factor pitch? - Applies the effect on an mp3 attachment and uploads it.","aliases":"timestretch, tempo","examples":"=>speed 1.5x\\n=>speed 0.7x pitch\\n=>speed download 2.5x","cooldown":10},{"command":"stop","category":"music","description":"Stops a music stream and leaves the voice channel.","help":"stops - Stops playback","aliases":"disconnect","examples":"=>stop","cooldown":5},{"command":"volume","category":"music","description":"Sets the volume of the music stream.","help":"volume num - Sets the volume (0-2)","aliases":"none","examples":"=>volume 1.5","cooldown":5},{"command":"allpass","category":"music 2","description":"Applies an allpass filter.","help":"_Note: Frequency and width are in Hz._\\nallpass freq? width? - Adds an allpass filter with the specified parameters.\\nallpass download/dl freq? width? - Applies the effect to an attachment and uploads it.","aliases":"none","examples":"=>allpass 600 100","cooldown":20},{"command":"bandpass","category":"music 2","description":"Applies a bandpass filter.","help":"bandpass freq? width? - Applies a bandpass filter to the audio file with the parameters.\\nbandpass download/dl freq? width? - Applies a bandpass filter to an attachment and uploads it.","aliases":"none","examples":"=>bandpass 1000 100\\n=>bandpass 640 60","cooldown":20},{"command":"bandreject","category":"music 2","description":"Applies a bandreject filter.","help":"bandreject freq? width? - Applies a bandreject filter to the audio file with the parameters.\\nbandreject download/dl freq? width? - Applies a bandreject filter to an attachment and uploads it.","aliases":"none","examples":"=>bandreject 500 50\\n=>bandreject 700 100","cooldown":20},{"command":"bitcrush","category":"music 2","description":"Applies bitcrushing (downsampling) effect.","help":"bitcrush factor? - Applies bitcrush to the audio file with the parameters.\\nbitcrush download/dl factor? - Applies bitcrush to an attachment and uploads it.","aliases":"downsample","examples":"=>bitcrush 2\\n=>bitcrush download 4","cooldown":20},{"command":"chorus","category":"music 2","description":"Applies a chorus effect.","help":"chorus delay? decay? speed? depth? - Applies chorus to the audio file with the parameters.\\nchorus download/dl delay? decay? speed? depth? - Applies chorus to an attachment and uploads it.","aliases":"none","examples":"=>chorus 55 0.3 25 3\\n=>chorus download 50 0.5 30 2","cooldown":20},{"command":"compress","category":"music 2","description":"Applies compression (reduces dynamic range).","help":"_Note: This is a simple compression effect, set the amount from 0-100._\\ncompress amount? - Applies compression to the audio file with the parameters.\\ncompress download/dl amount? - Applies compression to an attachment and uploads it.","aliases":"none","examples":"=>compress 75\\n=>compress 90","cooldown":20},{"command":"delay","category":"music 2","description":"Applies a delay effect.","help":"_Note: You can add a variable number of delay and decay pairs. An odd amount of arguments is invalid. The unit is milliseconds._\\ndelay delay decay ...delay decay pairs? - Applies delay to the audio file with the parameters.\\ndelay download/dl - Applies delay to an attachment and uploads it.","aliases":"none","examples":"=>delay 80 0.4 60 0.5\\n=>delay download 1000 0.5 400 0.7","cooldown":20},{"command":"distortion","category":"music 2","description":"Applies distortion effect.","help":"distortion gain? color? - Applies distortion to the audio file with the parameters.\\ndistortion download/dl gain? color? - Applies distortion to an attachment and uploads it.","aliases":"overdrive","examples":"=>distortion 10 10\\n=>distortion download 20 20","cooldown":20},{"command":"effects","category":"music 2","description":"Opens the effects menu.","help":"effects - Opens the effects menu.","aliases":"fx","examples":"=>effects","cooldown":20},{"command":"equalizer","category":"music 2","description":"Opens the equalizer menu.","help":"equalizer - Opens the equalizer.","aliases":"eq","examples":"=>equalizer","cooldown":20},{"command":"flanger","category":"music 2","description":"Applies a flanger effect.","help":"_Note: Parameters are delay (0-30), depth (0-10), regen (-95-95), width (0-100), speed (0.1-10), shape (sin/tri), phase (0-100), and interp (lin/quad)._\\nflanger delay? depth? regen? width? speed? shape? phase? interp? - Applies flanger to the audio file with the parameters.\\nflanger download/dl delay? depth? regen? width? speed? shape? phase? interp? - Applies flanger to an attachment and uploads it.","aliases":"flg","examples":"=>flanger 100 30 40 60 30 10 30 20\\n=>flanger download 300 20 40 60 10 50 10 50","cooldown":20},{"command":"highpass","category":"music 2","description":"Applies a highpass filter.","help":"highpass freq? width? - Applies a highpass filter to the audio file with the parameters.\\nhighpass download/dl freq? width? - Applies a highpass filter to an attachment and uploads it.","aliases":"lowcut","examples":"=>highpass 400 50\\n=>highpass 600 100","cooldown":20},{"command":"highshelf","category":"music 2","description":"Applies a highshelf filter (boosts treble).","help":"highshelf gain? freq? width? - Applies a highshelf filter to the audio file with the parameters.\\nhighshelf download/dl gain? freq? width? - Applies a highshelf filter to an attachment and uploads it.","aliases":"none","examples":"=>highshelf 4 3000 100\\n=>highshelf 2 1000 50","cooldown":20},{"command":"lowpass","category":"music 2","description":"Applies a lowpass filter.","help":"lowpass freq? width? - Applies a lowpass filter to the audio file with the parameters.\\nlowpass download/dl freq? width? - Applies a lowpass filter to an attachment and uploads it.","aliases":"lowcut","examples":"=>lowpass 2000 50\\n=>lowpass 1000 100","cooldown":20},{"command":"lowshelf","category":"music 2","description":"Applies a lowshelf filter (boosts bass).","help":"lowshelf gain? freq? width? - Applies a lowshelf filter to the audio file with the parameters.\\nlowshelf download/dl gain? freq? width? - Applies a lowshelf filter to an attachment and uploads it.","aliases":"none","examples":"=>lowshelf 4 300 100\\n=>lowshelf 2 200 50","cooldown":20},{"command":"peak","category":"music 2","description":"Applies a peak filter.","help":"peak freq? resonance? gain? - Applies a peak filter to the audio file with the parameters.\\npeak download/dl freq? resonance? gain? - Applies a peak filter to an attachment and uploads it.","aliases":"none","examples":"=>peak 1000 1 3\\n=>peak 3000 2 -4","cooldown":20},{"command":"phaser","category":"music 2","description":"Applies a phaser effect.","help":"phaser delay? decay? speed? - Applies phaser to the audio file with the parameters.\\nphaser download/dl delay? decay? speed? - Applies phaser to an attachment and uploads it.","aliases":"none","examples":"=>phaser 3 0.5 0.5\\n=>phaser download 1 0.4 2","cooldown":20},{"command":"reverb","category":"music 2","description":"Applies a reverb effect.","help":"_Note: The first four parameters are percentages, pre-delay is in milliseconds and gain is in decibels._\\nreverb amount? damping? room? stereo? pre-delay? wet-gain? - Applies a reverb with the specified parameters.\\nreverb reverse amount? damping? room? stereo? pre-delay? wet-gain? - Applies a reverse reverb effect.\\nreverb download/dl reverse? amount? damping? room? stereo? pre-delay? wet-gain? - Applies the effect to an attachment and uploads it.","aliases":"none","examples":"=>reverb 50 50 100 100 0 0\\n=>reverb reverse 75 25 100 100 0 0","cooldown":5},{"command":"tremolo","category":"music 2","description":"Applies tremolo (amplitude modulation) effect.","help":"tremolo speed? depth? - Applies a tremolo effect to the audio file with the parameters.\\ntremolo download/dl speed? depth? - Applies a tremolo effect to an attachment and uploads it.","aliases":"none","examples":"=>tremolo 10 40\\n=>tremolo 20 80","cooldown":20},{"command":"upsample","category":"music 2","description":"Applies upsampling effect.","help":"upsample factor? - Applies upsampling to the audio file with the parameters.\\nupsample download/dl factor? - Applies upsampling to an attachment and uploads it.","aliases":"none","examples":"=>upsample 2\\n=>upsample download 4","cooldown":20},{"command":"autoplay","category":"music 3","description":"Autoplays default songs when there are no songs left in the queue.","help":"autoplay - Toggles autoplay.","aliases":"none","examples":"=>autoplay","cooldown":5},{"command":"bassboost","category":"music 3","description":"Preset for lowshelf (500Hz, +5db).","help":"bassboost - Applies bass boosting (lowshelf 10 500 100)","aliases":"bass","examples":"=>bassboost","cooldown":20},{"command":"connect","category":"music 3","description":"Connects to a voice channel.","help":"connect channel/mention/id? - Joins the channel you are in, or the channel mentioned.","aliases":"join","examples":"=>connect","cooldown":10},{"command":"nightcore","category":"music 3","description":"Preset for speed (1.3x pitch).","help":"nightcore - Applies a nightcore effect (speed 1.3x pitch)","aliases":"none","examples":"=>nightcore","cooldown":10},{"command":"record","category":"music 3","description":"Records your voice and uploads the recording.","help":"_Note: Recording is stopped when there is no more voice activity._\\nrecord name? - Starts recording, the name is the filename.","aliases":"none","examples":"=>record","cooldown":10},{"command":"trebleboost","category":"music 3","description":"Preset for highshelf (1000Hz, +5db).","help":"trebleboost - Applies treble boosting (highshelf 5 1000 100)","aliases":"treble","examples":"=>trebleboost","cooldown":20},{"command":"2dgirlseatingcutely","category":"reddit","description":"2D girls eating cutely.","help":"2dgirlseatingcutely - Gets a random post from r/2dgirlseatingcutely","aliases":"eat, eating, animeeating","examples":"=>2dgirlseatingcutely","cooldown":10},{"command":"animeblush","category":"reddit","description":"Anime blushing.","help":"animeblush - Gets a random post from r/animeblush","aliases":"none","examples":"=>animeblush","cooldown":10},{"command":"animegifs","category":"reddit","description":"Anime GIFs.","help":"animegifs - Gets a random post from r/animegifs","aliases":"none","examples":"=>animegifs","cooldown":10},{"command":"animegirlsinkimonos","category":"reddit","description":"Anime girls in kimonos.","help":"animegirlsinkimonos - Gets a random post from r/animegirlsinkimonos","aliases":"none","examples":"=>animegirlsinkimonos","cooldown":10},{"command":"animeirl","category":"reddit","description":"Relatable anime memes.","help":"animeirl - Gets a random post from r/anime_irl","aliases":"none","examples":"=>animeirl","cooldown":10},{"command":"animelegs","category":"reddit","description":"Anime legs.","help":"animelegs - Gets a random post from r/animelegs","aliases":"none","examples":"=>animelegs","cooldown":10},{"command":"animemes","category":"reddit","description":"Anime memes.","help":"animemes - Gets a random post from r/animemes","aliases":"none","examples":"=>animemes","cooldown":10},{"command":"animenocontext","category":"reddit","description":"Dialogue with no context!","help":"animenocontext - Gets a random post from r/animenocontext","aliases":"none","examples":"=>animenocontext","cooldown":10},{"command":"animeponytails","category":"reddit","description":"Anime ponytails.","help":"animeponytails - Gets a random post from r/animeponytails","aliases":"none","examples":"=>animeponytails","cooldown":10},{"command":"animesnowscapes","category":"reddit","description":"Anime snowscapes.","help":"animesnowscapes - Gets a random post from r/animesnowscapes","aliases":"none","examples":"=>animesnowscapes","cooldown":10},{"command":"animewallpaper","category":"reddit","description":"Anime wallpapers.","help":"animewallpaper - Gets a random post from r/animewallpaper","aliases":"none","examples":"=>animewallpaper","cooldown":10},{"command":"awwnime","category":"reddit","description":"Cute anime girls.","help":"awwnime - Gets a random post from r/awwnime","aliases":"none","examples":"=>awwnime","cooldown":10},{"command":"moestash","category":"reddit","description":"Lots of moe art.","help":"moestash - Gets a random post from r/moestash","aliases":"redditbooru","examples":"=>moestash","cooldown":10},{"command":"programmeranimemes","category":"reddit","description":"Yeah, this is a thing.","help":"programmeranimemes - Gets a random post from r/programmeranimemes","aliases":"panimemes","examples":"=>programmeranimemes","cooldown":10},{"command":"ranime","category":"reddit","description":"Get a post from r/anime.","help":"ranime - Gets a random post from r/anime","aliases":"none","examples":"=>ranime","cooldown":10},{"command":"reddit","category":"reddit","description":"Searches posts on a reddit subreddit.","help":"reddit - Gets a random post\\nreddit subreddit query? - Searches for posts in the subreddit or gets random ones\\nreddit subreddit hot/new/top/rising/controversial - Gets hot, new, top, etc. posts in the board\\nreddit user query - Searches for users\\nreddit url - Gets the post from the url","aliases":"r","examples":"=>reddit\\n=>reddit anime cute\\n=>reddit animemes hot","cooldown":10},{"command":"smugs","category":"reddit","description":"Smug anime girls.","help":"smugs - Gets a random post from r/smugs","aliases":"none","examples":"=>smugs","cooldown":10},{"command":"streetmoe","category":"reddit","description":"Anime characters wearing streetwear.","help":"streetmoe - Gets a random post from r/streetmoe","aliases":"none","examples":"=>streetmoe","cooldown":10},{"command":"gifspeed","category":"video","description":"Speeds up a gif by constraining the amount of frames.","help":"_Note: If you use a factor, a period is required. Otherwise a frame amount is assumed._\\ngifspeed - The default frame amount is 20.\\ngifspeed frames/factor - Speeds up the last posted gif.\\ngifspeed frames/factor url - Speeds up the linked gif.","aliases":"gspeed, cgif, constraingif, compressgif","examples":"=>gifspeed 20\\n=>gifspeed 1.5","cooldown":20},{"command":"reversevideo","category":"video","description":"Reverses a video.","help":"reversevideo - Reverses the last posted video\\nreversevideo url - Reverses the linked video","aliases":"vreverse, reversevid","examples":"=>reversevideo","cooldown":20},{"command":"aqua","category":"waifu","description":"Posts pictures of aqua.","help":"aqua - Posts aqua pictures.","aliases":"none","examples":"=>aqua","cooldown":10},{"command":"chino","category":"waifu","description":"Posts pictures of chino.","help":"chino - Posts chino pictures.","aliases":"none","examples":"=>chino","cooldown":10},{"command":"emilia","category":"waifu","description":"Posts pictures of emilia.","help":"emilia - Posts emilia pictures.","aliases":"none","examples":"=>emilia","cooldown":10},{"command":"felt","category":"waifu","description":"Posts pictures of felt.","help":"felt - Posts felt pictures.","aliases":"none","examples":"=>felt","cooldown":10},{"command":"gab","category":"waifu","description":"Posts pictures of gabriel.","help":"gab - Posts gabriel pictures.","aliases":"gabriel, tenma","examples":"=>gab","cooldown":10},{"command":"hibiki","category":"waifu","description":"Posts pictures of hibiki.","help":"hibiki - Posts hibiki pictures.","aliases":"none","examples":"=>hibiki","cooldown":10},{"command":"kanna","category":"waifu","description":"Posts pictures of kanna.","help":"kanna - Posts kanna pictures.","aliases":"kannakamui","examples":"=>kanna","cooldown":10},{"command":"karen","category":"waifu","description":"Posts pictures of karen.","help":"karen - Posts karen pictures.","aliases":"karenkujo","examples":"=>karen","cooldown":10},{"command":"kisaragi","category":"waifu","description":"Posts pictures of kisaragi.","help":"kisaragi - Posts kisaragi pictures.","aliases":"none","examples":"=>kisaragi","cooldown":10},{"command":"klee","category":"waifu","description":"Posts pictures of klee.","help":"klee - Posts klee pictures.","aliases":"none","examples":"=>klee","cooldown":10},{"command":"laffey","category":"waifu","description":"Posts pictures of laffey.","help":"laffey - Posts laffey pictures.","aliases":"none","examples":"=>laffey","cooldown":10},{"command":"maika","category":"waifu","description":"Posts pictures of maika.","help":"maika - Posts maika pictures.","aliases":"none","examples":"=>maika","cooldown":10},{"command":"megumin","category":"waifu","description":"Posts pictures of megumin.","help":"megumin - Posts megumin pictures.","aliases":"none","examples":"=>megumin","cooldown":10},{"command":"miku","category":"waifu","description":"Posts pictures of hatsune miku.","help":"miku - Posts hatsune miku pictures.","aliases":"hatsunemiku","examples":"=>miku","cooldown":10},{"command":"raphi","category":"waifu","description":"Posts pictures of raphiel.","help":"raphi - Posts raphiel pictures.","aliases":"raphiel","examples":"=>raphi","cooldown":10},{"command":"sagiri","category":"waifu","description":"Posts pictures of sagiri.","help":"sagiri - Posts sagiri pictures.","aliases":"sagiriizumi","examples":"=>sagiri","cooldown":10},{"command":"satania","category":"waifu","description":"Posts pictures of satania.","help":"satania - Posts satania pictures.","aliases":"none","examples":"=>satania","cooldown":10},{"command":"sistine","category":"waifu","description":"Posts pictures of sistine.","help":"sistine - Posts sistine pictures.","aliases":"sistinefibel","examples":"=>sistine","cooldown":10},{"command":"tapris","category":"waifu","description":"Posts pictures of tapris.","help":"tapris - Posts tapris pictures.","aliases":"none","examples":"=>tapris","cooldown":10},{"command":"tohru","category":"waifu","description":"Posts pictures of tohru.","help":"tohru - Posts tohru pictures.","aliases":"none","examples":"=>tohru","cooldown":10},{"command":"uzuki","category":"waifu","description":"Posts pictures of uzuki.","help":"uzuki - Posts uzuki pictures.","aliases":"none","examples":"=>uzuki","cooldown":10},{"command":"vigne","category":"waifu","description":"Posts pictures of vigne.","help":"vigne - Posts vigne pictures.","aliases":"vignette","examples":"=>vigne","cooldown":10},{"command":"yayoi","category":"waifu","description":"Posts pictures of yayoi.","help":"yayoi - Posts yayoi pictures.","aliases":"none","examples":"=>yayoi","cooldown":10},{"command":"4chan","category":"website","description":"Searches for posts and images on 4chan.","help":"_Note: NSFW boards are restricted to nsfw channels._\\n4chan images? - Default search is \\"a anime\\".\\n4chan board query - Searches the specified board with the query.\\n4chan images board query - Similar, but only sends all of the images.","aliases":"4, 4ch","examples":"=>4chan\\n=>4chan a kawaii\\n=>4chan images c cute","cooldown":15},{"command":"anilist","category":"website","description":"Searches for anime and manga on anilist.","help":"anilist query - Searches for anime matching the query\\nanilist manga query - Searches for manga with the query\\nanilist user name - Gets an anilist user profile","aliases":"animelist","examples":"=>anilist eromanga sensei","cooldown":10},{"command":"bandcamp","category":"website","description":"Searches for artists, tracks, and albums on bandcamp.","help":"bandcamp query - Searches for everything matching the query","aliases":"bc","examples":"=>bandcamp kawaii future bass","cooldown":5},{"command":"deviantart","category":"website","description":"Searches for deviantart deviations and users.","help":"deviantart - Gets popular deviations by default.\\ndeviantart link - Gets the deviation from the link.\\ndeviantart query - Gets deviations from the query.\\ndeviantart user - Gets the profile of a user.\\ndeviantart gallery user - Gets the deviations from the user.\\ndeviantart daily date? - Gets daily deviations, optional date in yyyy-mm-dd format.\\ndeviantart hot category? - Gets hot deviations, optional category.\\ndeviantart new query? - Gets new deviations, optional query.\\ndeviantart popular query? - Gets popular deviations, optional query.","aliases":"da, deviant","examples":"=>deviantart anime\\n=>deviantart user name\\n=>deviantart daily 2019-07-03\\n=>deviantart popular konosuba\\n=>deviantart hot manga","cooldown":30},{"command":"giphy","category":"website","description":"Searches for a gif on giphy.","help":"giphy - Gets a random gif\\ngiphy query - Searches giphy for the query.","aliases":"gif","examples":"=>giphy\\n=>giphy anime","cooldown":5},{"command":"google","category":"website","description":"Searches a search term on google.","help":"google query - Searches google for the query.","aliases":"g","examples":"=>google anime","cooldown":10},{"command":"images","category":"website","description":"Searches for images on google images.","help":"images query - Searches google images for the query.","aliases":"i, image, googleimages","examples":"=>images anime","cooldown":10},{"command":"mal","category":"website","description":"Searches for anime, characters, and users on myanimelist.","help":"mal - Gets the top anime\\nmal query - Searches for anime matching the query\\nmal character query - Searches for characters with the query\\nmal user query - Searches for users matching the query","aliases":"myanimelist","examples":"=>mal gabriel dropout\\n=>mal satania","cooldown":10},{"command":"pinterest","category":"website","description":"Searches for images on pinterest.","help":"pinterest query - Searches pinterest for the query\\npinterest user username - Searches for pins by the user\\npinterest board username boardname - Searches for pins in a user\'s board","aliases":"pint","examples":"=>pinterest anime\\n=>pinterest user name\\n=>pinterest board name anime","cooldown":15},{"command":"saucenao","category":"website","description":"Finds the source of an anime picture, avatar, or guild icon.","help":"saucenao - Searches the last posted image (or your avatar)\\nsauceno url - Searches the linked image\\nsaucenao @user/id - Searches a user\'s avatar\\nsaucenao guild - Searches the guild icon\\nsaucenao me - Searches for your icon","aliases":"sn","examples":"=>saucenao\\n=>saucenao @user","cooldown":10},{"command":"soundcloud","category":"website","description":"Searches for soundcloud tracks, users, and playlists or downloads them.","help":"_Note: The first search result is downloaded if you provide a query for the download._\\nsoundcloud query - Searches for tracks with the query\\nsoundcloud user query - Searches for users with the query\\nsoundcloud playlist query - Searches for playlists with the query\\nsoundcloud url - Fetches the resource from the url\\nsoundcloud download/dl url/query - Downloads the track from url/query","aliases":"sc","examples":"=>soundcloud anime\\n=>soundcloud user synthion\\n=>soundcloud playlist kawaii","cooldown":10},{"command":"spotify","category":"website","description":"Searches for spotify tracks and artists.","help":"spotify query - Searches for tracks with the query\\nspotify artist query - Searches artists with the query","aliases":"none","examples":"=>spotify virtual riot\\n=>spotify artist synthion","cooldown":10},{"command":"trello","category":"website","description":"Searches for trello boards and users.","help":"trello query - Searches for users with the query\\ntrello url - Fetches the board from the url","aliases":"none","examples":"=>trello name\\n=>trello https://trello.com/b/boardID","cooldown":10},{"command":"twitch","category":"website","description":"Searches for twitch streams and channels.","help":"twitch query - Searches for streams with the query\\ntwitch channel query - Searches for a channel\\ntwitch url - Gets the resource from the url","aliases":"tw","examples":"=>twitch osu\\n=>twitch channel name","cooldown":10},{"command":"wikipedia","category":"website","description":"Searches for wikipedia articles.","help":"wikipedia - Gets a random article\\nwikipedia query - Searches for an article\\nwikipedia url - Gets the article from the url","aliases":"w, wiki","examples":"=>wikipedia\\n=>wikipedia anime","cooldown":10},{"command":"appstore","category":"website 2","description":"Searches for apps on the iphone app store.","help":"appstore query - Searches the app store with the query.\\nappstore url - Searches for the url","aliases":"app, istore","examples":"=>appstore geometry dash","cooldown":15},{"command":"crunchyroll","category":"website 2","description":"Searches for an anime on crunchyroll.","help":"crunchyroll url/query - Searches crunchyroll for the url/query.","aliases":"cr, crunchy","examples":"=>crunchyroll konosuba","cooldown":10},{"command":"github","category":"website 2","description":"Searches for github repositories and users.","help":"github query - Searches for repositories with the query\\ngithub user query - Searches for users with the query","aliases":"gh","examples":"=>github anime\\n=>github user github","cooldown":30},{"command":"googleplay","category":"website 2","description":"Searches for apps on the google play store.","help":"googleplay query - Searches google play with the query.","aliases":"gplay, playstore","examples":"=>googleplay discord","cooldown":15},{"command":"imdb","category":"website 2","description":"Searches for movies and tv shows on imdb.","help":"imdb query - Searches for a movie or tv series.","aliases":"movie, film","examples":"=>imdb dragon maid\\n=>imdb konosuba","cooldown":10},{"command":"imgur","category":"website 2","description":"Searches for images on imgur.","help":"imgur query - Searches for images with the query","aliases":"img, image","examples":"=>imgur anime","cooldown":5},{"command":"itunes","category":"website 2","description":"Searches the itunes store for tracks.","help":"itunes query - Searches itunes with the query.","aliases":"none","examples":"=>itunes anime","cooldown":15},{"command":"mdn","category":"website 2","description":"Searches the mdn docs.","help":"mdn query - Searches mdn for the query\\nmdn url - Searches the url","aliases":"jsref","examples":"=>mdn array","cooldown":5},{"command":"npm","category":"website 2","description":"Searches for packages on the npm registry.","help":"npm query - Searches for packages with the query","aliases":"none","examples":"=>npm pixiv.ts","cooldown":5},{"command":"patreon","category":"website 2","description":"Searches for a patreon creator.","help":"patreon creator - Searches for the creator page of the creator.","aliases":"none","examples":"=>patreon creator","cooldown":10},{"command":"tenor","category":"website 2","description":"Searches for gifs on tenor.","help":"tenor - Posts a random gif\\ntenor query - Searches for a gif with the query\\ntenor url - Gets the gif from the url","aliases":"ten","examples":"=>tenor\\n=>tenor anime","cooldown":5},{"command":"urban","category":"website 2","description":"Searches for words on urban dictionary.","help":"urban - Posts a random word\\nurban word - Searches for a word in the dictionary","aliases":"none","examples":"=>urban\\n=>urban anime","cooldown":5},{"command":"wattpad","category":"website 2","description":"Searches for stories on wattpad.","help":"wattpad query - Searches for stories","aliases":"none","examples":"=>wattpad gabriel dropout","cooldown":10},{"command":"xkcd","category":"website 2","description":"Searches for an xkcd comic.","help":"xkcd - Posts the most recent comic\\nxkcd id/url - Gets a comic by id or url\\nxkcd today - Posts today\'s comic","aliases":"none","examples":"=>xkcd\\n=>xkcd 42","cooldown":5},{"command":"youtube","category":"website 2","description":"Searches for youtube videos, channels, and playlists.","help":"_Note: If a query is provided for the download, the first search result is downloaded._\\nyoutube query - Searches for youtube videos\\nyoutube channel query - Searches for youtube channels\\nyoutube playlist query - Searches for youtube playlists\\nyoutube video query - Searches for videos (long form)","aliases":"yt","examples":"=>youtube anime\\n=>youtube channel mychannel\\n=>youtube playlist kawaii music","cooldown":10},{"command":"bots","category":"website 3","description":"Searches for bots on discord.bots.gg.","help":"bots - Gets a random bot.\\nbots query - Searches for bots with the query.","aliases":"bot, discordbots","examples":"=>bots kisaragi","cooldown":15},{"command":"flickr","category":"website 3","description":"Searches for images on flickr.","help":"flickr query? - Searches for images.\\nflickr user query - Searches for the profile of a user.","aliases":"none","examples":"=>flickr anime","cooldown":10},{"command":"gravatar","category":"website 3","description":"Gets the profile picture of a gravatar email.","help":"_Note: The invocation of this command is removed for privacy reasons._\\ngravatar email - Gets the profile picture of the email","aliases":"none","examples":"=>gravatar someone@gmail.com","cooldown":10},{"command":"stackexchange","category":"website 3","description":"Searches for questions on a stack exchange site, use alias `stackoverflow` for stack overflow.","help":"_Note: You must use the stackoverflow alias in order to search on stackoverflow._\\nstackoverflow query - Gets questions and answers from stack overflow\\nstackexchange site query - Gets questions and answers from the stack exchange site","aliases":"stack, stackoverflow","examples":"=>stackoverflow typescript\\n=>stackexchange anime slice of life","cooldown":10},{"command":"steam","category":"website 3","description":"Searches the steam store.","help":"steam query - Searches steam.","aliases":"none","examples":"=>steam anime","cooldown":10},{"command":"topgg","category":"website 3","description":"Searches for bots on top.gg (discord bot list).","help":"_Note: You can refine the search by specifying a certain property:value. Example: username:kisaragi, prefix:=>, owners:ID_\\ntopgg - Search for new bots.\\ntopgg query - Searches for bots with the query.","aliases":"dbl, discordbotlist","examples":"=>topgg anime\\n=>topgg shortdesc:anime","cooldown":15},{"command":"tumblr","category":"website 3","description":"Searches for tumblr posts and blogs.","help":"tumblr query - Searches for posts.\\ntumblr blog name - Gets all posts from the blog.","aliases":"none","examples":"=>tumblr anime","cooldown":10},{"command":"yelp","category":"website 3","description":"Searches for businesses on yelp.","help":"_Note: Put the location in brackets. Default is New York City._\\nyelp query [location?] - Search for businesses in the location","aliases":"none","examples":"=>yelp mcdonalds","cooldown":10}]')
// EXTERNAL MODULE: ./node_modules/react-string-replace/index.js
var react_string_replace = __webpack_require__(9947);
var react_string_replace_default = /*#__PURE__*/__webpack_require__.n(react_string_replace);
;// CONCATENATED MODULE: ./components/styles/commands.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./components/Commands.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 








let Commands_$;


if (typeof window !== "undefined") {
    Commands_$ = __webpack_require__(3486);
}
const categories = [
    "admin",
    "anime",
    "config",
    "fun",
    "game",
    "heart",
    "image",
    "info",
    "weeb",
    "level",
    "booru",
    "misc",
    "mod",
    "music",
    "music 2",
    "video",
    "waifu",
    "website",
    "website 2",
    "music 3",
    "reddit",
    "twitter",
    "misc 2",
    "website 3",
    "botdev"
];
let searchText = "";
const Commands = (props)=>{
    const [ignored, forceUpdate] = (0,react.useReducer)((x)=>x + 1, 0);
    const [category, setCategory] = (0,react.useState)("none");
    const [commandExpanded, setCommandExpanded] = (0,react.useState)(false);
    const [imageExpanded, setImageExpanded] = (0,react.useState)(false);
    const [searching, setSearching] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        document.title = "Commands";
        const commandStorage = localStorage.getItem("commands");
        if (commandStorage) {
            handleClick("reload");
        }
    }, []);
    (0,react.useEffect)(()=>{
        const color = Commands_$(".command-box").css("border-color");
        if (color) {
            Commands_$(".commands-search-container").css("border-color", color);
            Commands_$(".commands-search-button").css("background-color", color);
            Commands_$(".commands-search").css("color", color);
        }
    });
    const searchCommands = ()=>{
        let query = searchText;
        query = query.toLowerCase();
        const foundCommands = commands_namespaceObject.filter((c)=>{
            for(let i = 0; i < Object.values(c).length; i++){
                if (String(Object.values(c)[i]).toLowerCase().includes(query)) return true;
            }
            return false;
        });
        const jsx = [];
        for(let i = 0; i < foundCommands.length; i++){
            const command = foundCommands[i];
            jsx.push(generateJSX(command));
        }
        localStorage.setItem("commands", `search: ${searchText}`);
        return jsx;
    };
    const expandReset = ()=>{
        Commands_$(".example-image").css("display", "none");
        Commands_$(".show-pic-container").css("display", "flex");
        Commands_$(".command-details").css("display", "none");
    };
    const expandCommand = (event)=>{
        setCommandExpanded((prev)=>!prev);
        const current = Commands_$(event.target).closest(".command-box");
        if (current.find(".example-image").css("display") !== "none") {
            current.find(".example-image").slideUp();
            current.find(".show-pic-container").slideDown();
        }
        current.find(".command-details").slideToggle();
    };
    const expandImage = (event)=>{
        setImageExpanded(true);
        const current = Commands_$(event.target).closest(".command-box");
        current.find(".example-image").slideDown();
        current.find(".show-pic-container").slideUp();
    };
    const contractImage = (event)=>{
        setImageExpanded(false);
        const current = Commands_$(event.target).closest(".command-box");
        current.find(".example-image").slideUp();
        current.find(".show-pic-container").slideDown();
    };
    const commandColumns = ()=>{
        let current = category;
        if (current === "reload") {
            current = localStorage.getItem("commands") ?? "";
            if (current.includes("search")) {
                const query = current.split(":").slice(1).join(" ").trim();
                searchText = query;
                current = "search";
            }
        }
        if (current === "search") return searchCommands();
        if (!current || current === "none") return;
        const categoryCommands = commands_namespaceObject.filter((c)=>c.category === current);
        const jsx = [];
        for(let i = 0; i < categoryCommands.length; i++){
            const command = categoryCommands[i];
            jsx.push(generateJSX(command));
        }
        return jsx;
    };
    const handleClick = (value)=>{
        if (category !== "search" && category !== "reload" && category === value) value = "none";
        if (value !== "reload") {
            localStorage.setItem("commands", value);
            expandReset();
        }
        setCategory(value);
        forceUpdate();
    };
    const generateRows = (columns)=>{
        const iterations = Functions.perfectDivision(categories.length, columns);
        const rawJSX = [];
        for(let i = 0; i < iterations; i++){
            if (!categories[i]) {
                rawJSX.push(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: `assets/labels/${categories[categories.length - 1].replace(/ +/g, "")}.png`,
                    width: "157",
                    height: "46",
                    className: `category ${categories[categories.length - 1].replace(/ +/g, "")}`,
                    style: {
                        visibility: "hidden"
                    }
                }, categories[i]));
            } else {
                rawJSX.push(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: `assets/labels/${categories[i].replace(/ +/g, "")}.png`,
                    width: "157",
                    height: "46",
                    className: `category ${categories[i].replace(/ +/g, "")}`,
                    onClick: ()=>handleClick(categories[i])
                }, categories[i]));
            }
        }
        const jsxArrays = Functions.splitArray(rawJSX, columns);
        const jsx = [];
        for(let i = 0; i < jsxArrays.length; i++){
            jsx.push(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "category-row",
                children: jsxArrays[i].map((a)=>a)
            }));
        }
        return jsx;
    };
    const generateJSX = (command)=>{
        let image = `assets/help/${command.category}/${command.command}.png`;
        if (command.command === "distortion") image = `assets/help/${command.category}/dis+ortion.png`;
        const gifImages = [
            "giphy",
            "tenor"
        ];
        if (gifImages.includes(command.command)) image = image.slice(0, -3) + "gif";
        const category = command.category.replace(/ +/g, "");
        const help = react_string_replace_default()(command.help.replace(/_/g, ""), /\n/g, ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                className: `command-selection ${category}-command-selection`
            }));
        const examples = react_string_replace_default()(command.examples, /\n/g, ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                className: `command-selection ${category}-command-selection`
            }));
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `command-box ${category}-command-box`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "command-container",
                    onClick: (event)=>expandCommand(event),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "command-text-container",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: `command-name ${category}-command-name`,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: `command-selection ${category}-command-selection`,
                                        children: command.command
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "command-desc-container",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: `command-desc ${category}-command-desc`,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: `command-selection ${category}-command-selection`,
                                            children: command.description
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: `assets/labels/${category}-label.png`,
                            width: "147",
                            height: "58",
                            className: `label command-selection ${category}-command-selection`
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "command-details",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h5", {
                            className: `command-aliases command-detail-color ${category}-command-detail-color`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: `command-selection ${category}-command-selection`,
                                children: [
                                    "Aliases: ",
                                    command.aliases
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h5", {
                            className: `command-cooldown command-detail-color ${category}-command-detail-color`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: `command-selection ${category}-command-selection`,
                                children: [
                                    "Cooldown: ",
                                    command.cooldown
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: `command-help ${category}-command-help command-selection ${category}-command-selection`,
                            children: [
                                "Help:",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                    className: `command-selection ${category}-command-selection`
                                }),
                                help
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                            className: `command-examples command-detail-color ${category}-command-detail-color command-selection ${category}-command-selection`,
                            children: [
                                "Examples:",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                    className: `command-selection ${category}-command-selection`
                                }),
                                examples
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "show-pic-container",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: show_pic_namespaceObject,
                                width: "76",
                                height: "64",
                                className: `show-pic ${category}-show-pic command-selection ${category}-command-selection`,
                                onClick: (event)=>expandImage(event)
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "example-image",
                    onClick: (event)=>contractImage(event),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: image,
                        className: `command-selection ${category}-command-selection command-img`
                    })
                })
            ]
        }, command.command);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "commands",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "commands-top-section",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "commands-top-section-text",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                        className: "commands-header",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Commands"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "commands-paragraph",
                                        children: "Click on a category to display all of the commands in that category. Click on a command for additional description and sub-options. You can expand it even further to view an example image!"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: kisaraginewyearchibi_namespaceObject,
                                width: "176",
                                height: "269",
                                className: "kisaraginewyear"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                        className: "commands-hr"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "categories",
                        children: generateRows(5)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "categories-mobile",
                        children: generateRows(2)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "commands-search-bar",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "commands-search-container",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                    type: "search",
                                    spellCheck: "false",
                                    placeholder: "Search...",
                                    className: "commands-search",
                                    onChange: (event)=>{
                                        searchText = event.target.value;
                                    },
                                    onKeyDown: (event)=>{
                                        if (event.key === "Enter") handleClick("search");
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    type: "submit",
                                    id: "submit",
                                    className: "commands-search-button",
                                    onClick: ()=>handleClick("search"),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: search_icon_namespaceObject,
                                        width: "140",
                                        height: "140",
                                        className: "search-icon"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "command-columns",
                        children: [
                            searching ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: loading_namespaceObject,
                                width: "50",
                                height: "50"
                            }) : null,
                            commandColumns()
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Footer, {
                reRender: props.reRender
            })
        ]
    });
};
/* export default */ const components_Commands = (Commands);

;// CONCATENATED MODULE: ./assets/icons/termsofservice.png
const termsofservice_namespaceObject = __webpack_require__.p + "static/image/termsofservice.png";
;// CONCATENATED MODULE: ./assets/images/hinakochibi.png
const hinakochibi_namespaceObject = __webpack_require__.p + "static/image/hinakochibi.png";
;// CONCATENATED MODULE: ./assets/icons/privacypolicy.png
const privacypolicy_namespaceObject = __webpack_require__.p + "static/image/privacypolicy.png";
;// CONCATENATED MODULE: ./assets/images/mayukichibi.png
const mayukichibi_namespaceObject = __webpack_require__.p + "static/image/mayukichibi.png";
;// CONCATENATED MODULE: ./components/styles/termsofservice.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./components/TermsOfService.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 








const TermsOfService = (props)=>{
    const [colorChange, setColorChange] = (0,react.useState)(false);
    const [transitionOff, setTransitionOff] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        document.title = "Terms Of Service";
        if (window.location.href.includes("#privacy")) {
            window.location.href = "#privacy";
        }
        setTimeout(()=>{
            setTransitionOff(true);
        }, 500);
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = ()=>{
        if ((window.scrollY || window.pageYOffset) > 1000) {
            document.title = "Privacy Policy";
            setColorChange(true);
        } else {
            document.title = "Terms Of Service";
            setColorChange(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: (colorChange ? "tos-container tos-container-blue" : "tos-container") + (transitionOff ? "" : " tos-transition"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "terms-of-service",
                        id: "terms",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "tos-vertical",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "tos-header-container",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "tos-header-text-container",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: termsofservice_namespaceObject,
                                                    width: "80",
                                                    height: "74",
                                                    className: "tos-img"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                    className: "tos-header",
                                                    children: "Terms Of Service"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            src: hinakochibi_namespaceObject,
                                            width: "134",
                                            height: "216",
                                            className: "hinako"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                                    className: "tos-hr"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "tos-paragraph",
                                    children: 'These are the Terms of Service for the Discord bot Kisaragi ("she", "her", "the bot"). The bot has no relation to Discord, Discord is only the service that she is used on.'
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "tos-title",
                                    children: "Bot Spam and Misuse"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "tos-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "tos-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "Content"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "tos-list-detail",
                                            children: "Everything posted by the bot falls under your responsibility. An effort is made to filter content but the nature of many commands is retrieving arbitrary data from the internet."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "tos-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "tos-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "API Spam"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "tos-list-detail",
                                            children: "Don't use the bot to spam Discord's API (or any other API it uses)."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "tos-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "tos-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "Global Chat"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "tos-list-detail",
                                            children: "Don't post anything inappropriate, offensive, or spam. This is a public chat that is visible to everyone who enables it."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "tos-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "tos-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "Oauth2"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "tos-list-detail",
                                            children: "Don't misuse oauth2 commands or share oauth2 links created by the bot."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "tos-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "tos-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "Abusing Bugs"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "tos-list-detail",
                                            children: [
                                                "There could be bugs that crash the bot. Please report these bugs with the ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "command",
                                                    children: "feedback"
                                                }),
                                                " command."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "tos-title",
                                    children: "Punishment"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "tos-paragraph",
                                    children: "Violating the TOS could result in you or your entire guild getting blacklisted (blocked from using any commands and blocked from adding the bot to a server)."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "tos-title",
                                    children: "Appeal"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "tos-paragraph",
                                    children: "You can contact me in the support server for an appeal after significant time has passed after your blacklist."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "privacy-policy",
                        id: "privacy",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "privacy-vertical",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "privacy-header-container",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "privacy-header-text-container",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: privacypolicy_namespaceObject,
                                                    width: "72",
                                                    height: "89",
                                                    className: "blue-select tos-img"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                    className: "privacy-header blue-select",
                                                    children: "Privacy Policy"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            src: mayukichibi_namespaceObject,
                                            width: "172",
                                            height: "187",
                                            className: "blue-select mayuki"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                                    className: "privacy-hr blue-select"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "privacy-paragraph blue-select",
                                    children: 'This Privacy Policy concerns the data that Kisaragi ("she", "her", "the bot") collects about you and your server. You should remove the bot from your server if you don\'t agree.'
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "privacy-title blue-select",
                                    children: "Public Information"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "privacy-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "privacy-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "blue-select",
                                                children: "Messages"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "privacy-list-detail blue-select",
                                            children: "Several commands read your message content/attachments, and deleted messages may be logged if message logging is enabled. The bot uses this information for command functionality and does not store any messages."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "privacy-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "privacy-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "blue-select",
                                                children: "Guilds"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "privacy-list-detail blue-select",
                                            children: "Kisaragi has access general information about your guild, including channels, members, roles, and emojis. She uses this information as required for command functionality."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "privacy-title blue-select",
                                    children: "Private Information (Oauth2 Only)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "privacy-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "privacy-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "blue-select",
                                                children: "Email Address"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "privacy-list-detail blue-select",
                                            children: [
                                                "Your discord email address is used to send you email from the ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "command blue-select",
                                                    children: "email"
                                                }),
                                                " command. This is to verify that the address belongs to you."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "privacy-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "privacy-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "blue-select",
                                                children: "Connections"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "privacy-list-detail blue-select",
                                            children: "Access to your connections is required to verify that a social media account belongs to you (such as twitter)."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "privacy-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "privacy-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "blue-select",
                                                children: "Account Access"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "privacy-list-detail blue-select",
                                            children: "If you authenticate with a social media account, it gives the bot public read and write access over your account. The bot only does actions on your behalf."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "privacy-title blue-select",
                                    children: "Delete Information"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "privacy-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "privacy-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "blue-select",
                                                children: "Data Deletion"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "privacy-list-detail blue-select",
                                            children: 'All oauth commands have an option to revoke your token. To revoke your twitter token you need to manually click on "revoke access" in your application settings. To delete all guild data, just remove the bot from your server.'
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                    className: "privacy-details",
                                    open: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                                            ref: Functions.animateSummary,
                                            className: "privacy-list-title",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "blue-select",
                                                children: "Account Deletion"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "privacy-list-detail blue-select",
                                            children: "If you delete your discord account all user-specific settings and oauth2 data on your account is deleted."
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Footer, {
                reRender: props.reRender
            })
        ]
    });
};
/* export default */ const components_TermsOfService = (TermsOfService);

;// CONCATENATED MODULE: ./assets/images/404.png
const _404_namespaceObject = __webpack_require__.p + "static/image/404.png";
;// CONCATENATED MODULE: ./components/styles/404.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./components/404.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 




const $404 = (props)=>{
    (0,react.useEffect)(()=>{
        document.title = "404";
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "section-404",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-404",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: "404 Error"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: "img-404",
                        src: _404_namespaceObject,
                        alt: "404",
                        width: "479",
                        height: "362"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Footer, {
                reRender: props.reRender
            })
        ]
    });
};
/* export default */ const _404 = ($404);

;// CONCATENATED MODULE: ./assets/images/kisaragichibi2.png
const kisaragichibi2_namespaceObject = __webpack_require__.p + "static/image/kisaragichibi2.png";
;// CONCATENATED MODULE: ./assets/icons/moebytes-icon.png
const moebytes_icon_namespaceObject = __webpack_require__.p + "static/image/moebytes-icon.png";
;// CONCATENATED MODULE: ./assets/icons/discordjs.png
const discordjs_namespaceObject = __webpack_require__.p + "static/image/discordjs.png";
;// CONCATENATED MODULE: ./assets/icons/nodejs.png
const nodejs_namespaceObject = __webpack_require__.p + "static/image/nodejs.png";
;// CONCATENATED MODULE: ./assets/icons/typescript.png
const typescript_namespaceObject = __webpack_require__.p + "static/image/typescript.png";
;// CONCATENATED MODULE: ./assets/icons/postgresql.png
const postgresql_namespaceObject = __webpack_require__.p + "static/image/postgresql.png";
;// CONCATENATED MODULE: ./assets/icons/react.png
const icons_react_namespaceObject = __webpack_require__.p + "static/image/react.png";
;// CONCATENATED MODULE: ./components/styles/about.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./components/About.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 










const About = (props)=>{
    (0,react.useEffect)(()=>{
        document.title = "About";
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "about",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "about-header",
                        children: "About"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "about-paragraph-container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "about-paragraph",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "https://azurlane.koumakan.jp/Kisaragi",
                                        className: "about-link",
                                        target: "_blank",
                                        children: "Kisaragi"
                                    }),
                                    " was a Mutsuki-class destroyer of the Imperial Japanese Navy during World War II. She was sunken at the ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "https://en.wikipedia.org/wiki/Battle_of_Wake_Island",
                                        className: "about-link",
                                        target: "_blank",
                                        children: "Battle of Wake Island"
                                    }),
                                    " by American aircraft. Kisaragi is part of",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "https://en.wikipedia.org/wiki/Azur_Lane",
                                        className: "about-link",
                                        target: "_blank",
                                        children: " Azur Lane"
                                    }),
                                    ", which is basically a game where cute anime girl personifications of World War II battleships battle each other. Azur Lane also has an ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "https://myanimelist.net/anime/38328/Azur_Lane",
                                        className: "about-link",
                                        target: "_blank",
                                        children: "anime"
                                    }),
                                    " series."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: kisaragichibi2_namespaceObject,
                                width: "150",
                                height: "150",
                                className: "about-img"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "about-ul",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: "about-list",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "Creator: Moebytes"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: moebytes_icon_namespaceObject,
                                        width: "30",
                                        height: "30"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: "about-list",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "Library: Discord.js"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: discordjs_namespaceObject,
                                        width: "30",
                                        height: "30"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: "about-list",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "Runtime: Node.js"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: nodejs_namespaceObject,
                                        width: "30",
                                        height: "30"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: "about-list",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "Language: Typescript"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: typescript_namespaceObject,
                                        width: "30",
                                        height: "30"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: "about-list",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "Database: PostgreSQL"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: postgresql_namespaceObject,
                                        width: "30",
                                        height: "30"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: "about-list",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "Website: React"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: icons_react_namespaceObject,
                                        width: "30",
                                        height: "30"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Footer, {
                reRender: props.reRender
            })
        ]
    });
};
/* export default */ const components_About = (About);

;// CONCATENATED MODULE: ./components/ScrollToTop.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 

const ScrollToTop = (param)=>{
    let { children } = param;
    const { pathname } = (0,chunk_LFPYN7LY/* .useLocation */.zy)();
    (0,react.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
};
/* export default */ const components_ScrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./index.less
// extracted by css-extract-rspack-plugin

;// CONCATENATED MODULE: ./App.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 









const App = ()=>{
    const [ignored, forceUpdate] = (0,react.useReducer)((x)=>x + 1, 0);
    (0,react.useEffect)(()=>{
        Functions.preventDoubleClick();
        Functions.preventDragging();
        Functions.dragScroll(true);
    }, []);
    const reRender = ()=>{
        forceUpdate();
    };
    let theme = null;
    if (typeof window !== "undefined") {
        theme = localStorage.getItem("theme");
        if (!theme) {
            theme = "dark";
            localStorage.setItem("theme", "dark");
        }
    } else {
        theme = "dark";
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: theme === "dark" ? "app dark-theme" : "app",
        onTouchStart: ()=>"",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_ScrollToTop, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_LFPYN7LY/* .Routes */.BV, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .Route */.qh, {
                        path: "/",
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_HomePage, {
                            reRender: reRender
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .Route */.qh, {
                        path: "/home",
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_HomePage, {
                            reRender: reRender
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .Route */.qh, {
                        path: "/kisaragi",
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_HomePage, {
                            reRender: reRender
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .Route */.qh, {
                        path: "/commands",
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Commands, {
                            reRender: reRender
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .Route */.qh, {
                        path: "/privacy",
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .Navigate */.C5, {
                            to: "/terms#privacy",
                            replace: true
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .Route */.qh, {
                        path: "/terms",
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_TermsOfService, {
                            reRender: reRender
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .Route */.qh, {
                        path: "/about",
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_About, {
                            reRender: reRender
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .Route */.qh, {
                        path: "*",
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(_404, {
                            reRender: reRender
                        })
                    })
                ]
            })
        })
    });
};
/* export default */ const App_0 = (App);

// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
;// CONCATENATED MODULE: ./index.tsx

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 



const rootElement = document.getElementById("app");
(0,client.createRoot)(rootElement).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_LFPYN7LY/* .BrowserRouter */.Kd, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(App_0, {})
}));


},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/create_fake_namespace_object
(() => {
var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
  __webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach((key) => { def[key] = () => (value[key]) });
	}
	def['default'] = () => (value);
	__webpack_require__.d(ns, def);
	return ns;
};
})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = (result, chunkIds, fn, priority) => {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var [chunkIds, fn, priority] = deferred[i];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/";
})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"410": 0,};
      __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var __rspack_jsonp = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	
	return __webpack_require__.O(result);
	
};

var chunkLoadingGlobal = self["webpackChunkkisaragi_site"] = self["webpackChunkkisaragi_site"] || [];
chunkLoadingGlobal.forEach(__rspack_jsonp.bind(null, 0));
chunkLoadingGlobal.push = __rspack_jsonp.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

})();
// startup
// Load entry module and return exports
// This entry module depends on other loaded chunks and execution need to be delayed
var __webpack_exports__ = __webpack_require__.O(undefined, ["783", "535", "912"], () => __webpack_require__(5513));
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;