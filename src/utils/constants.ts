import {
	CSS3,
	GIT,
	GITHUB,
	HTML5,
	JavaScript,
	React as ReactIcon,
	TailwindCSS,
	TypeScript,
} from "../components/SkillSVG";

export const NAME = "Abayomi Arogunmasa";
export const BRAND = "Forgentik";
export const TAGLINE = "Think. Design. Build. Evolve.";
export const EMAIL = "arogunmasaabayomi95@gmail.com";
export const LOCATION = "Ibadan, Nigeria";
export const TIMEZONE = "WAT (UTC+1)";
export const RESUME_PATH = "/assets/Abayomi-Arogunmasa.pdf";

/** Builds a mailto link with an encoded subject and optional body. */
export function mailtoLink(subject = "Project enquiry", body?: string): string {
	const params = [`subject=${encodeURIComponent(subject)}`];
	if (body) params.push(`body=${encodeURIComponent(body)}`);
	return `mailto:${EMAIL}?${params.join("&")}`;
}

export type NavLink = {
	label: string;
	href: `#${string}`;
	id: string;
};

export const navLinks: NavLink[] = [
	{ label: "Work", href: "#work", id: "work" },
	{ label: "About", href: "#about", id: "about" },
	{ label: "Stack", href: "#stack", id: "stack" },
	{ label: "Contact", href: "#contact", id: "contact" },
];

export const hero = {
	eyebrow: `Full-stack developer · ${LOCATION}`,
	titleLead: "I build software that makes ",
	titleAccent: "public services easier to use.",
	summary:
		"I turn paper-heavy workflows into fast, reliable web apps with React, TypeScript, Node.js and PostgreSQL — for schools, public teams and NGOs.",
	proof: [
		"B.Sc. First Class",
		"Former secondary school teacher",
		"Open to full-time & contract roles",
	],
	primary: { label: "View selected work", href: "#work" },
	secondary: {
		label: "Email me",
		href: mailtoLink("Project enquiry — Forgentik"),
	},
} as const;

export const about = {
	heading: "I started in a classroom. I build for the people in it.",
	paragraphs: [
		"I taught secondary school in Nigeria. It taught me the real test of any tool: whether someone with a full timetable and a slow phone can use it without being trained twice.",
		"I also hold a First Class B.Sc. in Local Government and Development Studies, so I understand how public institutions actually run — the constraints, the paperwork, and the people carrying it. That is the context I design for: schools, local government, and NGOs doing important work with too few hands.",
		"Today I build full-stack applications with React, TypeScript, Node.js, Express and PostgreSQL. I care about correct data, clear interfaces, and software that survives contact with real users.",
	],
	facts: [
		{ label: "Based in", value: `${LOCATION} · ${TIMEZONE}` },
		{
			label: "Education",
			value: "B.Sc. First Class, Local Government & Development Studies",
		},
		{ label: "Before code", value: "Secondary school teacher" },
		{ label: "Focus", value: "Education, public sector and NGOs" },
		{ label: "Availability", value: "Full-time roles and contract work" },
	],
} as const;

export const projectsIntro = {
	eyebrow: "Selected work",
	heading: "Three builds, documented properly.",
	summary:
		"Each card covers the problem, the approach, the stack and the one technical decision that mattered. Source is linked; live demos are marked where they exist.",
};

export const skillsIntro = {
	eyebrow: "Stack",
	heading: "A focused stack, used end to end.",
	summary:
		"I'd rather know a few tools well than twenty superficially. I build the interface, the API and the data layer — and I can debug them when something breaks in production.",
};

export const skillGroups = [
	{
		label: "Frontend",
		items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
	},
	{
		label: "Backend & data",
		items: ["Node.js", "Express", "PostgreSQL", "REST APIs", "JWT auth", "SQL"],
	},
	{
		label: "Tooling",
		items: ["Git", "GitHub", "Vite", "Postman", "Linux"],
	},
] as const;

export const contact = {
	eyebrow: "Contact",
	heading: "Have a problem worth building for?",
	body: "I'm open to full-time roles and contract work in education, public sector and NGOs. If you're modernising a process that still runs on paper, spreadsheets or WhatsApp, send me a short note about it — I reply within two working days.",
	primary: {
		label: "Email me",
		href: mailtoLink(
			"Project enquiry — Forgentik",
			"Hi Abayomi,\n\nA bit about the problem:\n\n\nWhat a good outcome looks like:\n\n\nTimeline:\n",
		),
	},
	secondary: { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/abayomi-arogunmasa-75254a134/" },
	availability: [
		`${LOCATION} · ${TIMEZONE}`,
		"Replies within 2 working days",
		"Open to remote and hybrid",
	],
} as const;

export type SocialLink = {
	content: string;
	link: string;
};

export const socialLinks: SocialLink[] = [
	{
		content: "GitHub",
		link: "https://github.com/ifeola",
	},
	{
		content: "LinkedIn",
		link: "https://www.linkedin.com/in/abayomi-arogunmasa-75254a134/",
	},
	{
		content: "X (Twitter)",
		link: "https://x.com/abayomi_codes",
	},
];

export const skills = [
	{ skill: "HTML5", svg: HTML5 },
	{ skill: "CSS3", svg: CSS3 },
	{ skill: "JavaScript (ES6+)", svg: JavaScript },
	{ skill: "TypeScript", svg: TypeScript },
	{ skill: "React", svg: ReactIcon },
	{ skill: "Tailwind CSS", svg: TailwindCSS },
	{ skill: "Git", svg: GIT },
	{ skill: "GitHub", svg: GITHUB },
] as const;
