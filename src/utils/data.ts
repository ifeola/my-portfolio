export type ProjectStatus = "Live" | "Full stack" | "In progress";

export type ProjectImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type CaseStudy = {
	id: string;
	index: string;
	title: string;
	tagline: string;
	problem: string;
	solution: string;
	challenge: {
		title: string;
		body: string;
	};
	stack: string[];
	status: ProjectStatus;
	image?: ProjectImage;
	demo?: string;
	repo?: string;
	note?: string;
};

/**
 * Copy note: keep claims tied to what is actually in each repo.
 * When a project changes, update this file only — the card renders from it.
 */
export const caseStudies: CaseStudy[] = [
	{
		id: "school-results",
		index: "01",
		title: "School Result Checking",
		tagline: "Report cards, from raw scores to print-ready PDFs.",
		problem:
			"Result day ran on paper and retyping. Teachers copied scores from notebooks into spreadsheets; staff then retyped them into report cards. Every extra copy was another chance for a mark to change.",
		solution:
			"A full-stack TypeScript app. An Express and PostgreSQL layer stores students, classes, terms and assessments once and calculates totals and class positions. An EJS report-card view turns that data into a print-ready A4 PDF through Puppeteer. Admins manage records; students can only reach their own results.",
		challenge: {
			title: "One result, seven tables",
			body: "A result card pulls from students, assessments, subjects, academic periods, terms, enrollments and classes. The query builds term and session filters dynamically while defaulting to the current academic period, so every card is scoped to the right student and term — and positions stay consistent with the scores shown.",
		},
		stack: [
			"TypeScript",
			"Node.js",
			"Express",
			"PostgreSQL",
			"EJS",
			"Puppeteer",
			"JWT",
		],
		status: "Full stack",
		repo: "https://github.com/ifeola/School-Result-Checking-System",
		note: "Source available. No public demo — the app needs a seeded PostgreSQL instance.",
	},
	{
		id: "url-shortener",
		index: "02",
		title: "URL Shortener",
		tagline: "A typed backend for short, shareable links.",
		problem:
			"Long URLs break when they move from a browser into SMS, printed notices or a group chat. A short link also has to be trustworthy: one code maps to exactly one destination, and redirects stay fast as the table grows.",
		solution:
			"A TypeScript and Express API with PostgreSQL and Drizzle ORM. The authentication foundation is built — email and password accounts, sessions, typed schema and migrations — with link creation, collision-safe codes and redirects next.",
		challenge: {
			title: "One auth model, two kinds of client",
			body: "Browser sessions and API clients had to share one auth model without weakening either. The API accepts better-auth sessions through HTTP-only cookies, keeps CORS limited to known origins, and normalises every failure through one error middleware so clients get predictable status codes.",
		},
		stack: [
			"TypeScript",
			"Node.js",
			"Express",
			"PostgreSQL",
			"Drizzle ORM",
			"better-auth",
		],
		status: "In progress",
		repo: "https://github.com/ifeola/url_shortener",
		note: "Auth and the database layer are built; the short-link endpoints are next.",
	},
	{
		id: "expenses-tracker",
		index: "03",
		title: "Expenses Tracker",
		tagline: "A clear record of where the money went.",
		problem:
			"Tracking daily spending in a notebook — or across several apps — makes the totals disagree. By the end of the month, the record is incomplete and the budget is guesswork.",
		solution:
			"A browser-based expense tracker: add an expense, categorise it, remove it, and see the running balance update. Entries persist between visits, so the record stays useful without an account or a backend.",
		challenge: {
			title: "An app without a server",
			body: "Every change is serialised to localStorage and rehydrated on load, so the list survives a refresh without an account, a database or a build step. It is a small constraint that forces discipline about state — and about what belongs in the browser.",
		},
		stack: ["HTML", "CSS", "JavaScript", "localStorage"],
		status: "Live",
		image: {
			src: "/assets/tracker.webp",
			alt: "Expenses Tracker interface with a form for adding an expense and a table of recorded expenses.",
			width: 1280,
			height: 741,
		},
		demo: "https://abayome-tracker.netlify.app/",
		repo: "https://github.com/ifeola/expenses-tracker",
		note: "Live demo · Vanilla JavaScript, no build step.",
	},
];

export default caseStudies;
