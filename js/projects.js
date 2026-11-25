export const PROJECTS = [
  {
    slug: "excel-report-automation",
    title: "Excel Report Automation",
    category: "data",
    categoryLabel: "Data & Automation",
    tagline:
      "Turn folders of messy CSV & Excel exports into a styled 6-sheet executive workbook with native charts and a full Data Quality audit log.",
    techStack: ["Python", "pandas", "openpyxl", "pytest"],
    highlights: [
      "Auto-maps inconsistent column headers, mixed date formats, currencies, and semicolon CSVs",
      "Generates KPI Summary, monthly LineChart, product & region BarCharts, and Clean Data",
      "Logs every derived value, dropped row, and removed cross-file duplicate for auditability",
    ],
    repoUrl: "https://github.com/Kn0wmyn4m3/excel-report-automation",
    liveDemoUrl: null,
    sampleUrl:
      "https://github.com/Kn0wmyn4m3/excel-report-automation/blob/main/examples/sample_report.xlsx",
    sampleLabel: "Sample Report (.xlsx)",
    testBadge: "6 pytest tests passing",
    accent: "emerald",
    icon: "spreadsheet",
  },
  {
    slug: "batch-image-tool",
    title: "Batch Image Studio",
    category: "web",
    categoryLabel: "Web App & Browser Tool",
    tagline:
      "Privacy-first in-browser batch image resizer, compressor, watermarker, and ZIP exporter — zero uploads, zero backend, works offline.",
    techStack: ["ES Modules", "HTML5 Canvas", "CSS3", "Custom ZIP Writer"],
    highlights: [
      "100% client-side processing via Canvas API — images never leave the user's device",
      "Combinable resize, JPEG/PNG/WebP compression, 3×3 or tiled watermark, and token batch rename",
      "Hand-written zero-dependency ZIP writer (CRC-32 + UTF-8 + STORE) verified with Python zipfile",
    ],
    repoUrl: "https://github.com/Kn0wmyn4m3/batch-image-tool",
    liveDemoUrl: "https://kn0wmyn4m3.github.io/batch-image-tool/",
    sampleUrl: null,
    sampleLabel: null,
    testBadge: "26 assertions + Python ZIP check",
    accent: "indigo",
    icon: "image",
  },
  {
    slug: "civil-calc-kit",
    title: "CivilCalc Kit — Structural & BOQ Automation",
    category: "engineering",
    categoryLabel: "Engineering & Automation",
    tagline:
      "Python toolkit for simply supported beam analysis (SFD/BMD) and construction Bill of Quantities cost auditing with native Excel reports.",
    techStack: ["Python", "pandas", "openpyxl", "pytest"],
    highlights: [
      "Analytical simply supported beam solver (point loads, partial/full UDL, moments) with SFD/BMD charts",
      "Cleans messy contractor BOQ spreadsheets, rolls up trade subtotals, and flags >25% unit-rate anomalies",
      "Verified against textbook structural mechanics closed-form solutions via pytest",
    ],
    repoUrl: "https://github.com/Kn0wmyn4m3/civil-calc-kit",
    liveDemoUrl: null,
    sampleUrl:
      "https://github.com/Kn0wmyn4m3/civil-calc-kit/blob/main/examples/beam_report.xlsx",
    sampleLabel: "Beam Report (.xlsx)",
    testBadge: "31 pytest tests passing",
    accent: "amber",
    icon: "beam",
  },
  {
    slug: "ecommerce-scraper",
    title: "E-commerce Product Scraper",
    category: "data",
    categoryLabel: "Data & Scraping",
    tagline:
      "Production-style, ethical Python web scraper featuring robots.txt compliance, concurrent workers, resume support, and CSV/JSON/Excel export.",
    techStack: ["Python", "requests", "BeautifulSoup4", "openpyxl", "pytest"],
    highlights: [
      "Polite by default: checks robots.txt, enforces request delays, retries with exponential backoff",
      "Multi-threaded product scraping with --resume to safely continue interrupted runs",
      "Decoupled HTML parsers and HTTP layer verified by 59 offline unit and end-to-end tests",
    ],
    repoUrl: "https://github.com/Kn0wmyn4m3/ecommerce-scraper",
    liveDemoUrl: null,
    sampleUrl:
      "https://github.com/Kn0wmyn4m3/ecommerce-scraper/blob/main/examples/sample_books.xlsx",
    sampleLabel: "Sample Export (.xlsx)",
    testBadge: "59 pytest tests passing",
    accent: "sky",
    icon: "scraper",
  },
];
