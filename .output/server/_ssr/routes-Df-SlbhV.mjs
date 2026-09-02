import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Df-SlbhV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUPPORT_OPTIONS = [
	"Myself",
	"My child",
	"My family",
	"My partner",
	"Someone else"
];
function RegistrationForm({ idPrefix }) {
	const [supportFor, setSupportFor] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "registration-form",
		onSubmit: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Begin your journey" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Take the first step towards understanding and support." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}-name`,
					children: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					id: `${idPrefix}-name`,
					required: true,
					placeholder: "Your full name"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}-email`,
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					id: `${idPrefix}-email`,
					required: true,
					placeholder: "you@example.com"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}-phone`,
					children: "Phone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "tel",
					id: `${idPrefix}-phone`,
					required: true,
					placeholder: "+91 00000 00000"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "support-for-label",
				children: "Who is this support for?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "support-for-options",
				children: SUPPORT_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `support-pill${supportFor === opt ? " active" : ""}`,
					onClick: () => setSupportFor(opt),
					children: opt
				}, opt))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "button button-primary",
				children: [
					"Find My Support",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "form-privacy",
				children: [
					"Your information is kept private and used only to help us respond to your enquiry.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						children: "Privacy Policy"
					})
				]
			})
		]
	});
}
var FAQ_ITEMS = [
	{
		q: "What is counselling, and how can it help?",
		a: "Counselling is a structured conversation with a trained professional. It can help you name what you are experiencing, understand patterns, consider choices and take realistic next steps without judgement."
	},
	{
		q: "Is counselling only for a crisis?",
		a: "No. People seek counselling for prevention, clarity, relationships, academic decisions, stress and personal growth. You do not have to wait until life feels unmanageable."
	},
	{
		q: "Can parents and teenagers attend together?",
		a: "Yes. Depending on the concern, sessions may include a young person, a parent or the family together. The approach is explained clearly so every person feels heard and respected."
	},
	{
		q: "Is what I share kept confidential?",
		a: "Privacy and dignity are central to counselling. Your counsellor will explain confidentiality and its safety-related limits before you begin, including situations involving risk of harm."
	}
];
function Index() {
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [hasClosedModal, setHasClosedModal] = (0, import_react.useState)(false);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react.useState)(false);
	const mainRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			if (!hasClosedModal) setIsModalOpen(true);
		}, 25e3);
		return () => clearTimeout(timer);
	}, [hasClosedModal]);
	(0, import_react.useEffect)(() => {
		const sections = mainRef.current?.querySelectorAll(".reveal-section");
		if (!sections || typeof IntersectionObserver === "undefined") {
			sections?.forEach((s) => s.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, { rootMargin: "-6% 0px -6% 0px" });
		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [isModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "modal-overlay",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "modal-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "modal-close",
				onClick: () => {
					setIsModalOpen(false);
					setHasClosedModal(true);
				},
				"aria-label": "Close modal",
				children: "×"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationForm, { idPrefix: "modal" })]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		ref: mainRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "site-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "brand",
						href: "#top",
						"aria-label": "TENDER home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-mark",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-name",
							children: "TENDER"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: `nav-links ${isMobileMenuOpen ? "is-open" : ""}`,
						"aria-label": "Main navigation",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								onClick: () => setIsMobileMenuOpen(false),
								children: "Why TENDER"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#support",
								onClick: () => setIsMobileMenuOpen(false),
								children: "Our support"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#approach",
								onClick: () => setIsMobileMenuOpen(false),
								children: "How it works"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#answers",
								onClick: () => setIsMobileMenuOpen(false),
								children: "Questions"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "header-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "nav-cta",
							href: "#register",
							children: [
								"Find Your Support",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									width: "15",
									height: "15",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									"aria-hidden": "true",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mobile-menu-btn",
							onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
							"aria-label": "Toggle menu",
							"aria-expanded": isMobileMenuOpen,
							children: isMobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6 6 18" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 6 12 12" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "4",
										x2: "20",
										y1: "12",
										y2: "12"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "4",
										x2: "20",
										y1: "6",
										y2: "6"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "4",
										x2: "20",
										y1: "18",
										y2: "18"
									})
								]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero",
				id: "top",
				"aria-labelledby": "hero-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-visual",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/real-child-mental-health.jpg",
						alt: "An Indian family speaking with a counsellor in a warm, premium therapy room"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "image-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "T"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Behaviour is often a child's way of communicating an unmet emotional need." })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "TENDER · Counselling for real life"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							id: "hero-title",
							children: [
								"India's Integrated Counselling Platform for",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Stronger Minds, Brighter Futures and Healthier Relationships." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-description",
							children: "One connected space supporting children, students, parents, teachers, individuals and families across academic, emotional, health and relationship needs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "button button-primary",
								href: "#support",
								children: [
									"Explore counselling",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "18",
										height: "18",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-arrow-right",
										"aria-hidden": "true",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-link",
								href: "#about",
								children: "Understand TENDER"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "trust-line",
							"aria-label": "Our counselling values",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "17",
										height: "17",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-shield-check",
										"aria-hidden": "true",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 12 2 2 4-4" })]
									}),
									" ",
									"Confidential"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "17",
										height: "17",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-heart-handshake",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" })
									}),
									" ",
									"Non-judgemental"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "17",
										height: "17",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-sparkles",
										"aria-hidden": "true",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 2v4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 4h-4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "4",
												cy: "20",
												r: "2"
											})
										]
									}),
									" ",
									"Person-centred"
								] })
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "manifesto reveal-section",
				id: "about",
				"aria-labelledby": "about-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "What TENDER means"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "about-title",
						children: [
							"Transforming ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Emotions" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Nurturing ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Development" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Empowering ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Relationships" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "manifesto-copy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Life rarely fits into one box. Academic pressure can affect mental health. Health concerns can strain relationships. Family conflict can change how a young person studies, sleeps and sees themselves." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "TENDER connects these realities. We begin with the whole person—not a label—and work towards understanding, resilience and healthier relationships." })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "support-section reveal-section",
				id: "support",
				"aria-labelledby": "support-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "How we support you"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "support-title",
						children: "One life. Many layers of care."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Choose the concern closest to what you are experiencing. You do not need to have the perfect words before you begin." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "service-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "service-card sage",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "28",
										height: "28",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.6",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-book-open",
										"aria-hidden": "true",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Academic Counselling" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Clarity for subject choices, study habits, exam stress, career pathways and the difficult conversations that surround them." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#approach",
									"aria-label": "Learn how academic counselling works",
									children: [
										"How counselling works",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											xmlns: "http://www.w3.org/2000/svg",
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											className: "lucide lucide-arrow-right",
											"aria-hidden": "true",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "service-card rose",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "28",
										height: "28",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.6",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-brain",
										"aria-hidden": "true",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 18V5" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 18a4 4 0 0 0 2-7.464" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 18a4 4 0 0 1-2-7.464" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Mental Health Counselling" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A confidential, non-judgemental space to understand anxiety, low mood, overwhelm, self-esteem and emotional patterns." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#approach",
									"aria-label": "Learn how mental health counselling works",
									children: [
										"How counselling works",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											xmlns: "http://www.w3.org/2000/svg",
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											className: "lucide lucide-arrow-right",
											"aria-hidden": "true",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "service-card sand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "28",
										height: "28",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.6",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-heart-handshake",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Relationship Counselling" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Support for couples, parents, teenagers and families to listen better, repair trust and move through conflict with care." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#approach",
									"aria-label": "Learn how relationship counselling works",
									children: [
										"How counselling works",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											xmlns: "http://www.w3.org/2000/svg",
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											className: "lucide lucide-arrow-right",
											"aria-hidden": "true",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "service-card blue",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "28",
										height: "28",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.6",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-stethoscope",
										"aria-hidden": "true",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 2v2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 2v2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 15a6 6 0 0 0 12 0v-3" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "20",
												cy: "10",
												r: "2"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Health Counselling" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Compassionate guidance for coping with diagnosis, lifestyle change, caregiver strain and the emotional side of health." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#approach",
									"aria-label": "Learn how health counselling works",
									children: [
										"How counselling works",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											xmlns: "http://www.w3.org/2000/svg",
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											className: "lucide lucide-arrow-right",
											"aria-hidden": "true",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
										})
									]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "story-section",
				"aria-labelledby": "story-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "story-image",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/real-teacher-student-support.jpg",
						alt: "A teacher speaking with two school-age children experiencing a difficult situation"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "story-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "For every turning point"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "story-title",
							children: "Behind “I'm fine” there is often a story."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A student who cannot focus. A parent who is trying too hard to help. A couple speaking but no longer feeling heard. A diagnosis that has changed the rhythm of a family." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "TENDER creates space for the story beneath the symptom—so the next step is guided by understanding, not pressure." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "story-audiences",
							"aria-label": "People we support",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "18",
										height: "18",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-users",
										"aria-hidden": "true",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "9",
												cy: "7",
												r: "4"
											})
										]
									}),
									" ",
									"Children & teenagers"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "18",
										height: "18",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-users",
										"aria-hidden": "true",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "9",
												cy: "7",
												r: "4"
											})
										]
									}),
									" ",
									"Parents & families"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "18",
										height: "18",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "lucide lucide-users",
										"aria-hidden": "true",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "9",
												cy: "7",
												r: "4"
											})
										]
									}),
									" ",
									"Individuals & couples"
								] })
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "family-section",
				"aria-labelledby": "family-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "family-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "From early childhood to age 16"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "family-title",
							children: "Every age. One connected circle of care."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Emotional needs change as children grow. TENDER connects parents, teachers and counsellors so children receive consistent support at home, at school and through every developmental transition." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "family-tags",
							"aria-label": "Connected support network",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Child at the centre" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Parent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Teacher" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Counsellor" })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "age-care-grid",
					"aria-label": "Counselling support across childhood stages",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/real-family-child-therapy.jpg",
							alt: "A young child with her parents speaking to a counsellor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Early years" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ages 4–7 · emotions, behaviour and safety" })] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/real-teacher-student-support.jpg",
							alt: "School-age children in conversation with a teacher"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Growing years" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ages 8–12 · school, confidence and friendships" })] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/real-teen-counselling.jpg",
							alt: "A teenager and parent speaking with a counsellor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Teen years" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ages 13–16 · identity, pressure and relationships" })] })] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "approach-section",
				id: "approach",
				"aria-labelledby": "approach-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading light",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "A gentle, clear process"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "approach-title",
						children: "What happens when you begin?"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You stay informed and involved. Counselling is something we do with you, never to you." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "process-list",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "We listen" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Begin with what feels most important today. There is no need to prepare or perform." })] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "We understand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Together, we notice patterns, needs, pressures and the strengths already present." })] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "We move forward" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Agree on practical, compassionate steps that fit your situation and pace." })] })] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "principles reveal-section",
				"aria-labelledby": "principles-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-kicker",
					children: "Our promise"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "principles-title",
					children: "Care with dignity at the centre."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "principle-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "See the person" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We look beyond labels, marks, conflict and symptoms to understand the whole person." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Protect trust" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We explain privacy, consent and professional boundaries clearly from the beginning." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Build agency" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our role is not to make decisions for you, but to help you make them with greater clarity." })
						] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "faq-section reveal-section",
				id: "answers",
				"aria-labelledby": "faq-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "faq-intro",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Questions, answered simply"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "faq-title",
							children: "Before your first conversation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Clear answers can make asking for support feel a little easier." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "faq-list",
					children: FAQ_ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `faq-item${openFaq === i ? " is-open" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "faq-trigger",
							onClick: () => setOpenFaq(openFaq === i ? null : i),
							"aria-expanded": openFaq === i,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "faq-icon",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "faq-panel",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "faq-panel-inner",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.a })
							})
						})]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "closing",
				"aria-labelledby": "closing-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Whenever you are ready"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "closing-title",
						children: "A difficult chapter does not have to become the whole story."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Start by understanding the kind of support that fits you or your family." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "button button-light",
						href: "#support",
						children: [
							"Find your counselling path",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								className: "lucide lucide-arrow-right",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "professionals-section reveal-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "professionals-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "The people behind TENDER"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Qualified professionals, genuine care." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every TENDER counsellor is qualified, experienced and committed to ethical, person-centred practice." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "professionals-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "professional-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "professional-avatar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/professional_1.jpg",
									alt: "Dr. Ananya Sharma"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "professional-info",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Dr. Ananya Sharma" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "role",
										children: "Counselling Psychologist"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "bio",
										children: "Over 10 years of experience in adult psychotherapy, specialising in anxiety, relational trauma and identity."
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "professional-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "professional-avatar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/professional_2.jpg",
									alt: "Rahul Verma"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "professional-info",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Rahul Verma" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "role",
										children: "Child & Family Therapist"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "bio",
										children: "Dedicated to helping young children and their parents build secure attachments and navigate developmental challenges."
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "professional-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "professional-avatar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/professional_3.jpg",
									alt: "Dr. Priya Kapoor"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "professional-info",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Dr. Priya Kapoor" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "role",
										children: "Academic Counsellor"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "bio",
										children: "Expert in student well-being, academic pressure management and adolescent emotional development."
									})
								]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "registration-section reveal-section",
				id: "register",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "registration-container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "registration-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-kicker",
								children: "Take the first step"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Your story deserves to be heard." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Share a few details and we will connect you with a counsellor who understands your situation. There is no obligation, no judgement — just a gentle beginning." })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationForm, { idPrefix: "footer" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "brand inverted",
						href: "#top",
						"aria-label": "TENDER home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-mark",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-name",
							children: "TENDER"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Transforming Emotions.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Nurturing Development.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Empowering Relationships."
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-links",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Explore" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							children: "Why TENDER"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#support",
							children: "Counselling support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#approach",
							children: "Our approach"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#answers",
							children: "FAQs"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Support" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#support",
							children: "Academic"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#support",
							children: "Mental health"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#support",
							children: "Relationships"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#support",
							children: "Health"
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						"2026",
						" TENDER. All rights reserved.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Photography: Gustavo Fring, RDNE Stock Project and Vitaly Gariev via Pexels."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "TENDER is not an emergency service. If someone is in immediate danger, contact local emergency services or the nearest hospital." })]
				})
			] })
		]
	})] });
}
//#endregion
export { Index as component };
