import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as MessageCircle, c as HeartHandshake, d as BookOpen, f as ArrowUpRight, i as ShieldCheck, l as GraduationCap, m as Activity, n as Users, o as Menu, p as ArrowRight, r as Sparkles, s as Lock, t as X, u as Brain } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-_UHOVrBh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ tone = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: `flex items-center gap-2.5 ${tone === "dark" ? "text-forest" : "text-ivory"}`,
		"aria-label": "Tender home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: "h-5 w-5 shrink-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 21c0-6 3.6-9.6 9-10.2C21 16.4 17.6 20.2 12 21Z",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 21C12 15 8.4 11.4 3 10.8 3 16.4 6.4 20.2 12 21Z",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 21V6",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "4",
					r: "1.6",
					fill: "currentColor"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.8rem] font-medium uppercase tracking-[0.3em]",
			children: "Tender"
		})]
	});
}
var NAV = [
	{
		label: "Why Tender",
		href: "#why"
	},
	{
		label: "Counselling",
		href: "#counselling"
	},
	{
		label: "Resources",
		href: "#resources"
	},
	{
		label: "Services",
		href: "#services"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/70 bg-ivory/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid h-16 max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 sm:px-8 lg:h-[72px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main",
					className: "hidden justify-center gap-9 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-[0.78rem] font-medium text-foreground/80 transition-colors hover:text-terracotta",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#book",
						className: "hidden items-center gap-1.5 border-b border-forest/40 pb-0.5 text-[0.78rem] font-medium text-forest transition-colors hover:border-terracotta hover:text-terracotta lg:inline-flex",
						children: ["Book a session ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						"aria-label": open ? "Close menu" : "Open menu",
						className: "inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-forest lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			hidden: !open,
			className: "border-t border-border bg-ivory px-5 pb-6 pt-4 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "flex flex-col",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "border-b border-border/70 py-3 font-display text-xl text-forest",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#book",
					onClick: () => setOpen(false),
					className: "mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-[0.8rem] font-medium text-ivory",
					children: ["Book a session ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
				})]
			})
		})]
	});
}
function Reveal({ children, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				setVisible(true);
				observer.disconnect();
			}
		}, { rootMargin: "-8% 0px -8% 0px" });
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-visible": visible,
		className: `reveal ${className}`,
		children
	});
}
function Eyebrow({ children, tone = "accent" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `eyebrow ${tone === "light" ? "text-ivory/50" : "text-terracotta"}`,
		children
	});
}
function IntroHeading() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-beige/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-center px-5 py-5 sm:px-8 sm:py-6 lg:py-7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mx-auto max-w-[52ch] font-display text-[clamp(1.15rem,2.05vw,1.75rem)] leading-[1.3] tracking-[-0.005em] text-forest",
					children: [
						"India’s integrated counseling platform for",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-terracotta",
							children: "stronger mind, brighter future,"
						}),
						" ",
						"and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-terracotta",
							children: "healthier relationships."
						})
					]
				})
			})
		})
	});
}
var hero_counseling_default = "/assets/hero-counseling-jJWt8kPe.jpg";
var TRUST = [
	{
		icon: Lock,
		label: "Confidential"
	},
	{
		icon: GraduationCap,
		label: "Trained therapists"
	},
	{
		icon: HeartHandshake,
		label: "Trauma-aware"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "border-b border-border bg-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-[1fr_1.05fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-10 lg:py-12 lg:pr-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Counselling for real life" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 max-w-[14ch] font-display text-[2.15rem] leading-[1.05] tracking-[-0.01em] text-forest sm:text-[2.7rem] lg:text-[3rem] xl:text-[3.4rem]",
						children: [
							"You don’t have to carry it",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-terracotta",
								children: "alone."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-muted-foreground",
						children: "A therapy-first, confidential space for students, individuals, couples and families to pause, feel heard and find a way forward."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#counselling",
							className: "inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[0.85rem] font-medium text-ivory transition-colors hover:bg-forest-deep",
							children: ["Learn how it works ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#why",
							className: "border-b border-forest/40 pb-0.5 text-[0.85rem] font-medium text-forest transition-colors hover:border-terracotta hover:text-terracotta",
							children: "Understand Tender"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-wrap gap-x-8 gap-y-3",
						children: TRUST.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-[0.75rem] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-3.5 w-3.5 text-terracotta",
								"aria-hidden": "true"
							}), label]
						}, label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-[270px] sm:min-h-[360px] lg:min-h-[480px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_counseling_default,
					alt: "An elderly counsellor listening attentively to a teenage student during a counselling session",
					width: 1104,
					height: 1312,
					className: "absolute inset-0 h-full w-full object-cover object-[50%_25%]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "absolute bottom-5 right-0 max-w-[15rem] bg-ivory px-5 py-4 sm:bottom-8 sm:right-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "flex gap-2 text-[0.72rem] leading-relaxed text-foreground/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "font-display text-lg leading-none text-terracotta",
							children: "“"
						}), "Sometimes the first step is simply being heard."]
					})
				})]
			})]
		})
	});
}
var story_session_default = "/assets/story-session-3HaigOKk.jpg";
function BrandStatement() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "border-b border-border bg-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What Tender means" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 font-display text-[2rem] leading-[1.14] text-forest sm:text-[2.7rem] lg:text-[3.1rem]",
					children: [
						"Transforming ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-terracotta",
							children: "Emotions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Nurturing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-terracotta",
							children: "Development"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Empowering ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-terracotta",
							children: "Relationships"
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 text-[0.85rem] leading-relaxed text-muted-foreground sm:grid-cols-2 sm:gap-10 lg:pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At every life stage, emotional pressure can affect mental health, learning and relationships. Family conflict can change how a young person studies, sleeps and believes in themselves." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tender is not made in a vacuum. We begin with the whole person — academic, emotional, relational — and work towards understanding, resilience and healthier relationships." })]
				})]
			})
		})
	});
}
var CARDS = [
	{
		title: "Academic Counselling",
		icon: BookOpen,
		tint: "bg-sage",
		body: "Clarity for study choices, daily habits, exam stress, career decisions and the confidence to keep going."
	},
	{
		title: "Mental Health Counselling",
		icon: Brain,
		tint: "bg-blush",
		body: "Support for anxiety, low mood, burnout, sleep and self-worth, at a pace that feels safe and steady."
	},
	{
		title: "Relationship Counselling",
		icon: Users,
		tint: "bg-sand",
		body: "Space for couples, parents, teenagers and siblings to be heard and to rebuild trust at home."
	},
	{
		title: "Health Counselling",
		icon: Activity,
		tint: "bg-mint",
		body: "Care for the emotional side of living with illness, lifestyle change and long-term treatment."
	}
];
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "counselling",
		className: "border-b border-border bg-beige",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How we support you" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-[18ch] font-display text-[2rem] leading-[1.12] text-forest sm:text-[2.6rem]",
					children: "One life. Many layers of care."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-[42ch] text-[0.82rem] leading-relaxed text-muted-foreground lg:ml-auto",
					children: "Choose the care that feels right now, or speak to us and we’ll help you find the layer of support that fits where you are."
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4",
				children: CARDS.map(({ title, icon: Icon, tint, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					className: `group ${tint} px-6 pb-6 pt-7 transition-colors`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-5 w-5 text-forest/60",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-14 max-w-[10ch] font-display text-[1.45rem] leading-tight text-forest",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 min-h-[5.5rem] text-[0.75rem] leading-relaxed text-foreground/70",
							children: body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#services",
							className: "mt-4 flex items-center justify-between border-t border-forest/15 pt-4 text-[0.7rem] font-medium text-forest",
							children: ["How counselling works", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })]
						})
					]
				}, title))
			})]
		})
	});
}
var STORY_LIST = [
	{
		icon: MessageCircle,
		label: "Counsellor conversations"
	},
	{
		icon: ShieldCheck,
		label: "Trauma-informed care"
	},
	{
		icon: Sparkles,
		label: "Care that fits your pace"
	}
];
function StorySplit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "resources",
		className: "border-b border-border bg-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-[300px] lg:min-h-[560px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: story_session_default,
					alt: "A counsellor and a student talking over open notebooks at a table",
					width: 1200,
					height: 1104,
					loading: "lazy",
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "flex flex-col justify-center bg-card px-5 py-14 sm:px-12 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why every session counts" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-7 max-w-[18ch] font-display text-[2rem] leading-[1.1] text-forest sm:text-[2.7rem]",
						children: "Behind “I’m fine” there is often a story."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-[52ch] text-[0.82rem] leading-relaxed text-muted-foreground",
						children: "A student who stops attending class, a parent who no longer knows how to reach them, a couple who speak but never quite feel heard — these are not failures. They are signals."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[52ch] text-[0.82rem] leading-relaxed text-muted-foreground",
						children: "With Tender, a story is not something that has to be carried alone. It is something that can be understood, and slowly, gently, rewritten."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 space-y-4",
						children: STORY_LIST.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 border-b border-border/70 pb-4 text-[0.78rem] text-foreground/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-4 w-4 shrink-0 text-terracotta",
								"aria-hidden": "true"
							}), label]
						}, label))
					})
				]
			})]
		})
	});
}
var STEPS = [
	{
		n: "01",
		title: "We listen",
		body: "Begin with what feels most important today. There is no need to rehearse or perform."
	},
	{
		n: "02",
		title: "We understand",
		body: "Together we look at patterns, pressures and people around you, and what they are asking of you."
	},
	{
		n: "03",
		title: "We move forward",
		body: "A practical, compassionate plan that fits your pace and your life — reviewed as you go."
	}
];
function ProcessDark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-forest-deep text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				tone: "light",
				children: "A gentle, guided beginning"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-[20ch] font-display text-[2.1rem] leading-[1.1] sm:text-[3rem]",
					children: "What happens when you begin?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-[40ch] text-[0.78rem] leading-relaxed text-ivory/60 lg:ml-auto",
					children: "No step is rushed and nothing is decided for you. This is how the first few conversations usually unfold."
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-16 border-t border-ivory/15",
				children: STEPS.map(({ n, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					className: "grid gap-3 border-b border-ivory/15 py-8 sm:grid-cols-[4rem_1fr] lg:py-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.7rem] text-ivory/40",
						children: n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-[1.4rem] sm:text-[1.7rem]",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-[60ch] text-[0.78rem] leading-relaxed text-ivory/60",
						children: body
					})] })]
				}, n))
			})]
		})
	});
}
var VALUES = [
	{
		title: "See the person",
		body: "Never only a symptom. We start with who you are, your context and what matters to you."
	},
	{
		title: "Protect trust",
		body: "Everything you share stays confidential. Boundaries are explained clearly, from the first session."
	},
	{
		title: "Build agency",
		body: "Care that helps you make your own choices — support, not dependence, is the goal."
	}
];
function CareValues() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "border-b border-border bg-beige",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our approach" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-12 lg:grid-cols-[1fr_1.35fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-[14ch] font-display text-[2rem] leading-[1.1] text-forest sm:text-[2.7rem]",
					children: "Care with dignity at the centre."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-8 sm:grid-cols-3 sm:gap-0",
					children: VALUES.map(({ title, body }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: `sm:px-7 ${i > 0 ? "sm:border-l sm:border-forest/15" : "sm:pl-0"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-[1.25rem] leading-snug text-forest",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[0.75rem] leading-relaxed text-foreground/70",
							children: body
						})]
					}, title))
				})]
			})] })
		})
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "book",
		className: "bg-terracotta text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-20 text-center sm:px-8 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					tone: "light",
					children: "Whenever you are ready"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto mt-8 max-w-[26ch] font-display text-[2.2rem] leading-[1.12] sm:text-[3.1rem] lg:text-[3.6rem]",
					children: "A difficult chapter does not have to become the whole story."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-[48ch] text-[0.8rem] leading-relaxed text-ivory/80",
					children: "Start by understanding the kind of support that fits you or your family."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#counselling",
					className: "mt-10 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-[0.8rem] font-medium text-forest transition-colors hover:bg-ivory/85",
					children: ["Find your counselling path ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})
			] })
		})
	});
}
var ITEMS = [
	{
		q: "What is counselling, and how can it help?",
		a: "Counselling is a confidential conversation with a trained professional. It gives you space to understand what you are feeling, why certain patterns repeat, and what choices are available to you — at your own pace, without judgement."
	},
	{
		q: "Is counselling only for a crisis?",
		a: "No. Many people come to counselling long before things feel unmanageable — for exam pressure, a difficult decision, or simply to understand themselves better."
	},
	{
		q: "Can parents and teenagers attend together?",
		a: "Yes. Sessions can be individual, joint or a combination, depending on what will help the family most. We discuss this together before we begin."
	},
	{
		q: "Is what I share kept confidential?",
		a: "Everything you share stays between you and your counsellor. The only exceptions are situations involving risk to life, which we explain clearly in the first session."
	}
];
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Questions people usually ask" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-[12ch] font-display text-[2rem] leading-[1.08] text-forest sm:text-[2.7rem]",
					children: "Before your first conversation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-[34ch] text-[0.75rem] leading-relaxed text-muted-foreground",
					children: "A few answers that may help before you reach out for the first time."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "border-t border-border",
					children: ITEMS.map((item, i) => {
						const isOpen = open === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpen(isOpen ? null : i),
								"aria-expanded": isOpen,
								"aria-controls": `faq-panel-${i}`,
								className: "flex w-full items-center justify-between gap-6 py-5 text-left text-[0.85rem] font-medium text-forest transition-colors hover:text-terracotta",
								children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"aria-hidden": "true",
									className: "relative h-3 w-3 shrink-0 text-terracotta",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-300 ${isOpen ? "scale-y-0" : "scale-y-100"}` })]
								})]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								id: `faq-panel-${i}`,
								className: `grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-[62ch] pb-6 text-[0.78rem] leading-relaxed text-muted-foreground",
										children: item.a
									})
								})
							})]
						}, item.q);
					})
				})]
			})] })
		})
	});
}
var COLUMNS = [{
	title: "Explore",
	links: [
		"Why Tender",
		"How counselling works",
		"FAQ"
	]
}, {
	title: "Support",
	links: [
		"Academic",
		"Mental health",
		"Relationships",
		"Health"
	]
}];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-forest-deep text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { tone: "light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 font-display text-[1.15rem] leading-snug text-ivory/70",
					children: [
						"Transforming Emotions",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Nurturing Development",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Empowering Relationships"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-8 lg:justify-items-end",
					children: COLUMNS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-ivory/40",
						children: col.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "text-[0.78rem] text-ivory/75 transition-colors hover:text-ivory",
							children: link
						}) }, link))
					})] }, col.title))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-ivory/15 pt-6 text-[0.68rem] text-ivory/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Tender. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "transition-colors hover:text-ivory",
						children: "Privacy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "transition-colors hover:text-ivory",
						children: "Terms"
					})]
				})]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroHeading, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandStatement, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Categories, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StorySplit, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessDark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareValues, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
